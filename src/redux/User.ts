import {createSlice} from "@reduxjs/toolkit";


const User = createSlice({
    name: "user",
    initialState: {
        name: "name",
        surname: "surname",
        mail: "mail@gmail.com",
        phone: "+7 777 777 77 77",
    },
    reducers: {
        setUser(state, action) {
            Object.assign(state, action.payload)
        }
    }
})

export default User.reducer
export const {
    setUser
} = User.actions