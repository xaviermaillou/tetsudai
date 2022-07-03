import axios from 'axios'

const REQUEST_URL = 'https://frozen-coast-10724.herokuapp.com'

export const fetchKanji = async (level, grammar, collection, search) => {
    const result = await axios(`${REQUEST_URL}/kanji/${level}/${grammar}/${collection}/${search}`)
    return result.data
}

export const fetchVocabulary = async (level, grammar, collection, search) => {
    const result = await axios(`${REQUEST_URL}/vocabulary/${level}/${grammar}/${collection}/${search}`)
    return result.data
}

export const fetchSentences = async (id) => {
    const result = await axios(`${REQUEST_URL}/sentences/${id}`)
    return result.data
}