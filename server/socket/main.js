var mysql = require('mysql');
var $conf = require('../confige/db');
var $util = require('../util/util');

// 使用连接池，提升性能
var pool = mysql.createPool($util.extend({}, $conf.mysql))

module.exports = {
    login: (msg, socket) => {
        pool.getConnection(function (err, connection) {
            var sqlQuery = 'select * from user where userName = "' + msg[0] + '"and passWord = "' + msg[1] + '"';
            connection.query(sqlQuery, function (err, result) {
                // console.log(result)
                if (result.length) {
                    socket.emit('login', result[0])
                } else {
                    socket.emit('login', '账号密码错误');
                }
                connection.release();
            });
        })
    },

    //保存数据
    save: (msg, socket) => {
        var user = msg;
        var sqlQuery = 'update user set money=?, head=?, experience=?, bag=?, card=?, soldier=?, lineup=?, fight=?, rank=?, tili=?, tongbi=?, jiangpai=?, freetime=? where userName=?'
        var sqlQueryData = [user.money, user.head, user.experience, user.bag, user.card, user.soldier, user.lineup, user.fight, user.rank, user.tili, user.tongbi, user.jiangpai, user.freetime, user.username]

        pool.getConnection(function (err, connection) {
            connection.query(sqlQuery, sqlQueryData, function (err, result) {
                if (err) {
                    console.log('[update ERROR] - ', err.message);
                    return;
                }
                if (result.affectedRows) {
                    socket.emit('save',"saved")
                } else {
                    socket.emit('save','error')
                }
                connection.release()
            })
        })
    },

    // 表查询
    queryRank: (req, res)=> {
        var separatorSymbol = ['▆', '▂'];
        pool.getConnection(function (err, connection) {
            connection.query('select * from rank order by rank desc limit 30', function (err, result) {
                socket.emit(result);
                connection.release();
            });
        });
    }
}