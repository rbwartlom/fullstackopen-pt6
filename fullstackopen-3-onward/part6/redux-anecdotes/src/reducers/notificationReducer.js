import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        resetNotification(state, action) {
            return ''
        }
    }
}) 

export const { setNotification, resetNotification } = notificationSlice.actions

export const timeNotification = (content, timeInSeconds) => {
    return async (dispatch) => {
        dispatch(content)
        setTimeout(() => {
            dispatch('')
        }, timeInSeconds*1000)
    }
}

export default notificationSlice.reducer