import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Context from './Components/Context'; 
import FormEmpty from './Components/FormEmpty';
import TableGuests from './Components/TableGuests';
import FeedbackForm from './Components/FeedbackForm';
import BtnDeleteAll from './Components/BtnDeleleAll';
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {

  const apiGetGuests = 'https://gp-js-test.herokuapp.com/pizza/guests';
  const [guests, setGuests]=useState(JSON.parse(localStorage.getItem("guests") || "[]"));
  const [guestEatPizza, setGuestEatPizza]=useState({})
  const [vegans, setVegans]=useState(JSON.parse(localStorage.getItem("vegans") || "[]"));
  const [loading, setLoading] = useState(true);
  const [feedBackArr, setFeedBackArr] = useState(JSON.parse(localStorage.getItem('feedbacks')) || [])
  const [clearApp, setClearApp] = useState(false)

  const loadGuests = async()=>{
    const response = await fetch(apiGetGuests);
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
    setLoading(true)
     if(!localStorage.getItem('guests')){
        
      loadGuests().then(URl => {
        if(URl) {
          loadVegans(URl).then(setLoading(false))
      }
    })
  } 
    setClearApp(false)
  }, [clearApp])  

  return (
    <div className="App">
      <BrowserRouter>
      <Context.Provider value={{feedBackArr, setFeedBackArr, guests, vegans, loading, setLoading}}>
        <Switch>
       {loading ?
        <PropagateLoader 
            color={"#3650D7"} 
            loading={loading} 
            size={30} /> : (
          <Route exact path='/'>
             <BtnDeleteAll clearApp={clearApp} setClearApp={setClearApp} />
            <TableGuests guests={guests} vegans={vegans} />
          </Route> ) 
          }
          <Route path='/:name'>
            <FormEmpty />
          </Route>
          
          <Route  path='/feedback/:name'>
            <FeedbackForm  />
          </Route>
        </Switch>
        </Context.Provider>
       </BrowserRouter>
    
    </div>
  );
}

export default App;
