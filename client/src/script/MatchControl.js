export default class MatchControl extends Laya.Script {
    constructor() {
        super()
    }

    onEnable() {
        this.owner.getChildByName('bg').on(Laya.Event.CLICK, this, this.startGame)
        this.owner.getChildByName('decline').on(Laya.Event.CLICK, this, this.decline)
        this.waitAni()
    }

    onStageClick(e) {
        //停止事件冒泡，提高性能，当然也可以不要
        e.stopPropagation()
    }

    waitAni() {
        let step = -1
        Laya.timer.loop(20, this, () => {
            this.owner.getChildByName('bg').x += step
            if (this.owner.getChildByName('bg').x <= -320) step = 1
            if (this.owner.getChildByName('bg').x >= 0) step = -1
        })
    }

    startGame() {
        Laya.timer.clearAll(this)
        Laya.Scene.open('game/game.scene')
    }

    decline() {
        Laya.timer.clearAll(this)
        Laya.Scene.open('main/home.scene')
    }

}