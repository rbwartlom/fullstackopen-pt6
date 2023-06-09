import { useReducer } from "react"
import { createContext, useContext } from "react"

const notificationReducer = (state, action) => {
    switch(action.type){
        case 'SET':
            return action.payload
        case 'CLEAR':
            return ''
        default:
            return state
    }
}

const NotificationContext = createContext()

export const useNotificationValue = () => {
    const valueAndDispatch = useContext(NotificationContext)
    return valueAndDispatch[0]
}

export const useNotificationDispatch = () => {
    const valueAndDispatch = useContext(NotificationContext)
    return valueAndDispatch[1]
}

export const timeNotification = (dispatcher, text, timeInSeconds) => {
    dispatcher({type: 'SET', payload: text})
    setTimeout(() => {
        dispatcher({type: 'CLEAR'})
    }, timeInSeconds*1000)
}

export const NotificationContextWrapper = (props) => {
    const [notificationText, notificationDispatcher] = useReducer(notificationReducer, '')

    return (
    <NotificationContext.Provider value={[notificationText, notificationDispatcher]}>
        {props.children}
    </NotificationContext.Provider>
    )
}

export default NotificationContext