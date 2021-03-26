import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap'
import Header from './Components/Header'
import Ages from './Components/Inputs/Ages'
import Currency from './Components/Inputs/Currency'
import Date from './Components/Inputs/Date'
import Quote from './Components/Quote'
import {ValidateFields} from './validation'

const App = () => {
  const [JWT, setJWT] = useState("")
  const [ages, setAges] = useState("")
  const [currency, setCurrency] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [quote, setQuote] = useState(null)

  // Authenticate user and store JWT
  useEffect(() => {
    // User creds for validation
    const data = { username: 'Paul Pressler', password: 'password' }

    fetch('/authentication', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(data => { setJWT(data) })
    .catch((error) => { alert("Authentication failed.") });
  }, [])

  /** Sends a quote request to the server. Returns quote data object. */
  const sendQuoteRequest = () => {
    const data = {
      "age": ages.split(',').map(Number).filter(value => !Number.isNaN(value) && value !== 0),
      "currency_id": currency,
      "start_date": startDate,
      "end_date": endDate
    };

    fetch('/quotation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JWT
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.status === 200) return response.json()
      else response.text().then(txt=>alert(txt))
    })
    .then(data => { setQuote(data) })
    .catch((error) => { alert(error) });
  }

  /** Handles the user clicking the Get Quote Button */
  const quoteOnClick = () => {
    if (ValidateFields(ages, currency, startDate, endDate)){
      sendQuoteRequest()
    }
  }

  return <div>
    <Header/>
    <Form>
      <Ages value={ages} onChange={setAges}/>
      <Currency value={currency} onChange={val=>{val.length <= 3 && setCurrency(val.toUpperCase())}}/>
      <Form.Row>
        <Date
          label="Start Date"
          controlId="startDate"
          value={startDate} 
          onChange={date=>{
            setStartDate(date)
            setEndDate("")
          }}
        />
        <Date label="End Date" minDate={startDate? startDate : null} controlId="endDate" value={endDate} onChange={setEndDate}/>
      </Form.Row>

      <Button 
        variant="primary"
        type="button"
        onClick={quoteOnClick}
        style={{width: '100%'}}
      >
        Get Quote
      </Button>
      {quote && <Quote total={quote.total || ''} currency={quote.currency_Id || ''} quoteId={quote.quotation_Id || ''}/>}
    </Form>
  </div>
}

export default App;
