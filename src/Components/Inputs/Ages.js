import { Form } from 'react-bootstrap'

const Ages = ({value, onChange}) => (
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Ages</Form.Label>
    <Form.Control type="text" placeholder="Enter ages" value={value} onChange={(e)=>{onChange(e.target.value)}}/>
    <Form.Text className="text-muted">
      Please enter a comma delimited list of ages. Ex. "51,48,19"
    </Form.Text>
  </Form.Group>
)

export default Ages