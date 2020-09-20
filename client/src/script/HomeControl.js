export default class HomeControl extends Laya.Script {
    constructor() {
        super();
    }

    onEnable() {
        this.owner.getChildByName('match').on(Laya.Event.CLICK, this, this.match)
    }

    onStageClick(e) {
        //停止事件冒泡，提高性能，当然也可以不要
        e.stopPropagation();
    }

    match() {
        Laya.Scene.open('main/match.scene')
    }

}