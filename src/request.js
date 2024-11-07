import axios from 'axios'
import config from './config.json'
import { types, validation } from 'tetsudai-common'

const API_URL = process.env.NODE_ENV === 'development' ? config.DEV_REQUEST_URL : config.PROD_REQUEST_URL

const apiGet = async (url, setLoading) => {
    try {
        const result = await axios.get(url)
        return result.data
    }
    catch(err) {
        console.error(err)
    }
    finally {
        if (!!setLoading) setLoading(false)
    }
}

export const fetchKanjiList = async (level, grammar, collection, search, offset, setLoading) => {
    setLoading(true)
    const result = await apiGet(`${API_URL}/kanjiList/${offset}/${level}/${grammar}/${collection}/${search}`, setLoading)
    validation.validateDataObjectsArray(result, types.BasicKanji, [])
    return result
}

export const fetchVocabularyList = async (level, grammar, collection, search, offset, setLoading) => {
    setLoading(true)
    const result = await apiGet(`${API_URL}/vocabularyList/${offset}/${level}/${grammar}/${collection}/${search}`, setLoading)
    validation.validateDataObjectsArray(result?.results, types.BasicWord, [])
    return result
}

export const fetchKanji = async (id, setLoading) => {
    setLoading(true)
    const result = await apiGet(`${API_URL}/kanji/${id}`, setLoading)
    validation.validateDataObject(result, types.EnrichedKanji)
    return result
}

export const fetchWord = async (id, setLoading) => {
    setLoading(true)
    const result = await apiGet(`${API_URL}/word/${id}`, setLoading)
    validation.validateDataObject(result?.word, types.EnrichedWord)
    validation.validateDataObjectsArray(result?.sentences, types.EnrichedSentence, [])
    return result
}