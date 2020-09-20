export default class CardBox extends Laya.Sprite {
    constructor() { super(); }
    onEnable() {
        var ape = new Laya.Sprite()
        ape.skin = 'image/国-中山.png'
        ape.scaleX = 0.2     
        ape.scaleY = 0.2     
        console.log('test2');
        ape.on(Laya.Event.CLICK,this,()=>{console.log('test3')})
        this.on(Laya.Event.CLICK,this,()=>{console.log('test4')})
        this.addChild(ape)
    }

    show(){
    }

    onDisable() {
        Laya.Pool.recover("cardBox", this.owner);
    }
}