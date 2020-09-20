// import CardBox from './assert/cardBox'
// import SoldiersBox from './assert/soldiers'
import GameFun from './assert/game'
export default class GameControl extends Laya.Script {
    constructor() {
        super();
    }

    onEnable() {
        this.data = newGame()
        this.owner.getChildByName('surrender').on(Laya.Event.CLICK, this, this.surrender)
        this.owner.getChildByName('cardInHead').on(Laya.Event.CLICK, this, this.showCard)
        this.owner.getChildByName('showDplm').on(Laya.Event.CLICK, this, this.showDplmBox)
        this.cardShowing = true
        this.dplmShowing = true
        this.choiceCard = 8
        this.choiceMap = ''
        this.solidersNum = 0
        this.choiceHero = ''

        this.gameFun = new GameFun()
        console.log(this.gameFun.initGame())

        for (let i = 0; i < 7; i++)
            this.owner.getChildByName('cardBox').getChildByName('item' + i).on(Laya.Event.CLICK, this, this.choiceCardFun, [i])
        for (let i = 0; i < this.data.map.length; i++)
            this.owner.getChildByName('map').getChildByName('map').getChildByName('map_' + this.data.map[i].name).on(Laya.Event.CLICK, this, this.choiceMapFun, [this.data.map[i].name])

        this.msgShow()
    }

    onStageClick(e) {
        //停止事件冒泡，提高性能，当然也可以不要
        e.stopPropagation()
        this.choiceCard = 8
        this.choiceMap = ''
        this.solidersNum = 0
        this.choiceHero = ''
        this.msgShow()
    }

    /** 根据data刷新ui */
    msgShow() {
        let dplm = this.owner.getChildByName('diplomacy')
        dplm.getChildByName('round').x = 43 + this.data.round * 59 // 回合数
        // 外交
        let qian3 = [150, 218, 272, 326, 395, 445]
        for (let i = 0; i < 3; i++) {
            dplm.getChildByName(this.data.countryStutas[i].name).x = qian3[this.data.countryStutas[i].num]
            dplm.getChildByName(this.data.countryStutas[i].name).skin = this.data.countryStutas[i].isSee ? 'image/状-接见-a x6.png' : 'image/状-接见-b x6.png'
            dplm.getChildByName(this.data.countryStutas[i].name).visible = this.data.countryStutas[i].isHas
        }
        let hou3 = [178, 245, 300, 366, 421]
        for (let i = 3; i < 6; i++) {
            dplm.getChildByName(this.data.countryStutas[i].name).x = hou3[this.data.countryStutas[i].num]
            dplm.getChildByName(this.data.countryStutas[i].name).skin = this.data.countryStutas[i].isSee ? 'image/状-接见-a x6.png' : 'image/状-接见-b x6.png'
            dplm.getChildByName(this.data.countryStutas[i].name).visible = this.data.countryStutas[i].isHas
        }
        // 天时
        let tianshi_l = this.owner.getChildByName('TianShi').getChildByName('l')
        let tianshi_h = this.owner.getChildByName('TianShi').getChildByName('h')
        tianshi_l.visible = this.data.tianshi.shili == '连横'
        tianshi_l.skin = this.data.tianshi.isChenge ? 'image/状-天时-b.png' : 'image/状-天时-a.png'
        tianshi_h.visible = this.data.tianshi.shili == '合纵'
        tianshi_h.skin = this.data.tianshi.isChenge ? 'image/状-天时-b.png' : 'image/状-天时-a.png'
        // 军队
        for (let i = 0; i < this.data.map.length; i++) {
            let m = this.owner.getChildByName('map').getChildByName('map').getChildByName(this.data.map[i].name)
            m.getChildByName('moving').index = this.data.map[i].soliders? this.data.map[i].soliders : 0
            m.getChildByName('moved').index = this.data.map[i].moved ? this.data.map[i].moved : 0
            m.getChildByName('soliders').texture = `image/国-${this.data.map[i].country}.png`
            if (this.data.map[i].hero == null) {
                m.getChildByName('hero').visible = false
            } else {
                m.getChildByName('hero').visible = true
                m.getChildByName('hero').texture = `image/士-${this.data.map[i].hero.name}-${this.data.map[i].hero.stutas}.png`
            }
        }
        // 手牌
        let card = this.data.myCamp == '合纵' ? this.data.Z_head : this.data.H_head
        let cardBox = this.owner.getChildByName('cardBox')
        for (let i = 0; i < 7; i++) {
            cardBox.getChildByName('item' + i).visible = false
        }
        for (let i = 0; i < card.length; i++) {
            cardBox.getChildByName('item' + i).visible = true
            cardBox.getChildByName('item' + i).texture = `card/${card[i].nameCH}.png`
        }

    }

    // 投降键
    surrender() {
        Laya.Scene.open('main/home.scene')
    }
    // 显示手牌
    showCard() {
        let cardBox = this.owner.getChildByName('cardBox')
        let x = this.cardShowing ? 242 : 1680
        Laya.Tween.to(cardBox, {
            x: x
        }, 2000)
        this.cardShowing = !this.cardShowing
    }
    // 显示外交盒子
    showDplmBox() {
        let diplomacy = this.owner.getChildByName('diplomacy')
        let y = this.dplmShowing ? -30 : -580
        Laya.Tween.to(diplomacy, {
            y: y
        }, 1400, Laya.Ease.backOut)
        this.owner.getChildByName('showDplm').rotation = this.dplmShowing ? 180 : 0
        this.dplmShowing = !this.dplmShowing
    }
    // 选择牌的function 没写完
    choiceCardFun(i) {
        this.choiceCard = i
        console.log('选中手牌' + this.choiceCard)
    }
    // 选择地区的function 没写完
    choiceMapFun(name) {
        this.choiceMap = name
        console.log('选中地域' + this.choiceMap)
    }

}