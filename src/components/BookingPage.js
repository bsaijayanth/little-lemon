import { BookingForm } from "./BookingForm";
import { useState, useEffect } from "react"



export const BookingPage = ({formvalues, setFormValues, availableTimes, dispatch}) => {

    return (
        <div>
            <div>
                <h1>Reserve your table</h1>
                <section className="booking-section">
                    <BookingForm formvalues={formvalues} setFormValues={setFormValues} availableTimes={availableTimes} dispatch={dispatch}/>
                    {/* <SpecialComments/> */}
                </section>
            </div>
        </div>)

}