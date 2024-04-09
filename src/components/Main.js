import { Routes, Route } from 'react-router-dom';
import { useState, useEffect, useReducer } from "react"
import { HomePage } from "./HomePage";
import { BookingPage } from "./BookingPage";
import fakeAPI from '../fakeApi';
import { ConfirmationPage} from "./ConfirmationPage";
const { fetchAPI, submitAPI} = fakeAPI;


// const availableTimes = ["17:00","18:00","19:00","20:00","21:00","22:00"];

export const updateTimes = () => {
    // return {availableTimes: availableTimes};
}

// export const inititalizeTimes = () => {
//     return {availableTimes: availableTimes};
// }


export const Main = () => {

    const [availableTimes, setAvailableTimes] = useState([]);

    const inititalizeTimes = () => {
        return {availableTimes: availableTimes};
    }

    const updateTimes = () => {
        return {availableTimes: availableTimes};
    }


    const [state, dispatch] = useReducer(updateTimes, inititalizeTimes())

    const [formvalues, setFormValues] = useState({
        date: new Date().toISOString().slice(0,10),
        time: "",
        no_of_guests: 0,
        occasion: "Birthday"
    });


    // const [selectedDate, setSelectedDate] = useState(new Date().toLocaleDateString());
    

//   useEffect(() => {
//     const d = fetchAPI(new Date(selectedDate));
//     setAvailableTimes(d);
//   },[]);

  useEffect(() => {
    const d = fetchAPI(new Date(formvalues.date));
    setAvailableTimes(d);
    console.log(new Date(formvalues.date).toLocaleDateString(), d);
  },[formvalues.date])




    return(<main>
      <Routes> 
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage availableTimes= {availableTimes} dispatch={dispatch} formvalues={formvalues} setFormValues={setFormValues}/>}></Route>
            <Route path="/confirm" element={<ConfirmationPage formvalues={formvalues} />}></Route>
        </Routes>
    </main>)
}
