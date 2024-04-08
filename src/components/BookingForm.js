import { useState, useEffect } from "react"

export const BookingForm = ({formvalues, setFormValues, availableTimes, dispatch}) => {


    const handleDateChange =  e => {
        setFormValues(prevState =>  {
            return {...prevState,
                date: e.target.value}
        });
        dispatch(e.target.value);
    }

    const handleTimeChange =  e => {
        setFormValues(prevState =>  {
            return {...prevState,
                time: e.target.value}
        })
    }

    const handle_no_of_guests_change =  e => {
        setFormValues(prevState =>  {
            return {...prevState,
                no_of_guests: e.target.value}
        })
    }

    const handleOccasionChange =  e => {
        setFormValues(prevState =>  {
            return {...prevState,
                occasion: e.target.value}
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formvalues);
    }

    return (
        <>
            <form style={{display: "grid",maxWidth:" 200px", gap: "20px"}} onSubmit={handleFormSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" onChange={handleDateChange} value={formvalues.date} />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time " onChange={handleTimeChange}>
                    {availableTimes.map(t => {
                        return <option key={t}>{t}</option>
                    })}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handle_no_of_guests_change} value={formvalues.no_of_guests}/>
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" onChange={handleOccasionChange} value={formvalues.occasion}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" value="Make Your reservation" />
            </form>
        </>
    )
}