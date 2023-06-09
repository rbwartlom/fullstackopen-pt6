import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import AnecdoteList from './components/AnecdoteList'
import anecdoteService from './services/anecdoteService'

import { useQuery } from 'react-query'

const App = () => {

  const query = useQuery('anecdotes', anecdoteService.getAnecdotes)

  if(query.status === 'error') {
    return (
      <div>
        anecdote service not available, problems in server
      </div>
    )
  }

  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      <AnecdoteList query={query} />
    </div>
  )
}

export default App
