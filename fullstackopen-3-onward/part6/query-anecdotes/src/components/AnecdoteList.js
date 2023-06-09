import anecdoteService from '../services/anecdoteService'
import { useNotificationDispatch, timeNotification } from '../NotificationContext'

import { useMutation, useQueryClient } from 'react-query'

const AnecdoteList = ({ query }) => {


    const queryClient = useQueryClient('anecdotes')
    const dispatcher = useNotificationDispatch()
        
  
    const mutation = useMutation(anecdoteService.likeAnecdote, {
      onSuccess: (updatedAnecdote) => {
        const oldAnecdotes = queryClient.getQueryData()
        queryClient.setQueryData('anecdotes', oldAnecdotes.map(anecdote => {
          if (anecdote.id === updatedAnecdote.id) return updatedAnecdote
          return anecdote
        }))
        timeNotification(dispatcher, `voted for anecdote "${updatedAnecdote.content}"`, 5)
    }}
    )
    const handleVote = (anecdote) => {
      mutation.mutate(anecdote)
    }
    
    if(query.status === 'loading')
    {
      return (
        <div>loading...</div>
      )
    }
  
    const anecdotes = queryClient.getQueryData()

  
    return (
      <>
        {anecdotes.map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => handleVote(anecdote)}>vote</button>
            </div>
          </div>
        )}
      </>
    )
  }

  
export default AnecdoteList