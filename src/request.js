import axios from 'axios'

const REQUEST_URL = 'https://frozen-coast-10724.herokuapp.com'
// const REQUEST_URL = 'http://51.77.230.232:8000'
// const REQUEST_URL = 'http://localhost:8000'

export const fetchKanjiList = async (level, grammar, collection, search, offset) => {
    const result = await axios.get(`${REQUEST_URL}/kanjiList/${offset}/${level}/${grammar}/${collection}/${search}`)
    return result.data
}

export const fetchVocabularyList = async (level, grammar, collection, search, offset) => {
    const result = await axios.get(`${REQUEST_URL}/vocabularyList/${offset}/${level}/${grammar}/${collection}/${search}`)
    return result.data
}

export const fetchSentences = async (id) => {
    const result = await axios.get(`${REQUEST_URL}/sentences/${id}`)
    return result.data
}

export const fetchKanji = async (id) => {
    const result = await axios.get(`${REQUEST_URL}/kanji/${id}`)
    return result.data
}

export const fetchWord = async (id) => {
    const result = await axios.get(`${REQUEST_URL}/word/${id}`)
    return result.data
}

export const fetchKanjiTraining = async (level, grammar, collection) => {
    const result = await axios.get(`${REQUEST_URL}/kanjiTrainingList/${level}/${grammar}/${collection}`)
    return result.data
}

export const fetchVocabularyTraining = async (level, grammar, collection) => {
    const result = await axios.get(`${REQUEST_URL}/vocabularyTrainingList/${level}/${grammar}/${collection}`)
    return result.data
}