import { createSlice } from '@reduxjs/toolkit'

interface ModalState {
	isModal: boolean
}

const initialState: ModalState = {
    isModal: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        closeModal: (state) => {
            console.log()
            state.isModal = false
        },
        opneModal: (state) => {
            state.isModal = true
        }
    }
})

export default modalSlice.reducer