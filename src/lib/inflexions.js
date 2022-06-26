const conjugationStructure = (base, inflexions, exceptionBases) => {
    return {
        nonPast: {
            affirmative: {
                neutral: {
                    main: exceptionBases?.nonPastAffNeutral || base,
                    okurigana: inflexions.nonPastAffNeutral,
                },
                polite: {
                    main: exceptionBases?.nonPastAffPolite || base,
                    okurigana: inflexions.nonPastAffPolite,
                }
            },
            negative: {
                neutral: {
                    main: exceptionBases?.nonPastNegNeutral || base,
                    okurigana: inflexions.nonPastNegNeutral,
                },
                polite: {
                    main: exceptionBases?.nonPastNegPolite || base,
                    okurigana: inflexions.nonPastNegPolite,
                }
            }
        },
        past: {
            affirmative: {
                neutral: {
                    main: exceptionBases?.pastAffNeutral || base,
                    okurigana: inflexions.pastAffNeutral,
                },
                polite: {
                    main: exceptionBases?.pastAffPolite || base,
                    okurigana: inflexions.pastAffPolite,
                }
            },
            negative: {
                neutral: {
                    main: exceptionBases?.pastNegNeutral || base,
                    okurigana: inflexions.pastNegNeutral,
                },
                polite: {
                    main: exceptionBases?.pastNegPolite || base,
                    okurigana: inflexions.pastNegPolite,
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
            nonPastAffNeutral: 'る',
            nonPastAffPolite: 'ます',
            nonPastNegNeutral: 'ない',
            nonPastNegPolite: 'ません',
            pastAffNeutral: 'た',
            pastAffPolite: 'ました',
            pastNegNeutral: 'なかった',
            pastNegPolite: 'ませんでした'
        })
    }
    if (info.type === 'godan') {
        if (info.ending === 'u') {
            return conjugationStructure(base, {
                nonPastAffNeutral: 'う',
                nonPastAffPolite: 'います',
                nonPastNegNeutral: 'わない',
                nonPastNegPolite: 'いません',
                pastAffNeutral: 'った',
                pastAffPolite: 'いました',
                pastNegNeutral: 'わなかった',
                pastNegPolite: 'いませんでした'
            })
        }
        if (info.ending === 'ku') {
            return conjugationStructure(base, {
                nonPastAffNeutral: 'く',
                nonPastAffPolite: 'きます',
                nonPastNegNeutral: 'かない',
                nonPastNegPolite: 'きません',
                pastAffNeutral: 'いた',
                pastAffPolite: 'きました',
                pastNegNeutral: 'かなかった',
                pastNegPolite: 'きませんでした'
            })
        }
        if (info.ending === 'gu') {
            return conjugationStructure(base, {
                nonPastAffNeutral: 'ぐ',
                nonPastAffPolite: 'ぎます',
                nonPastNegNeutral: 'がない',
                nonPastNegPolite: 'ぎません',
                pastAffNeutral: 'いだ',
                pastAffPolite: 'ぎました',
                pastNegNeutral: 'がなかった',
                pastNegPolite: 'ぎませんでした'
            })
        }
        if (info.ending === 'su') {
            return conjugationStructure(base, {
                nonPastAffNeutral: 'す',
                nonPastAffPolite: 'します',
                nonPastNegNeutral: 'さない',
                nonPastNegPolite: 'しません',
                pastAffNeutral: 'した',
                pastAffPolite: 'しました',
                pastNegNeutral: 'さなかった',
                pastNegPolite: 'しませんでした'
            })
        }
        if (info.ending === 'mu') {
            return conjugationStructure(base, {
                nonPastAffNeutral: 'む',
                nonPastAffPolite: 'みます',
                nonPastNegNeutral: 'まない',
                nonPastNegPolite: 'みません',
                pastAffNeutral: 'んだ',
                pastAffPolite: 'みました',
                pastNegNeutral: 'まなかった',
                pastNegPolite: 'みませんでした'
            })
        }
        if (info.ending === 'bu') {
            return conjugationStructure(base, {
                nonPastAffNeutral: 'ぶ',
                nonPastAffPolite: 'びます',
                nonPastNegNeutral: 'ばない',
                nonPastNegPolite: 'びません',
                pastAffNeutral: 'んだ',
                pastAffPolite: 'びました',
                pastNegNeutral: 'ばなかった',
                pastNegPolite: 'びませんでした'
            })
        }
        if (info.ending === 'nu') {
            return conjugationStructure(base, {
                nonPastAffNeutral: 'ぬ',
                nonPastAffPolite: 'にます',
                nonPastNegNeutral: 'なない',
                nonPastNegPolite: 'にません',
                pastAffNeutral: 'んだ',
                pastAffPolite: 'にました',
                pastNegNeutral: 'ななかった',
                pastNegPolite: 'にませんでした'
            })
        }
        if (info.ending === 'ru') {
            return conjugationStructure(base, {
                nonPastAffNeutral: 'る',
                nonPastAffPolite: 'ります',
                nonPastNegNeutral: 'らない',
                nonPastNegPolite: 'りません',
                pastAffNeutral: 'った',
                pastAffPolite: 'りました',
                pastNegNeutral: 'らなかった',
                pastNegPolite: 'りませんでした'
            })
        }
        if (info.ending === 'tsu') {
            return conjugationStructure(base, {
                nonPastAffNeutral: 'つ',
                nonPastAffPolite: 'ちます',
                nonPastNegNeutral: 'たない',
                nonPastNegPolite: 'ちません',
                pastAffNeutral: 'った',
                pastAffPolite: 'ちました',
                pastNegNeutral: 'たなかった',
                pastNegPolite: 'ちませんでした'
            })
        }
    }
    if (info.type === 'suru') {
        return conjugationStructure(base, {
            nonPastAffNeutral: 'る',
            nonPastAffPolite: 'ます',
            nonPastNegNeutral: 'ない',
            nonPastNegPolite: 'ません',
            pastAffNeutral: 'た',
            pastAffPolite: 'ました',
            pastNegNeutral: 'なかった',
            pastNegPolite: 'ませんでした'
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
            nonPastAffNeutral: 'る',
            nonPastAffPolite: 'ます',
            nonPastNegNeutral: 'ない',
            nonPastNegPolite: 'ません',
            pastAffNeutral: 'た',
            pastAffPolite: 'ました',
            pastNegNeutral: 'なかった',
            pastNegPolite: 'ませんでした'
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
            nonPastAffNeutral: 'く',
            nonPastAffPolite: 'きます',
            nonPastNegNeutral: 'かない',
            nonPastNegPolite: 'きません',
            pastAffNeutral: 'った',
            pastAffPolite: 'きました',
            pastNegNeutral: 'かなかった',
            pastNegPolite: 'きませんでした'
        })
    }
}