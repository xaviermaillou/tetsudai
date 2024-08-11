import axios from 'axios'
import config from './config.json'
import { types, validation } from 'tetsudai-common'

const API_URL = process.env.NODE_ENV === 'development' ? config.DEV_REQUEST_URL : config.PROD_REQUEST_URL

export const fetchKanjiList = async (level, grammar, collection, search, offset, setLoading) => {
    setLoading(true)
    const result = await axios.get(`${API_URL}/kanjiList/${offset}/${level}/${grammar}/${collection}/${search}`)
    validation.validateDataObjectsArray(result.data, types.BasicKanji, [])
    setLoading(false)
    return result.data
}

export const fetchVocabularyList = async (level, grammar, collection, search, offset, setLoading) => {
    setLoading(true)
    const result = await axios.get(`${API_URL}/vocabularyList/${offset}/${level}/${grammar}/${collection}/${search}`)
    validation.validateDataObjectsArray(result.data.results, types.BasicWord, [])
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
    validation.validateDataObject(result.data, types.EnrichedKanji)
    setLoading(false)
    return result.data
}

export const fetchWord = async (id, setLoading) => {
    setLoading(true)
    const result = await axios.get(`${API_URL}/word/${id}`)
    validation.validateDataObject(result.data.word, types.EnrichedWord)
    validation.validateDataObjectsArray(result.data.sentences, types.EnrichedSentence, [])
    setLoading(false)
    return result.data
}