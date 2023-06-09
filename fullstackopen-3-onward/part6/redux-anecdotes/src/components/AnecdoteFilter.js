import { changeFilter } from "../reducers/filterReducer"
import { useDispatch } from 'react-redux'

const AnecdoteFilter = () => {
    const dispatch = useDispatch()

    const handleFilterChange = (event) => {
        const input = event.target.value
        dispatch(changeFilter(input))
    }

    return (
        <div className="filter">
        <span>filter </span>
        <input onChange={handleFilterChange} />
        </div>
    )
}

export default AnecdoteFilter