import { createSlice } from "@reduxjs/toolkit";
const initialStateData = {
    status: false,
    email:null,
    name:null,
    profile: null,
}
const userSlice = createSlice({
    name:'user',
    initialState:initialStateData,
    reducers: {
        loginUser : (state,action)=> {
            const {email,name,profile} = action.payload;
            state.status = true
            state.email = email;
            state.name = name;
            state.profile = profile;
        },
        logoutUser: (state,_)=> {
            state.status = false
            state.email = null;
            state.name = null;
            state.profile = null;
        }
    }
})
export const {loginUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;