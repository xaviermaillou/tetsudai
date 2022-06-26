const conjugationStructure = (base, inflexions, exceptionBases) => {
    return {
        nonPast: {
            affirmative: {
                neutral: {
                    main: exceptionBases?.nonPastAffNeutral || base,
                    ending: inflexions.okurigana,
                },
                polite: {
                    main: exceptionBases?.nonPastAffPolite || base,
                    ending: inflexions.politeInterm + 'ます',
                }
            },
            negative: {
                neutral: {
                    main: exceptionBases?.nonPastNegNeutral || base,
                    ending: inflexions.connective + 'ない',
                },
                polite: {
                    main: exceptionBases?.nonPastNegPolite || base,
                    ending: inflexions.politeInterm + 'ません',
                }
            }
        },
        past: {
            affirmative: {
                neutral: {
                    main: exceptionBases?.pastAffNeutral || base,
                    ending: inflexions.past,
                },
                polite: {
                    main: exceptionBases?.pastAffPolite || base,
                    ending: inflexions.politeInterm + 'ました',
                }
            },
            negative: {
                neutral: {
                    main: exceptionBases?.pastNegNeutral || base,
                    ending: inflexions.connective + 'なかった',
                },
                polite: {
                    main: exceptionBases?.pastNegPolite || base,
                    ending: inflexions.politeInterm + 'ませんでした',
                }
            }
        }
    }
}

export const getVerbConjugation = (word) => {
    const base = word.rareKanji ?
        word.elements.map((element) => element.kana).join('').slice(0, -1)
        :
        word.elements.map((element) => element.kanji || element.kana).join('').slice(0, -1);
    const info = word.verbPrecisions;

    if (info.type === 'ichidan') {
        return conjugationStructure(base, {
            okurigana: 'る',
            politeInterm: '',
            connective: '',
            past: 'た',
        })
    }
    if (info.type === 'godan') {
        if (info.ending === 'u') {
            return conjugationStructure(base, {
                okurigana: 'う',
                politeInterm: 'い',
                connective: 'わ',
                past: 'った',
            })
        }
        if (info.ending === 'ku') {
            return conjugationStructure(base, {
                okurigana: 'く',
                politeInterm: 'き',
                connective: 'か',
                past: 'いた',
            })
        }
        if (info.ending === 'gu') {
            return conjugationStructure(base, {
                okurigana: 'ぐ',
                politeInterm: 'ぎ',
                connective: 'が',
                past: 'いだ',
            })
        }
        if (info.ending === 'su') {
            return conjugationStructure(base, {
                okurigana: 'す',
                politeInterm: 'し',
                connective: 'さ',
                past: 'した',
            })
        }
        if (info.ending === 'mu') {
            return conjugationStructure(base, {
                okurigana: 'む',
                politeInterm: 'み',
                connective: 'ま',
                past: 'んだ',
            })
        }
        if (info.ending === 'bu') {
            return conjugationStructure(base, {
                okurigana: 'ぶ',
                politeInterm: 'び',
                connective: 'ば',
                past: 'んだ',
            })
        }
        if (info.ending === 'nu') {
            return conjugationStructure(base, {
                okurigana: 'ぬ',
                politeInterm: 'に',
                connective: 'な',
                past: 'んだ',
            })
        }
        if (info.ending === 'ru') {
            return conjugationStructure(base, {
                okurigana: 'る',
                politeInterm: 'り',
                connective: 'ら',
                past: 'った',
            })
        }
        if (info.ending === 'tsu') {
            return conjugationStructure(base, {
                okurigana: 'つ',
                politeInterm: 'ち',
                connective: 'た',
                past: 'った',
            })
        }
    }
    if (info.type === 'suru') {
        return conjugationStructure(base, {
            okurigana: 'る',
            politeInterm: '',
            connective: '',
            past: 'た',
        }, {
            nonPastAffNeutral: 'す',
            nonPastAffPolite: 'し',
            nonPastNegNeutral: 'し',
            nonPastNegPolite: 'し',
            pastAffNeutral: 'し',
            pastAffPolite: 'し',
            pastNegNeutral: 'し',
            pastNegPolite: 'し'
        })
    }
    if (info.type === 'kuru') {
        return conjugationStructure(base, {
            okurigana: 'る',
            politeInterm: '',
            connective: '',
            past: 'た',
        }, {
            nonPastAffNeutral: 'く',
            nonPastAffPolite: 'き',
            nonPastNegNeutral: 'こ',
            nonPastNegPolite: 'き',
            pastAffNeutral: 'き',
            pastAffPolite: 'き',
            pastNegNeutral: 'こ',
            pastNegPolite: 'き'
        })
    }
    if (info.type === 'iku') {
        return conjugationStructure(base, {
            okurigana: 'く',
            politeInterm: 'き',
            connective: 'か',
            past: 'った',
        })
    }
}

export const dispatchInflexion = (word) => {
    if (word.verbPrecisions) {
        return getVerbConjugation(word)
    }
}