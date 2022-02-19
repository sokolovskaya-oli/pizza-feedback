import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import FormEmpty from './Components/FormEmpty';
import TableGuests from './Components/TableGuests';

function App() {

  const apiUrlGetGuests = 'https://gp-js-test.herokuapp.com/pizza/guests';
  const [guests, setGuests]=useState({})
  const [guestEatPizza, setGuestEatPizza]=useState({})
  const [vegans, setVegans]=useState({})
  const [loading, setLoading] = useState(true);



  const loadGuests = async()=>{
    const response = await fetch(apiUrlGetGuests);
    const data = await response.json()
  
    if (data) {
      const guestFilterData = data.party.filter(({ eatsPizza }) => eatsPizza === true )
     setGuests(data.party);
     setGuestEatPizza(guestFilterData)
     localStorage.setItem('guests', JSON.stringify(data.party) || "[]")
     return getGuestLink(guestFilterData);
   }
 }
  const getGuestLink = (guestFilterData) => {
    let link = guestFilterData.map(({ name })=> name).toString().replace(/ /ig, '%20')
    return `https://gp-js-test.herokuapp.com/pizza/world-diets-book/${link}`
  }
   const loadVegans = async(urlGuest) => {   
    const response = await fetch(urlGuest);
    const data = await response.json()
      if (data) {
        setVegans(data.diet.filter(({ isVegan })=> isVegan === true))
        localStorage.setItem('vegans', JSON.stringify(data.diet.filter(({ isVegan })=> isVegan === true)))
        } 
  }

  useEffect(() => {  
     loadGuests().then(URl => {
      if(URl) {
        loadVegans(URl)
      }
     })
  }, [])   


  return (
    
     
    <div className="App">

       <TableGuests />
       <FormEmpty/>
    </div>
  );
}

export default App;
