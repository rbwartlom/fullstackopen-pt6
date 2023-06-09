import axios from 'axios'

const baseUrl = 'http://localhost:3003/anecdotes'

const getAnecdotes = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const postAnecdote = async (content) => {
    const requestBody = {
        content,
        votes: 0,
    }
    
    const response = await axios.post(baseUrl, requestBody)
    return response.data
}

const likeAnecdote = async (anecdote) => {
    const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
    }
    
    const response = await axios.put(`${baseUrl}/${anecdote.id}`,updatedAnecdote)
    return response.data
}

const services = {
    getAnecdotes,
    postAnecdote,
    likeAnecdote
}
export default services