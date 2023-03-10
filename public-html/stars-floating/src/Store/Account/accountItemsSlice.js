import { createSlice } from "@reduxjs/toolkit";
import { quickBarLoad } from "../../ui/Actions/quick-bar/quick-bar";

export const accountItemsSlice = createSlice({
    name: 'accountItems',
    initialState: {
        allAccountItems: []
    },
    reducers: {
        increment: (state) => {
            state += 1
        },
        decrement: (state) => {
            state -= 1
        },
        incrementByAmount: (state, action) => {
            state += action.payload
        },
        fetchAllItems: (state, action) => {
            state.allAccountItems = action.payload
        }
    }
})

//destructure the actions
export const { increment, decrement, incrementByAmount, fetchAllItems } = accountItemsSlice.actions

//get the value of the state
export const stateAllAccountItems = (state) => {
    return state.accountItems.allAccountItems
}

//fetch the state with a thunk
export const getAllAccountItems = () => async (dispatch) => {
    let jwtToken = "Bearer" + " " + localStorage.getItem("jwt")

    const response = await fetch('http://localhost:4202/account-items/', {
        method: "GET",
        headers: {
            authorization: jwtToken
        }
    })
        .then((response) => response.json())
        .catch((error) => console.error(error))
    dispatch(fetchAllItems(response.body.allAccountItems))
}