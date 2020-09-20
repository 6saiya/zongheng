let newGame = () => {
    return {
        round: 1,
        tianshi: {
            shili: '合纵',
            isChenge: false
        },
        myCamp: '合纵',

        //  0 仕秦
        //  齐 楚 赵 123 中立 4 畏 5仇
        //  魏 韩 燕 12 中立 3 畏 4 仇
        countryStutas: [{
            name: 'qi',
            nameCH: '齐',
            num: 2,
            isSee: true,
            isHas: true
        }, {
            name: 'chu',
            nameCH: '楚',
            num: 5,
            isSee: false,
            isHas: true
        }, {
            name: 'zhao',
            nameCH: '赵',
            num: 2,
            isSee: true,
            isHas: true
        }, {
            name: 'wei',
            nameCH: '魏',
            num: 2,
            isSee: true,
            isHas: true
        }, {
            name: 'han',
            nameCH: '韩',
            num: 2,
            isSee: true,
            isHas: true
        }, {
            name: 'yan',
            nameCH: '燕',
            num: 2,
            isSee: true,
            isHas: true
        }],
        map: [{
            country: '秦',
            name: 'bashu',
            nameCH: '巴蜀',
            city: '成都',
            soliders: 3, //3兵+司马错
            hero: {
                stutas: 'a',
                name: '司马错'
            },
            moved: 0,
            neibor: ['南郡', '汉中', '陇西'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '秦',
            name: 'hanzhong',
            nameCH: '汉中',
            city: '南郑',
            soliders: 4, //4兵//
            neibor: ['南郡', '巴蜀', '陇西', '内史', '河东', '南阳'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '秦',
            name: 'longxi',
            nameCH: '陇西',
            city: '绵诸',
            soliders: 1, //1兵//
            neibor: ['巴蜀', '汉中', '内史'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '秦',
            name: 'neishi',
            nameCH: '内史',
            city: '咸阳',
            soliders: 1, //1兵//
            neibor: ['汉中', '陇西', '上郡', '河东'],
            point: 2,
            x: 0,
            y: 0
        }, {
            country: '秦',
            name: 'shangjun',
            nameCH: '上郡',
            city: '定阳',
            soliders: 1, //1兵//
            neibor: ['太原', '代郡', '内史', '河东'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '秦',
            name: 'hedong',
            nameCH: '河东',
            city: '安邑',
            soliders: 3, //3兵//
            neibor: ['太原', '韩', '内史', '南阳', '汉中', '上郡'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '楚',
            name: 'nanjun',
            nameCH: '南郡',
            city: '郢',
            soliders: 3, //3兵//
            neibor: ['豫章', '巴蜀', '汉中', '南阳'],
            point: 2,
            x: 0,
            y: 0
        }, {
            country: '楚',
            name: 'nanyang',
            nameCH: '南阳',
            city: '宛',
            soliders: 2, //2兵//
            neibor: ['豫章', '南郡', '汉中', '河东', '韩', '魏', '泗水'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '楚',
            name: 'sishui',
            nameCH: '泗水',
            city: '陈',
            soliders: 2, //2兵//
            neibor: ['豫章', '南阳', '魏', '宋', '淮夷'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '楚',
            name: 'huaiyi',
            nameCH: '淮夷',
            city: '寿春',
            soliders: 1, //1兵//
            neibor: ['豫章', '泗水', '琅琊', '宋'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '楚',
            name: 'yuzhang',
            nameCH: '豫章',
            city: '陈',
            soliders: 2, //2兵//
            neibor: ['南郡', '南阳', '泗水', '淮夷'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '宋',
            name: 'song',
            nameCH: '宋',
            city: '定陶',
            soliders: 1, //1兵//
            neibor: ['泗水', '魏', '琅琊', '淮夷'],
            point: 2,
            x: 0,
            y: 0
        }, {
            country: '魏',
            name: 'wei',
            nameCH: '魏',
            city: '大梁',
            soliders: 4, //4兵//
            neibor: ['泗水', '宋', '琅琊', '东郡', '邯郸', '韩', '南阳'],
            point: 2,
            x: 0,
            y: 0
        }, {
            country: '韩',
            name: 'han',
            nameCH: '韩',
            city: '洛阳',
            soliders: 4, //4兵//
            neibor: ['河东', '太原', '魏', '邯郸', '南阳'],
            point: 2,
            x: 0,
            y: 0
        }, {
            country: '赵',
            name: 'taiyuan',
            nameCH: '太原',
            city: '晋阳',
            soliders: 4, //4兵//
            neibor: ['河东', '上郡', '代郡', '中山', '邯郸', '韩'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '赵',
            name: 'daijun',
            nameCH: '代郡',
            city: '代',
            soliders: 1, //1兵//
            neibor: ['太原', '上郡', '中山', '燕'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '赵',
            name: 'handan',
            nameCH: '邯郸',
            city: '邯郸',
            soliders: 3, //3兵//
            neibor: ['魏', '太原', '燕', '中山', '东郡', '韩'],
            point: 2,
            x: 0,
            y: 0
        }, {
            country: '中山',
            name: 'zhongshan',
            nameCH: '中山',
            city: '灵寿',
            soliders: 1, //1兵//
            neibor: ['太原', '燕', '代郡', '邯郸'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '燕',
            name: 'yan',
            nameCH: '燕',
            city: '蓟',
            soliders: 2, //2兵+乐毅//
            hero: {
                name: '乐毅',
                stutas: 'a'
            },
            neibor: ['中山', '东郡', '代郡', '邯郸'],
            point: 1,
            x: 0,
            y: 0
        }, {
            country: '齐',
            name: 'dongjun',
            nameCH: '东郡',
            city: '安阳',
            soliders: 3, //3兵//
            neibor: ['魏', '邯郸', '燕', '齐郡', '琅琊'],
            point: 2,
            x: 0,
            y: 0
        }, {
            country: '齐',
            name: 'qijun',
            nameCH: '齐郡',
            city: '临淄',
            soliders: 1, //1兵//
            neibor: ['东郡', '琅琊'],
            point: 2,
            x: 0,
            y: 0
        }, {
            country: '齐',
            name: 'langya',
            nameCH: '琅琊',
            city: '莒',
            soliders:4, //4兵//
            neibor: ['魏', '东郡', '宋', '齐郡', '淮夷'],
            point: 1,
            x: 0,
            y: 0
        }],
        Z_head: [{
                id: 1,
                name: '',
                nameCH: '合纵-楚',
                des: '',
                arr: '',
                fun: () => {}
            },
            {
                id: 3,
                name: '',
                nameCH: '合纵-齐',
                des: '',
                arr: '',
                fun: () => {}
            },
            {
                id: 2,
                name: '',
                nameCH: '合纵-赵',
                des: '',
                arr: '',
                fun: () => {}
            },
            {
                id: 4,
                name: '',
                nameCH: '合纵-韩魏燕',
                des: '',
                arr: '',
                fun: () => {}
            },
            {
                id: 5,
                name: '',
                nameCH: '合纵-韩魏燕',
                des: '',
                arr: '',
                fun: () => {}
            },
            {
                id: 6,
                name: '',
                nameCH: '合纵-鼓舞士气',
                des: '',
                arr: '',
                fun: () => {}
            },

        ],
        Z_card: [{
            id: 0,
            name: '',
            nameCH: '合纵-箭如雨下',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 7,
            name: '',
            nameCH: '合纵-联合征募',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 8,
            name: '',
            nameCH: '合纵-联合征募',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 9,
            name: '',
            nameCH: '合纵-名将出山',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 10,
            name: '',
            nameCH: '合纵-名将出山',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 11,
            name: '',
            nameCH: '合纵-名将出山',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 12,
            name: '',
            nameCH: '合纵-士-春申君',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 13,
            name: '',
            nameCH: '合纵-士-公孙衍',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 13,
            name: '',
            nameCH: '合纵-士-郭',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 14,
            name: '',
            nameCH: '合纵-士-荆轲',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 15,
            name: '',
            nameCH: '合纵-士-毛遂',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 16,
            name: '',
            nameCH: '合纵-士-孟尝君',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 17,
            name: '',
            nameCH: '合纵-士-苏秦',
            des: '',
            arr: '',
            fun: () => {}
        }, {
            id: 18,
            name: '',
            nameCH: '合纵-士-信陵君',
            des: '',
            arr: '',
            fun: () => {}
        }],
        Z_used: [],
        H_head: [],
        H_card: [{
                id: 0,
                name: '',
                nameCH: '连横-兵分两路',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 1,
                name: '',
                nameCH: '连横-楚',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 2,
                name: '',
                nameCH: '连横-齐',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 3,
                name: '',
                nameCH: '连横-赵',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 4,
                name: '',
                nameCH: '连横-韩魏燕',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 5,
                name: '',
                nameCH: '连横-韩魏燕',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 6,
                name: '',
                nameCH: '连横-箭如雨下',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 7,
                name: '',
                nameCH: '连横-紧急动员',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 8,
                name: '',
                nameCH: '连横-紧急动员',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 9,
                name: '',
                nameCH: '连横-紧急动员',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 10,
                name: '',
                nameCH: '连横-紧急动员',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 11,
                name: '',
                nameCH: '连横-举国征召',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 12,
                name: '',
                nameCH: '连横-举国征召',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 13,
                name: '',
                nameCH: '连横-名将出山',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 14,
                name: '',
                nameCH: '连横-士-范',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 15,
                name: '',
                nameCH: '连横-士-韩非',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 16,
                name: '',
                nameCH: '连横-士-李斯',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 17,
                name: '',
                nameCH: '连横-士-秦王',
                des: '',
                arr: '',
                fun: () => {}
            }, {
                id: 18,
                name: '',
                nameCH: '连横-士-张仪',
                des: '',
                arr: '',
                fun: () => {}
            }

        ],
        H_used: [],

        wild: {
            qin: ['白起', '王翦'],
            qi: ['田单'],
            chu: ['项燕'],
            zhao: ['李牧', '廉颇', '赵括'],
            yan: ['乐毅']
        }

    }
}