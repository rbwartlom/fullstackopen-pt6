import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadAnecdotes } from './reducers/anecdoteReducer'

import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import AnecdoteFilter from './components/AnecdoteFilter'
import Notification from './components/Notification'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadAnecdotes())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 

  return (
    <div>
      <Notification />
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteFilter />
      <AnecdoteForm />
    </div>
  )
}

export default App