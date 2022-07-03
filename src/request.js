import axios from 'axios'

const REQUEST_URL = 'https://frozen-coast-10724.herokuapp.com'
// const REQUEST_URL = 'http://localhost:8000'

export const fetchKanjiList = async (level, grammar, collection, search) => {
    const result = await axios(`${REQUEST_URL}/kanjiList/${level}/${grammar}/${collection}/${search}`)
    return result.data
}

export const fetchVocabularyList = async (level, grammar, collection, search) => {
    const result = await axios(`${REQUEST_URL}/vocabularyList/${level}/${grammar}/${collection}/${search}`)
    return result.data
}

export const fetchSentences = async (id) => {
    const result = await axios(`${REQUEST_URL}/sentences/${id}`)
    return result.data
}

export const fetchInflexions = async (id) => {
    const result = await axios(`${REQUEST_URL}/inflexions/${id}`)
    return result.data
}

export const fetchKanji = async (id) => {
    const result = await axios(`${REQUEST_URL}/kanji/${id}`)
    return result.data
}

export const fetchWord = async (id) => {
    const result = await axios(`${REQUEST_URL}/word/${id}`)
    return result.data
}