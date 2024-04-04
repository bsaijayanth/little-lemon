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

const SpecialComments  = () => {

    return (
        <textarea>

        </textarea>
    )
}


export const BookingPage = () => {
    return <>
        <h1>Reserve your table</h1>
        <section>
            <GuestName />
            <GuestsCount/>
            <SpecialComments/>
        </section>
    </>
}