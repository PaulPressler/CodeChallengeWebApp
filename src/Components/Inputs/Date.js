import { Form, Col} from 'react-bootstrap'

const Date = ({label, controlId, minDate = null, value, onChange}) => {

    const getTodaysDate = () => {
        const today = new window.Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if(dd<10){
                dd='0'+dd
            } 
            if(mm<10){
                mm='0'+mm
            } 
    
        return (yyyy+'-'+mm+'-'+dd).toString()
    }

    return (
        <Form.Group as={Col} controlId={controlId}>
        <Form.Label>{label}</Form.Label>
        <Form.Control as="input" type="date" min={minDate ? minDate : getTodaysDate()} placeholder={label} value={value} onChange={e=>onChange(e.target.value)}/>
        </Form.Group>
    )
}

export default Date