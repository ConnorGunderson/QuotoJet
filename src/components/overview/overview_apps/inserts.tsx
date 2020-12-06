import { Segment, Accordion, Form, Divider } from 'semantic-ui-react'
import { matOptions, dimensionPanels } from '../../globals/globalVars'
import { Baseline } from '../../globals/overview_baseline_form'

export const Inserts = () => {
    return (
        <section>
            <Baseline title='Inserts'>
                <Form.Group>
                    <Form.Select
                        fluid
                        label='Insert Material'
                        placeholder='Select Material'
                        options={matOptions}
                    />
                </Form.Group>
                <Accordion as={Form.Field} panels={dimensionPanels} />
                <Segment basic>
                    <Divider fitted horizontal># of Inserts</Divider>
                    <Segment raised>
                        0  
                    </Segment>
                    <Divider fitted horizontal>CNC Hours</Divider>
                    <Segment raised>
                        0  
                    </Segment>
                    <Divider fitted horizontal> Subtotal</Divider>
                    <Segment raised>
                        0  
                    </Segment>
                </Segment>
            </Baseline>
        </section>
    )
}