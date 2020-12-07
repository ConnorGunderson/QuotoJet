import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { Segment, Button, Accordion, Form, Divider } from 'semantic-ui-react'
import { matOptions, dimensionPanels } from '../../globals/g_vars'
import { Baseline } from '../ov_baseline'
import { CHANGE_MATERIAL, ADD_INSERT, DELETE_LAST } from '../../../features/overview-logic/ins_logic'

export const Inserts = () => {
    const {
        _material,
        _sumInserts,
        _cncTotalHours,
        _subtotal
    } = useSelector(
        (state: RootStateOrAny) => {
            return (
                state.insert
            )
        }
    )
    const dispatch = useDispatch()
    const handleChange = (e: any) => dispatch(CHANGE_MATERIAL(e.target.textContent))
    const addInsert = (e: any) => {
        e.preventDefault()
        let arr: any = []
        for ( let i of Object.entries(e.target.parentElement).slice(0,4)) {
            arr.push(i)
        }
        arr = arr.map((a:any) => Number(a[1].value))
        if (arr.every((i:any) => i > 0) && _material !== '') {
            dispatch(ADD_INSERT(arr))
        }
    }
    const delInsert = (e:any) =>  {
        e.preventDefault()        
        dispatch(DELETE_LAST(''))
    }
    return (
        <Baseline title='Inserts'>
            <Form>
                
                <Form.Group>
                    <Form.Select
                        fluid
                        label={'Insert Material'}
                        onChange={(e) => handleChange(e)}
                        placeholder='Select Material'
                        options={matOptions}
                    />
                </Form.Group>
                <Form widths='equal' id='insertForm'>
                    <Form.Group>
                        <Accordion as={Form.Field} panels={dimensionPanels} />
                    </Form.Group>
                    <Button
                        onClick={(e:any) => addInsert(e)}
                        type={'submit'}
                        basic
                        color='green'
                        compact
                    >
                        Add
                    </Button>
                    <Button
                        onClick={(e) => delInsert(e)}
                        type={'submit'}
                        basic
                        color='red'
                        compact
                    >
                        Delete
                    </Button>
                </Form>
                <Segment basic>
                    <Divider fitted horizontal># of Inserts</Divider>
                    <Segment raised>
                        {_sumInserts}
                    </Segment>
                    <Divider fitted horizontal>CNC Hours</Divider>
                    <Segment raised>
                        {_cncTotalHours.toFixed(2)}
                    </Segment>
                    <Divider fitted horizontal> Subtotal</Divider>
                    <Segment raised>
                        {_subtotal.toFixed(2)}
                    </Segment>
                </Segment>
            </Form>
        </Baseline>
    )
}