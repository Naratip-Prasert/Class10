import  { createSlice,PayloadAction} from "@reduxjs/toolkit"
import { BookingItem } from "../../../interface"

type BookState = {
    bookItems : BookingItem[]
}

const initialState:BookState = {bookItems:[]}

export const bookSlice = createSlice({
    name:"booking",
    initialState,
    reducers:{
        addBooking: (state,action:PayloadAction<BookingItem>)=>{
            state.bookItems.push(action.payload)
        },
        removeBooking:(state,action:PayloadAction<BookingItem>)=>{
          const remainItems =  state.bookItems.filter( Object => {
                return((Object.nameLastname !== action.payload.nameLastname)
                        || (Object.tel !== action.payload.tel)
                        || (Object.venue !== action.payload.venue)
                        || (Object.bookDate !== action.payload.bookDate))
            })
            state.bookItems = remainItems
        }
    }
})

export const { addBooking,removeBooking } = bookSlice.actions
export default bookSlice.reducer