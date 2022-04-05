const words = [
    {
        kanji: '日',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '日',
                    'kana': 'ひ',
                },
                {
                    'kanji': '日',
                    'kana': 'び',
                },
                {
                    'kanji': '日',
                    'kana': 'か',
                },
            ],
            onyomi: [
                {
                    'kanji': '日',
                    'kana': '二チ',
                },
                {
                    'kanji': '日',
                    'kana': '二',
                },
                {
                    'kanji': '日',
                    'kana': 'ジツ',
                },
            ],
        },
        translation: 'Soleil, jour',
    },
    {
        kanji: '本',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '本',
                    'kana': 'もと',
                },
            ],
            onyomi: [
                {
                    'kanji': '本',
                    'kana': 'ホン',
                },
            ],
        },
        translation: 'Origine, livre',
    },
    {
        kanji: '東',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '東',
                    'kana': 'ひがし',
                },
            ],
            onyomi: [
                {
                    'kanji': '東',
                    'kana': 'トウ',
                },
            ],
        },
        translation: 'Est',
    },
    {
        kanji: '西',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '西',
                    'kana': 'にし',
                },
            ],
            onyomi: [
                {
                    'kanji': '西',
                    'kana': 'サイ',
                },
                {
                    'kanji': '西',
                    'kana': 'セイ',
                },
            ],
        },
        translation: 'Ouest',
    },
    {
        kanji: '北',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '北',
                    'kana': 'きた',
                },
            ],
            onyomi: [
                {
                    'kanji': '北',
                    'kana': 'ホク',
                },
            ],
        },
        translation: 'Nord',
    },
    {
        kanji: '南',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '南',
                    'kana': 'みなみ',
                },
            ],
            onyomi: [
                {
                    'kanji': '南',
                    'kana': 'ナン',
                },
            ],
        },
        translation: 'Sud',
    },
    {
        kanji: '京',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '京',
                    'kana': 'みやこ',
                },
            ],
            onyomi: [
                {
                    'kanji': '京',
                    'kana': 'キョウ',
                },
            ],
        },
        translation: 'Capitale',
    },
    {
        kanji: '国',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '国',
                    'kana': 'くに',
                },
            ],
            onyomi: [
                {
                    'kanji': '国',
                    'kana': 'コク',
                },
            ],
        },
        translation: 'Pays',
    },
    {
        kanji: '海',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '海',
                    'kana': 'うみ',
                },
            ],
            onyomi: [
                {
                    'kanji': '海',
                    'kana': 'カイ',
                },
            ],
        },
        translation: 'Mer',
    },
    {
        kanji: '風',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '風',
                    'kana': 'かぜ',
                },
            ],
            onyomi: [
                {
                    'kanji': '風',
                    'kana': 'フウ',
                },
            ],
        },
        translation: 'Vent',
    },
    {
        kanji: '火',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '火',
                    'kana': 'ひ',
                },
            ],
            onyomi: [
                {
                    'kanji': '火',
                    'kana': 'カ',
                },
            ],
        },
        translation: 'Feu',
    },
    {
        kanji: '土',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '土',
                    'kana': 'つち',
                },
            ],
            onyomi: [
                {
                    'kanji': '土',
                    'kana': 'ド',
                },
            ],
        },
        translation: 'Sol, terre',
    },
    {
        kanji: '水',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '水',
                    'kana': 'みず',
                },
            ],
            onyomi: [
                {
                    'kanji': '水',
                    'kana': 'スイ',
                },
            ],
        },
        translation: 'Eau',
    },
    {
        kanji: '時',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '時',
                    'kana': 'とき',
                },
            ],
            onyomi: [
                {
                    'kanji': '時',
                    'kana': 'ジ',
                },
            ],
        },
        translation: 'Temps',
    },
    {
        kanji: '空',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '空',
                    'kana': 'そら',
                },
            ],
            onyomi: [
                {
                    'kanji': '空',
                    'kana': 'クウ',
                },
            ],
        },
        kunyomi: 'そら',
        onyomi: 'クウ',
        translation: 'Ciel',
    },
    {
        kanji: '月',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '月',
                    'kana': 'つき',
                },
            ],
            onyomi: [
                {
                    'kanji': '月',
                    'kana': 'ゲツ',
                },
                {
                    'kanji': '月',
                    'kana': 'ガツ',
                },
            ],
        },
        translation: 'Lune',
    },
    {
        kanji: '山',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '山',
                    'kana': 'やま',
                },
            ],
            onyomi: [
                {
                    'kanji': '山',
                    'kana': 'サン',
                },
            ],
        },
        translation: 'Montagne',
    },
    {
        kanji: '川',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '川',
                    'kana': 'かわ',
                },
            ],
            onyomi: [
                {
                    'kanji': '川',
                    'kana': 'セン',
                },
            ],
        },
        translation: 'Rivière',
    },
    {
        kanji: '木',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '木',
                    'kana': 'き',
                },
            ],
            onyomi: [
                {
                    'kanji': '木',
                    'kana': 'モク',
                },
            ],
        },
        translation: 'Arbre, bois',
    },
    {
        kanji: '花',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '花',
                    'kana': 'はな',
                },
            ],
            onyomi: [],
        },
        translation: 'Fleur',
    },
    {
        kanji: '雨',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '雨',
                    'kana': 'あめ',
                },
            ],
            onyomi: [],
        },
        translation: 'Pluie',
    },
    {
        kanji: '金',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '金',
                    'kana': 'かね',
                },
            ],
            onyomi: [
                {
                    'kanji': '金',
                    'kana': 'キン',
                },
            ],
        },
        translation: 'Or, métal, argent',
    },
    {
        kanji: '雪',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '雪',
                    'kana': 'ゆき',
                },
            ],
            onyomi: [],
        },
        translation: 'Neige',
    },
    {
        kanji: '天',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '天',
                    'kana': 'あめ',
                },
            ],
            onyomi: [
                {
                    'kanji': '天',
                    'kana': 'テン',
                },
            ],
        },
        translation: 'Ciel, paradis',
    },
    {
        kanji: '曜',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '曜',
                    'kana': 'ヨウ',
                },
            ],
        },
        translation: 'Jour de la semaine',
    },
    {
        kanji: '星',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '星',
                    'kana': 'セイ',
                },
            ],
        },
        translation: 'Astre',
    },
    {
        kanji: '王',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '王',
                    'kana': 'オウ',
                },
            ],
        },
        translation: 'Roi',
    },
    {
        kanji: '男',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '男',
                    'kana': 'おとこ',
                },
            ],
            onyomi: [
                {
                    'kanji': '男',
                    'kana': 'ナンダン',
                },
            ],
        },
        translation: 'Homme, masculin',
    },
    {
        kanji: '女',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '女',
                    'kana': 'おんあ',
                },
            ],
            onyomi: [
                {
                    'kanji': '女',
                    'kana': 'ジョ',
                },
            ],
        },
        translation: 'Femme, féminin',
    },
    {
        kanji: '子',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '子',
                    'kana': 'こ',
                },
            ],
            onyomi: [
                {
                    'kanji': '子',
                    'kana': 'シ',
                },
            ],
        },
        translation: 'Enfant',
    },
    {
        kanji: '私',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '私',
                    'kana': 'わたし',
                },
            ],
            onyomi: [],
        },
        translation: 'Je (moi), privé',
    },
    {
        kanji: '犬',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '犬',
                    'kana': 'いぬ',
                },
            ],
            onyomi: [],
        },
        translation: 'Chien',
    },
    {
        kanji: '猫',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '猫',
                    'kana': 'ねこ',
                },
            ],
            onyomi: [],
        },
        translation: 'Chat',
    },
    {
        kanji: '鳥',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '鳥',
                    'kana': 'とり',
                },
            ],
            onyomi: [],
        },
        translation: 'Oiseau',
    },
    {
        kanji: '馬',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '馬',
                    'kana': 'うま',
                },
            ],
            onyomi: [],
        },
        translation: 'Cheval',
    },
    {
        kanji: '行',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '行',
                    'kana': 'い.く',
                },
            ],
            onyomi: [],
        },
        translation: 'Aller, voyage',
    },
    {
        kanji: '住',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '住',
                    'kana': 'す.む',
                },
            ],
            onyomi: [],
        },
        translation: 'Habiter',
    },
    {
        kanji: '休',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '休',
                    'kana': 'やす.む',
                },
            ],
            onyomi: [],
        },
        translation: 'Se reposer',
    },
    {
        kanji: '食',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '食',
                    'kana': 'た.べる',
                },
            ],
            onyomi: [],
        },
        translation: 'Manger',
    },
    {
        kanji: '飲',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '飲',
                    'kana': 'の.む',
                },
            ],
            onyomi: [],
        },
        translation: 'Boire',
    },
    {
        kanji: '分',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '分',
                    'kana': 'わ.かる',
                },
            ],
            onyomi: [],
        },
        translation: 'Comprendre',
    },
    {
        kanji: '来',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '来',
                    'kana': 'く.る',
                },
            ],
            onyomi: [],
        },
        translation: 'Venir',
    },
    {
        kanji: '見',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '見',
                    'kana': 'み.る',
                },
            ],
            onyomi: [],
        },
        translation: 'Voir',
    },
    {
        kanji: '聞',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '聞',
                    'kana': 'き.く',
                },
            ],
            onyomi: [],
        },
        translation: 'Ecouter, demander',
    },
    {
        kanji: '言',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '言',
                    'kana': 'い.う',
                },
            ],
            onyomi: [],
        },
        translation: 'Dire',
    },
    {
        kanji: '話',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '話',
                    'kana': 'はな.す',
                },
            ],
            onyomi: [],
        },
        translation: 'Parler',
    },
    {
        kanji: '語',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '語',
                    'kana': 'ゴ',
                },
            ],
        },
        translation: 'Langue',
    },
    {
        kanji: '読',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '読',
                    'kana': 'よ.む',
                },
            ],
            onyomi: [],
        },
        translation: 'Lire',
    },
    {
        kanji: '書',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '書',
                    'kana': 'か.く',
                },
            ],
            onyomi: [],
        },
        translation: 'Ecrire',
    },
    {
        kanji: '知',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '知',
                    'kana': 'し.る',
                },
            ],
            onyomi: [],
        },
        translation: 'Savoir',
    },
    {
        kanji: '思',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '思',
                    'kana': 'おも.う',
                },
            ],
            onyomi: [],
        },
        translation: 'Penser',
    },
    {
        kanji: '教',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '教',
                    'kana': 'おし.える',
                },
            ],
            onyomi: [],
        },
        translation: 'Enseigner',
    },
    {
        kanji: '歩',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '歩',
                    'kana': 'ある.く',
                },
            ],
            onyomi: [],
        },
        translation: 'Marcher',
    },
    {
        kanji: '入',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '入',
                    'kana': 'はい.る',
                },
            ],
            onyomi: [],
        },
        translation: 'Entrer',
    },
    {
        kanji: '夕',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '夕',
                    'kana': 'ゆう',
                },
            ],
            onyomi: [],
        },
        translation: 'Soirée',
    },
    {
        kanji: '大',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '大',
                    'kana': 'おお.きい',
                },
            ],
            onyomi: [
                {
                    'kanji': '大',
                    'kana': 'ダイ',
                },
            ],
        },
        translation: 'Grand',
    },
    {
        kanji: '小',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '小',
                    'kana': 'ちい.さい',
                },
            ],
            onyomi: [],
        },
        translation: 'Petit',
    },
    {
        kanji: '上',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '上',
                    'kana': 'うえ',
                },
            ],
            onyomi: [],
        },
        translation: 'Le dessus',
    },
    {
        kanji: '下',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '下',
                    'kana': 'した',
                },
            ],
            onyomi: [],
        },
        translation: 'Le dessous',
    },
    {
        kanji: '口',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '口',
                    'kana': 'くち',
                },
            ],
            onyomi: [],
        },
        translation: 'Bouche',
    },
    {
        kanji: '円',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '円',
                    'kana': 'エン',
                },
            ],
        },
        translation: 'Yen, cercle',
    },
    {
        kanji: '今',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '今',
                    'kana': 'いま',
                },
            ],
            onyomi: [],
        },
        translation: 'Maintenant',
    },
    {
        kanji: '中',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '中',
                    'kana': 'なか',
                },
            ],
            onyomi: [
                {
                    'kanji': '中',
                    'kana': 'チュウ',
                },
            ],
        },
        translation: 'Milieu, intérieur',
    },
    {
        kanji: '父',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '父',
                    'kana': 'ちち',
                },
            ],
            onyomi: [
                {
                    'kanji': '父',
                    'kana': 'フ',
                },
            ],
        },
        translation: 'Père',
    },
    {
        kanji: '牛',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '牛',
                    'kana': 'うし',
                },
            ],
            onyomi: [],
        },
        translation: 'Bovin',
    },
    {
        kanji: '田',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '田',
                    'kana': 'た',
                },
            ],
            onyomi: [],
        },
        translation: 'Rizière',
    },
    {
        kanji: '生',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '生',
                    'kana': 'セイ',
                },
            ],
        },
        translation: 'Vie',
    },
    {
        kanji: '白',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '白',
                    'kana': 'しろ',
                },
            ],
            onyomi: [
                {
                    'kanji': '白',
                    'kana': 'ハク',
                },
            ],
        },
        translation: 'Blanc',
    },
    {
        kanji: '古',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '古',
                    'kana': 'ふる.い',
                },
            ],
            onyomi: [],
        },
        translation: 'Vieux',
    },
    {
        kanji: '目',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '目',
                    'kana': 'め',
                },
            ],
            onyomi: [],
        },
        translation: 'Oeil',
    },
    {
        kanji: '母',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '母',
                    'kana': 'はは',
                },
            ],
            onyomi: [
                {
                    'kanji': '母',
                    'kana': 'ボ',
                },
            ],
        },
        translation: 'Mère',
    },
    {
        kanji: '年',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '年',
                    'kana': 'とし',
                },
            ],
            onyomi: [
                {
                    'kanji': '年',
                    'kana': 'ネン',
                },
            ],
        },
        translation: 'Année',
    },
    {
        kanji: '気',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '気',
                    'kana': 'キ',
                },
            ],
        },
        translation: 'Espirt, air',
    },
    {
        kanji: '先',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '先',
                    'kana': 'セン',
                },
            ],
        },
        translation: 'Avance, qui précède',
    },
    {
        kanji: '字',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '字',
                    'kana': 'ジ',
                },
            ],
        },
        translation: 'Caractère, lettre',
    },
    {
        kanji: '安',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '安',
                    'kana': 'やす.い',
                },
            ],
            onyomi: [],
        },
        translation: 'Bon marché, tranquilisant',
    },
    {
        kanji: '早',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '早',
                    'kana': 'はや.い',
                },
            ],
            onyomi: [],
        },
        translation: 'Tôt, rapide',
    },
    {
        kanji: '好',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '好',
                    'kana': 'す.く',
                },
                {
                    'kanji': '好',
                    'kana': 'す.きな',
                },
            ],
            onyomi: [],
        },
        translation: 'Aimer, favorable',
    },
    {
        kanji: '何',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '何',
                    'kana': 'なん',
                },
                {
                    'kanji': '何',
                    'kana': 'なに',
                },
            ],
            onyomi: [],
        },
        translation: 'Quoi',
    },
    {
        kanji: '耳',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '耳',
                    'kana': 'みみ',
                },
            ],
            onyomi: [],
        },
        translation: 'Oreille',
    },
    {
        kanji: '町',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '町',
                    'kana': 'まち',
                },
            ],
            onyomi: [
                {
                    'kanji': '町',
                    'kana': 'チョウ',
                },
            ],
        },
        translation: 'Ville',
    },
    {
        kanji: '車',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '車',
                    'kana': 'くるま',
                },
            ],
            onyomi: [
                {
                    'kanji': '車',
                    'kana': 'シャ',
                },
            ],
        },
        translation: 'Véhicule',
    },
    {
        kanji: '赤',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '赤',
                    'kana': 'あか',
                },
            ],
            onyomi: [],
        },
        translation: 'Rouge',
    },
    {
        kanji: '体',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '体',
                    'kana': 'からだ',
                },
            ],
            onyomi: [],
        },
        translation: 'Corps',
    },
    {
        kanji: '学',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '学',
                    'kana': 'まな.ぶ',
                },
            ],
            onyomi: [
                {
                    'kanji': '学',
                    'kana': 'ガク',
                },
            ],
        },
        translation: 'Etudier, étude',
    },
    {
        kanji: '夜',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '夜',
                    'kana': 'よる',
                },
            ],
            onyomi: [
                {
                    'kanji': '夜',
                    'kana': 'ヤ',
                },
            ],
        },
        translation: 'Nuit',
    },
    {
        kanji: '店',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '店',
                    'kana': 'みせ',
                },
            ],
            onyomi: [],
        },
        translation: 'Magasin',
    },
    {
        kanji: '青',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '青',
                    'kana': 'あお',
                },
            ],
            onyomi: [],
        },
        translation: 'Bleu',
    },
    {
        kanji: '音',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '音',
                    'kana': 'オン',
                },
            ],
        },
        translation: 'Son, bruit',
    },
    {
        kanji: '昼',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '昼',
                    'kana': 'ひる',
                },
            ],
            onyomi: [
                {
                    'kanji': '昼',
                    'kana': 'チュウ',
                },
            ],
        },
        translation: 'Midi',
    },
    {
        kanji: '高',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '高',
                    'kana': 'たか.い',
                },
            ],
            onyomi: [],
        },
        translation: 'Haut, cher',
    },
    {
        kanji: '校',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '校',
                    'kana': 'コウ',
                },
            ],
        },
        translation: 'Ecole',
    },
    {
        kanji: '帰',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '帰',
                    'kana': 'かえ.る',
                },
            ],
            onyomi: [],
        },
        translation: 'Retourner',
    },
    {
        kanji: '魚',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '魚',
                    'kana': 'さかな',
                },
            ],
            onyomi: [],
        },
        translation: 'Poisson',
    },
    {
        kanji: '黒',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '黒',
                    'kana': 'くろ',
                },
            ],
            onyomi: [],
        },
        translation: 'Noir',
    },
    {
        kanji: '朝',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '朝',
                    'kana': 'あさ',
                },
            ],
            onyomi: [
                {
                    'kanji': '朝',
                    'kana': 'チョウ',
                },
            ],
        },
        translation: 'Matin',
    },
    {
        kanji: '買',
        strokes: null,
        readings: {
            kunyomi: [
                {
                    'kanji': '買',
                    'kana': 'か.う',
                },
            ],
            onyomi: [],
        },
        translation: 'Acheter',
    },
    {
        kanji: '新',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '新',
                    'kana': 'あたら.しい',
                },
            ],
            onyomi: [],
        },
        translation: 'Nouveau, neuf',
    },
    {
        kanji: '楽',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '楽',
                    'kana': 'たの.しい',
                },
            ],
            onyomi: [
                {
                    'kanji': '楽',
                    'kana': 'ガク',
                },
            ],
        },
        translation: 'Amusant, joyeux',
    },
    {
        kanji: '電',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '電',
                    'kana': 'デン',
                },
            ],
        },
        translation: 'Electricité',
    },
    {
        kanji: '駅',
        strokes: null,
        
        readings: {
            kunyomi: [],
            onyomi: [
                {
                    'kanji': '駅',
                    'kana': 'エキ',
                },
            ],
        },
        translation: 'Gare',
    },
    {
        kanji: '薬',
        strokes: null,
        
        readings: {
            kunyomi: [
                {
                    'kanji': '薬',
                    'kana': 'くすり',
                },
            ],
            onyomi: [
                {
                    'kanji': '薬',
                    'kana': 'ヤク',
                },
            ],
        },
        translation: 'Médicament',
    },
];

export default words;