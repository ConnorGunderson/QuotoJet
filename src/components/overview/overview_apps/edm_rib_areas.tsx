import { Form, Segment, Divider } from 'semantic-ui-react'
import { Baseline } from '../../globals/overview_baseline_form'

export const EdmRib = () => {
    return (
        <div>
            <Baseline title='# of EDM Areas (Ribs)'>
                <Form.Field 
                    type='number'
                    label='Amount'
                    control='input'
                />
                <Segment basic>
                    <Divider horizontal>Subtotal</Divider>
                    <Segment raised>
                        0  
                    </Segment>
                </Segment>
            </Baseline>
        </div>
    )
}