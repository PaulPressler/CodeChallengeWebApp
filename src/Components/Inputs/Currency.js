import { Form } from 'react-bootstrap'

const Currency = ({value, onChange}) => (
        <Form.Group controlId="currencyInput">
        <Form.Label>Currency</Form.Label>
        <Form.Control type="text" placeholder="USD" value={value} onChange={(e)=>{onChange(e.target.value)}}/>
        <Form.Text className="text-muted">
        Please enter a 3 character currency code, A-Z. Ex. "USD"
        </Form.Text>
    </Form.Group>
)

export default Currency