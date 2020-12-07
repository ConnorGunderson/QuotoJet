import { useDispatch, useSelector } from 'react-redux'
import { Segment, Form, Divider, Checkbox } from 'semantic-ui-react'
import { Baseline } from '../ov_baseline'
import { enableValve, disableValve, alterDrops } from '../../../features/overview-logic/man_logic'


export const UniMan = () => {
    const subTotal = useSelector((state: any) => state.manifold[0] * state.manifold[1])
    const valveStatus = useSelector((state: any) => state.manifold[2])
    const dropValue = useSelector((state: any) => state.manifold[1])
    const dispatch = useDispatch()
    return (
        <section>
            <Baseline title='Unitized Manifold'>
                <Form>
                    <Form.Group grouped>
                        <Form.Input
                            fluid
                            label='Number of Drops'
                            type='number'
                            control='input'
                            value={dropValue}
                            name='dropAmount'
                            onChange={(e:any)=> dispatch(alterDrops(e.target.valueAsNumber))}
                        />
                        <Checkbox
                            checked={valveStatus}
                            label='Valve Gated | 6000$'
                            onClick={() =>
                                dispatch(enableValve())
                            }
                        />
                        <Divider horizontal>or</Divider>
                        <Checkbox 
                            checked={!valveStatus}
                            label='Non Valve Gated | 4150$'
                            onClick={() => {
                                dispatch(disableValve())
                                }
                            }
                        />
                        <Segment basic>
                            <Divider fitted horizontal>Subtotal</Divider>
                            <Segment raised>
                                {subTotal}
                            </Segment>
                        </Segment>
                    </Form.Group>
                </Form>
            </Baseline>
        </section>
    )
}