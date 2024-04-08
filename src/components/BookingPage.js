import { BookingForm } from "./BookingForm";
import { useState, useEffect } from "react"

const GuestName = () => {
    return (
        <>
        <label for="name">Guest Name</label>
        <input type="text" name="name" id="name" autoFocus></input>
        </>
    )
}
const GuestsCount = () => {
    return (
        <>
            <span>-</span>
            <input type="number" name="guestcount"/>
            <span>+</span>
        </>
    )
}

const datePicker = () => {

}

const occasion = () => {
    
}

// const SpecialComments  = () => {

//     return (
//         <textarea>

//         </textarea>
//     )
// }


export const BookingPage = ({formvalues, setFormValues, availableTimes, dispatch}) => {

    return <>
        <h1>Reserve your table</h1>
        <section className="booking-section">
            <BookingForm formvalues={formvalues} setFormValues={setFormValues} availableTimes={availableTimes} dispatch={dispatch}/>
            {/* <SpecialComments/> */}
        </section>
    </>
}