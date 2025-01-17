var zhuluInterval;
var shoutInterval;
var shangbingInterval;
var bonusInterval;
var zhuLuActive = false;
var shoutActive = false;
var shangbingActive = false;
var bonusActive = false;
var lastSBAction = 0;
var game = window.parent;
$(document).ready(function(){
    //检查框架
    if (typeof SceneManager === "undefined"){
        destroy();
        notify("您当前框架不为index.php，请自行百度“XX浏览器控制台切换框架”");
    }else{
        constructMain();
        loadGongHui();
    }
});

//个人
function main(){}
function zhuLu(){
    var tili = GameItemManager.GetInstance().GetItemByID(720027).ItemNum;
    if (tili === 0){
        notify("您当前没有体力");
        return;
    }
    var towerLevel = prompt("请输入关卡号，挑战新关卡请输入0");
    if (towerLevel === null){return main();}
    var battleCount = prompt("请输入挑战次数，不限请输入0");
    if (battleCount === null){return main();}
    // 不在逐鹿天下模式下进入
    if (SceneManager.GetInstance().CurrentScene.sceneName !== 'NewCompeteWorldScene') {
        RoomControler.GetInstance().EnterMode(ModeIDType.MITZhuLuTianXiaNew);
    }

    var stopPoint = parseInt(battleCount,10) ? GameItemManager.GetInstance().GetItemByID(720027).ItemNum - battleCount : 0;
    stopPoint = stopPoint < 0 ? 0 : stopPoint;
    zhuLuActive = true;
    clearInterval(zhuluInterval);

    GameShopManager.GetInstance().protoProxy.fakeProxy = function(t,e){
        var i=new ProtoVO;i.protoID=t,i.protoData=e,this.clientSocketSend(i)
    };
    var proxy = function(t, e){
        GameShopManager.GetInstance().protoProxy.fakeProxy(t,e);
    };

    zhuluInterval = setInterval(function () {
        if (!SceneManager.GetInstance().CurrentScene.manager) { //如果不在游戏中
            if (GameItemManager.GetInstance().GetItemByID(720027).ItemNum === stopPoint) {
                clearInterval(zhuluInterval);
            }else{
                var towerLevelID = parseInt(towerLevel, 10) ? (parseInt(towerLevel, 10)+200): NewCompeteWorldManager.GetInstance().competeWorldInfo.curTowerLevelID;
                var generalList = NewCompeteWorldManager.GetInstance().tempList;
                NewCompeteWorldManager.GetInstance().ReqCompeteWorldBattle(towerLevel, generalList);
            }
        } else {  //如果在游戏中
            //自动提速
            if (StorageUtils.getNumber("gameSpeedRate") !== 5){
                if (UserData.self.vipLevel !== 7){
                    proxy(ProtoBufId.LOGICMSG_CREQAUTOCHESSSETRESPONSERATE, {
                        rate: 5
                    });
                }else{
                    proxy(ProtoBufId.LOGICMSG_CREQAUTOCHESSSETRESPONSERATE, {
                        rate: 6
                    });
                }
            }
            //牌局中出现结算按钮，离开游戏
            if (WindowManager.GetInstance().hasWindow("NewGameResultWindow")) {
                GameContext.LeaveGameScene();
            }
        }
    },2000);
}

//逐鹿,一关一关往下刷
function newzhuLu(){
    zhuluInterval = setInterval(function () {
        if (!SceneManager.GetInstance().CurrentScene.manager) { //如果不在游戏中
            if (GameItemManager.GetInstance().GetItemByID(720027).ItemNum === 0) {
                clearInterval(zhuluInterval);
            }else{
                //获取当前关卡号的方法
                var curTowerLevelID = NewCompeteWorldManager.GetInstance().competeWorldInfo.curTowerLevelID;
				//获取当前关卡友方武将数量方法
				var curTowerGeneralCount = NewCompeteWorldConfig.GetInstance().GetCompeteWorldbyId(curTowerLevelID).MaxGeneralCount;
				//获取当前关卡友方武将列表方法
                var generallist = NewCompeteWorldManager.GetInstance().GetComboGeneralListForTemp(curTowerGeneralCount);
                //新赛季传参不传列表了,传数量
				NewCompeteWorldManager.GetInstance().ReqCompeteWorldBattle(NewCompeteWorldManager.GetInstance().competeWorldInfo.curTowerLevelID, curTowerGeneralCount);
            }    
        } else {  //如果在游戏
            //牌局中出现结算按钮，离开游戏
            if (WindowManager.GetInstance().hasWindow("NewGameResultWindow")) {
                GameContext.LeaveGameScene();
            }
        }
    },2000);
}
newzhuLu();

//逐鹿,固定刷一关
function newnewzhuLu(){
    // 不在逐鹿天下模式下进入
    if (SceneManager.GetInstance().CurrentScene.sceneName !== 'NewCompeteWorldScene') {
        RoomControler.GetInstance().EnterMode(ModeIDType.MITZhuLuTianXiaNew);
    }

    //.切换逐鹿将灵（让低等级将灵出战蹭灵韵）
    //获取B将灵中等级最高的
    let elfList = GeneralElfManager.GetInstance().elfList;
    let newPveElf = {level: 0, pkID: 0};
    elfList.forEach((elf, i) => {
        if (elf.rateType == 4 && elf.level > newPveElf.level ){ //B以上将灵以及非出征和扫荡状态
            newPveElf.level = elf.level;
            newPveElf.pkID = elf.pkID;
        }
    });

    //保留原有出战主力将灵信息
    let oldPveElfpkID = GeneralElfManager.GetInstance().pveElfInfo.pkID

    //切换出战将灵为该将灵
    if (oldPveElfpkID != newPveElf.pkID){
        GameShopManager.GetInstance().protoProxy.fakeProxy = function(t,e){
            var i=new ProtoVO;i.protoID=t,i.protoData=e,this.clientSocketSend(i)
        };
        var proxy = function(t, e){
            GameShopManager.GetInstance().protoProxy.fakeProxy(t,e);
        };
        proxy(ProtoBufId.CMSG_CREQGENERALSPRITESTATUSSET, {
            pkID: newPveElf.pkID,
            type: 3 //出战状态
        });
    }
    zhuluInterval = setInterval(function () {
        if (!SceneManager.GetInstance().CurrentScene.manager) { //如果不在游戏中
            if (GameItemManager.GetInstance().GetItemByID(720027).ItemNum === 0) {
                clearInterval(zhuluInterval);

                //重置为原先出战将灵
                if (oldPveElfpkID != newPveElf.pkID){
                    proxy(ProtoBufId.CMSG_CREQGENERALSPRITESTATUSSET, {
                        pkID: oldPveElfpkID,
                        type: 3 //出战状态
                    });
                }
            }else{
                //获取当前关卡号的方法(刷固定管卡就把curTowerLevelID改为固定的)
                var curTowerLevelID = NewCompeteWorldManager.GetInstance().competeWorldInfo.curTowerLevelID;
				//获取当前关卡友方武将数量方法
				var curTowerGeneralCount = NewCompeteWorldConfig.GetInstance().GetCompeteWorldbyId(curTowerLevelID).MaxGeneralCount;
				//获取当前关卡友方武将列表方法
                var generallist = NewCompeteWorldManager.GetInstance().GetComboGeneralListForTemp(curTowerGeneralCount);
                //新赛季传参不传列表了,传数量
				NewCompeteWorldManager.GetInstance().ReqCompeteWorldBattle(curTowerLevelID, curTowerGeneralCount);
            }    
        } else {  //如果在游戏
            //牌局中出现结算按钮，离开游戏
            if (WindowManager.GetInstance().hasWindow("NewGameResultWindow")) {
                GameContext.LeaveGameScene();
            }
        }
    },2000);
}
newnewzhuLu();

function newsaoDang(){
    let elfList = GeneralElfManager.GetInstance().elfList;
    let levels = [110,115,120,130,135,140,145,155,160,165,170,180,185,190,195];
    let legitElfs = [];
    elfList.forEach((elf, i) => {
        if (elf.rateType >=4 && elf.statusType.indexOf(2) !== 0 && elf.statusType.indexOf(8) !== 0){ //B以上将灵以及非出征和扫荡状态
            legitElfs.push(elf.pkID);
        }
    });

    legitElfs.forEach((elf, i) => {
        setTimeout(() => {
            NewCompeteWorldManager.GetInstance().ReqCompeteWorldSweep(levels[i],elf);
        }, i * 1000); 
    });
}
function riChang(){
    var game = window.parent;
    //定义proxy
    GameShopManager.GetInstance().protoProxy.fakeProxy = function(t,e){
        var i=new ProtoVO;i.protoID=t,i.protoData=e,this.clientSocketSend(i)
    };
    var proxy = function(t, e){
        GameShopManager.GetInstance().protoProxy.fakeProxy(t,e);
    };

//每日签到
    DailySignManager.GetInstance().ReqGetSignInReward(1, DailySignManager.GetInstance().initSignDate);

// 领取公会每日任务奖励,活跃值,活跃奖励
    var taskIDList = [401, 402, 403, 1001, 1002, 1003, 1004];
    for (var taskID = 1101; taskID < 1120; taskID++) {
        TaskManager.GetInstance().GetTaskReward(taskID);
    }
    for (taskID of taskIDList) {
        TaskManager.GetInstance().GetTaskReward(taskID);
    }
// 每日抽取免费将印
    proxy(ProtoBufId.CMSG_CREQGENERALSEALCHESTOPEN, { type: 1 });

//每日抽取免费秀
    proxy(ProtoBufId.CMSG_CREQDRESSOPEN, {});

// 领取将灵聚宝盆和出征奖励
    var CornucopiaElfInfo = GeneralElfManager.GetInstance().CornucopiaElfInfo;
    var pkID = CornucopiaElfInfo.pkID;
    var cornucopiaCount = CornucopiaElfInfo.cornucopiaCount;
    proxy(ProtoBufId.CMSG_CREQGENERALSPRITECORNUCOPIA, {
        pkID: pkID,
        count: cornucopiaCount
    });
    proxy(ProtoBufId.CMSG_CREQGENERALSPRITETASKREWARDGET, {
        pkID: pkID,
        count: cornucopiaCount
    });

    //获取出征任务
    proxy(ProtoBufId.CMSG_CREQGENERALSPRITETASKSET, {
        pkID: pkID,
        count: cornucopiaCount
    });

    //选择出征任务
    var elfTasks = GeneralElfManager.GetInstance().taskElfInfo.taskIDs;
    var sortedTasks = [];
    for (elfTask of elfTasks){
        sortedTasks.push([elfTask, GameSpriteConfig.GetInstance().GetTaskVOByTaskID(elfTask).TaskCategoryType]);
    }
    sortedTasks =  sortedTasks.sort(function(a, b) {
        return a[1] - b[1];
    });
    proxy(ProtoBufId.CMSG_CREQGENERALSPRITETASKSTART, {
        pkID: pkID,
        taskID: sortedTasks[0][0]
    });

    //上兵伐谋获取每天粮草
    GameGlaivesManager.GetInstance().ReqGlaivesOfStrategyEveryDaySupply();

//公会敲鼓3次
    for (var i = 0; i < 3; i++) {
        GameGuildManager.GetInstance().ReqBeatDrum(0);
    }
// 领取工会战奖励
    GameGuildManager.GetInstance().ReqGuildBattleUserWinTimesReward();

//领取邮件
    var inbox = MailManager.GetInstance().inboxList;
    inbox.forEach((mail, i) => {
        setTimeout(() => {
            if (mail.hasAttach !== undefined && mail.isAttachReceive !== true){
                MailManager.GetInstance().ReqGift(mail.emailID, mail.attaches.sign);
            }
        }, i * 1500);
    });
    setTimeout(function(){notify("一键日常执行完毕!\n个人:每日签到/每日任务/活跃奖励/上兵粮草/邮件附件\n公会:公会3敲/公会任务/每周争霸奖励\n白嫖:免费将印/三国秀\n将灵:聚宝盆奖励/出征奖励/自动出征");}, 500);
}
function chat(){
    if (!checkActive("shoutActive")){return main();}
    var chatMessage = prompt("欢迎进入自动发言。请输入发言内容");
    if (chatMessage === null){
        return main();
    }
    var chatChannel = prompt("请输入发言频道：综合1/公会2/诏令3/势力4/房间5/队伍6/私聊7");
    if (chatChannel === null){
        return main();
    }
    var chatTimeInterval = prompt("请输入每次发言时间间隔，建议10秒");
    if (chatTimeInterval === null){
        return main();
    }
    var chatMaxCount = prompt("请输入发言次数");
    if (chatMaxCount === null){
        return main();
    }
    var channelType;
    var channelId = parseInt(chatChannel,10);
    //综合：WORLD, 公会：GUILD 房间：ROOM,私聊：PERSONAL, 队伍：TEAM, 势力: COUNTRY , 诏令: ZHAO
    switch (channelId){
        case 1:
            channelType = ChatChannelType.WORLD;
            break;
        case 2:
            channelType = ChatChannelType.GUILD;
            break;
        case 5:
            channelType = ChatChannelType.ROOM;
            break;
        case 6:
            channelType = ChatChannelType.TEAM;
            break;
        case 4:
            channelType = ChatChannelType.COUNTRY;
            break;
        case 3:
            channelType = ChatChannelType.ZHAO;
            break;
        case 7:
            channelType = ChatChannelType.PERSONAL;
            break;
        default:
            main();
    }

    var count = 0;
    shoutActive = true;
    clearInterval(shoutInterval);
    shoutInterval = setInterval(function(){
        if (count === parseInt(chatMaxCount, 10)){
            stopInterval(4);
        }
        ChatManager.GetInstance().SendChatMsg(chatMessage, 0, channelType);
        count++;
    },parseFloat(chatTimeInterval)*1000);
}
function newChat() {
    shoutInterval = setInterval(function(){
        ChatManager.GetInstance().SendGuildNewRecruitMsg({level: 200, vipLevel: 7, spriteRateType: 6, guildGroupNo: 557948691});    //等级，会员等级，将灵等级，QQ群号
    }, 10000);
}
function shangBing(hasCityName){    //1输入城池查找,0读取窗口,2查找空关
    if (!checkActive("shangbingActive")){return main();}
    var liangcao = GameItemManager.GetInstance().GetItemByID(730102).ItemNum;
    var sortedCities = [];
    var cityName;
    var currWindow;
    var cities;
    var cityID = -1;
    if (liangcao === 0){
        notify("您当前没有粮草");
        return;
    }

    //设置cityID
    if (hasCityName === 1){
        cityName = prompt("请输入城池名称");
        if (cityName === null){return main();}
        var mapCities = GameGlaivesManager.GetInstance().mapCitys;
        for (var i = 0; i < 457; i++){
            if (mapCities[i].NodeName === cityName){
                cityID = mapCities[i].CityID;
            }
        }
    }else if (hasCityName === 0){
        currWindow = WindowManager.GetInstance().lastPopupGameWindow;
        if (currWindow === null || typeof currWindow === "undefined" || typeof currWindow.name === "undefined" || currWindow.name !== "GameGlaivesCityInfoWindow"){
            notify("读取信息失败！请按提示操作\n进入上兵伐谋模式-点开进攻目标的城池窗口\n然后重新呼出脚本进行操作");
            return;
        }
        cityID = currWindow.cityVo.CityID;
    }else if (hasCityName === 2){   //查找空关
        cities = GameGlaivesManager.GetInstance().mapCitys;
        sortedCities = cities.sort(function(a, b) { //可进攻城池从守军人数排列
            return a.DefenderNum - b.DefenderNum;
        }).filter(city => GameGlaivesManager.GetInstance().IsCityAttack(city) === true).slice(0, 10);
        if (sortedCities.length === 0){
            notify("所有城池免战中,没有找到空关");
            return;
        }else{
            var message = "可进攻的空关有:\n";
            sortedCities.forEach(function(city,index){
                message += (toCountry(city.Country)+city.NodeName + "/守军" + city.DefenderNum + "人/(城防:"+ (city.DefenceTotal-city.DefenceDestroy)+"/"+city.DefenceTotal + ")/进攻输入"+ (index+1) + "\n");
            })
            var index= parseInt(prompt(message));
            index = index? index: -1;
            if (index === -1){return main();}else{cityID = sortedCities[(index-1)].CityID;}
        }
    }

    //设置出战将灵和次数
    if (cityID === -1){notify("没有找到城池");return;}
    var jiangLingID = getJiangLing();
    if (jiangLingID > 4 || jiangLingID < 0){return main();}
    // 进入上兵伐谋
    clearInterval(shangbingInterval);
    shangbingActive = true;

    //设定proxy
    GameShopManager.GetInstance().protoProxy.fakeProxy = function(t,e){
        var i=new ProtoVO;i.protoID=t,i.protoData=e,this.clientSocketSend(i)
    };
    var proxy = function(t, e){
        GameShopManager.GetInstance().protoProxy.fakeProxy(t,e);
    };

    shangbingInterval = setInterval(function () {
        if (!SceneManager.GetInstance().CurrentScene.manager) { //如果不在游戏中
            if (GameItemManager.GetInstance().GetItemByID(730102).ItemNum === 0
                || (!GameGlaivesManager.GetInstance().IsCityAttack(GameGlaivesManager.GetInstance().mapCityDic.Maps[cityID]))){   //如果次数到了/不能进攻
                stopInterval(2);
            }else{
                lastSBAction = (lastSBAction === 0)? (Date.now() -50000): lastSBAction;
                if ((Date.now() - lastSBAction)/1000 > 32) {
                    GameGlaivesManager.GetInstance().ReqGlaivesOfStrategyBattle(jiangLingID, cityID);
                    lastSBAction = Date.now();
                }
            }
        }else{  //如果在游戏中
            //自动提速
            if (StorageUtils.getNumber("gameSpeedRate") !== 5){
                if (UserData.self.vipLevel !== 7){
                    proxy(ProtoBufId.LOGICMSG_CREQAUTOCHESSSETRESPONSERATE, {
                        rate: 5
                    });
                }else{
                    proxy(ProtoBufId.LOGICMSG_CREQAUTOCHESSSETRESPONSERATE, {
                        rate: 6
                    });
                }
            }
            //牌局中出现结算按钮，离开游戏
            if (WindowManager.GetInstance().hasWindow("GameResultWindow")) {
                GameContext.LeaveGameScene();
            }
        }
    }, 2000);
}
function zidongSB(){
    var attackMode = 0;
    var liangcao = GameItemManager.GetInstance().GetItemByID(730102).ItemNum;
    if (liangcao === 0){
        notify("您当前没有粮草");
        return;
    }
    if (!checkActive("shangbingActive")){return main();}
    var cityType = parseInt(prompt("混合进攻:全城池1,郡城+关隘2,州城+郡城6\n专对进攻:仅限关隘3,仅限郡城4,仅限州城5\n不输入则默认全城池"));
    if (isNaN(cityType)){cityType = 1;}
    if (cityType === 2 || cityType === 6 || cityType ===1){
        attackMode = parseInt(prompt("咸鱼模式1(优先守军最少)\n大佬模式2(优先城池级别最高)\n不输入则默认咸鱼模式"));
        if (isNaN(attackMode)){attackMode = 1;}
    }
    var shouJun = parseInt(prompt("守军数量少于等于几进攻?(不输入则默认50)\n代码杀会帮您找守军最少的城池进攻\n如果没有城池满足守军数量下限,则继续等待"));
    if (isNaN(shouJun)){shouJun = 50;}
    var DefenceTotal = parseInt(prompt("城防少于等于几进攻?(不输入则默认5w)\n代码杀会帮您找城防最少的城池进攻\n如果没有城池满足城防下限,则继续等待"));
    if (isNaN(DefenceTotal)){DefenceTotal = 50000;}

    var jiangLingID = getJiangLing();
    if (jiangLingID > 4 || jiangLingID < 0){return main();}

    // 进入上兵伐谋
    clearInterval(shangbingInterval);
    shangbingActive = true;
    GameShopManager.GetInstance().protoProxy.fakeProxy = function(t,e){
        var i=new ProtoVO;i.protoID=t,i.protoData=e,this.clientSocketSend(i)
    };
    var proxy = function(t, e){
        GameShopManager.GetInstance().protoProxy.fakeProxy(t,e);
    };
    shangbingInterval = setInterval(function () {
        if (!SceneManager.GetInstance().CurrentScene.manager) { //如果不在游戏中
            if (GameItemManager.GetInstance().GetItemByID(730102).ItemNum === 0){
                stopInterval(2);
            }else{
                lastSBAction = (lastSBAction === 0)? (Date.now() -50000): lastSBAction;
                if ((Date.now() - lastSBAction)/1000 > 32) {
                    var cityID;
                    var sortedCities = [];
                    var cities = GameGlaivesManager.GetInstance().mapCitys;
                    sortedCities = cities.filter(city => GameGlaivesManager.GetInstance().IsCityAttack(city) === true && isCitySatisfied(city, cityType, shouJun, DefenceTotal)).sort(function (a, b) {
                        return a.DefenderNum - b.DefenderNum;    // sort by length
                    }).slice(0, 10);
                    if (sortedCities.length !== 0) {
                        if (attackMode === 2) {
                            sortedCities = sortedCities.sort(function (a, b) {
                                return b.CityType - a.CityType;
                            });
                            cityID = sortedCities[0].CityID;
                            GameGlaivesManager.GetInstance().ReqGlaivesOfStrategyBattle(jiangLingID, cityID);
                        } else {
                            cityID = sortedCities[0].CityID;
                            GameGlaivesManager.GetInstance().ReqGlaivesOfStrategyBattle(jiangLingID, cityID);
                        }
                        lastSBAction = Date.now();
                    }
                }
            }
        }else{  //如果在游戏中
            //速度自动5倍
            //自动提速
            if (StorageUtils.getNumber("gameSpeedRate") !== 5){
                if (UserData.self.vipLevelm !== 7){
                    proxy(ProtoBufId.LOGICMSG_CREQAUTOCHESSSETRESPONSERATE, {
                        rate: 5
                    });
                }else{
                    proxy(ProtoBufId.LOGICMSG_CREQAUTOCHESSSETRESPONSERATE, {
                        rate: 6
                    });
                }
            }
            //牌局中出现结算按钮，离开游戏
            if (WindowManager.GetInstance().hasWindow("GameResultWindow")) {
                GameContext.LeaveGameScene();
            }
        }
    }, 2000);
}
function hongBao(){
    if (!checkActive("bonusActive")){return main();}
    var lastDate = localStorage.getItem("lastDate");
    if ((lastDate !== null && new Date().getDate() !== parseInt(lastDate)) || lastDate === null){   //换天或者首次，设置initYB和lastDate
        localStorage.setItem("initYB", GameItemManager.GetInstance().GetItemByID(100002).ItemNum);
        localStorage.setItem("lastDate", new Date().getDate());
        localStorage.setItem("hbCount", 0);
    }
    var ybGain = GameItemManager.GetInstance().GetItemByID(100002).ItemNum - parseInt(localStorage.getItem("initYB"));
    var minhongBao = parseInt(prompt("今天已抢"+GameGuildManager.GetInstance().SelfGuildInfo.guildBonusReceive.times+"个红包\n已经获得"+ybGain+"元宝。\n请设置最小红包单价\n红包为500元宝，10份，则单价就是50"),10);
    if (minhongBao === null){return main();}
    bonusActive = true;
    clearInterval(bonusInterval);
    bonusInterval = setInterval(function(){
        var bonusGetter = GameGuildManager.GetInstance();
        bonusGetter.guildBonusList.breakForEach(function(e,i){
            if (i.CanReceive() && minhongBao <= i.goldNum/i.pieceNum){
                GameGuildManager.GetInstance().ReqGuildBonusReceive(i.pkID);
                var hbCount = parseInt(localStorage.getItem("hbCount"));
                if (i.CanReceive() === false){ //如果收取成功
                    hbCount += 1;
                    localStorage.setItem("hbCount", hbCount);
                }
                if (hbCount === 30){
                    stopInterval(3);
                    var ybGain = GameItemManager.GetInstance().GetItemByID(100002).ItemNum - parseInt(localStorage.getItem("initYB"));
                    setTimeout(function(){notify("每日30个红包已刷完，已得"+ybGain+"元宝");return;}, 500);
                }
            }
        });
    },5000);
}
function setJiangLing(){
    var message = "";
    var currjiangLingID = parseInt(localStorage.getItem("defaultJL"));
    if (currjiangLingID <= 4 && currjiangLingID >= 0){message += "当前默认出战将灵为"+(currjiangLingID+1)+"号位\n";}
    var jiangLing = prompt(message+ "请选择上兵模式的默认出战将灵（数字：第几个）");
    var jiangLingID;
    if (jiangLing === null){return main();}else{
        jiangLingID = parseInt(jiangLing)-1;
        localStorage.setItem("defaultJL",jiangLingID);
        return jiangLingID;
    }
}
function getJiangLing(){
    var currjiangLingID = parseInt(localStorage.getItem("defaultJL"));
    if (currjiangLingID <6 && currjiangLingID > 0){
        return currjiangLingID;
    }else{
        return 0;
    }
}
function zidongStation(){
    if (!checkActive("shangbingActive")){return main();}
    clearInterval(shangbingInterval);
    shangbingActive = true;
    var spriteList = GameGlaivesManager.GetInstance().GetGlaivesSpriteList();
    var freeSprite = [];
    spriteList.forEach(function(elf,index){
        if (elf.cityID === 0){
            freeSprite.push([index,
                GeneralElfManager.GetInstance().GetElfInfoByPKID(elf.spritePKID).rateType]
            );
        }
    });
    if (freeSprite.length === 0){
        notify("所有将灵已驻扎!");
        return;
    }
    shangbingInterval = setInterval(function(){
        if (freeSprite.length === 0){
            stopInterval(2);
        }
        var elf = freeSprite[0];
        var sortedCities = [];
        var cities = GameGlaivesManager.GetInstance().mapCitys;
        sortedCities = cities.filter(city => GameGlaivesManager.GetInstance().IsCityDefend(city) === true
            && elf[1] >= city.SpriteRateType).sort(function(a, b) {
            return a.CityType - b.CityType;    // 按照citytype,谁低(级别高)谁先
        }).slice(0, 10);
        if (sortedCities.length !== 0){
            var topCityID = sortedCities[0].CityID;
            GameGlaivesManager.GetInstance().ReqGlaivesOfStrategyStation(elf[0],topCityID);
            freeSprite.shift();
            if (freeSprite.length === 0){
                stopInterval(2);
            }
        }
    },5000);
}

function constructMain(){
    main = function(){
        var type = prompt("请选择:自动逐鹿1/一键日常2/自动发言3/挂机红包4/公会管理5\n上兵攻城:输入城名6/读取窗口7/显示空关8/自动刷空9/修改出战将灵11/自动驻扎12\n停止循环脚本10\n快捷键:ctrl+M或ctrl+shift+M 打开菜单 / ESC 关闭菜单");
        switch (type){
            case "1":
                zhuLu();
                break;
            case "2":
                riChang();
                break;
            case "3":
                chat();
                break;
            case "4":
                hongBao();
                break;
            case "5":
                if (typeof gongHui === "function"){gongHui();}else{notify("公会管理模块加载中,请稍候");}
                break;
            case "6":
                shangBing(1);
                break;
            case "7":
                shangBing(0);
                break;
            case "8":
                shangBing(2);
                break;
            case "9":
                zidongSB();
                break;
            case "10":
                stopInterval();
                break;
            case "11":
                setJiangLing();
                break;
            case "12":
                zidongStation();
                break;
            case null:
                break;
            default:
                main();
                break;
        }
    };
    main();
}
function checkValidUser(){  //个人版personal:所有功能(一人一号,检查userAccount),公会版guild:所有功能(支持多号,检查userList)
    notify();
    var { Query, User } = AV;
    AV.User.logOut();
    AV.User.logIn(localStorage.getItem("AVusername"), localStorage.getItem("AVpassword")).then(function(user){  //登录成功
        if (user.get("userType") === "personal"){ //如果是个人账号
            var userAccount = UserData.self.userBrief.account;
            var nickname = UserData.self.userBrief.nickname;
            if (typeof user.get("userAccount") === "undefined"){    //如果没有绑定过游卡userid
                var paramsJson = {
                    userAccount: [userAccount,nickname]
                };
                AV.Cloud.run('checkUserAccount', paramsJson).then(function () {    //如果绑定完毕
                    constructMain();
                    loadGongHui();
                },function(){
                    destroy();
                    notify("个人用户绑定游卡账号失败,请重试或联系客服");
                });
            }else if (userAccount !== user.get("userAccount")[0]){  //如果userid和代码杀的uid对不上
                destroy();
                notify("一个代码杀会员只能绑定一个游卡账号");
            }else{  //如果是老号并登录成功
                constructMain();
                loadGongHui();
            }
        }else if (user.get("userType") === "guild"){   //如果是公会账号
            var account = UserData.self.userBrief.account;
            var nickname = UserData.self.userBrief.nickname;
            var userList = user.get("userList");
            var allowedUser = user.get("allowedUser");
            if (userList.includes(account) || userList.includes(nickname)){
                constructMain();
                loadGongHui();
            }else{
                if (userList.length < allowedUser) {
                    var paramsJson = {
                        userAccount: account
                    };
                    AV.Cloud.run('addSharedUser', paramsJson).then(function () {    //如果绑定完毕
                        constructMain();
                        loadGongHui();
                    }, function () {
                        destroy();
                        notify("共享用户添加游卡账号失败,请重试或联系客服");
                    });
                }else{
                    destroy();
                    notify("该账号共享人数已满\n请联系账号主人扩容");
                }
            }
        }
    },function(){   //登录失败
        destroy();
        notify("登录失败，请重试或联系客服");
    });
}
function checkActive(intervalName){
    var modifier = true;
    switch(intervalName){
        case "zhuLuActive":
            if (zhuLuActive){
                modifier = confirm("自动逐鹿正在运行中,是否修改设置?");
            }
            break;
        case "shoutActive":
            if (shoutActive){
                modifier = confirm("自动发言正在运行中,是否修改设置?");
            }
            break;
        case "shangbingActive":
            if (shangbingActive){
                modifier = confirm("自动上兵正在运行中,是否修改设置?");
            }
            break;
        case "bonusActive":
            if (bonusActive){
                modifier = confirm("挂机红包正在运行中,是否修改设置?");
            }
            break;
        default:
            break;
    }
    return modifier;
}
function stopInterval(intervalID = 0){
    var intervalID = intervalID? intervalID:parseInt(prompt("停止逐鹿1/停止上兵2/停止红包3/停止发言4"));
    switch (intervalID){
        case 1:
            zhuLuActive = false;
            clearInterval(zhuluInterval);
            notify("逐鹿已停止(手动停止/体力没了/次数到了)");
            break;
        case 2:
            shangbingActive = false;
            clearInterval(shangbingInterval);
            notify("上兵已停止(手动停止/粮草没了/城池:是都城/属于己方/免战中/距离不足)");
            break;
        case 3:
            bonusActive = false;
            clearInterval(bonusInterval)
            notify("红包已停止(手动停止/抢满30次了)");
            break;
        case 4:
            shoutActive = false;
            clearInterval(shoutInterval);
            notify("红包已停止(手动停止)");
            break;
        default:
            return main();
    }
}
function toCountry(id){
    switch (id){
        case 1:
            return "魏国";
            break;
        case 2:
            return "蜀国";
            break;
        case 3:
            return "吴国";
            break;
        case 4:
            return "群雄";
            break;
    }
}
function isCitySatisfied(city, cityType, shouJun = 50, DefenceTotal = 500000){
    switch (cityType){  //全城池1,郡城+关隘2,州城+郡城6针对进攻:仅限关隘3,仅限郡城4,仅限州城5
        case 1:
        case 2:
        case 3:
            return city.CityType > cityType && city.DefenderNum <= shouJun && city.DefenceTotal < DefenceTotal;
        case 4:
            return city.CityType === 3 && city.DefenderNum <= shouJun && city.DefenceTotal < DefenceTotal;
        case 5:
            return city.CityType === 2 && city.DefenderNum <= shouJun  && city.DefenceTotal < DefenceTotal;
        case 6:
            return (city.CityType === 2 || city.CityType === 3) && city.DefenderNum <= shouJun  && city.DefenceTotal < DefenceTotal;
    }
}
function loadGongHui(){
    //获取公会管理
    var query = new AV.Query('_File');
    query.equalTo("name", "ghs.js");
    query.first().then(function (file){
        $.getScript(file.get("url")).fail(function(){
            $.getScript("https://gitee.com/daimasha/sgs/raw/master/ghs.js").fail(function(){
                notify("获取公会管理模块失败!");
            });
        });
    },function(){notify("没找到公会管理模块!");});
}
function destroy(){
    //个人功能
    main = function(){};
    zhuLu = function(){};
    riChang = function(){};
    shangBing = function(){};
    chat = function(){};
    hongBao = function(){};
    zidongSB= function(){};
    setJiangLing = function(){};
    getJiangLing = function(){};
    zidongStation= function(){};

    //杂项
    checkValidUser = function(){};
    checkActive = function(){};
    stopInterval = function(){};
    constructMain = function(){};
    toCountry = function(){};
    isCitySatisfied = function(){};
    loadGongHui= function(){};
    destroy = function(){};
}

function notify(message="") {
    if (!("Notification" in window)) {
        if (message.length !== 0){
            alert(message);
        }
    }
    else if (Notification.permission === "granted") {
        if (message.length !== 0){
            var options = {
                body: "点击通知即可呼出主菜单"
            }
            var notification = new Notification(message,options);
            notification.onclick = function(event) {
                event.preventDefault(); // prevent the browser from focusing the Notification's tab
                main();
            }
        }
    }
    else if (Notification.permission !== "granted") {
        Notification.requestPermission();
    }
}



