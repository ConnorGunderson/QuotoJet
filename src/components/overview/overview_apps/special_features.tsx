import { Checkbox, Form } from 'semantic-ui-react'
import { Baseline } from '../../globals/overview_baseline_form'
import { useState } from 'react'


export const SpecTools  = () => {
    const [value, setValue] = useState('');

    const handleClick = (event: MouseEvent) => value !== 'heated' ? setValue('heated') : setValue('')
    return (
        <section>
            <Baseline title='Special Tool Features'>
                <Form.Group grouped>
                    <Checkbox 
                        label='Heated Tool?'
                        value={'heated'}
                        onClick={() => handleClick}
                    />
                    <Form.Input 
                        label='Heated Tool Total'
                    />
                    <Form.Input
                        label='Misc. Costs'
                    />
                    <Form.TextArea 
                        label="Description"
                    />
                </Form.Group>
            </Baseline>
        </section>
    )
}