import { Jumbotron} from 'react-bootstrap';

const Header = ({authenticating = false}) => (
    <Jumbotron style={{ marginTop: '50px'}}>
    <h1>Code Challenge Quote</h1>
    <p>
        Enter your information below and press "Get Quote" to request a quote from the API. <br/>
        {authenticating && 
            <span style={{ color: 'red' }}>
                The application has not yet successfully authenticated the session. <br/>
                Quote requests may be unsuccessful while this message is visible. <br/>
                Refresh the page if this message presists. <br/>
            </span>
        }
    </p>
    </Jumbotron>  
)

export default Header;
