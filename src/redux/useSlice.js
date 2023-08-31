import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: "Abdulaziz",
            email: "Abdulaziz@email.com",
        },
        pending: false,
        error: false,
        errorContent: ""
    },
    reducers: {
        // update: (state, action) => {
        //     state.name = action.payload.name
        //     state.email = action.payload.email
        // },
        // remove: (state) => state = {}
        updateStart: (state) => {
            state.pending = true
        },
        updateSucssess: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload
        },
        updateFailur: (state, action) => {
            state.error = true;
            state.pending = false;
            state.errorContent = action.payload
        }
    }
})

// export const { update, remove } = userSlice.actions
export const { updateFailur, updateStart, updateSucssess } = userSlice.actions

export default userSlice.reducer