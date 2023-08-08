import axios from 'axios'
import config from './config.json'

const API_URL = process.env.NODE_ENV === 'development' ? config.DEV_REQUEST_URL : config.PROD_REQUEST_URL

export const fetchKanjiList = async (level, grammar, collection, search, offset, setLoading) => {
    setLoading(true)
    const result = await axios.get(`${API_URL}/kanjiList/${offset}/${level}/${grammar}/${collection}/${search}`)
    setLoading(false)
    return result.data
}

export const fetchVocabularyList = async (level, grammar, collection, search, offset, setLoading) => {
    setLoading(true)
    const result = await axios.get(`${API_URL}/vocabularyList/${offset}/${level}/${grammar}/${collection}/${search}`)
    setLoading(false)
    return result.data
}

export const fetchSentences = async (id, setLoading) => {
    setLoading(true)
    const result = await axios.get(`${API_URL}/sentences/${id}`)
    setLoading(false)
    return result.data
}

export const fetchSentenceData = async (sentence) => {
    const result = await axios.post(`${API_URL}/foundSentence`, sentence)
    return result.data
}

export const fetchKanji = async (id, setLoading) => {
    setLoading(true)
    const result = await axios.get(`${API_URL}/kanji/${id}`)
    setLoading(false)
    return result.data
}

export const fetchWord = async (id, setLoading) => {
    setLoading(true)
    const result = await axios.get(`${API_URL}/word/${id}`)
    setLoading(false)
    return result.data
}

export const fetchKanjiTraining = async (level, grammar, collection) => {
    const result = await axios.get(`${API_URL}/kanjiTrainingList/${level}/${grammar}/${collection}`)
    return result.data
}

export const fetchVocabularyTraining = async (level, grammar, collection) => {
    const result = await axios.get(`${API_URL}/vocabularyTrainingList/${level}/${grammar}/${collection}`)
    return result.data
}