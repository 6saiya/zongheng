export default class LoginControl extends Laya.Script {
    constructor() {
        super();
    }

    onEnable() {
        this.owner.getChildByName('login').on(Laya.Event.CLICK, this, this.login)
        this.owner.getChildByName('test').on(Laya.Event.CLICK, this, this.test)
    }

    onStageClick(e) {
        //停止事件冒泡，提高性能，当然也可以不要
        e.stopPropagation();
    }

    login() {

        let username = this.owner.getChildByName('username').text,
            password = this.owner.getChildByName('password').text
        console.log([username, password])
        socket.emit('login', [username, password])

        socket.on('login', (msg) => {
            console.log(msg)
            Laya.Scene.open('main/home.scene')
        })
    }

    test(){
        Laya.Scene.open('game/game.scene')
    }

}