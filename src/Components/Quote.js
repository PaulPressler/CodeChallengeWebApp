import { Jumbotron} from 'react-bootstrap';

const Quote = ({total, currency, quoteId}) => (
    <Jumbotron style={{ marginTop: '50px'}}>
    <h1>Quote Results</h1>
    <p>
        The result of your quote is as follows: <br/> <br/>
        Total: {total && total.toFixed(2)} {currency}<br/>
        Quote ID: {quoteId}
    </p>
    </Jumbotron>  
)

export default Quote;