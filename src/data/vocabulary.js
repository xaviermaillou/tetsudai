// Types grammaticaux:
// 0 - nom commun
// 1 - nom propre
// 2 - verbe
// 3 - adjectif

const vocabulary = [
    {
        elements: [
            {
                'kanji': '母',
                'kana': 'はは',
            },
            {
                'kanji': '',
                'kana': 'の',
            },
            {
                'kanji': '日',
                'kana': 'ひ',
            },
        ],
        translation: 'fête des mères',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '日',
                'kana': 'ニチ',
            },
            {
                'kanji': '曜',
                'kana': 'ヨウ',
            },
            {
                'kanji': '日',
                'kana': 'び',
            },
        ],
        translation: 'dimanche',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '月',
                'kana': 'ゲツ',
            },
            {
                'kanji': '曜',
                'kana': 'ヨウ',
            },
            {
                'kanji': '日',
                'kana': 'び',
            },
        ],
        translation: 'lundi',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '火',
                'kana': 'カ',
            },
            {
                'kanji': '曜',
                'kana': 'ヨウ',
            },
            {
                'kanji': '日',
                'kana': 'び',
            },
        ],
        translation: 'mardi',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '水',
                'kana': 'スイ',
            },
            {
                'kanji': '曜',
                'kana': 'ヨウ',
            },
            {
                'kanji': '日',
                'kana': 'び',
            },
        ],
        translation: 'mercredi',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '木',
                'kana': 'モク',
            },
            {
                'kanji': '曜',
                'kana': 'ヨウ',
            },
            {
                'kanji': '日',
                'kana': 'び',
            },
        ],
        translation: 'jeudi',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '金',
                'kana': 'キン',
            },
            {
                'kanji': '曜',
                'kana': 'ヨウ',
            },
            {
                'kanji': '日',
                'kana': 'び',
            },
        ],
        translation: 'vendredi',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '土',
                'kana': 'ド',
            },
            {
                'kanji': '曜',
                'kana': 'ヨウ',
            },
            {
                'kanji': '日',
                'kana': 'び',
            },
        ],
        translation: 'samedi',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '日',
                'kana': '二',
            },
            {
                'kanji': '本',
                'kana': 'ホン',
            },
        ],
        translation: 'Japon',
        grammar: 1,
    },
    {
        elements: [
            {
                'kanji': '食',
                'kana': 'た',
            },
            {
                'kanji': '',
                'kana': 'べ',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'manger',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '食',
                'kana': 'た',
            },
            {
                'kanji': '',
                'kana': 'べ',
            },
            {
                'kanji': '物',
                'kana': 'もの',
            },
        ],
        translation: 'nourriture',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '飲',
                'kana': 'の',
            },
            {
                'kanji': '',
                'kana': 'む',
            },
        ],
        translation: 'boire',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '飲',
                'kana': 'の',
            },
            {
                'kanji': '',
                'kana': 'み',
            },
            {
                'kanji': '物',
                'kana': 'もの',
            },
        ],
        translation: 'boisson',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '薬',
                'kana': 'くすり',
            },
            {
                'kanji': '屋',
                'kana': 'や',
            },
        ],
        translation: 'pharmacie',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '',
                'kana': 'パン',
            },
            {
                'kanji': '屋',
                'kana': 'や',
            },
        ],
        translation: 'boulangerie',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '夕',
                'kana': 'ゆう',
            },
            {
                'kanji': '食',
                'kana': 'ショク',
            },
        ],
        translation: 'repas du soir, dîner',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '火',
                'kana': 'カ',
            },
            {
                'kanji': '山',
                'kana': 'ザン',
            },
        ],
        translation: 'volcan',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '大',
                'kana': 'ダイ',
            },
            {
                'kanji': '学',
                'kana': 'ガク',
            },
        ],
        translation: 'université',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '学',
                'kana': 'ガッ',
            },
            {
                'kanji': '校',
                'kana': 'コウ',
            },
        ],
        translation: 'école',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '学',
                'kana': 'ガク',
            },
            {
                'kanji': '生',
                'kana': 'セイ',
            },
        ],
        translation: 'étudiant',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '先',
                'kana': 'セン',
            },
            {
                'kanji': '生',
                'kana': 'セイ',
            },
        ],
        translation: 'professeur',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '花',
                'kana': 'はな',
            },
            {
                'kanji': '火',
                'kana': 'び',
            },
        ],
        translation: 'feu d\'artifice',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '一',
                'kana': 'イチ',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'janvier',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '二',
                'kana': 'に',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'février',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '三',
                'kana': 'サン',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'mars',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '四',
                'kana': 'シ',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'avril',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '五',
                'kana': 'ゴ',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'mai',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '六',
                'kana': 'ロク',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'juin',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '七',
                'kana': 'シチ',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'juillet',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '八',
                'kana': 'ハチ',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'août',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '九',
                'kana': 'ク',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'septembre',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '十',
                'kana': 'ジュウ',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'octobre',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '十',
                'kana': 'ジュウ',
            },
            {
                'kanji': '一',
                'kana': 'イチ',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'novembre',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '十',
                'kana': 'ジュウ',
            },
            {
                'kanji': '二',
                'kana': 'に',
            },
            {
                'kanji': '月',
                'kana': 'ガツ',
            },
        ],
        translation: 'décembre',
        grammar: 0,
        },
    {
        elements: [
            {
                'kanji': '分',
                'kana': 'わ',
            },
            {
                'kanji': '',
                'kana': 'か',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'comprendre',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '天',
                'kana': 'テン',
            },
            {
                'kanji': '気',
                'kana': 'キ',
            },
        ],
        translation: 'temps, météo',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '行',
                'kana': 'い',
            },
            {
                'kanji': '',
                'kana': 'く',
            },
        ],
        translation: 'aller',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '住',
                'kana': 'す',
            },
            {
                'kanji': '',
                'kana': 'む',
            },
        ],
        translation: 'habiter',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '休',
                'kana': 'やす',
            },
            {
                'kanji': '',
                'kana': 'む',
            },
        ],
        translation: 'se reposer',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '来',
                'kana': 'く',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'venir',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '見',
                'kana': 'み',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'voir',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '聞',
                'kana': 'き',
            },
            {
                'kanji': '',
                'kana': 'く',
            },
        ],
        translation: 'écouter, demander',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '言',
                'kana': 'い',
            },
            {
                'kanji': '',
                'kana': 'う',
            },
        ],
        translation: 'dire',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '話',
                'kana': 'はな',
            },
            {
                'kanji': '',
                'kana': 'す',
            },
        ],
        translation: 'parler',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '話',
                'kana': 'はなし',
            },
        ],
        translation: 'conversation',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '語',
                'kana': 'かた',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'raconter',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '',
                'kana': 'フランス',
            },
            {
                'kanji': '語',
                'kana': 'ゴ',
            },
        ],
        translation: 'langue française',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '読',
                'kana': 'よ',
            },
            {
                'kanji': '',
                'kana': 'む',
            },
        ],
        translation: 'lire',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '書',
                'kana': 'か',
            },
            {
                'kanji': '',
                'kana': 'く',
            },
        ],
        translation: 'écrire',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '知',
                'kana': 'し',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'savoir',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '思',
                'kana': 'おも',
            },
            {
                'kanji': '',
                'kana': 'う',
            },
        ],
        translation: 'penser',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '教',
                'kana': 'おし',
            },
            {
                'kanji': '',
                'kana': 'え',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'enseigner',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '歩',
                'kana': 'ある',
            },
            {
                'kanji': '',
                'kana': 'く',
            },
        ],
        translation: 'marcher',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '入',
                'kana': 'はい',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'entrer',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '大',
                'kana': 'おお',
            },
            {
                'kanji': '',
                'kana': 'き',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'grand',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '小',
                'kana': 'ちい',
            },
            {
                'kanji': '',
                'kana': 'さ',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'petit',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '白',
                'kana': 'しろ',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'blanc',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '黒',
                'kana': 'くろ',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'noir',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '古',
                'kana': 'ふる',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'vieux',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '安',
                'kana': 'やす',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'bon marché',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '早',
                'kana': 'はや',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'tôt, rapide',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '好',
                'kana': 'す',
            },
            {
                'kanji': '',
                'kana': 'き',
            },
        ],
        translation: 'aimé',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '学',
                'kana': 'まな',
            },
            {
                'kanji': '',
                'kana': 'ぶ',
            },
        ],
        translation: 'étudier',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '高',
                'kana': 'たか',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'haut, cher',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '帰',
                'kana': 'かえ',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'retourner',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '買',
                'kana': 'か',
            },
            {
                'kanji': '',
                'kana': 'う',
            },
        ],
        translation: 'acheter',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '新',
                'kana': 'あたら',
            },
            {
                'kanji': '',
                'kana': 'し',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'nouveau',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '楽',
                'kana': 'たの',
            },
            {
                'kanji': '',
                'kana': 'し',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'amusant, plaisant',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '電',
                'kana': 'デン',
            },
            {
                'kanji': '車',
                'kana': 'シャ',
            },
        ],
        translation: 'train',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '電',
                'kana': 'デン',
            },
            {
                'kanji': '話',
                'kana': 'ワ',
            },
        ],
        translation: 'téléphone',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '会',
                'kana': 'あ',
            },
            {
                'kanji': '',
                'kana': 'う',
            },
        ],
        translation: 'se réunir',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '会',
                'kana': 'カイ',
            },
            {
                'kanji': '社',
                'kana': 'シャ',
            },
        ],
        translation: 'entreprise',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '会',
                'kana': 'カイ',
            },
            {
                'kanji': '話',
                'kana': 'ワ',
            },
        ],
        translation: 'conversation',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '文',
                'kana': 'モ',
            },
            {
                'kanji': '字',
                'kana': 'ジ',
            },
        ],
        translation: 'écriture',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '文',
                'kana': 'ブン',
            },
            {
                'kanji': '学',
                'kana': 'ガク',
            },
        ],
        translation: 'littérature',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '下',
                'kana': 'した',
            },
            {
                'kanji': '町',
                'kana': 'まち',
            },
        ],
        translation: 'quartier populaire',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '長',
                'kana': 'チョウ',
            },
            {
                'kanji': '町',
                'kana': 'チョウ',
            },
        ],
        translation: 'maire',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '上',
                'kana': 'あ',
            },
            {
                'kanji': '',
                'kana': 'が',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 's\'élever',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '上',
                'kana': 'のぼ',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'monter',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '上',
                'kana': 'ジョウ',
            },
            {
                'kanji': '手',
                'kana': 'ズ',
            },
        ],
        translation: 'doué',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '東',
                'kana': 'トウ',
            },
            {
                'kanji': '京',
                'kana': 'キョウ',
            },
        ],
        translation: 'Tokyo',
        grammar: 1,
    },
    {
        elements: [
            {
                'kanji': '関',
                'kana': 'カン',
            },
            {
                'kanji': '西',
                'kana': 'サイ',
            },
        ],
        translation: 'Kansai',
        grammar: 1,
    },
    {
        elements: [
            {
                'kanji': '北',
                'kana': 'ホッ',
            },
            {
                'kanji': '海',
                'kana': 'カイ',
            },
            {
                'kanji': '道',
                'kana': 'ドウ',
            },
        ],
        translation: 'Hokkaido',
        grammar: 1,
    },
    {
        elements: [
            {
                'kanji': '飲',
                'kana': 'イン',
            },
            {
                'kanji': '酒',
                'kana': 'シュ',
            },
        ],
        translation: 'consommation d\'alcool',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '空',
                'kana': 'クウ',
            },
            {
                'kanji': '気',
                'kana': 'キ',
            },
        ],
        translation: 'atmosphère, humeur',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '中',
                'kana': 'チュウ',
            },
            {
                'kanji': '国',
                'kana': 'ゴク',
            },
        ],
        translation: 'Chine',
        grammar: 1,
    },
    {
        elements: [
            {
                'kanji': '今',
                'kana': 'コ',
            },
            {
                'kanji': '年',
                'kana': 'とし',
            },
        ],
        translation: 'cette année',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '音',
                'kana': 'オン',
            },
            {
                'kanji': '楽',
                'kana': 'ガク',
            },
        ],
        translation: 'musique',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '雪',
                'kana': 'ゆき',
            },
            {
                'kanji': '国',
                'kana': 'ぐに',
            },
        ],
        translation: 'pays enneigé',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '外',
                'kana': 'ガイ',
            },
            {
                'kanji': '国',
                'kana': 'コク',
            },
        ],
        translation: 'pays étranger',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '外',
                'kana': 'ガイ',
            },
            {
                'kanji': '国',
                'kana': 'コク',
            },
            {
                'kanji': '人',
                'kana': 'ジン',
            },
        ],
        translation: 'personne étrangère',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '愛',
                'kana': 'アイ',
            },
            {
                'kanji': '犬',
                'kana': 'ケン',
            },
            {
                'kanji': '家',
                'kana': 'カ',
            },
        ],
        translation: 'personne qui aime les chiens',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '愛',
                'kana': 'アイ',
            },
            {
                'kanji': '',
                'kana': 'する',
            },
        ],
        translation: 'aimer',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '海',
                'kana': 'うみ',
            },
            {
                'kanji': '風',
                'kana': 'かぜ',
            },
        ],
        translation: 'vent marin',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '今',
                'kana': 'コン',
            },
            {
                'kanji': '月',
                'kana': 'ゲツ',
            },
        ],
        translation: 'ce mois',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '出',
                'kana': 'で',
            },
            {
                'kanji': '口',
                'kana': 'ぐち',
            },
        ],
        translation: 'sortie',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '入',
                'kana': 'いり',
            },
            {
                'kanji': '口',
                'kana': 'ぐち',
            },
        ],
        translation: 'entrée',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '白',
                'kana': 'ハッ',
            },
            {
                'kanji': '鳥',
                'kana': 'チョウ',
            },
        ],
        translation: 'cygne',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '飲',
                'kana': 'イン',
            },
            {
                'kanji': '食',
                'kana': 'ショク',
            },
            {
                'kanji': '店',
                'kana': 'テン',
            },
        ],
        translation: 'restaurant',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '明',
                'kana': 'あか',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'clair',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '説',
                'kana': 'セツ',
            },
            {
                'kanji': '明',
                'kana': 'メイ',
            },
        ],
        translation: 'explication',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '暗',
                'kana': 'くら',
            },
            {
                'kanji': '',
                'kana': 'い',
            },
        ],
        translation: 'sombre',
        grammar: 3,
    },
    {
        elements: [
            {
                'kanji': '開',
                'kana': 'あ',
            },
            {
                'kanji': '',
                'kana': 'く',
            },
        ],
        translation: 's\'ouvrir',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '開',
                'kana': 'あ',
            },
            {
                'kanji': '',
                'kana': 'け',
            },
            {
                'kanji': '',
                'kana': 'る',
            },
        ],
        translation: 'ouvrir',
        grammar: 2,
    },
    {
        elements: [
            {
                'kanji': '朝',
                'kana': 'チョウ',
            },
            {
                'kanji': '食',
                'kana': 'ショク',
            },
        ],
        translation: 'petit-déjeuner',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '昼',
                'kana': 'チュウ',
            },
            {
                'kanji': '食',
                'kana': 'ショク',
            },
        ],
        translation: 'déjeuner',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '毎',
                'kana': 'マイ',
            },
            {
                'kanji': '日',
                'kana': 'ニチ',
            },
        ],
        translation: 'tous les jours',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '毎',
                'kana': 'マイ',
            },
            {
                'kanji': '朝',
                'kana': 'あさ',
            },
        ],
        translation: 'tous les matins',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '毎',
                'kana': 'マイ',
            },
            {
                'kanji': '週',
                'kana': 'シュウ',
            },
        ],
        translation: 'toutes les semaines',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '毎',
                'kana': 'マイ',
            },
            {
                'kanji': '月',
                'kana': 'つき',
            },
        ],
        translation: 'tous les mois',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '日',
                'kana': 'ジツ',
            },
            {
                'kanji': '外',
                'kana': 'ガイ',
            },
        ],
        translation: 'il y a peu, une fois',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '男',
                'kana': 'おとこ',
            },
            {
                'kanji': '',
                'kana': 'の',
            },
            {
                'kanji': '子',
                'kana': 'こ',
            },
        ],
        translation: 'garçon',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '女',
                'kana': 'おんあ',
            },
            {
                'kanji': '',
                'kana': 'の',
            },
            {
                'kanji': '子',
                'kana': 'こ',
            },
        ],
        translation: 'fille',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '暗',
                'kana': 'アン',
            },
            {
                'kanji': '黒',
                'kana': 'コク',
            },
        ],
        translation: 'ténèbres',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '半',
                'kana': 'なか',
            },
            {
                'kanji': '',
                'kana': 'ば',
            },
        ],
        translation: 'milieu, moitié, partiellement',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '漢',
                'kana': 'カン',
            },
            {
                'kanji': '字',
                'kana': 'ジ',
            },
        ],
        translation: 'caractère chinois',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '訓',
                'kana': 'クン',
            },
            {
                'kanji': '読',
                'kana': 'よ',
            },
            {
                'kanji': '',
                'kana': 'み',
            },
        ],
        translation: 'lecture purement japonaise',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '音',
                'kana': 'オン',
            },
            {
                'kanji': '読',
                'kana': 'よ',
            },
            {
                'kanji': '',
                'kana': 'み',
            },
        ],
        translation: 'lecture sino-japonaise',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '言',
                'kana': 'ゲン',
            },
            {
                'kanji': '語',
                'kana': 'ゴ',
            },
        ],
        translation: 'langue',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '彼',
                'kana': 'かれ',
            },
            {
                'kanji': '女',
                'kana': 'ジョ',
            },
        ],
        translation: 'elle',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '一',
                'kana': 'ひと',
            },
            {
                'kanji': '人',
                'kana': 'リ',
            },
        ],
        translation: 'une personne',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '二',
                'kana': 'ふた',
            },
            {
                'kanji': '人',
                'kana': 'リ',
            },
        ],
        translation: 'deux personnes',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '名',
                'kana': 'な',
            },
            {
                'kanji': '前',
                'kana': 'まえ',
            },
        ],
        translation: 'prénom',
        grammar: 0,
    },
    {
        elements: [
            {
                'kanji': '名',
                'kana': 'メイ',
            },
            {
                'kanji': '人',
                'kana': 'ジン',
            },
        ],
        translation: 'maître, expert',
        grammar: 0,
    },
];


export default vocabulary