var mysql = require('mysql');
var $conf = require('../confige/db');
var $util = require('../util/util');

// 使用连接池，提升性能
var pool = mysql.createPool($util.extend({}, $conf.mysql))

module.exports = {
    initGame: (i) => {
        let h = initHis()
        return h
    },

    history: (msg, socket) => {
        var sqlQuery = 'update user set history=?'
        var sqlQueryData = msg

        pool.getConnection(function (err, connection) {
            connection.query(sqlQuery, sqlQueryData, function (err, result) {
                if (err) {
                    console.log('[Game Histroy ERROR] - ', err.message);
                    return;
                }
                if (result.affectedRows) {
                    socket.emit('history', "history saved")
                } else {
                    socket.emit('history', 'history error')
                }
                connection.release()
            })
        })
    },

    gameEnd: () => {

    },
    fightResult: (arm) => {
        let touzi = Math.floor((Math.random() * 6))
        let killer = [
            [0, 0, 0, 0, 1, 1],
            [0, 0, 1, 1.5, 1.5, 2],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]
        let hasHero = false
        for (let i = 0; i < arm.length; i++)
            if (arm[i] != '兵')
                hasHero = true

        return [hasHero ? killer[arm.length - 1][touzi] + 0.5 : killer[arm.length - 1][touzi] - 0.5,
            touzi
        ]
    }
}


// 随机化数组
let getRandomArray = (arr, count) => {
    let shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}

// 初始化游戏记录
let initHis = () => {
    return {
        // 啥都没写呐
        data: 1
    }
}