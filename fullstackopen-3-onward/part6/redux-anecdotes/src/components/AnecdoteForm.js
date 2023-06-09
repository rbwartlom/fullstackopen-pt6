import { useDispatch } from 'react-redux'

import { newAnecdote } from '../reducers/anecdoteReducer'
import { timeNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()


    const handleSubmit = async (event) => {
        event.preventDefault()
        const content = event.target.content.value
        dispatch(newAnecdote(content))
        dispatch(timeNotification(`Created new anecdote with content "${content}"`, 5))
      }
    
    return (
        <>
        <h2>create new</h2><form onSubmit={handleSubmit}>
            <div><input name='content' /></div>
            <button>create</button>
        </form>
        </>
    )
}

export default AnecdoteForm