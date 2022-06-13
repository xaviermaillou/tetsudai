const vocabulary = [
    {
        id: 1,
        elements: [
            {
                kanji: '母',
                kana: 'はは',
            },
            {
                kanji: '',
                kana: 'の',
            },
            {
                kanji: '日',
                kana: 'ひ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'hahanohi',
        translation: 'fête des mères',
        grammar: [10],
    },
    {
        id: 2,
        elements: [
            {
                kanji: '日',
                kana: 'ニチ',
            },
            {
                kanji: '曜',
                kana: 'ヨウ',
            },
            {
                kanji: '日',
                kana: 'び',
            },
        ],
        level: 'N5',
        frequency: 3617,
        romaji: 'nichiyoubi',
        translation: 'dimanche',
        grammar: [1],
    },
    {
        id: 3,
        elements: [
            {
                kanji: '月',
                kana: 'ゲツ',
            },
            {
                kanji: '曜',
                kana: 'ヨウ',
            },
            {
                kanji: '日',
                kana: 'び',
            },
        ],
        level: 'N5',
        frequency: 5271,
        romaji: 'getsuyoubi',
        translation: 'lundi',
        grammar: [1],
    },
    {
        id: 4,
        elements: [
            {
                kanji: '火',
                kana: 'カ',
            },
            {
                kanji: '曜',
                kana: 'ヨウ',
            },
            {
                kanji: '日',
                kana: 'び',
            },
        ],
        level: 'N5',
        frequency: 7862,
        romaji: 'kayoubi',
        translation: 'mardi',
        grammar: [1],
    },
    {
        id: 5,
        elements: [
            {
                kanji: '水',
                kana: 'スイ',
            },
            {
                kanji: '曜',
                kana: 'ヨウ',
            },
            {
                kanji: '日',
                kana: 'び',
            },
        ],
        level: 'N5',
        frequency: 7957,
        romaji: 'suiyoubi',
        translation: 'mercredi',
        grammar: [1],
    },
    {
        id: 6,
        elements: [
            {
                kanji: '木',
                kana: 'モク',
            },
            {
                kanji: '曜',
                kana: 'ヨウ',
            },
            {
                kanji: '日',
                kana: 'び',
            },
        ],
        level: 'N5',
        frequency: 6850,
        romaji: 'mokuyoubi',
        translation: 'jeudi',
        grammar: [1],
    },
    {
        id: 7,
        elements: [
            {
                kanji: '金',
                kana: 'キン',
            },
            {
                kanji: '曜',
                kana: 'ヨウ',
            },
            {
                kanji: '日',
                kana: 'び',
            },
        ],
        level: 'N5',
        frequency: 3964,
        romaji: 'kinyoubi',
        translation: 'vendredi',
        grammar: [1],
    },
    {
        id: 8,
        elements: [
            {
                kanji: '土',
                kana: 'ド',
            },
            {
                kanji: '曜',
                kana: 'ヨウ',
            },
            {
                kanji: '日',
                kana: 'び',
            },
        ],
        level: 'N5',
        frequency: 3578,
        romaji: 'doyoubi',
        translation: 'samedi',
        grammar: [1],
    },
    {
        id: 9,
        elements: [
            {
                kanji: '日',
                kana: '二',
            },
            {
                kanji: '本',
                kana: 'ホン',
            },
        ],
        level: 'N3',
        frequency: 22,
        romaji: 'nihon',
        translation: 'Japon',
        grammar: [2],
    },
    {
        id: 10,
        elements: [
            {
                kanji: '食',
                kana: 'た',
            },
            {
                kanji: '',
                kana: 'べ',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 2075,
        romaji: 'taberu',
        translation: 'manger',
        grammar: [3],
    },
    {
        id: 11,
        elements: [
            {
                kanji: '食',
                kana: 'た',
            },
            {
                kanji: '',
                kana: 'べ',
            },
            {
                kanji: '物',
                kana: 'もの',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'tabemono',
        translation: 'nourriture',
        grammar: [1],
    },
    {
        id: 12,
        elements: [
            {
                kanji: '飲',
                kana: 'の',
            },
            {
                kanji: '',
                kana: 'む',
            },
        ],
        level: 'N5',
        frequency: 3110,
        romaji: 'nomu',
        translation: 'boire',
        grammar: [3],
    },
    {
        id: 13,
        elements: [
            {
                kanji: '飲',
                kana: 'の',
            },
            {
                kanji: '',
                kana: 'み',
            },
            {
                kanji: '物',
                kana: 'もの',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'nomimono',
        translation: 'boisson',
        grammar: [1],
    },
    {
        id: 14,
        elements: [
            {
                kanji: '薬',
                kana: 'くすり',
            },
            {
                kanji: '屋',
                kana: 'や',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'kusuriya',
        translation: 'pharmacie',
        grammar: [1],
    },
    {
        id: 15,
        elements: [
            {
                kanji: '',
                kana: 'パン',
            },
            {
                kanji: '屋',
                kana: 'や',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'panya',
        translation: 'boulangerie',
        grammar: [1],
    },
    {
        id: 16,
        elements: [
            {
                kanji: '夕',
                kana: 'ゆう',
            },
            {
                kanji: '食',
                kana: 'ショク',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'yuushoku',
        translation: 'repas du soir, dîner',
        grammar: [1],
    },
    {
        id: 17,
        elements: [
            {
                kanji: '夕',
                kana: 'ゆう',
            },
            {
                kanji: '飯',
                kana: 'ハン',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'yuuhan',
        translation: 'repas du soir, dîner',
        grammar: [1],
    },
    {
        id: 18,
        elements: [
            {
                kanji: '火',
                kana: 'カ',
            },
            {
                kanji: '山',
                kana: 'ザン',
            },
        ],
        level: 'N2',
        frequency: 3195,
        romaji: 'kazan',
        translation: 'volcan',
        grammar: [1],
    },
    {
        id: 19,
        elements: [
            {
                kanji: '大',
                kana: 'ダイ',
            },
            {
                kanji: '学',
                kana: 'ガク',
            },
        ],
        level: 'N5',
        frequency: 38,
        romaji: 'daigaku',
        translation: 'université',
        grammar: [1],
    },
    {
        id: 20,
        elements: [
            {
                kanji: '学',
                kana: 'ガッ',
            },
            {
                kanji: '校',
                kana: 'コウ',
            },
        ],
        level: 'N5',
        frequency: 79,
        romaji: 'gakkou',
        translation: 'école',
        grammar: [1],
    },
    {
        id: 21,
        elements: [
            {
                kanji: '学',
                kana: 'ガク',
            },
            {
                kanji: '生',
                kana: 'セイ',
            },
        ],
        level: 'N5',
        frequency: 808,
        romaji: 'gakusei',
        translation: 'étudiant',
        grammar: [1],
    },
    {
        id: 22,
        elements: [
            {
                kanji: '先',
                kana: 'セン',
            },
            {
                kanji: '生',
                kana: 'セイ',
            },
        ],
        level: 'N5',
        frequency: 4313,
        romaji: 'sensei',
        translation: 'professeur',
        grammar: [1],
    },
    {
        id: 23,
        elements: [
            {
                kanji: '花',
                kana: 'はな',
            },
            {
                kanji: '火',
                kana: 'び',
            },
        ],
        level: 'N2',
        frequency: 6475,
        romaji: 'hanabi',
        translation: 'feu d\'artifice',
        grammar: [1],
    },
    {
        id: 24,
        elements: [
            {
                kanji: '一',
                kana: 'イチ',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'ichigatsu',
        translation: 'janvier',
        grammar: [1],
    },
    {
        id: 25,
        elements: [
            {
                kanji: '二',
                kana: 'に',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'nigatsu',
        translation: 'février',
        grammar: [1],
    },
    {
        id: 26,
        elements: [
            {
                kanji: '三',
                kana: 'サン',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'sangatsu',
        translation: 'mars',
        grammar: [1],
    },
    {
        id: 27,
        elements: [
            {
                kanji: '四',
                kana: 'シ',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'shigatsu',
        translation: 'avril',
        grammar: [1],
    },
    {
        id: 28,
        elements: [
            {
                kanji: '五',
                kana: 'ゴ',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'gogatsu',
        translation: 'mai',
        grammar: [1],
    },
    {
        id: 29,
        elements: [
            {
                kanji: '六',
                kana: 'ロク',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'rokugatsu',
        translation: 'juin',
        grammar: [1],
    },
    {
        id: 30,
        elements: [
            {
                kanji: '七',
                kana: 'シチ',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'shichigatsu',
        translation: 'juillet',
        grammar: [1],
    },
    {
        id: 31,
        elements: [
            {
                kanji: '八',
                kana: 'ハチ',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'hachigatsu',
        translation: 'août',
        grammar: [1],
    },
    {
        id: 32,
        elements: [
            {
                kanji: '九',
                kana: 'ク',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'kugatsu',
        translation: 'septembre',
        grammar: [1],
    },
    {
        id: 33,
        elements: [
            {
                kanji: '十',
                kana: 'ジュウ',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'juugatsu',
        translation: 'octobre',
        grammar: [1],
    },
    {
        id: 34,
        elements: [
            {
                kanji: '十',
                kana: 'ジュウ',
            },
            {
                kanji: '一',
                kana: 'イチ',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'juuichigatsu',
        translation: 'novembre',
        grammar: [1],
    },
    {
        id: 35,
        elements: [
            {
                kanji: '十',
                kana: 'ジュウ',
            },
            {
                kanji: '二',
                kana: 'に',
            },
            {
                kanji: '月',
                kana: 'ガツ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'juunigatsu',
        translation: 'décembre',
        grammar: [1],
        },
    {
        id: 36,
        elements: [
            {
                kanji: '分',
                kana: 'わ',
            },
            {
                kanji: '',
                kana: 'か',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 1458,
        romaji: 'wakaru',
        translation: 'comprendre',
        grammar: [3],
    },
    {
        id: 37,
        elements: [
            {
                kanji: '天',
                kana: 'テン',
            },
            {
                kanji: '気',
                kana: 'キ',
            },
        ],
        level: 'N5',
        frequency: 5125,
        romaji: 'tenki',
        translation: 'temps, météo',
        grammar: [1],
    },
    {
        id: 38,
        elements: [
            {
                kanji: '行',
                kana: 'い',
            },
            {
                kanji: '',
                kana: 'く',
            },
        ],
        level: 'N5',
        frequency: 82,
        romaji: 'iku',
        translation: 'aller',
        grammar: [3],
    },
    {
        id: 39,
        elements: [
            {
                kanji: '住',
                kana: 'す',
            },
            {
                kanji: '',
                kana: 'む',
            },
        ],
        level: 'N5',
        frequency: 877,
        romaji: 'sumu',
        translation: 'habiter',
        grammar: [3],
    },
    {
        id: 40,
        elements: [
            {
                kanji: '休',
                kana: 'やす',
            },
            {
                kanji: '',
                kana: 'む',
            },
        ],
        level: 'N5',
        frequency: 4084,
        romaji: 'yasumu',
        translation: 'se reposer',
        grammar: [3],
    },
    {
        id: 41,
        elements: [
            {
                kanji: '来',
                kana: 'く',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 1301,
        romaji: 'kuru',
        translation: 'venir',
        grammar: [3],
    },
    {
        id: 42,
        elements: [
            {
                kanji: '見',
                kana: 'み',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 91,
        romaji: 'miru',
        translation: 'voir, regarder',
        grammar: [3],
    },
    {
        id: 43,
        elements: [
            {
                kanji: '聞',
                kana: 'き',
            },
            {
                kanji: '',
                kana: 'く',
            },
        ],
        level: 'N5',
        frequency: 1445,
        romaji: 'kiku',
        translation: 'écouter, demander',
        grammar: [3],
    },
    {
        id: 44,
        elements: [
            {
                kanji: '言',
                kana: 'い',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N5',
        frequency: 21,
        romaji: 'iu',
        translation: 'dire',
        grammar: [3],
    },
    {
        id: 45,
        elements: [
            {
                kanji: '話',
                kana: 'はな',
            },
            {
                kanji: '',
                kana: 'す',
            },
        ],
        level: 'N5',
        frequency: 1898,
        romaji: 'hanasu',
        translation: 'parler',
        grammar: [3],
    },
    {
        id: 46,
        elements: [
            {
                kanji: '話',
                kana: 'はなし',
            },
        ],
        level: 'N5',
        frequency: 314,
        romaji: 'hanashi',
        translation: 'conversation',
        grammar: [1],
    },
    {
        id: 47,
        elements: [
            {
                kanji: '語',
                kana: 'かた',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N3',
        frequency: 10000,
        romaji: 'kataru',
        translation: 'raconter',
        grammar: [3],
    },
    {
        id: 48,
        elements: [
            {
                kanji: '',
                kana: 'フランス',
            },
            {
                kanji: '語',
                kana: 'ゴ',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 10000,
        romaji: 'furansugo',
        translation: 'langue française',
        grammar: [1],
    },
    {
        id: 49,
        elements: [
            {
                kanji: '英',
                kana: 'エイ',
            },
            {
                kanji: '語',
                kana: 'ゴ',
            },
        ],
        level: 'N5',
        frequency: 439,
        romaji: 'eigo',
        translation: 'langue anglaise',
        grammar: [1],
    },
    {
        id: 50,
        elements: [
            {
                kanji: '読',
                kana: 'よ',
            },
            {
                kanji: '',
                kana: 'む',
            },
        ],
        level: 'N5',
        frequency: 957,
        romaji: 'yomu',
        translation: 'lire',
        grammar: [3],
    },
    {
        id: 51,
        elements: [
            {
                kanji: '書',
                kana: 'か',
            },
            {
                kanji: '',
                kana: 'く',
            },
        ],
        level: 'N5',
        frequency: 336,
        romaji: 'kaku',
        translation: 'écrire',
        grammar: [3],
    },
    {
        id: 52,
        elements: [
            {
                kanji: '知',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 146,
        romaji: 'shiru',
        translation: 'savoir',
        grammar: [3],
    },
    {
        id: 53,
        elements: [
            {
                kanji: '思',
                kana: 'おも',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N4',
        frequency: 452,
        romaji: 'omou',
        translation: 'penser',
        grammar: [3],
    },
    {
        id: 54,
        elements: [
            {
                kanji: '教',
                kana: 'おし',
            },
            {
                kanji: '',
                kana: 'え',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 2304,
        romaji: 'oshieru',
        translation: 'enseigner',
        grammar: [3],
    },
    {
        id: 55,
        elements: [
            {
                kanji: '歩',
                kana: 'ある',
            },
            {
                kanji: '',
                kana: 'く',
            },
        ],
        level: 'N5',
        frequency: 3609,
        romaji: 'aruku',
        translation: 'marcher',
        grammar: [3],
    },
    {
        id: 56,
        elements: [
            {
                kanji: '入',
                kana: 'はい',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 174,
        romaji: 'hairu',
        translation: 'entrer',
        grammar: [3],
    },
    {
        id: 57,
        elements: [
            {
                kanji: '大',
                kana: 'おお',
            },
            {
                kanji: '',
                kana: 'き',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 239,
        romaji: 'ookii',
        translation: 'grand',
        grammar: [4],
    },
    {
        id: 58,
        elements: [
            {
                kanji: '小',
                kana: 'ちい',
            },
            {
                kanji: '',
                kana: 'さ',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 1415,
        romaji: 'chiisai',
        translation: 'petit',
        grammar: [4],
    },
    {
        id: 59,
        elements: [
            {
                kanji: '白',
                kana: 'しろ',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 2885,
        romaji: 'shiroi',
        translation: 'blanc',
        grammar: [4],
    },
    {
        id: 60,
        elements: [
            {
                kanji: '黒',
                kana: 'くろ',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 3234,
        romaji: 'kuroi',
        translation: 'noir',
        grammar: [4],
    },
    {
        id: 61,
        elements: [
            {
                kanji: '古',
                kana: 'ふる',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 1219,
        romaji: 'furui',
        translation: 'vieux',
        grammar: [4],
    },
    {
        id: 62,
        elements: [
            {
                kanji: '安',
                kana: 'やす',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 5381,
        romaji: 'yasui',
        translation: 'bon marché',
        grammar: [4],
    },
    {
        id: 63,
        elements: [
            {
                kanji: '早',
                kana: 'はや',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 1902,
        romaji: 'hayai',
        translation: 'tôt, rapide',
        grammar: [4],
    },
    {
        id: 64,
        elements: [
            {
                kanji: '好',
                kana: 'す',
            },
            {
                kanji: '',
                kana: 'き',
            },
        ],
        level: 'N5',
        frequency: 2239,
        romaji: 'suki',
        translation: 'aimé',
        grammar: [4],
    },
    {
        id: 65,
        elements: [
            {
                kanji: '学',
                kana: 'まな',
            },
            {
                kanji: '',
                kana: 'ぶ',
            },
        ],
        level: 'N3',
        frequency: 771,
        romaji: 'manabu',
        translation: 'étudier',
        grammar: [3],
    },
    {
        id: 66,
        elements: [
            {
                kanji: '高',
                kana: 'たか',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 162,
        romaji: 'takai',
        translation: 'haut, cher',
        grammar: [4],
    },
    {
        id: 67,
        elements: [
            {
                kanji: '帰',
                kana: 'かえ',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 2406,
        romaji: 'kaeru',
        translation: 'retourner',
        grammar: [3],
    },
    {
        id: 68,
        elements: [
            {
                kanji: '買',
                kana: 'か',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N5',
        frequency: 1846,
        romaji: 'kau',
        translation: 'acheter',
        grammar: [3],
    },
    {
        id: 69,
        elements: [
            {
                kanji: '新',
                kana: 'あたら',
            },
            {
                kanji: '',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 619,
        romaji: 'atarashii',
        translation: 'nouveau',
        grammar: [4],
    },
    {
        id: 70,
        elements: [
            {
                kanji: '楽',
                kana: 'たの',
            },
            {
                kanji: '',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 7214,
        romaji: 'tanoshii',
        translation: 'amusant, plaisant',
        grammar: [4],
    },
    {
        id: 71,
        elements: [
            {
                kanji: '電',
                kana: 'デン',
            },
            {
                kanji: '車',
                kana: 'シャ',
            },
        ],
        level: 'N5',
        frequency: 758,
        romaji: 'densha',
        translation: 'train',
        grammar: [1],
    },
    {
        id: 72,
        elements: [
            {
                kanji: '電',
                kana: 'デン',
            },
            {
                kanji: '話',
                kana: 'ワ',
            },
        ],
        level: 'N5',
        frequency: 932,
        romaji: 'denwa',
        translation: 'téléphone',
        grammar: [1],
    },
    {
        id: 73,
        elements: [
            {
                kanji: '会',
                kana: 'あ',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N5',
        frequency: 65,
        romaji: 'au',
        translation: 'se réunir',
        grammar: [3],
    },
    {
        id: 74,
        elements: [
            {
                kanji: '出',
                kana: 'で',
            },
            {
                kanji: '会',
                kana: 'あ',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N3',
        frequency: 1857,
        romaji: 'deau',
        translation: 'rencontrer, croiser',
        grammar: [3],
    },
    {
        id: 75,
        elements: [
            {
                kanji: '会',
                kana: 'カイ',
            },
            {
                kanji: '社',
                kana: 'シャ',
            },
        ],
        level: 'N5',
        frequency: 103,
        romaji: 'kaisha',
        translation: 'entreprise',
        grammar: [1],
    },
    {
        id: 76,
        elements: [
            {
                kanji: '会',
                kana: 'カイ',
            },
            {
                kanji: '話',
                kana: 'ワ',
            },
        ],
        level: 'N4',
        frequency: 4794,
        romaji: 'kaiwa',
        translation: 'conversation',
        grammar: [1],
    },
    {
        id: 77,
        elements: [
            {
                kanji: '文',
                kana: 'モ',
            },
            {
                kanji: '字',
                kana: 'ジ',
            },
        ],
        level: 'N3',
        frequency: 616,
        romaji: 'moji',
        translation: 'écriture',
        grammar: [1],
    },
    {
        id: 78,
        elements: [
            {
                kanji: '文',
                kana: 'ブン',
            },
            {
                kanji: '学',
                kana: 'ガク',
            },
        ],
        level: 'N4',
        frequency: 840,
        romaji: 'bungaku',
        translation: 'littérature',
        grammar: [1],
    },
    {
        id: 79,
        elements: [
            {
                kanji: '下',
                kana: 'した',
            },
            {
                kanji: '町',
                kana: 'まち',
            },
        ],
        level: 'N2',
        frequency: 10000,
        romaji: 'shitamachi',
        translation: 'quartier populaire',
        grammar: [1],
    },
    {
        id: 80,
        elements: [
            {
                kanji: '町',
                kana: 'チョウ',
            },
            {
                kanji: '長',
                kana: 'チョウ',
            },
        ],
        level: null,
        frequency: 7477,
        romaji: 'chouchou',
        translation: 'maire',
        grammar: [1],
    },
    {
        id: 81,
        elements: [
            {
                kanji: '上',
                kana: 'あ',
            },
            {
                kanji: '',
                kana: 'が',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N4',
        frequency: 1139,
        romaji: 'agaru',
        translation: 's\'élever',
        grammar: [3],
    },
    {
        id: 82,
        elements: [
            {
                kanji: '上',
                kana: 'のぼ',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 1815,
        romaji: 'noboru',
        translation: 'monter',
        grammar: [3],
    },
    {
        id: 83,
        elements: [
            {
                kanji: '上',
                kana: 'ジョウ',
            },
            {
                kanji: '手',
                kana: 'ズ',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'jouzu',
        translation: 'doué',
        grammar: [1, 4],
    },
    {
        id: 84,
        elements: [
            {
                kanji: '上',
                kana: '',
            },
            {
                kanji: '手',
                kana: '',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        jukujikun: 'うまい',
        rareKanji: true,
        collections: [
            3,
        ],
        level: 'N3',
        frequency: 3685,
        romaji: 'umai',
        translation: 'doué',
        grammar: [4],
    },
    {
        id: 85,
        elements: [
            {
                kanji: '東',
                kana: 'トウ',
            },
            {
                kanji: '京',
                kana: 'キョウ',
            },
        ],
        level: null,
        frequency: 57,
        romaji: 'toukyou',
        translation: 'Tokyo',
        grammar: [2],
    },
    {
        id: 86,
        elements: [
            {
                kanji: '関',
                kana: 'カン',
            },
            {
                kanji: '西',
                kana: 'サイ',
            },
        ],
        level: null,
        frequency: 1158,
        romaji: 'kansai',
        translation: 'Kansai',
        grammar: [2],
    },
    {
        id: 87,
        elements: [
            {
                kanji: '北',
                kana: 'ホッ',
            },
            {
                kanji: '海',
                kana: 'カイ',
            },
            {
                kanji: '道',
                kana: 'ドウ',
            },
        ],
        level: null,
        frequency: 490,
        romaji: 'hokkaidou',
        translation: 'Hokkaido',
        grammar: [2],
    },
    {
        id: 88,
        elements: [
            {
                kanji: '飲',
                kana: 'イン',
            },
            {
                kanji: '酒',
                kana: 'シュ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'inshu',
        translation: 'consommation d\'alcool',
        grammar: [1],
    },
    {
        id: 89,
        elements: [
            {
                kanji: '空',
                kana: 'クウ',
            },
            {
                kanji: '気',
                kana: 'キ',
            },
        ],
        level: 'N4',
        frequency: 2137,
        romaji: 'kuuki',
        translation: 'air, atmosphère',
        grammar: [1],
    },
    {
        id: 90,
        elements: [
            {
                kanji: '中',
                kana: 'チュウ',
            },
            {
                kanji: '国',
                kana: 'ゴク',
            },
        ],
        level: null,
        frequency: 244,
        romaji: 'chuugoku',
        translation: 'Chine',
        grammar: [2],
    },
    {
        id: 91,
        elements: [
            {
                kanji: '今',
                kana: 'コ',
            },
            {
                kanji: '年',
                kana: 'とし',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'kotoshi',
        translation: 'cette année',
        grammar: [1],
    },
    {
        id: 92,
        elements: [
            {
                kanji: '音',
                kana: 'オン',
            },
            {
                kanji: '楽',
                kana: 'ガク',
            },
        ],
        level: 'N5',
        frequency: 157,
        romaji: 'ongaku',
        translation: 'musique',
        grammar: [1],
    },
    {
        id: 93,
        elements: [
            {
                kanji: '雪',
                kana: 'ゆき',
            },
            {
                kanji: '国',
                kana: 'ぐに',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'yukiguni',
        translation: 'pays enneigé',
        grammar: [1],
    },
    {
        id: 94,
        elements: [
            {
                kanji: '外',
                kana: 'ガイ',
            },
            {
                kanji: '国',
                kana: 'コク',
            },
        ],
        level: 'N5',
        frequency: 950,
        romaji: 'gaikoku',
        translation: 'pays étranger',
        grammar: [1],
    },
    {
        id: 95,
        elements: [
            {
                kanji: '外',
                kana: 'ガイ',
            },
            {
                kanji: '国',
                kana: 'コク',
            },
            {
                kanji: '人',
                kana: 'ジン',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'gaikokujin',
        translation: 'personne étrangère',
        grammar: [1],
    },
    {
        id: 96,
        elements: [
            {
                kanji: '愛',
                kana: 'アイ',
            },
            {
                kanji: '犬',
                kana: 'ケン',
            },
            {
                kanji: '家',
                kana: 'カ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'aikenka',
        translation: 'personne qui aime les chiens',
        grammar: [1],
    },
    {
        id: 97,
        elements: [
            {
                kanji: '愛',
                kana: 'アイ',
            },
            {
                kanji: '',
                kana: 'する',
            },
        ],
        level: 'N1',
        frequency: 9996,
        romaji: 'aisuru',
        translation: 'aimer, être amoureux',
        grammar: [3],
    },
    {
        id: 98,
        elements: [
            {
                kanji: '海',
                kana: 'うみ',
            },
            {
                kanji: '風',
                kana: 'かぜ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'umikaze',
        translation: 'vent marin',
        grammar: [1],
    },
    {
        id: 99,
        elements: [
            {
                kanji: '今',
                kana: 'コン',
            },
            {
                kanji: '月',
                kana: 'ゲツ',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'kongetsu',
        translation: 'ce mois',
        grammar: [1],
    },
    {
        id: 100,
        elements: [
            {
                kanji: '出',
                kana: 'で',
            },
            {
                kanji: '口',
                kana: 'ぐち',
            },
        ],
        level: 'N5',
        frequency: 4899,
        romaji: 'deguchi',
        translation: 'sortie',
        grammar: [1],
    },
    {
        id: 101,
        elements: [
            {
                kanji: '入',
                kana: 'いり',
            },
            {
                kanji: '口',
                kana: 'ぐち',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'iriguchi',
        translation: 'entrée',
        grammar: [1],
    },
    {
        id: 102,
        elements: [
            {
                kanji: '白',
                kana: 'ハク',
            },
            {
                kanji: '鳥',
                kana: 'チョウ',
            },
        ],
        level: null,
        frequency: 7011,
        romaji: 'hakuchou',
        translation: 'cygne',
        grammar: [1],
    },
    {
        id: 103,
        elements: [
            {
                kanji: '飲',
                kana: 'イン',
            },
            {
                kanji: '食',
                kana: 'ショク',
            },
            {
                kanji: '店',
                kana: 'テン',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'inshokuten',
        translation: 'restaurant',
        grammar: [1],
    },
    {
        id: 104,
        elements: [
            {
                kanji: '明',
                kana: 'あか',
            },
            {
                kanji: '',
                kana: 'る',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 3592,
        romaji: 'akarui',
        translation: 'clair',
        grammar: [4],
    },
    {
        id: 105,
        elements: [
            {
                kanji: '説',
                kana: 'セツ',
            },
            {
                kanji: '明',
                kana: 'メイ',
            },
        ],
        level: 'N4',
        frequency: 1159,
        romaji: 'setsumei',
        translation: 'explication, description',
        grammar: [1],
    },
    {
        id: 106,
        elements: [
            {
                kanji: '暗',
                kana: 'くら',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 5987,
        romaji: 'kurai',
        translation: 'sombre',
        grammar: [4],
    },
    {
        id: 107,
        elements: [
            {
                kanji: '開',
                kana: 'あ',
            },
            {
                kanji: '',
                kana: 'く',
            },
        ],
        level: 'N5',
        frequency: 744,
        romaji: 'aku',
        translation: 's\'ouvrir',
        grammar: [3],
    },
    {
        id: 108,
        elements: [
            {
                kanji: '開',
                kana: 'あ',
            },
            {
                kanji: '',
                kana: 'け',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 4565,
        romaji: 'akeru',
        translation: 'ouvrir',
        grammar: [3],
    },
    {
        id: 109,
        elements: [
            {
                kanji: '朝',
                kana: 'チョウ',
            },
            {
                kanji: '食',
                kana: 'ショク',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'choushoku',
        translation: 'petit-déjeuner',
        grammar: [1],
    },
    {
        id: 110,
        elements: [
            {
                kanji: '朝',
                kana: 'あさ',
            },
            {
                kanji: '',
                kana: 'ご',
            },
            {
                kanji: '飯',
                kana: 'ハン',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'asagohan',
        translation: 'petit-déjeuner',
        grammar: [1],
    },
    {
        id: 111,
        elements: [
            {
                kanji: '昼',
                kana: 'チュウ',
            },
            {
                kanji: '食',
                kana: 'ショク',
            },
        ],
        level: 'N3',
        frequency: 10000,
        romaji: 'chuushoku',
        translation: 'déjeuner',
        grammar: [1],
    },
    {
        id: 112,
        elements: [
            {
                kanji: '昼',
                kana: 'ひろ',
            },
            {
                kanji: '',
                kana: 'ご',
            },
            {
                kanji: '飯',
                kana: 'ハン',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'hirugohan',
        translation: 'déjeuner',
        grammar: [1],
    },
    {
        id: 113,
        elements: [
            {
                kanji: '毎',
                kana: 'マイ',
            },
            {
                kanji: '日',
                kana: 'ニチ',
            },
        ],
        level: 'N5',
        frequency: 3033,
        romaji: 'mainichi',
        translation: 'tous les jours',
        grammar: [5],
    },
    {
        id: 114,
        elements: [
            {
                kanji: '毎',
                kana: 'マイ',
            },
            {
                kanji: '朝',
                kana: 'あさ',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'maiasa',
        translation: 'tous les matins',
        grammar: [5],
    },
    {
        id: 115,
        elements: [
            {
                kanji: '毎',
                kana: 'マイ',
            },
            {
                kanji: '週',
                kana: 'シュウ',
            },
        ],
        level: 'N5',
        frequency: 1843,
        romaji: 'maishuu',
        translation: 'toutes les semaines',
        grammar: [5],
    },
    {
        id: 116,
        elements: [
            {
                kanji: '毎',
                kana: 'マイ',
            },
            {
                kanji: '月',
                kana: 'つき',
            },
        ],
        level: 'N5',
        frequency: 5197,
        romaji: 'maitsuki',
        translation: 'tous les mois',
        grammar: [1],
    },
    {
        id: 117,
        elements: [
            {
                kanji: '日',
                kana: 'ジツ',
            },
            {
                kanji: '外',
                kana: 'ガイ',
            },
        ],
        obscure: true,
        level: null,
        frequency: 10000,
        romaji: 'jitsugai',
        translation: 'il y a peu, une fois',
        grammar: [5],
    },
    {
        id: 118,
        elements: [
            {
                kanji: '男',
                kana: 'おとこ',
            },
            {
                kanji: '',
                kana: 'の',
            },
            {
                kanji: '子',
                kana: 'こ',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'otokonoko',
        translation: 'garçon',
        grammar: [1],
    },
    {
        id: 119,
        elements: [
            {
                kanji: '女',
                kana: 'おんあ',
            },
            {
                kanji: '',
                kana: 'の',
            },
            {
                kanji: '子',
                kana: 'こ',
            },
        ],
        level: 'N5',
        frequency: 6771,
        romaji: 'onnanoko',
        translation: 'fille',
        grammar: [1],
    },
    {
        id: 120,
        elements: [
            {
                kanji: '暗',
                kana: 'アン',
            },
            {
                kanji: '黒',
                kana: 'コク',
            },
        ],
        level: null,
        frequency: 7411,
        romaji: 'ankoku',
        translation: 'ténèbres',
        grammar: [1],
    },
    {
        id: 121,
        elements: [
            {
                kanji: '半',
                kana: 'なか',
            },
            {
                kanji: '',
                kana: 'ば',
            },
        ],
        level: 'N3',
        frequency: 2326,
        romaji: 'nakaba',
        translation: 'milieu, moitié, partiellement',
        grammar: [1, 5],
    },
    {
        id: 122,
        elements: [
            {
                kanji: '漢',
                kana: 'カン',
            },
            {
                kanji: '字',
                kana: 'ジ',
            },
        ],
        level: 'N5',
        frequency: 2770,
        romaji: 'kanji',
        translation: 'caractère chinois',
        grammar: [1],
    },
    {
        id: 123,
        elements: [
            {
                kanji: '訓',
                kana: 'クン',
            },
            {
                kanji: '読',
                kana: 'よ',
            },
            {
                kanji: '',
                kana: 'み',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'kunyomi',
        translation: 'lecture purement japonaise',
        grammar: [1],
    },
    {
        id: 124,
        elements: [
            {
                kanji: '音',
                kana: 'オン',
            },
            {
                kanji: '読',
                kana: 'よ',
            },
            {
                kanji: '',
                kana: 'み',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'onyomi',
        translation: 'lecture sino-japonaise',
        grammar: [1],
    },
    {
        id: 125,
        elements: [
            {
                kanji: '言',
                kana: 'ゲン',
            },
            {
                kanji: '語',
                kana: 'ゴ',
            },
        ],
        level: 'N1',
        frequency: 730,
        romaji: 'gengo',
        translation: 'langue',
        grammar: [1],
    },
    {
        id: 126,
        elements: [
            {
                kanji: '彼',
                kana: 'かの',
            },
            {
                kanji: '女',
                kana: 'ジョ',
            },
        ],
        level: 'N4',
        frequency: 597,
        romaji: 'kanojo',
        translation: 'elle, petite amie',
        grammar: [8],
    },
    {
        id: 127,
        elements: [
            {
                kanji: '彼',
                kana: 'かれ',
            },
        ],
        level: 'N4',
        frequency: 81,
        romaji: 'kare',
        translation: 'il, petit ami',
        grammar: [8],
    },
    {
        id: 128,
        elements: [
            {
                kanji: '一',
                kana: 'ひと',
            },
            {
                kanji: '人',
                kana: 'り',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'hitori',
        translation: 'une personne',
        grammar: [1],
    },
    {
        id: 129,
        elements: [
            {
                kanji: '二',
                kana: 'ふた',
            },
            {
                kanji: '人',
                kana: 'り',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'futari',
        translation: 'deux personnes, couple',
        grammar: [1],
    },
    {
        id: 130,
        elements: [
            {
                kanji: '名',
                kana: 'な',
            },
            {
                kanji: '前',
                kana: 'まえ',
            },
        ],
        level: 'N5',
        frequency: 454,
        romaji: 'namae',
        translation: 'prénom',
        grammar: [1],
    },
    {
        id: 131,
        elements: [
            {
                kanji: '名',
                kana: 'メイ',
            },
            {
                kanji: '人',
                kana: 'ジン',
            },
        ],
        level: 'N3',
        frequency: 5849,
        romaji: 'meijin',
        translation: 'maître, expert',
        grammar: [1],
    },
    {
        id: 132,
        elements: [
            {
                kanji: '',
                kana: 'ご',
            },
            {
                kanji: '飯',
                kana: 'ハン',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'gohan',
        translation: 'repas, riz cuit (formel)',
        grammar: [1],
    },
    {
        id: 133,
        elements: [
            {
                kanji: '',
                kana: 'お',
            },
            {
                kanji: '茶',
                kana: 'チャ',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'ocha',
        translation: 'thé (formel)',
        grammar: [1],
    },
    {
        id: 134,
        elements: [
            {
                kanji: '果',
                kana: 'クダ',
            },
            {
                kanji: '物',
                kana: 'もの',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'kudamono',
        translation: 'fruit',
        grammar: [1],
    },
    {
        id: 135,
        elements: [
            {
                kanji: '果',
                kana: 'は',
            },
            {
                kanji: '',
                kana: 'た',
            },
            {
                kanji: '',
                kana: 'す',
            },
        ],
        level: 'N1',
        frequency: 351,
        romaji: 'hatasu',
        translation: 'accomplir',
        grammar: [3],
    },
    {
        id: 136,
        elements: [
            {
                kanji: '果',
                kana: 'は',
            },
            {
                kanji: '',
                kana: 'て',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N1',
        frequency: 7584,
        romaji: 'hateru',
        translation: 'se terminer, être fini, épuisé',
        grammar: [3],
    },
    {
        id: 137,
        elements: [
            {
                kanji: '菓',
                kana: 'カ',
            },
            {
                kanji: '子',
                kana: 'シ',
            },
        ],
        level: 'N5',
        frequency: 5120,
        romaji: 'kashi',
        translation: 'confiserie',
        grammar: [1],
    },
    {
        id: 138,
        elements: [
            {
                kanji: '汁',
                kana: 'しる',
            },
            {
                kanji: '物',
                kana: 'もの',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'shirumono',
        translation: 'soupe',
        grammar: [1],
    },
    {
        id: 139,
        elements: [
            {
                kanji: '',
                kana: 'ラーメン',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 5794,
        romaji: 'raamen',
        translation: 'ramen',
        grammar: [1],
    },
    {
        id: 140,
        elements: [
            {
                kanji: '',
                kana: 'パスタ',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 10000,
        romaji: 'pasuta',
        translation: 'pâtes',
        grammar: [1],
    },
    {
        id: 141,
        elements: [
            {
                kanji: '',
                kana: 'コーヒー',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 10000,
        romaji: 'kouhii',
        translation: 'café',
        grammar: [1],
    },
    {
        id: 142,
        elements: [
            {
                kanji: '',
                kana: 'チーズ',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 8563,
        romaji: 'chiizu',
        translation: 'fromage',
        grammar: [1],
    },
    {
        id: 143,
        elements: [
            {
                kanji: '',
                kana: 'デザート',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 10000,
        romaji: 'dezaato',
        translation: 'dessert',
        grammar: [1],
    },
    {
        id: 144,
        elements: [
            {
                kanji: '西',
                kana: 'セイ',
            },
            {
                kanji: '洋',
                kana: 'ヨウ',
            },
        ],
        level: 'N4',
        frequency: 2919,
        romaji: 'seiyou',
        translation: 'Occident',
        grammar: [1],
    },
    {
        id: 145,
        elements: [
            {
                kanji: '今',
                kana: 'いま',
            },
        ],
        level: 'N5',
        frequency: 1074,
        romaji: 'ima',
        translation: 'maintenant',
        grammar: [1],
    },
    {
        id: 146,
        elements: [
            {
                kanji: '前',
                kana: 'まえ',
            },
        ],
        level: 'N5',
        frequency: 503,
        romaji: 'mae',
        translation: 'devant, avant',
        grammar: [1],
    },
    {
        id: 147,
        elements: [
            {
                kanji: '後',
                kana: 'あと',
            },
        ],
        level: 'N5',
        frequency: 40,
        romaji: 'ato',
        translation: 'derrière, arrière, après',
        grammar: [1],
    },
    {
        id: 148,
        elements: [
            {
                kanji: '間',
                kana: 'あいだ',
            },
        ],
        level: 'N5',
        frequency: 113,
        romaji: 'aida',
        translation: 'intervalle, pendant',
        grammar: [1],
    },
    {
        id: 149,
        elements: [
            {
                kanji: '大',
                kana: 'おお',
            },
            {
                kanji: '阪',
                kana: 'さか',
            },
        ],
        level: null,
        frequency: 195,
        romaji: 'oosaka',
        translation: 'Osaka',
        grammar: [2],
    },
    {
        id: 150,
        elements: [
            {
                kanji: '広',
                kana: 'ひろ',
            },
            {
                kanji: '島',
                kana: 'しま',
            },
        ],
        level: null,
        frequency: 624,
        romaji: 'hiroshima',
        translation: 'Hiroshima',
        grammar: [2],
    },
    {
        id: 151,
        elements: [
            {
                kanji: '川',
                kana: 'かわ',
            },
            {
                kanji: '島',
                kana: 'しま',
            },
        ],
        level: null,
        frequency: 8214,
        romaji: 'kawashima',
        translation: 'Kawashima',
        grammar: [2],
    },
    {
        id: 152,
        elements: [
            {
                kanji: '宮',
                kana: 'みや',
            },
            {
                kanji: '崎',
                kana: 'ざき',
            },
        ],
        level: null,
        frequency: 2109,
        romaji: 'miyazaki',
        translation: 'Miyazaki (nom)',
        grammar: [2],
    },
    {
        id: 153,
        elements: [
            {
                kanji: '松',
                kana: 'まつ',
            },
            {
                kanji: '田',
                kana: 'だ',
            },
        ],
        level: null,
        frequency: 5257,
        romaji: 'matsuda',
        translation: 'Matsuda (nom)',
        grammar: [2],
    },
    {
        id: 154,
        elements: [
            {
                kanji: '遊',
                kana: 'あそ',
            },
            {
                kanji: '',
                kana: 'ぶ',
            },
        ],
        level: 'N5',
        frequency: 3143,
        romaji: 'asobu',
        translation: 'jouer',
        grammar: [3],
    },
    {
        id: 155,
        elements: [
            {
                kanji: '寝',
                kana: 'ね',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 3626,
        romaji: 'neru',
        translation: 'dormir, aller au lit',
        grammar: [3],
    },
    {
        id: 156,
        elements: [
            {
                kanji: '乗',
                kana: 'の',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 791,
        romaji: 'noru',
        translation: 'monter à bord',
        grammar: [3],
    },
    {
        id: 157,
        elements: [
            {
                kanji: '待',
                kana: 'ま',
            },
            {
                kanji: '',
                kana: 'つ',
            },
        ],
        level: 'N5',
        frequency: 1462,
        romaji: 'matsu',
        translation: 'attendre',
        grammar: [3],
    },
    {
        id: 158,
        elements: [
            {
                kanji: '国',
                kana: 'コク',
            },
            {
                kanji: '立',
                kana: 'リツ',
            },
        ],
        level: 'N2',
        frequency: 875,
        romaji: 'kokuritsu',
        translation: 'national, dirigé par l\'Etat',
        grammar: [1],
    },
    {
        id: 159,
        elements: [
            {
                kanji: '立',
                kana: 'た',
            },
            {
                kanji: '',
                kana: 'つ',
            },
        ],
        level: 'N5',
        frequency: 863,
        romaji: 'tatsu',
        translation: 'être debout, se lever',
        grammar: [3],
    },
    {
        id: 160,
        elements: [
            {
                kanji: '急',
                kana: 'いそ',
            },
            {
                kanji: '',
                kana: 'ぐ',
            },
        ],
        level: 'N4',
        frequency: 9309,
        romaji: 'isogu',
        translation: 'se dépêcher',
        grammar: [3],
    },
    {
        id: 161,
        elements: [
            {
                kanji: '死',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'ぬ',
            },
        ],
        level: 'N5',
        frequency: 1323,
        romaji: 'shinu',
        translation: 'mourir',
        grammar: [3],
    },
    {
        id: 162,
        elements: [
            {
                kanji: '売',
                kana: 'バイ',
            },
            {
                kanji: '買',
                kana: 'バイ',
            },
        ],
        level: 'N2',
        frequency: 6658,
        romaji: 'baibai',
        translation: 'commerce',
        grammar: [1],
    },
    {
        id: 163,
        elements: [
            {
                kanji: '売',
                kana: 'う',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 1200,
        romaji: 'uru',
        translation: 'vendre',
        grammar: [3],
    },
    {
        id: 164,
        elements: [
            {
                kanji: '探',
                kana: 'さが',
            },
            {
                kanji: '',
                kana: 'す',
            },
        ],
        level: 'N4',
        frequency: 3176,
        romaji: 'sagasu',
        translation: 'chercher',
        grammar: [3],
    },
    {
        id: 165,
        elements: [
            {
                kanji: '勝',
                kana: 'か',
            },
            {
                kanji: '',
                kana: 'つ',
            },
        ],
        level: 'N4',
        frequency: 581,
        romaji: 'katsu',
        translation: 'gagner',
        grammar: [3],
    },
    {
        id: 166,
        elements: [
            {
                kanji: '勝',
                kana: 'まさ',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N1',
        frequency: 10000,
        romaji: 'masaru',
        translation: 'surpasser, exceller',
        grammar: [3],
    },
    {
        id: 167,
        elements: [
            {
                kanji: '泳',
                kana: 'およ',
            },
            {
                kanji: '',
                kana: 'ぐ',
            },
        ],
        level: 'N1',
        frequency: 9536,
        romaji: 'oyogu',
        translation: 'nager',
        grammar: [3],
    },
    {
        id: 168,
        elements: [
            {
                kanji: '天',
                kana: 'テン',
            },
            {
                kanji: '才',
                kana: 'サイ',
            },
        ],
        level: 'N1',
        frequency: 6361,
        romaji: 'tensai',
        translation: 'génie',
        grammar: [1],
    },
    {
        id: 169,
        elements: [
            {
                kanji: '願',
                kana: 'ねが',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N3',
        frequency: 3144,
        romaji: 'negau',
        translation: 'désirer, implorer',
        grammar: [3],
    },
    {
        id: 170,
        elements: [
            {
                kanji: '願',
                kana: 'ねが',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N3',
        frequency: 10000,
        romaji: 'negai',
        translation: 'désir, requête',
        grammar: [1],
    },
    {
        id: 171,
        elements: [
            {
                kanji: '宜',
                kana: 'よろ',
            },
            {
                kanji: '',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        rareKanji: true,
        level: 'N3',
        frequency: 10000,
        romaji: 'yoroshii',
        translation: 'bien, correct',
        grammar: [4],
    },
    {
        id: 172,
        elements: [
            {
                kanji: '宜',
                kana: 'よろ',
            },
            {
                kanji: '',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'く',
            },
        ],
        rareKanji: true,
        level: 'N3',
        frequency: 10000,
        romaji: 'yoroshiku',
        translation: 'correctement, "bien à vous", "traitez-moi favorablement"',
        grammar: [5, 10],
    },
    {
        id: 173,
        elements: [
            {
                kanji: '始',
                kana: 'はじ',
            },
            {
                kanji: '',
                kana: 'め',
            },
        ],
        level: 'N5',
        frequency: 1784,
        romaji: 'hajime',
        translation: 'début',
        grammar: [1],
    },
    {
        id: 174,
        elements: [
            {
                kanji: '初',
                kana: 'はじ',
            },
            {
                kanji: '',
                kana: 'め',
            },
            {
                kanji: '',
                kana: 'て',
            },
        ],
        level: 'N5',
        frequency: 386,
        romaji: 'hajimete',
        translation: 'la première fois',
        grammar: [5],
    },
    {
        id: 175,
        elements: [
            {
                kanji: '勉',
                kana: 'ベン',
            },
            {
                kanji: '強',
                kana: 'キョウ',
            },
        ],
        level: 'N5',
        frequency: 4718,
        romaji: 'benkyou',
        translation: 'études',
        grammar: [1],
    },
    {
        id: 176,
        elements: [
            {
                kanji: '勉',
                kana: 'ベン',
            },
            {
                kanji: '強',
                kana: 'キョウ',
            },
            {
                kanji: '',
                kana: 'する',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'benkyousuru',
        translation: 'étudier',
        grammar: [3],
    },
    {
        id: 177,
        elements: [
            {
                kanji: '強',
                kana: 'つよ',
            },
            {
                kanji: '',
                kana: 'ま',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N1',
        frequency: 7940,
        romaji: 'tsuyomaru',
        translation: 'se renforcer, devenir plus fort',
        grammar: [3],
    },
    {
        id: 178,
        elements: [
            {
                kanji: '強',
                kana: 'つよ',
            },
            {
                kanji: '',
                kana: 'め',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N1',
        frequency: 5844,
        romaji: 'tsuyomeru',
        translation: 'renforcer, mettre l\'accent',
        grammar: [3],
    },
    {
        id: 179,
        elements: [
            {
                kanji: '強',
                kana: 'つよ',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N1',
        frequency: 398,
        romaji: 'tsuyoi',
        translation: 'fort',
        grammar: [4],
    },
    {
        id: 180,
        elements: [
            {
                kanji: '神',
                kana: 'ジン',
            },
            {
                kanji: '社',
                kana: 'ジャ',
            },
        ],
        level: 'N4',
        frequency: 686,
        romaji: 'jinja',
        translation: 'sanctuaire shintoïste',
        grammar: [1],
    },
    {
        id: 181,
        elements: [
            {
                kanji: '',
                kana: 'ギ',
            },
            {
                kanji: '神',
                kana: 'かみ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'gikami',
        translation: 'mythologie grecque',
        grammar: [1],
    },
    {
        id: 182,
        elements: [
            {
                kanji: '忙',
                kana: 'いそが',
            },
            {
                kanji: '',
                kana: 'しい',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'isogashii',
        translation: 'occupé',
        grammar: [4],
    },
    {
        id: 183,
        elements: [
            {
                kanji: '映',
                kana: 'エイ',
            },
            {
                kanji: '画',
                kana: 'ガ',
            },
        ],
        level: 'N5',
        frequency: 89,
        romaji: 'eiga',
        translation: 'film',
        grammar: [1],
    },
    {
        id: 184,
        elements: [
            {
                kanji: '映',
                kana: 'エイ',
            },
            {
                kanji: '画',
                kana: 'ガ',
            },
            {
                kanji: '館',
                kana: 'カン',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'eigakan',
        translation: 'cinéma',
        grammar: [1],
    },
    {
        id: 185,
        elements: [
            {
                kanji: '山',
                kana: 'やま',
            },
            {
                kanji: '本',
                kana: 'もと',
            },
        ],
        level: null,
        frequency: 2059,
        romaji: 'yamamoto',
        translation: 'Yamamoto (nom)',
        grammar: [2],
    },
    {
        id: 186,
        elements: [
            {
                kanji: '山',
                kana: 'やま',
            },
            {
                kanji: '田',
                kana: 'だ',
            },
        ],
        level: null,
        frequency: 2071,
        romaji: 'yamada',
        translation: 'Yamada (nom)',
        grammar: [2],
    },
    {
        id: 187,
        elements: [
            {
                kanji: '田',
                kana: 'た',
            },
            {
                kanji: '中',
                kana: 'なか',
            },
        ],
        level: null,
        frequency: 1757,
        romaji: 'tanaka',
        translation: 'Tanaka (nom)',
        grammar: [2],
    },
    {
        id: 188,
        elements: [
            {
                kanji: '本',
                kana: 'ホン',
            },
            {
                kanji: '当',
                kana: 'トウ',
            },
        ],
        level: 'N5',
        frequency: 3977,
        romaji: 'hontou',
        translation: 'vérité, réalité',
        grammar: [1],
    },
    {
        id: 189,
        elements: [
            {
                kanji: '最',
                kana: 'サイ',
            },
            {
                kanji: '近',
                kana: 'キン',
            },
        ],
        level: 'N4',
        frequency: 2198,
        romaji: 'saikin',
        translation: 'récemment, de nos jours',
        grammar: [1],
    },
    {
        id: 190,
        elements: [
            {
                kanji: '大',
                kana: 'タイ',
            },
            {
                kanji: '変',
                kana: 'ヘン',
            },
        ],
        level: 'N5',
        frequency: 4109,
        romaji: 'taihen',
        translation: 'situation difficile',
        grammar: [4, 5],
    },
    {
        id: 191,
        elements: [
            {
                kanji: '大',
                kana: 'ダイ',
            },
            {
                kanji: '丈',
                kana: 'ジョウ',
            },
            {
                kanji: '夫',
                kana: 'ブ',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'daijoubu',
        translation: 'bien, OK, pas grave',
        grammar: [4],
    },
    {
        id: 192,
        elements: [
            {
                kanji: '',
                kana: 'な',
            },
            {
                kanji: '',
                kana: 'る',
            },
            {
                kanji: '程',
                kana: 'ほど',
            },
        ],
        rareKanji: true,
        level: 'N4',
        frequency: 10000,
        romaji: 'naruhodo',
        translation: 'je vois, effectivement',
        grammar: [5],
    },
    {
        id: 193,
        elements: [
            {
                kanji: '皆',
                kana: 'みな',
            },
            {
                kanji: '',
                kana: 'さ',
            },
            {
                kanji: '',
                kana: 'ん',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'minasan',
        translation: 'tout le monde',
        grammar: [1],
    },
    {
        id: 194,
        elements: [
            {
                kanji: '暑',
                kana: 'あつ',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'atsui',
        translation: 'chaud (climat)',
        grammar: [4],
    },
    {
        id: 195,
        elements: [
            {
                kanji: '熱',
                kana: 'あつ',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 9277,
        romaji: 'atsui',
        translation: 'chaud (au contact), ardent',
        grammar: [4],
    },
    {
        id: 196,
        elements: [
            {
                kanji: '寒',
                kana: 'さむ',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 8394,
        romaji: 'samui',
        translation: 'froid, inintéressant, pathétique',
        grammar: [4],
    },
    {
        id: 197,
        elements: [
            {
                kanji: '迚',
                kana: 'とて',
            },
            {
                kanji: '',
                kana: 'も',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 5236,
        romaji: 'totemo',
        translation: 'très, excessivement',
        grammar: [5],
    },
    {
        id: 198,
        elements: [
            {
                kanji: '若',
                kana: 'わか',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 1516,
        romaji: 'wakai',
        translation: 'jeune',
        grammar: [4],
    },
    {
        id: 199,
        elements: [
            {
                kanji: '若',
                kana: 'ジャク',
            },
            {
                kanji: '年',
                kana: 'ネン',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'jakunen',
        translation: 'jeunesse',
        grammar: [1],
    },
    {
        id: 200,
        elements: [
            {
                kanji: '幾',
                kana: 'いく',
            },
            {
                kanji: '',
                kana: 'つ',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 10000,
        romaji: 'ikutsu',
        translation: 'combien (quantité), quel âge',
        grammar: [5],
    },
    {
        id: 201,
        elements: [
            {
                kanji: '幾',
                kana: 'いく',
            },
            {
                kanji: '',
                kana: 'ら',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 10000,
        romaji: 'ikura',
        translation: 'combien (prix)',
        grammar: [5],
    },
    {
        id: 202,
        elements: [
            {
                kanji: '難',
                kana: 'むずか',
            },
            {
                kanji: '',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 2215,
        romaji: 'muzukashii',
        translation: 'difficile, compliqué',
        grammar: [4],
    },
    {
        id: 203,
        elements: [
            {
                kanji: '簡',
                kana: 'カン',
            },
            {
                kanji: '単',
                kana: 'タン',
            },
        ],
        level: 'N4',
        frequency: 3084,
        romaji: 'kantan',
        translation: 'simple, bref',
        grammar: [4],
    },
    {
        id: 204,
        elements: [
            {
                kanji: '多',
                kana: 'タ',
            },
            {
                kanji: '分',
                kana: 'ブン',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'tabun',
        translation: 'peut-être, probablement',
        grammar: [5],
    },
    {
        id: 205,
        elements: [
            {
                kanji: '誰',
                kana: 'だれ',
            },
        ],
        level: 'N5',
        frequency: 2010,
        romaji: 'dare',
        translation: 'qui',
        grammar: [8],
    },
    {
        id: 206,
        elements: [
            {
                kanji: '誰',
                kana: 'だれ',
            },
            {
                kanji: '',
                kana: 'か',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'dareka',
        translation: 'quelqu\'un',
        grammar: [8],
    },
    {
        id: 207,
        elements: [
            {
                kanji: '此',
                kana: 'こ',
            },
            {
                kanji: '',
                kana: 'の',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 24,
        romaji: 'kono',
        translation: 'ce (proche)',
        grammar: [7],
    },
    {
        id: 208,
        elements: [
            {
                kanji: '此',
                kana: 'こ',
            },
            {
                kanji: '',
                kana: 'れ',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 31,
        romaji: 'kore',
        translation: 'ceci, celui-ci',
        grammar: [8],
    },
    {
        id: 209,
        elements: [
            {
                kanji: '',
                kana: 'こ',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N4',
        frequency: 2561,
        romaji: 'kou',
        translation: 'comme ci',
        grammar: [5],
    },
    {
        id: 210,
        elements: [
            {
                kanji: '此',
                kana: 'こ',
            },
            {
                kanji: '処',
                kana: 'こ',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 465,
        romaji: 'koko',
        translation: 'ici',
        grammar: [8],
    },
    {
        id: 211,
        elements: [
            {
                kanji: '其',
                kana: 'そ',
            },
            {
                kanji: '',
                kana: 'の',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 26,
        romaji: 'sono',
        translation: 'ce (lointain)',
        grammar: [7],
    },
    {
        id: 212,
        elements: [
            {
                kanji: '其',
                kana: 'そ',
            },
            {
                kanji: '',
                kana: 'れ',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 63,
        romaji: 'sore',
        translation: 'cela, celui-là',
        grammar: [8],
    },
    {
        id: 213,
        elements: [
            {
                kanji: '',
                kana: 'そ',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N5',
        frequency: 2435,
        romaji: 'sou',
        translation: 'comme ça (lointain)',
        grammar: [5],
    },
    {
        id: 214,
        elements: [
            {
                kanji: '其',
                kana: 'そ',
            },
            {
                kanji: '処',
                kana: 'こ',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 470,
        romaji: 'soko',
        translation: 'là',
        grammar: [8],
    },
    {
        id: 215,
        elements: [
            {
                kanji: '彼',
                kana: 'あ',
            },
            {
                kanji: '',
                kana: 'の',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 5242,
        romaji: 'ano',
        translation: 'ce (très lointain)',
        grammar: [7],
    },
    {
        id: 216,
        elements: [
            {
                kanji: '彼',
                kana: 'あれ',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 10000,
        romaji: 'are',
        translation: 'cela, celui-là (très lointain)',
        grammar: [8],
    },
    {
        id: 217,
        elements: [
            {
                kanji: '',
                kana: 'あ',
            },
            {
                kanji: '',
                kana: 'あ',
            },
        ],
        level: 'N4',
        frequency: 10000,
        romaji: 'aa',
        translation: 'comme ça (très lointain)',
        grammar: [5],
    },
    {
        id: 218,
        elements: [
            {
                kanji: '彼',
                kana: 'あそ',
            },
            {
                kanji: '処',
                kana: 'こ',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 10000,
        romaji: 'asoko',
        translation: 'là-bas',
        grammar: [8],
    },
    {
        id: 219,
        elements: [
            {
                kanji: '何',
                kana: 'ど',
            },
            {
                kanji: '',
                kana: 'の',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 2631,
        romaji: 'dono',
        translation: 'quel',
        grammar: [7],
    },
    {
        id: 220,
        elements: [
            {
                kanji: '何',
                kana: 'ど',
            },
            {
                kanji: '',
                kana: 'れ',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 5237,
        romaji: 'dore',
        translation: 'lequel',
        grammar: [8],
    },
    {
        id: 221,
        elements: [
            {
                kanji: '如',
                kana: '',
            },
            {
                kanji: '何',
                kana: '',
            },
        ],
        jukujikun: 'どう',
        rareKanji: true,
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 1511,
        romaji: 'dou',
        translation: 'comment',
        grammar: [5],
    },
    {
        id: 222,
        elements: [
            {
                kanji: '何',
                kana: 'ど',
            },
            {
                kanji: '処',
                kana: 'こ',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 3078,
        romaji: 'doko',
        translation: 'où',
        grammar: [8],
    },
    {
        id: 223,
        elements: [
            {
                kanji: '面',
                kana: 'おも',
            },
            {
                kanji: '白',
                kana: 'しろ',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 6876,
        romaji: 'omoshiroi',
        translation: 'intéressant, amusant',
        grammar: [4],
    },
    {
        id: 224,
        elements: [
            {
                kanji: '単',
                kana: 'タン',
            },
            {
                kanji: '語',
                kana: 'ゴ',
            },
        ],
        level: 'N1',
        frequency: 4317,
        romaji: 'tango',
        translation: 'mot, vocabulaire',
        grammar: [1],
    },
    {
        id: 225,
        elements: [
            {
                kanji: '一',
                kana: 'イチ',
            },
            {
                kanji: '番',
                kana: 'バン',
            },
        ],
        level: 'N5',
        frequency: 2399,
        romaji: 'ichiban',
        translation: 'meilleur, premier, numéro 1',
        grammar: [1],
    },
    {
        id: 226,
        elements: [
            {
                kanji: '余',
                kana: 'あま',
            },
            {
                kanji: '',
                kana: 'り',
            },
        ],
        rareKanji: true,
        level: 'N1',
        frequency: 980,
        romaji: 'amari',
        translation: 'très, trop (suivi d\'une négation)',
        grammar: [5],
    },
    {
        id: 227,
        elements: [
            {
                kanji: '事',
                kana: 'こと',
            },
        ],
        rareKanji: true,
        level: 'N3',
        frequency: 16,
        romaji: 'koto',
        translation: 'matière, incident, évènement',
        grammar: [1],
    },
    {
        id: 228,
        elements: [
            {
                kanji: '全',
                kana: 'ゼン',
            },
            {
                kanji: '然',
                kana: 'ゼン',
            },
        ],
        level: 'N4',
        frequency: 10000,
        romaji: 'zenzen',
        translation: 'du tout (suivi d\'une négation)',
        grammar: [5],
    },
    {
        id: 229,
        elements: [
            {
                kanji: '趣',
                kana: 'シュ',
            },
            {
                kanji: '味',
                kana: 'ミ',
            },
        ],
        level: 'N4',
        frequency: 3020,
        romaji: 'shumi',
        translation: 'passe-temps, interêt',
        grammar: [1],
    },
    {
        id: 230,
        elements: [
            {
                kanji: '',
                kana: 'パソコン',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 2653,
        romaji: 'pasokon',
        translation: 'ordinateur',
        grammar: [1],
    },
    {
        id: 231,
        elements: [
            {
                kanji: '',
                kana: 'ゲーム',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 148,
        romaji: 'geimu',
        translation: 'jeu vidéo',
        grammar: [1],
    },
    {
        id: 232,
        elements: [
            {
                kanji: '',
                kana: 'でも',
            },
        ],
        level: 'N1',
        frequency: 59,
        romaji: 'demo',
        translation: 'mais',
        grammar: [6],
    },
    {
        id: 233,
        elements: [
            {
                kanji: '',
                kana: 'もう',
            },
        ],
        level: 'N5',
        frequency: 1269,
        romaji: 'mou',
        translation: 'bientôt, encore, déjà',
        grammar: [5],
    },
    {
        id: 234,
        elements: [
            {
                kanji: '',
                kana: 'じゃあ',
            },
        ],
        level: 'N5',
        frequency: 6625,
        romaji: 'jaa',
        translation: 'alors',
        grammar: [6],
    },
    {
        id: 235,
        elements: [
            {
                kanji: '',
                kana: 'まあまあ',
            },
        ],
        level: 'N2',
        frequency: 10000,
        romaji: 'maamaa',
        translation: 'passable',
        grammar: [4],
    },
    {
        id: 236,
        elements: [
            {
                kanji: '大',
                kana: 'タイ',
            },
            {
                kanji: '切',
                kana: 'セツ',
            },
        ],
        level: 'N5',
        frequency: 7191,
        romaji: 'taisetsu',
        translation: 'important',
        grammar: [4],
    },
    {
        id: 237,
        elements: [
            {
                kanji: '部',
                kana: 'へ',
            },
            {
                kanji: '屋',
                kana: 'や',
            },
        ],
        level: 'N5',
        frequency: 1622,
        romaji: 'heya',
        translation: 'chambre',
        grammar: [1],
    },
    {
        id: 238,
        elements: [
            {
                kanji: '静',
                kana: 'しず',
            },
            {
                kanji: '',
                kana: 'か',
            },
        ],
        level: 'N5',
        frequency: 7263,
        romaji: 'shizuka',
        translation: 'calme',
        grammar: [4],
    },
    {
        id: 239,
        elements: [
            {
                kanji: '優',
                kana: 'やさ',
            },
            {
                kanji: '',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N4',
        frequency: 6264,
        romaji: 'yasashii',
        translation: 'gentil, doux',
        grammar: [4],
    },
    {
        id: 240,
        elements: [
            {
                kanji: '必',
                kana: 'ヒツ',
            },
            {
                kanji: '要',
                kana: 'ヨウ',
            },
        ],
        level: 'N4',
        frequency: 213,
        romaji: 'hitsuyou',
        translation: 'nécessaire',
        grammar: [4],
    },
    {
        id: 241,
        elements: [
            {
                kanji: '勿',
                kana: 'モチ',
            },
            {
                kanji: '論',
                kana: 'ロン',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 4259,
        romaji: 'mochiron',
        translation: 'bien sûr, évidemment',
        grammar: [5],
    },
    {
        id: 242,
        elements: [
            {
                kanji: '蜂',
                kana: 'はち',
            },
        ],
        level: null,
        frequency: 4337,
        romaji: 'hachi',
        translation: 'abeille, guêpe',
        grammar: [1],
    },
    {
        id: 243,
        elements: [
            {
                kanji: '買',
                kana: 'か',
            },
            {
                kanji: '',
                kana: 'い',
            },
            {
                kanji: '物',
                kana: 'もの',
            },
        ],
        level: 'N5',
        frequency: 9613,
        romaji: 'kaimono',
        translation: 'achats, courses',
        grammar: [1],
    },
    {
        id: 244,
        elements: [
            {
                kanji: '会',
                kana: 'カイ',
            },
            {
                kanji: '社',
                kana: 'シャ',
            },
            {
                kanji: '員',
                kana: 'イン',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'kaishain',
        translation: 'employé de bureau, col blanc',
        grammar: [1],
    },
    {
        id: 245,
        elements: [
            {
                kanji: '仕',
                kana: 'シ',
            },
            {
                kanji: '事',
                kana: 'ごと',
            },
        ],
        level: 'N5',
        frequency: 1036,
        romaji: 'shigoto',
        translation: 'travail, job',
        grammar: [1],
    },
    {
        id: 246,
        elements: [
            {
                kanji: '閉',
                kana: 'と',
            },
            {
                kanji: '',
                kana: 'じ',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N3',
        frequency: 4238,
        romaji: 'tojiru',
        translation: 'fermer (doucement)',
        grammar: [3],
    },
    {
        id: 247,
        elements: [
            {
                kanji: '閉',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'め',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'shimeru',
        translation: 'fermer',
        grammar: [3],
    },
    {
        id: 248,
        elements: [
            {
                kanji: '閉',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'ま',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'shimaru',
        translation: 'être fermé',
        grammar: [3],
    },
    {
        id: 249,
        elements: [
            {
                kanji: '閉',
                kana: 'ヘイ',
            },
            {
                kanji: '会',
                kana: 'カイ',
            },
        ],
        level: 'N2',
        frequency: 10000,
        romaji: 'heikai',
        translation: 'clôture (évènement)',
        grammar: [1],
    },
    {
        id: 250,
        elements: [
            {
                kanji: '',
                kana: 'またね',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'matane',
        translation: 'aurevoir, salut',
        grammar: [10],
    },
    {
        id: 251,
        elements: [
            {
                kanji: '',
                kana: 'です',
            },
        ],
        level: null,
        frequency: 10,
        romaji: 'desu',
        variants: [
            'da',
            'dearu',
            'deshita',
            'datta',
            'dehaarimasen',
            'jaarimasen',
            'dehanai',
            'janai',
            'dehaarimasendeshita',
            'jaarimasendeshita',
            'dehanakatta',
            'janakatta'
        ],
        translation: 'être, verbe d\'état',
        grammar: [11],
    },
    {
        id: 252,
        elements: [
            {
                kanji: '有',
                kana: 'あ',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 17,
        romaji: 'aru',
        translation: 'verbe de présence (objets inanimés)',
        grammar: [3],
    },
    {
        id: 253,
        elements: [
            {
                kanji: '居',
                kana: 'い',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 1340,
        romaji: 'iru',
        translation: 'verbe de présence (objets animés)',
        grammar: [3],
    },
    {
        id: 254,
        elements: [
            {
                kanji: '成',
                kana: 'な',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 15,
        romaji: 'naru',
        translation: 'devenir, grandir, atteindre',
        grammar: [3],
    },
    {
        id: 255,
        elements: [
            {
                kanji: '良',
                kana: 'よ',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N5',
        frequency: 182,
        romaji: 'yoi',
        translation: 'bien, excellent',
        grammar: [4],
    },
    {
        id: 256,
        elements: [
            {
                kanji: '良',
                kana: 'い',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 182,
        romaji: 'ii',
        translation: 'bien, excellent',
        grammar: [4],
    },
    {
        id: 257,
        elements: [
            {
                kanji: '後',
                kana: 'うし',
            },
            {
                kanji: '',
                kana: 'ろ',
            },
        ],
        level: 'N5',
        frequency: 4509,
        romaji: 'ushiro',
        translation: 'arrière, derrière',
        grammar: [1],
    },
    {
        id: 258,
        elements: [
            {
                kanji: '後',
                kana: 'のち',
            },
        ],
        rareKanji: true,
        level: 'N3',
        frequency: 40,
        romaji: 'nochi',
        translation: 'après, ensuite, avenir',
        grammar: [1, 5],
    },
    {
        id: 259,
        elements: [
            {
                kanji: '授',
                kana: 'ジュ',
            },
            {
                kanji: '業',
                kana: 'ギョウ',
            },
        ],
        level: 'N5',
        frequency: 3378,
        romaji: 'jugyou',
        translation: 'cours, classe, leçon',
        grammar: [1],
    },
    {
        id: 260,
        elements: [
            {
                kanji: '食',
                kana: 'ショク',
            },
            {
                kanji: '事',
                kana: 'ジ',
            },
        ],
        level: 'N3',
        frequency: 4713,
        romaji: 'shokuji',
        translation: 'repas',
        grammar: [1],
    },
    {
        id: 261,
        elements: [
            {
                kanji: '子',
                kana: 'こ',
            },
            {
                kanji: '供',
                kana: 'ども',
            },
        ],
        level: 'N5',
        frequency: 555,
        romaji: 'kodomo',
        translation: 'enfant',
        grammar: [1],
    },
    {
        id: 262,
        elements: [
            {
                kanji: '友',
                kana: 'とも',
            },
            {
                kanji: '達',
                kana: 'だち',
            },
        ],
        level: 'N5',
        frequency: 6424,
        romaji: 'tomodachi',
        translation: 'ami, compagnon',
        grammar: [1],
    },
    {
        id: 263,
        elements: [
            {
                kanji: '今',
                kana: '',
            },
            {
                kanji: '日',
                kana: '',
            },
        ],
        jukujikun: 'きょう',
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 1331,
        romaji: 'kyou',
        translation: 'aujourd\'hui',
        grammar: [1],
    },
    {
        id: 264,
        elements: [
            {
                kanji: '明',
                kana: '',
            },
            {
                kanji: '日',
                kana: '',
            },
        ],
        jukujikun: 'あした',
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 5173,
        romaji: 'ashita',
        translation: 'demain',
        grammar: [1],
    },
    {
        id: 265,
        elements: [
            {
                kanji: '昨',
                kana: '',
            },
            {
                kanji: '日',
                kana: '',
            },
        ],
        jukujikun: 'きのう',
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'kinou',
        translation: 'hier',
        grammar: [1],
    },
    {
        id: 266,
        elements: [
            {
                kanji: '今',
                kana: '',
            },
            {
                kanji: '朝',
                kana: '',
            },
        ],
        jukujikun: 'けさ',
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'kesa',
        translation: 'ce matin',
        grammar: [1],
    },
    {
        id: 267,
        elements: [
            {
                kanji: '大',
                kana: '',
            },
            {
                kanji: '人',
                kana: '',
            },
        ],
        jukujikun: 'おとな',
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 3732,
        romaji: 'otona',
        translation: 'adulte',
        grammar: [1],
    },
    {
        id: 268,
        elements: [
            {
                kanji: '小',
                kana: 'ショウ',
            },
            {
                kanji: '学',
                kana: 'ガッ',
            },
            {
                kanji: '校',
                kana: 'コウ',
            },
        ],
        level: 'N4',
        frequency: 479,
        romaji: 'shougakkou',
        translation: 'école primaire',
        grammar: [1],
    },
    {
        id: 269,
        elements: [
            {
                kanji: '中',
                kana: 'チュウ',
            },
            {
                kanji: '学',
                kana: 'ガッ',
            },
            {
                kanji: '校',
                kana: 'コウ',
            },
        ],
        level: 'N4',
        frequency: 533,
        romaji: 'chuugakkou',
        translation: 'collège',
        grammar: [1],
    },
    {
        id: 270,
        elements: [
            
            {
                kanji: '高',
                kana: 'コウ',
            },
            {
                kanji: '校',
                kana: 'コウ',
            },
        ],
        level: 'N4',
        frequency: 388,
        romaji: 'koukou',
        translation: 'lycée',
        grammar: [1],
    },
    {
        id: 271,
        elements: [
            
            {
                kanji: '知',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'り',
            },
            {
                kanji: '合',
                kana: 'あ',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        level: 'N2',
        frequency: 10000,
        romaji: 'shiriai',
        translation: 'connaissance (personne)',
        grammar: [1],
    },
    {
        id: 272,
        elements: [
            
            {
                kanji: '知',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'り',
            },
            {
                kanji: '合',
                kana: 'あ',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: null,
        frequency: 4504,
        romaji: 'shiriau',
        translation: 'faire connaissance',
        grammar: [3],
    },
    {
        id: 273,
        elements: [
            
            {
                kanji: '図',
                kana: 'ト',
            },
            {
                kanji: '書',
                kana: 'ショ',
            },
            {
                kanji: '館',
                kana: 'カン',
            },
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'toshokan',
        translation: 'bibliothèque',
        grammar: [1],
    },
    {
        id: 274,
        elements: [
            {
                kanji: '美',
                kana: '',
            },
            {
                kanji: '味',
                kana: '',
            },
            {
                kanji: '',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'い',
            },
        ],
        jukujikun: 'おいしい',
        rareKanji: true,
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'oishii',
        translation: 'délicieux',
        grammar: [4],
    },
    {
        id: 275,
        elements: [
            {
                kanji: '為',
                kana: 'す',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 3,
        romaji: 'suru',
        translation: 'faire',
        grammar: [3],
    },
    {
        id: 276,
        elements: [
            {
                kanji: '',
                kana: 'の',
            },
        ],
        level: null,
        frequency: 1,
        romaji: 'no',
        translation: 'possession, nominalisation',
        grammar: [9],
    },
    {
        id: 277,
        elements: [
            {
                kanji: '',
                kana: 'に',
            },
        ],
        level: null,
        frequency: 2,
        romaji: 'ni',
        translation: 'endroit, moment, direction, but, raison',
        grammar: [9],
    },
    {
        id: 278,
        elements: [
            {
                kanji: '',
                kana: 'は',
            },
        ],
        level: null,
        frequency: 4,
        romaji: 'ha',
        translation: 'thème, emphase',
        grammar: [9],
    },
    {
        id: 279,
        elements: [
            {
                kanji: '',
                kana: 'を',
            },
        ],
        level: null,
        frequency: 5,
        romaji: 'wo',
        translation: 'objet direct',
        grammar: [9],
    },
    {
        id: 280,
        elements: [
            {
                kanji: '',
                kana: 'が',
            },
        ],
        level: null,
        frequency: 6,
        romaji: 'ga',
        translation: 'identification, sujet',
        grammar: [9],
    },
    {
        id: 281,
        elements: [
            {
                kanji: '',
                kana: 'と',
            },
        ],
        level: null,
        frequency: 7,
        romaji: 'to',
        translation: 'cumulation, accompagnement',
        grammar: [9, 6],
    },
    {
        id: 282,
        elements: [
            {
                kanji: '年',
                kana: 'とし',
            },
        ],
        level: 'N5',
        frequency: 8,
        romaji: 'toshi',
        translation: 'année',
        grammar: [1, 5],
    },
    {
        id: 283,
        elements: [
            {
                kanji: '',
                kana: 'で',
            },
        ],
        level: null,
        frequency: 9,
        romaji: 'de',
        translation: 'endroit, moment, moyen',
        grammar: [9],
    },
    {
        id: 284,
        elements: [
            {
                kanji: '月',
                kana: 'つき',
            },
        ],
        level: 'N3',
        frequency: 11,
        romaji: 'tsuki',
        translation: 'Lune, mois',
        grammar: [1],
    },
    {
        id: 285,
        elements: [
            {
                kanji: '',
                kana: 'も',
            },
        ],
        level: null,
        frequency: 12,
        romaji: 'mo',
        translation: 'aussi, inclusion de thème',
        grammar: [9],
    },
    {
        id: 286,
        elements: [
            {
                kanji: '',
                kana: 'から',
            },
        ],
        level: null,
        frequency: 13,
        romaji: 'kara',
        translation: 'point de départ (temps et lieu)',
        grammar: [9],
    },
    {
        id: 287,
        elements: [
            {
                kanji: '日',
                kana: 'ひ',
            },
        ],
        level: 'N4',
        frequency: 14,
        romaji: 'hi',
        translation: 'Soleil, jour',
        grammar: [1],
    },
    {
        id: 288,
        elements: [
            {
                kanji: '',
                kana: 'や',
            },
        ],
        level: null,
        frequency: 19,
        romaji: 'ya',
        translation: 'cumulation non exhaustive',
        grammar: [9],
    },
    {
        id: 289,
        elements: [
            {
                kanji: '等',
                kana: 'など',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 20,
        romaji: 'nado',
        translation: 'etc',
        grammar: [9],
    },
    {
        id: 290,
        elements: [
            {
                kanji: '為',
                kana: 'ため',
            },
        ],
        rareKanji: true,
        level: 'N4',
        frequency: 23,
        romaji: 'tame',
        translation: 'bien, avantage, bénéfice',
        grammar: [1, 5],
    },
    {
        id: 291,
        elements: [
            {
                kanji: '人',
                kana: 'ひと',
            },
        ],
        level: 'N5',
        frequency: 25,
        romaji: 'hito',
        translation: 'personne, quelqu\'un',
        grammar: [1],
    },
    {
        id: 292,
        elements: [
            {
                kanji: '迄',
                kana: 'まで',
            },
        ],
        rareKanji: true,
        level: null,
        frequency: 27,
        romaji: 'made',
        translation: 'point d\'arrivée (lieu et temps)',
        grammar: [9],
    },
    {
        id: 293,
        elements: [
            {
                kanji: '',
                kana: 'もの',
            },
        ],
        level: null,
        frequency: 28,
        romaji: 'mono',
        translation: 'raison',
        grammar: [9],
    },
    {
        id: 294,
        elements: [
            {
                kanji: '',
                kana: 'へ',
            },
        ],
        level: null,
        frequency: 29,
        romaji: 'he',
        translation: 'direction',
        grammar: [9],
    },
    {
        id: 295,
        elements: [
            {
                kanji: '又',
                kana: 'また',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 30,
        romaji: 'mata',
        translation: 'encore, de plus, sinon',
        grammar: [5, 6],
    },
    {
        id: 296,
        elements: [
            {
                kanji: '行',
                kana: 'おこな',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N4',
        frequency: 32,
        romaji: 'okonau',
        translation: 'réaliser, effectuer, se conduire',
        grammar: [3],
    },
    {
        id: 297,
        elements: [
            {
                kanji: '出',
                kana: 'で',
            },
            {
                kanji: '来',
                kana: 'き',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 34,
        romaji: 'dekiru',
        translation: 'pouvoir',
        grammar: [3],
    },
    {
        id: 298,
        elements: [
            {
                kanji: '駅',
                kana: 'エキ',
            },
        ],
        level: 'N5',
        frequency: 35,
        romaji: 'eki',
        translation: 'gare, station',
        grammar: [1],
    },
    {
        id: 299,
        elements: [
            {
                kanji: '国',
                kana: 'くに',
            },
        ],
        level: 'N5',
        frequency: 36,
        romaji: 'kuni',
        translation: 'pays, Etat',
        grammar: [1],
    },
    {
        id: 300,
        elements: [
            {
                kanji: '',
                kana: 'より',
            },
        ],
        level: null,
        frequency: 37,
        romaji: 'yori',
        translation: 'comparaison',
        grammar: [9],
    },
    {
        id: 301,
        elements: [
            {
                kanji: '時',
                kana: 'とき',
            },
        ],
        level: 'N3',
        frequency: 54,
        romaji: 'toki',
        translation: 'temps, moment',
        grammar: [1],
    },
    {
        id: 302,
        elements: [
            {
                kanji: '会',
                kana: 'カイ',
            },
        ],
        level: 'N3',
        frequency: 62,
        romaji: 'kai',
        translation: 'réunion, rassemblement',
        grammar: [1],
    },
    {
        id: 303,
        elements: [
            {
                kanji: '語',
                kana: 'ゴ',
            },
        ],
        level: 'N3',
        frequency: 80,
        romaji: 'go',
        translation: 'mot, suffixe de langue',
        grammar: [1],
    },
    {
        id: 304,
        elements: [
            {
                kanji: '車',
                kana: 'くるま',
            },
        ],
        level: 'N5',
        frequency: 86,
        romaji: 'kuruma',
        translation: 'voiture',
        grammar: [1],
    },
    {
        id: 305,
        elements: [
            {
                kanji: '川',
                kana: 'かわ',
            },
        ],
        level: 'N5',
        frequency: 88,
        romaji: 'kawa',
        translation: 'fleuve, rivière',
        grammar: [1],
    },
    {
        id: 306,
        elements: [
            {
                kanji: '',
                kana: 'テレビ',
            },
        ],
        collections: [
            2,
        ],
        level: 'N5',
        frequency: 92,
        romaji: 'terebi',
        translation: 'TV, télévision, téléviseur',
        grammar: [1],
    },
    {
        id: 307,
        elements: [
            {
                kanji: '町',
                kana: 'まち',
            },
        ],
        level: 'N5',
        frequency: 95,
        romaji: 'machi',
        translation: 'ville',
        grammar: [1],
    },
    {
        id: 308,
        elements: [
            {
                kanji: '一',
                kana: '',
            },
            {
                kanji: '寸',
                kana: '',
            },
        ],
        jukujikun: 'ちょっと',
        rareKanji: true,
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'chotto',
        translation: 'un peu',
        grammar: [5],
    },
    {
        id: 309,
        elements: [
            {
                kanji: '何',
                kana: '',
            },
            {
                kanji: '時',
                kana: '',
            },
            {
                kanji: '',
                kana: 'も',
            },
        ],
        jukujikun: 'いつも',
        rareKanji: true,
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 5997,
        romaji: 'itsumo',
        translation: 'toujours, tout le temps',
        grammar: [5],
    },
    {
        id: 310,
        elements: [
            {
                kanji: '如',
                kana: '',
            },
            {
                kanji: '何',
                kana: '',
            },
            {
                kanji: '',
                kana: 'し',
            },
            {
                kanji: '',
                kana: 'て',
            },
        ],
        jukujikun: 'どうして',
        rareKanji: true,
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 10000,
        romaji: 'doushite',
        translation: 'pourquoi, comment',
        grammar: [5],
    },
    {
        id: 311,
        elements: [
            {
                kanji: '何',
                kana: '',
            },
            {
                kanji: '時',
                kana: '',
            },
        ],
        jukujikun: 'いつ',
        rareKanji: true,
        collections: [
            3,
        ],
        level: 'N5',
        frequency: 7508,
        romaji: 'itsu',
        translation: 'quand',
        grammar: [8],
    },
    {
        id: 312,
        elements: [
            {
                kanji: '時',
                kana: 'ジ',
            },
            {
                kanji: '間',
                kana: 'カン',
            },
        ],
        level: 'N5',
        frequency: 132,
        romaji: 'jikan',
        translation: 'temps',
        grammar: [1],
    },
    {
        id: 313,
        elements: [
            {
                kanji: '',
                kana: 'ローマ',
            },
            {
                kanji: '字',
                kana: 'ジ',
            },
        ],
        collections: [
            2,
        ],
        level: 'N2',
        frequency: 9522,
        romaji: 'roumaji',
        translation: 'Romaji, écriture latine',
        grammar: [1],
    },
    {
        id: 314,
        elements: [
            {
                kanji: '着',
                kana: 'き',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 821,
        romaji: 'kiru',
        translation: 'porter, mettre',
        grammar: [3],
    },
    {
        id: 315,
        elements: [
            {
                kanji: '信',
                kana: 'シン',
            },
            {
                kanji: '',
                kana: 'じ',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N3',
        frequency: 6172,
        romaji: 'shinjiru',
        translation: 'croire, faire confiance',
        grammar: [3],
    },
    {
        id: 316,
        elements: [
            {
                kanji: '起',
                kana: 'お',
            },
            {
                kanji: '',
                kana: 'き',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 1346,
        romaji: 'okiru',
        translation: 'se lever, se réveiller',
        grammar: [3],
    },
    {
        id: 317,
        elements: [
            {
                kanji: '掛',
                kana: 'か',
            },
            {
                kanji: '',
                kana: 'け',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 161,
        romaji: 'kakeru',
        translation: 'accrocher, suspendre, mettre, couvrir, étaler',
        grammar: [3],
    },
    {
        id: 318,
        elements: [
            {
                kanji: '捨',
                kana: 'す',
            },
            {
                kanji: '',
                kana: 'て',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N4',
        frequency: 3305,
        romaji: 'suteru',
        translation: 'jeter, abandonner, écarter, démissionner',
        grammar: [3],
    },
    {
        id: 319,
        elements: [
            {
                kanji: '調',
                kana: 'しら',
            },
            {
                kanji: '',
                kana: 'べ',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N4',
        frequency: 3467,
        romaji: 'shiraberu',
        translation: 'examiner, investiguer, rechercher',
        grammar: [3],
    },
    {
        id: 320,
        elements: [
            {
                kanji: '治',
                kana: 'なお',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N4',
        frequency: 10000,
        romaji: 'naoru',
        translation: 'aller mieux, se remettre',
        grammar: [3],
    },
    {
        id: 321,
        elements: [
            {
                kanji: '喋',
                kana: 'しゃべ',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        rareKanji: true,
        level: 'N3',
        frequency: 8405,
        romaji: 'shaberu',
        translation: 'parler, converser, discuter',
        grammar: [3],
    },
    {
        id: 322,
        elements: [
            {
                kanji: '要',
                kana: 'い',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 10000,
        romaji: 'iru',
        translation: 'avoir besoin, vouloir',
        grammar: [3],
    },
    {
        id: 323,
        elements: [
            {
                kanji: '切',
                kana: 'き',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 1155,
        romaji: 'kiru',
        translation: 'couper',
        grammar: [3],
    },
    {
        id: 324,
        elements: [
            {
                kanji: '走',
                kana: 'はし',
            },
            {
                kanji: '',
                kana: 'る',
            },
        ],
        level: 'N5',
        frequency: 1100,
        romaji: 'hashiru',
        translation: 'courir',
        grammar: [3],
    },
    {
        id: 325,
        elements: [
            {
                kanji: '学',
                kana: 'ガク',
            },
            {
                kanji: '習',
                kana: 'シュウ',
            },
        ],
        level: 'N3',
        frequency: 2238,
        romaji: 'gakushuu',
        translation: 'étude, apprentissage, tutoriel',
        grammar: [1],
    },
    {
        id: 326,
        elements: [
            {
                kanji: '学',
                kana: 'ガク',
            },
            {
                kanji: '習',
                kana: 'シュウ',
            },
            {
                kanji: '者',
                kana: 'シャ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'gakushuusha',
        translation: 'étudiant, apprenti',
        grammar: [1],
    },
    {
        id: 327,
        elements: [
            {
                kanji: '応',
                kana: 'オウ',
            },
            {
                kanji: '援',
                kana: 'エン',
            },
        ],
        level: 'N2',
        frequency: 3295,
        romaji: 'ouen',
        translation: 'aide, assistance, renfort',
        grammar: [1],
    },
    {
        id: 328,
        elements: [
            {
                kanji: '愛',
                kana: 'アイ',
            },
            {
                kanji: '子',
                kana: 'こ',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'aiko',
        translation: 'Aiko (nom)',
        grammar: [2],
    },
    {
        id: 329,
        elements: [
            {
                kanji: '私',
                kana: 'わたし',
            },
        ],
        level: 'N5',
        frequency: 1066,
        romaji: 'watashi',
        translation: 'je, moi',
        grammar: [8],
    },
    {
        id: 330,
        elements: [
            {
                kanji: '',
                kana: 'フランス',
            },
            {
                kanji: '人',
                kana: 'ジン',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 10000,
        romaji: 'furansujin',
        translation: 'Français (personne)',
        grammar: [1],
    },
    {
        id: 331,
        elements: [
            {
                kanji: '仏',
                kana: '',
            },
            {
                kanji: '蘭',
                kana: '',
            },
            {
                kanji: '西',
                kana: '',
            },
        ],
        jukujikun: 'フランス',
        collections: [
            2,
            3,
        ],
        level: null,
        frequency: 142,
        romaji: 'furansu',
        translation: 'France',
        grammar: [2],
    },
    {
        id: 332,
        elements: [
            {
                kanji: '犬',
                kana: 'いぬ',
            },
        ],
        level: 'N5',
        frequency: 1762,
        romaji: 'inu',
        translation: 'chien',
        grammar: [1],
    },
    {
        id: 333,
        elements: [
            {
                kanji: '',
                kana: 'ゆっくり',
            },
        ],
        level: 'N5',
        frequency: 8815,
        romaji: 'yukkuri',
        translation: 'lentement',
        grammar: [5],
    },
    {
        id: 334,
        elements: [
            {
                kanji: '確',
                kana: 'しっか',
            },
            {
                kanji: '',
                kana: 'り',
            },
        ],
        rareKanji: true,
        level: 'N4',
        frequency: 10000,
        romaji: 'shikkari',
        translation: 'fermement',
        grammar: [5],
    },
    {
        id: 335,
        elements: [
            {
                kanji: '',
                kana: 'きちんと',
            },
        ],
        level: 'N3',
        frequency: 10000,
        romaji: 'kichinto',
        translation: 'soigneusement, précisément',
        grammar: [5],
    },
    {
        id: 336,
        elements: [
            {
                kanji: '',
                kana: 'さん',
            },
        ],
        level: 'N1',
        frequency: 10000,
        romaji: 'san',
        translation: 'M., Mme',
        grammar: [13],
    },
    {
        id: 337,
        elements: [
            {
                kanji: '',
                kana: 'もっと',
            },
        ],
        level: 'N5',
        frequency: 4906,
        romaji: 'motto',
        translation: 'encore plus',
        grammar: [5],
    },
    {
        id: 338,
        elements: [
            {
                kanji: '可',
                kana: 'カ',
            },
            {
                kanji: '也',
                kana: 'なり',
            },
        ],
        rareKanji: true,
        level: 'N3',
        frequency: 10000,
        romaji: 'kanari',
        translation: 'assez, plutôt, considérablement',
        grammar: [5],
    },
    {
        id: 339,
        elements: [
            {
                kanji: '沢',
                kana: 'タク',
            },
            {
                kanji: '山',
                kana: 'サン',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 6294,
        romaji: 'takusan',
        translation: 'beaucoup',
        grammar: [5],
    },
    {
        id: 340,
        elements: [
            {
                kanji: '一',
                kana: 'イッ',
            },
            {
                kanji: '杯',
                kana: 'パイ',
            },
        ],
        level: 'N4',
        frequency: 7171,
        romaji: 'ippai',
        translation: 'pleinement, beaucoup, plein, un verre (d\'alcool)',
        grammar: [5, 4, 1],
    },
    {
        id: 341,
        elements: [
            {
                kanji: '少',
                kana: 'すこ',
            },
            {
                kanji: '',
                kana: 'し',
            },
        ],
        level: 'N5',
        frequency: 2947,
        romaji: 'sukoshi',
        translation: 'un peu',
        grammar: [5],
    },
    {
        id: 342,
        elements: [
            {
                kanji: '本',
                kana: 'ホン',
            },
        ],
        level: 'N5',
        frequency: 217,
        romaji: 'hon',
        translation: 'livre',
        grammar: [1],
    },
    {
        id: 343,
        elements: [
            {
                kanji: '',
                kana: 'ずっと',
            },
        ],
        level: 'N3',
        frequency: 6108,
        romaji: 'zutto',
        translation: 'constamment',
        grammar: [5],
    },
    {
        id: 344,
        elements: [
            {
                kanji: '直',
                kana: 'す',
            },
            {
                kanji: '',
                kana: 'ぐ',
            },
        ],
        rareKanji: true,
        level: 'N1',
        frequency: 10000,
        romaji: 'sugu',
        translation: 'immédiatement, d\'un coup, directement',
        grammar: [5],
    },
    {
        id: 345,
        elements: [
            {
                kanji: '間',
                kana: 'ま',
            },
            {
                kanji: '',
                kana: 'も',
            },
            {
                kanji: '',
                kana: 'な',
            },
            {
                kanji: '',
                kana: 'く',
            },
        ],
        rareKanji: true,
        level: 'N2',
        frequency: 10000,
        romaji: 'mamonaku',
        translation: 'bientôt, sous peu',
        grammar: [5],
    },
    {
        id: 346,
        elements: [
            {
                kanji: '時',
                kana: 'とき',
            },
            {
                kanji: '々',
                kana: 'どき',
            },
        ],
        level: 'N5',
        frequency: 7982,
        romaji: 'tokidoki',
        translation: 'parfois, de temps en temps',
        grammar: [1, 5],
    },
    {
        id: 347,
        elements: [
            {
                kanji: '良',
                kana: 'よ',
            },
            {
                kanji: '',
                kana: 'く',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 10000,
        romaji: 'yoku',
        translation: 'correctement, souvent',
        grammar: [5],
    },
    {
        id: 348,
        elements: [
            {
                kanji: '側',
                kana: 'そば',
            },
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 1756,
        romaji: 'soba',
        translation: 'à côté, proche',
        grammar: [1],
    },
    {
        id: 349,
        elements: [
            {
                kanji: '遂',
                kana: 'つい',
            },
            {
                kanji: '',
                kana: 'に',
            },
        ],
        rareKanji: true,
        level: 'N3',
        frequency: 2456,
        romaji: 'tsuini',
        translation: 'finalement, enfin',
        grammar: [5],
    },
    {
        id: 350,
        elements: [
            {
                kanji: '',
                kana: 'バカンス',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 10000,
        romaji: 'bakansu',
        translation: 'vacances',
        grammar: [1],
    },
    {
        id: 351,
        elements: [
            {
                kanji: '本',
                kana: 'ホン',
            },
            {
                kanji: '当',
                kana: 'トウ',
            },
            {
                kanji: '',
                kana: 'に',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'hontouni',
        translation: 'vraiment',
        grammar: [5],
    },
    {
        id: 352,
        elements: [
            {
                kanji: '妹',
                kana: 'いもうと',
            },
        ],
        level: 'N5',
        frequency: 2279,
        romaji: 'imouto',
        translation: 'petite sœur',
        grammar: [1],
    },
    {
        id: 353,
        elements: [
            {
                kanji: '姉',
                kana: 'あね',
            },
        ],
        level: 'N5',
        frequency: 2880,
        romaji: 'ane',
        translation: 'grande sœur',
        grammar: [1],
    },
    {
        id: 354,
        elements: [
            {
                kanji: '弟',
                kana: 'おとうと',
            },
        ],
        level: 'N5',
        frequency: 943,
        romaji: 'imouto',
        translation: 'petit frère',
        grammar: [1],
    },
    {
        id: 355,
        elements: [
            {
                kanji: '兄',
                kana: 'あに',
            },
        ],
        level: 'N5',
        frequency: 1059,
        romaji: 'ani',
        translation: 'grand frère',
        grammar: [1],
    },
    {
        id: 356,
        elements: [
            {
                kanji: '習',
                kana: 'なら',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N5',
        frequency: 7338,
        romaji: 'narau',
        translation: 'apprendre, prendre des cours',
        grammar: [3],
    },
    {
        id: 357,
        elements: [
            {
                kanji: '',
                kana: 'メールアドレス',
            },
        ],
        collections: [
            2,
        ],
        level: null,
        frequency: 10000,
        romaji: 'meiruadoresu',
        translation: 'adresse mail',
        grammar: [1],
    },
    {
        id: 358,
        elements: [
            {
                kanji: '医',
                kana: 'イ',
            },
            {
                kanji: '者',
                kana: 'シャ',
            },
        ],
        level: 'N5',
        frequency: 7390,
        romaji: 'isha',
        translation: 'médecin, docteur',
        grammar: [1],
    },
    {
        id: 359,
        elements: [
            {
                kanji: '向',
                kana: 'む',
            },
            {
                kanji: '',
                kana: 'か',
            },
            {
                kanji: '',
                kana: 'う',
            },
        ],
        level: 'N4',
        frequency: 569,
        romaji: 'mukau',
        translation: 'se diriger vers, faire face',
        grammar: [3],
    },
    {
        id: 360,
        elements: [
            {
                kanji: '勝',
                kana: 'か',
            },
            {
                kanji: '',
                kana: 'ち',
            },
        ],
        level: 'N3',
        frequency: 10000,
        romaji: 'kachi',
        translation: 'victoire',
        grammar: [1],
    },
    {
        id: 361,
        elements: [
            {
                kanji: '私',
                kana: 'わたし',
            },
            {
                kanji: '',
                kana: 'た',
            },
            {
                kanji: '',
                kana: 'ち',
            },
        ],
        level: null,
        frequency: 10000,
        romaji: 'watashitachi',
        translation: 'nous',
        grammar: [8],
    },
    {
        id: 362,
        elements: [
            {
                kanji: '',
                kana: 'レストラン',
            },
        ],
        level: 'N5',
        frequency: 3650,
        romaji: 'resutoran',
        translation: 'restaurant',
        grammar: [1],
    },
    {
        id: 363,
        elements: [
            {
                kanji: '何',
                kana: '',
            },
            {
                kanji: '故',
                kana: '',
            },
        ],
        jukujikun: 'なぜ',
        collections: [
            3,
        ],
        rareKanji: true,
        level: 'N5',
        frequency: 4244,
        romaji: 'naze',
        translation: 'pourquoi, comment',
        grammar: [5],
    },
    {
        id: 364,
        elements: [
            {
                kanji: '何',
                kana: 'なん',
            },
            {
                kanji: '',
                kana: 'で',
            },
        ],
        rareKanji: true,
        level: 'N3',
        frequency: 9747,
        romaji: 'nande',
        translation: 'pourquoi, comment',
        grammar: [5],
    },
];

// Types grammaticaux:
// 1 - nom commun
// 2 - nom propre
// 3 - verbe
// 4 - adjectif
// 5 - adverbe
// 6 - conjonction
// 7 - adjectif démonstratif
// 8 - pronom
// 9 - particule
// 10 - expression
// 11 - copule
// 12 - numérique
// 13 - suffixe


export default vocabulary;