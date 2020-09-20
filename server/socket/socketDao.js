var IO = require('socket.io');
var game = require('./game')
var main = require('./main')

// 房间用户名单
var roomInfo = [];
for (let i = 0; i < 100; i++) {
    roomInfo.push(['', '', game.initGame(i)])
}

module.exports = {
    socketOn: function (server) {
        // 创建socket服务
        var socketIO = IO(server);
        socketIO.on('connection', function (socket) {
            //socket(socketId).emit('message', 'for your eyes only');
            let user = '',
                head = -1,
                userID = '',
                roomID = 0

            socket.on('login', (msg) => {
                main.login(msg, socket)
            })

            socket.on('join', function (msg) {
                // array.shift()  队列弹出第一个
                console.log(msg);
                user = msg[0];
                head = msg[1];
                userID = msg[2]
                for (let i = 1; i < roomInfo.length; i++) {
                    if (roomInfo[i][0] == '' || roomInfo[i][1] == '') {
                        roomID = i
                        break
                    }
                }
                socket.join(roomID); // 加入房间
                // 通知房间内人员
                // socketIO.to(roomID).emit('sys', user + '加入了游戏', roomInfo[roomID]);
                let site = '合纵'
                if (roomInfo[roomID][0] == '') {
                    roomInfo[roomID][0] = userID
                } else {
                    roomInfo[roomID][1] = userID
                    site = '连横'
                }
                roomInfo[roomID][2][site].uuid = userID
                roomInfo[roomID][2][site].nickName = user
                roomInfo[roomID][2][site].head = head
                if (roomInfo[roomID][1] != '') {
                    socketIO.to(roomID).emit('startGame', roomInfo[roomID][2])
                    console.log('startGame')
                }
            });

            socket.on('leave', function () {
                socket.emit('disconnect');
            });

            socket.on('disconnect', function () {
                // 从房间名单中移除
                roomInfo[roomID] = ['', '', game.initGame(roomID)]
                socketIO.to(roomID).emit('endGame', {
                    stutas: 'Opponent disconnect'
                })
                socket.leave(roomID); // 退出房间
                // socketIO.to(roomID).emit('sys', user + '退出了房间', roomInfo[roomID]);
                console.log(user + '退出了' + roomID);
            });

            // 接收用户消息,发送相应的房间
            socket.on('message', function (msg) {
                console.log(msg.title)
                /**
                 * 游戏时的接口
                 */
                // 游戏的记录
                if (msg.title == 'history') {
                    // console.log(msg)
                    game.history(msg)
                    roomInfo[roomID][2] = msg
                    socketIO.to(roomID).emit('history', roomInfo[roomID][2])
                }
                // 请求随机结果
                if (msg.title = 'fightResult') {
                    socket.emit('fightResult', {
                        uuid: msg.uuid,
                        fightResult:game.fightResult(msg.data)
                    })
                }

                // 回合结束
                if (msg.title == 'gameEnd') {
                    // console.log(msg)
                    game.roundEnd(roomInfo[roomID][2], msg.act)
                    socketIO.to(roomID).emit('history', roomInfo[roomID][2])
                    let result = game.endGame(roomInfo[roomID][2])
                    if (result.isEnd) {
                        socketIO.to(roomID).emit('endGame', result.result)
                        roomInfo[roomID] = ['', '', game.history(roomID)]
                        socket.leave(roomID); // 退出房间
                    }
                }

            });

        });
    },

};