import {combineReducers, configureStore} from '@reduxjs/toolkit'
import modalReducer from '../../entities/modal/model/slice/modalSlice'

const rootReducer = combineReducers({
    modalReducer
})

export const store = configureStore({
    reducer: {rootReducer}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
