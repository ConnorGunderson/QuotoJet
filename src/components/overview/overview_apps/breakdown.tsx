import { Baseline } from '../ov_baseline'
import { Accordion, Table } from 'semantic-ui-react'
import { breakdownPanels } from '../../globals/g_vars'
import { RootStateOrAny, useSelector } from 'react-redux'
import { useState} from 'react'
import _ from 'lodash'

export const Breakdown = () => {
    const [active, setActive] = useState(true)
    const { _inserts } = useSelector((state:RootStateOrAny) => state.insert)
    console.log(_inserts.map((i:any) => i[3]))
    return (
        <Baseline title='Breakdown'>
            <Accordion
            
                exclusive={false}
                panels={breakdownPanels}
                fluid
            />
            <div>

                <Accordion
                    fluid
                    key='inserts'
                >   
                    <Accordion.Title 
                        onClick={() => setActive(
                                active === true ? false : true
                            )}
                    >
                        Inserts
                    </Accordion.Title>
                    <Accordion.Content active={active} >
                        <Table basic='very' sortable structured celled stackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell rowSpan={5} content='ID'/>
                                    <Table.HeaderCell content='X'/>
                                    <Table.HeaderCell content='Y'/>
                                    <Table.HeaderCell content='Z'/>
                                    <Table.HeaderCell 
                                        content={
                                            _inserts.length > 0
                                            ?<span>Amnt<i style={{float:'right'}}>({
                                            _.reduce(_inserts.map((i:any) => i[3]), function(sum, n) {
                                                return sum + n
                                            })
                                        })</i></span>
                                        :<span>Amnt</span>
                                    }
                                    />
                                    <Table.HeaderCell 
                                        content={
                                            _inserts.length > 0
                                            ?   <span>in<sup>3</sup><i style={{float:'right'}}>({
                                                _.reduce(_inserts.map((i:any) => i[4]), function(sum, n) {
                                                    return sum + n
                                                })
                                        })</i></span>
                                        : <span>in<sup>3</sup></span>
                                    }
                                    />
                                    <Table.HeaderCell content='Material'/>
                                    <Table.HeaderCell 
                                        content={
                                            _inserts.length > 0
                                            ?   <span>CNC (hrs)<i style={{float:'right'}}>({
                                                    _.reduce(_inserts.map((i:any) => i[5]), function(sum, n) {
                                                        return sum + n
                                                    }).toFixed(2)
                                            })</i></span>
                                            : <span>CNC (hrs)</span>
                                        }
                                    />
                                    <Table.HeaderCell
                                            content={
                                                _inserts.length > 0
                                                ?   <span>Total<i style={{float:'right'}}>(${
                                                    _.reduce(_inserts.map((i:any) => i[6]), function(sum, n) {
                                                        return sum + n
                                                    }).toFixed(2)
                                            })</i></span>
                                            : <span>Total</span>
                                        }
                                    />
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {_inserts.map(
                                    (a:any, i:number) => {
                                        return (
                                            <Table.Row key={i}>
                                                <Table.Cell>{i}</Table.Cell>
                                                <Table.Cell>{a[0]}</Table.Cell>
                                                <Table.Cell>{a[1]}</Table.Cell>
                                                <Table.Cell>{a[2]}</Table.Cell>
                                                <Table.Cell>{a[3]}</Table.Cell>
                                                <Table.Cell>{a[4]}</Table.Cell>
                                                <Table.Cell>{a[7]}</Table.Cell>
                                                <Table.Cell>{a[5].toFixed(2)}</Table.Cell>
                                                <Table.Cell>{a[6].toFixed(2)}</Table.Cell>
                                            </Table.Row>
                                        )
                                    }
                                )}
                            </Table.Body>
                        </Table>
                    </Accordion.Content>
                </Accordion>
            </div>
        </Baseline>
    )
}