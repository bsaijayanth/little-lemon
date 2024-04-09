export const ConfirmationPage = ({formvalues}) => {
    return (
        <div>
            <div>
                <h1>Hurray! Reseration Confirmed!</h1>
                <h3>{`Table booked on ${formvalues.date} at ${formvalues.time}`}</h3>
            </div>
        </div>)

}
