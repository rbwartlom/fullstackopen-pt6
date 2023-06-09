import axios from 'axios'

const baseUrl = 'http://localhost:3003/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNewAnecdote = async (content) => {
    const anecdoteObject = {
        content,
        id: getId(),
        votes: 0
    }
    const response = await axios.post('baseUrl', anecdoteObject)
    return response.data
}

const voteForAnecdote = async (id) => {
    const anecdoteUrl = `${baseUrl}/${id}`
    const anecdote = (await axios.get(anecdoteUrl)).data
    const updatedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
    }
    console.log(updatedAnecdote)
    return (await axios.put(anecdoteUrl, updatedAnecdote)).data
}

const anecdoteService = {
    getAll,
    createNewAnecdote,
    voteForAnecdote
}

export default anecdoteService