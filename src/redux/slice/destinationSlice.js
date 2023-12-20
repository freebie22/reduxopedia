import { createSlice } from "@reduxjs/toolkit";
import { resetReduxOPedia } from "../action/actions";

const initialState = () => {
    return {
        destinations: [
            {
                name : "Hong Kong",
                days: 7,
                fact: "World'd longest covered escalator"
            },
            {
                name : "Japan",
                days: 10,
                fact: "Japan is mostly mountains"
            },
            {
                name : "New Zeland",
                days: 14,
                fact: "Last country in the world to be inhabited by humans"
            }
        ],
        selectedDestination: undefined
    };
};

export const destinationSlice = createSlice({
    name: "destination",
    initialState: initialState,
    reducers: {
        destinationClicked : (state, action) => {
            state.selectedDestination = action.payload;
        },
        resetDestination : (state) => {
            state.selectedDestination = undefined;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(resetReduxOPedia, (state) => {
          state.selectedDestination = undefined
        });
      }
})

export const destinationReducer = destinationSlice.reducer;
export const {destinationClicked, resetDestination} = destinationSlice.actions;
