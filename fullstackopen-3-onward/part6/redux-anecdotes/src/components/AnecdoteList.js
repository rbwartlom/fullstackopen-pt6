import { useSelector, useDispatch } from 'react-redux'

import { createVote } from '../reducers/anecdoteReducer'
import { timeNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {

  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes.filter(anecdote => anecdote.content.includes(filter)))
  const dispatch = useDispatch()

  const vote = async (anecdote) => {
    dispatch(createVote(anecdote.id))
    dispatch(timeNotification(`voted for ${anecdote.content}`, 5))
  }

  return (
    <>
    {anecdotes
      .map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList