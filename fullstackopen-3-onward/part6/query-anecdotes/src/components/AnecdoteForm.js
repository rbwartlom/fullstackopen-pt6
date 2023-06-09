import { useMutation, useQueryClient } from "react-query"

import anecdoteService from "../services/anecdoteService"
import { timeNotification, useNotificationDispatch } from "../NotificationContext"

const AnecdoteForm = () => {

  const client = useQueryClient()
  const dispatcher = useNotificationDispatch()


  const mutation = useMutation(anecdoteService.postAnecdote, {
    onSuccess: ({content}) => {
      client.invalidateQueries('anecdotes')
      timeNotification(dispatcher, `successfully added notification with title ${content}`, 5)
    },
    onError: () => {
      timeNotification(dispatcher, `unsuccessful, anecdotes must be at least 5 charachters long`, 5)
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    mutation.mutate(content)
    console.log('new anecdote')
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
