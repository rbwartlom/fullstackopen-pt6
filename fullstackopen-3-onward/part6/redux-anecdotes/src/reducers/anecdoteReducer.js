import { createSlice } from '@reduxjs/toolkit'

import anecdoteService from '../services/anecdoteService'

/*
const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
*/



const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action) {
      return state.map(anecdote => {
        if(anecdote.id === action.payload.id) {
          return action.payload
        }
        return anecdote
      }).sort((a, b) => {
        return b.votes - a.votes
      })
    },
    appendAnecdote(state, action) {
      const quoteObject = action.payload
      state.push(quoteObject)
    },
    setAllAnecdotes(state, action) {
      return action.payload
    } 
  }
})

export const { addVote, appendAnecdote, setAllAnecdotes } = anecdoteSlice.actions

export const loadAnecdotes = () => {
  return async dispatch => {
    anecdoteService.getAll()
    .then(anecdoteList => {
      dispatch(setAllAnecdotes(anecdoteList))
    })
  }
}

export const newAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNewAnecdote(content)
    dispatch(appendAnecdote(anecdote))
  }
}

export const createVote = (id) => {
  return async (dispatch) => {
    anecdoteService.voteForAnecdote(id)
      .then(updatedAnecdote => {
        dispatch(addVote(updatedAnecdote))
      })
  }
}

export default anecdoteSlice.reducer