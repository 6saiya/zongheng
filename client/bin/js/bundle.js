(function () {
    'use strict';

    // export default class game {
    class game {
        constructor() {}
        initGame() {
            return {
                h: 'h'
            }
        }
    }

    // import CardBox from './assert/cardBox'
    class GameControl extends Laya.Script {
        constructor() {
            super();
        }

        onEnable() {
            this.data = newGame();
            this.owner.getChildByName('surrender').on(Laya.Event.CLICK, this, this.surrender);
            this.owner.getChildByName('cardInHead').on(Laya.Event.CLICK, this, this.showCard);
            this.owner.getChildByName('showDplm').on(Laya.Event.CLICK, this, this.showDplmBox);
            this.cardShowing = true;
            this.dplmShowing = true;
            this.choiceCard = 8;
            this.choiceMap = '';
            this.solidersNum = 0;
            this.choiceHero = '';

            this.gameFun = new game();
            console.log(this.gameFun.initGame());

            for (let i = 0; i < 7; i++)
                this.owner.getChildByName('cardBox').getChildByName('item' + i).on(Laya.Event.CLICK, this, this.choiceCardFun, [i]);
            for (let i = 0; i < this.data.map.length; i++)
                this.owner.getChildByName('map').getChildByName('map').getChildByName('map_' + this.data.map[i].name).on(Laya.Event.CLICK, this, this.choiceMapFun, [this.data.map[i].name]);

            this.msgShow();
        }

        onStageClick(e) {
            //停止事件冒泡，提高性能，当然也可以不要
            e.stopPropagation();
            this.choiceCard = 8;
            this.choiceMap = '';
            this.solidersNum = 0;
            this.choiceHero = '';
            this.msgShow();
        }

        /** 根据data刷新ui */
        msgShow() {
            let dplm = this.owner.getChildByName('diplomacy');
            dplm.getChildByName('round').x = 43 + this.data.round * 59; // 回合数
            // 外交
            let qian3 = [150, 218, 272, 326, 395, 445];
            for (let i = 0; i < 3; i++) {
                dplm.getChildByName(this.data.countryStutas[i].name).x = qian3[this.data.countryStutas[i].num];
                dplm.getChildByName(this.data.countryStutas[i].name).skin = this.data.countryStutas[i].isSee ? 'image/状-接见-a x6.png' : 'image/状-接见-b x6.png';
                dplm.getChildByName(this.data.countryStutas[i].name).visible = this.data.countryStutas[i].isHas;
            }
            let hou3 = [178, 245, 300, 366, 421];
            for (let i = 3; i < 6; i++) {
                dplm.getChildByName(this.data.countryStutas[i].name).x = hou3[this.data.countryStutas[i].num];
                dplm.getChildByName(this.data.countryStutas[i].name).skin = this.data.countryStutas[i].isSee ? 'image/状-接见-a x6.png' : 'image/状-接见-b x6.png';
                dplm.getChildByName(this.data.countryStutas[i].name).visible = this.data.countryStutas[i].isHas;
            }
            // 天时
            let tianshi_l = this.owner.getChildByName('TianShi').getChildByName('l');
            let tianshi_h = this.owner.getChildByName('TianShi').getChildByName('h');
            tianshi_l.visible = this.data.tianshi.shili == '连横';
            tianshi_l.skin = this.data.tianshi.isChenge ? 'image/状-天时-b.png' : 'image/状-天时-a.png';
            tianshi_h.visible = this.data.tianshi.shili == '合纵';
            tianshi_h.skin = this.data.tianshi.isChenge ? 'image/状-天时-b.png' : 'image/状-天时-a.png';
            // 军队
            for (let i = 0; i < this.data.map.length; i++) {
                let m = this.owner.getChildByName('map').getChildByName('map').getChildByName(this.data.map[i].name);
                m.getChildByName('moving').index = this.data.map[i].soliders? this.data.map[i].soliders : 0;
                m.getChildByName('moved').index = this.data.map[i].moved ? this.data.map[i].moved : 0;
                m.getChildByName('soliders').texture = `image/国-${this.data.map[i].country}.png`;
                if (this.data.map[i].hero == null) {
                    m.getChildByName('hero').visible = false;
                } else {
                    m.getChildByName('hero').visible = true;
                    m.getChildByName('hero').texture = `image/士-${this.data.map[i].hero.name}-${this.data.map[i].hero.stutas}.png`;
                }
            }
            // 手牌
            let card = this.data.myCamp == '合纵' ? this.data.Z_head : this.data.H_head;
            let cardBox = this.owner.getChildByName('cardBox');
            for (let i = 0; i < 7; i++) {
                cardBox.getChildByName('item' + i).visible = false;
            }
            for (let i = 0; i < card.length; i++) {
                cardBox.getChildByName('item' + i).visible = true;
                cardBox.getChildByName('item' + i).texture = `card/${card[i].nameCH}.png`;
            }

        }

        // 投降键
        surrender() {
            Laya.Scene.open('main/home.scene');
        }
        // 显示手牌
        showCard() {
            let cardBox = this.owner.getChildByName('cardBox');
            let x = this.cardShowing ? 242 : 1680;
            Laya.Tween.to(cardBox, {
                x: x
            }, 2000);
            this.cardShowing = !this.cardShowing;
        }
        // 显示外交盒子
        showDplmBox() {
            let diplomacy = this.owner.getChildByName('diplomacy');
            let y = this.dplmShowing ? -30 : -580;
            Laya.Tween.to(diplomacy, {
                y: y
            }, 1400, Laya.Ease.backOut);
            this.owner.getChildByName('showDplm').rotation = this.dplmShowing ? 180 : 0;
            this.dplmShowing = !this.dplmShowing;
        }
        // 选择牌的function 没写完
        choiceCardFun(i) {
            this.choiceCard = i;
            console.log('选中手牌' + this.choiceCard);
        }
        // 选择地区的function 没写完
        choiceMapFun(name) {
            this.choiceMap = name;
            console.log('选中地域' + this.choiceMap);
        }

    }

    class HomeControl extends Laya.Script {
        constructor() {
            super();
        }

        onEnable() {
            this.owner.getChildByName('match').on(Laya.Event.CLICK, this, this.match);
        }

        onStageClick(e) {
            //停止事件冒泡，提高性能，当然也可以不要
            e.stopPropagation();
        }

        match() {
            Laya.Scene.open('main/match.scene');
        }

    }

    class LoginControl extends Laya.Script {
        constructor() {
            super();
        }

        onEnable() {
            this.owner.getChildByName('login').on(Laya.Event.CLICK, this, this.login);
            this.owner.getChildByName('test').on(Laya.Event.CLICK, this, this.test);
        }

        onStageClick(e) {
            //停止事件冒泡，提高性能，当然也可以不要
            e.stopPropagation();
        }

        login() {

            let username = this.owner.getChildByName('username').text,
                password = this.owner.getChildByName('password').text;
            console.log([username, password]);
            socket.emit('login', [username, password]);

            socket.on('login', (msg) => {
                console.log(msg);
                Laya.Scene.open('main/home.scene');
            });
        }

        test(){
            Laya.Scene.open('game/game.scene');
        }

    }

    class MatchControl extends Laya.Script {
        constructor() {
            super();
        }

        onEnable() {
            this.owner.getChildByName('bg').on(Laya.Event.CLICK, this, this.startGame);
            this.owner.getChildByName('decline').on(Laya.Event.CLICK, this, this.decline);
            this.waitAni();
        }

        onStageClick(e) {
            //停止事件冒泡，提高性能，当然也可以不要
            e.stopPropagation();
        }

        waitAni() {
            let step = -1;
            Laya.timer.loop(20, this, () => {
                this.owner.getChildByName('bg').x += step;
                if (this.owner.getChildByName('bg').x <= -320) step = 1;
                if (this.owner.getChildByName('bg').x >= 0) step = -1;
            });
        }

        startGame() {
            Laya.timer.clearAll(this);
            Laya.Scene.open('game/game.scene');
        }

        decline() {
            Laya.timer.clearAll(this);
            Laya.Scene.open('main/home.scene');
        }

    }

    /**This class is automatically generated by LayaAirIDE, please do not make any modifications. */

    class GameConfig {
        static init() {
            //注册Script或者Runtime引用
            let reg = Laya.ClassUtils.regClass;
    		reg("script/GameControl.js",GameControl);
    		reg("script/HomeControl.js",HomeControl);
    		reg("script/LoginControl.js",LoginControl);
    		reg("script/MatchControl.js",MatchControl);
        }
    }
    GameConfig.width = 1280;
    GameConfig.height = 720;
    GameConfig.scaleMode ="fixedwidth";
    GameConfig.screenMode = "none";
    GameConfig.alignV = "top";
    GameConfig.alignH = "left";
    GameConfig.startScene = "main/login.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = true;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;

    GameConfig.init();

    class Main {
    	constructor() {
    		//根据IDE设置初始化引擎		
    		if (window["Laya3D"]) Laya3D.init(GameConfig.width, GameConfig.height);
    		else Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
    		Laya["Physics"] && Laya["Physics"].enable();
    		Laya["DebugPanel"] && Laya["DebugPanel"].enable();
    		Laya.stage.scaleMode = GameConfig.scaleMode;
    		Laya.stage.screenMode = GameConfig.screenMode;
    		Laya.stage.alignV = GameConfig.alignV;
    		Laya.stage.alignH = GameConfig.alignH;
    		//兼容微信不支持加载scene后缀场景
    		Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;

    		//打开调试面板（通过IDE设置调试模式，或者url地址增加debug=true参数，均可打开调试面板）
    		if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true") Laya.enableDebugPanel();
    		if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"]) Laya["PhysicsDebugDraw"].enable();
    		if (GameConfig.stat) Laya.Stat.show();
    		Laya.alertGlobalError(true);

    		//激活资源版本控制，version.json由IDE发布功能自动生成，如果没有也不影响后续流程
    		Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
    	}

    	onVersionLoaded() {
    		//激活大小图映射，加载小图的时候，如果发现小图在大图合集里面，则优先加载大图合集，而不是小图
    		Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
    	}

    	onConfigLoaded() {
    		//加载IDE指定的场景
    		GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
    	}
    }
    //激活启动类
    new Main();

}());
