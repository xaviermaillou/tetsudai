export const collections = {
    0: "Toutes",
    1: "150 kanjis essentiels",
}

export const classes = {
    0: "Toutes",
    1: "Nom commun",
    2: "Nom propre",
    3: "Verbe",
    4: "Adjectif",
    5: "Adverbe",
    6: "Conjonction",
    7: "Adjectif démonstratif",
    8: "Pronom",
    9: "Particule",
    10: "Expression",
    11: "Copule",
}

export const levels = {
    0: "Tous",
    1: "N5",
    2: "N4",
    3: "N3",
    4: "N2",
    5: "N1",
}

export const kinds = {
    0: "Eléments",
    1: "Kanjis",
    2: "Vocabulaire",
}

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}