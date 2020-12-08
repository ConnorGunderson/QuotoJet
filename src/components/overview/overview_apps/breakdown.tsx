import { Baseline } from '../ov_baseline'
import { Accordion, Table } from 'semantic-ui-react'
import { breakdownPanels } from '../../globals/g_vars'
import { RootStateOrAny, useSelector } from 'react-redux'
import { useState }  from 'react'
import { SortHook } from '../../../features/misc-logic/ov_sort'
import _ from 'lodash'




export const Breakdown = () => {
    const [active, setActive] = useState(true);
    const { _inserts } = useSelector((state:RootStateOrAny) => state.insert);
    const { items, requestSort } = SortHook([..._inserts]);
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
                        <Table basic='very' striped sortable structured celled stackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell
                                        sorted={'ascending'}
                                        content='ID'
                                        onClick={() => requestSort('ID')}
                                    />

                                    <Table.HeaderCell 
                                        content='X'
                                        onClick={() => requestSort('X')}
                                    />
                                    <Table.HeaderCell 
                                        content='Y'
                                        onClick={() => requestSort('Y')}
                                    />
                                    <Table.HeaderCell
                                        content='Z'
                                        onClick={() => requestSort('Z')}
                                    />
                                    <Table.HeaderCell 
                                        content={
                                            _inserts.length > 0
                                            ?<span>Amnt <i style={{float:'right'}}>({
                                            _.reduce(_inserts.map((i:any) => i.AMT), function(sum, n) {
                                                return sum + n
                                            })
                                        })</i></span>
                                        :<span>Amnt</span>
                                    }
                                    onClick={() => requestSort('AMT')}
                                    
                                    />
                                    <Table.HeaderCell 
                                        content={
                                            _inserts.length > 0
                                            ?   <span>in<sup>3 </sup><i style={{float:'right'}}>({
                                                _.reduce(_inserts.map((i:any) => i.CINCH), function(sum, n) {
                                                    return sum + n
                                                })
                                        })</i></span>
                                        : <span>in<sup>3</sup></span>
                                    }
                                        onClick={() => requestSort('CINCH')}
                                    />
                                    <Table.HeaderCell 
                                        content='Material'
                                        onClick={() => requestSort('MAT')}
                                    />
                                        
                                    <Table.HeaderCell 
                                        content={
                                            _inserts.length > 0
                                            ?   <span>CNC (hrs) <i style={{float:'right'}}>({
                                                    _.reduce(_inserts.map((i:any) => i.CNC_HOURS), function(sum, n) {
                                                        return sum + n
                                                    }).toFixed(2)
                                            })</i></span>
                                            : <span>CNC (hrs)</span>
                                        }
                                        onClick={() => requestSort('CNC_HOURS')}
                                    />
                                    <Table.HeaderCell
                                            content={
                                                _inserts.length > 0
                                                ?   <span>Total <i style={{float:'right'}}>(${
                                                    _.reduce(_inserts.map((i:any) => i.PPI), function(sum, n) {
                                                        return sum + n
                                                    }).toFixed(2)
                                            })</i></span>
                                            : <span>Total</span>
                                        }
                                        onClick={() => requestSort('PPI')}
                                    />
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                { 
                                items.map(
                                    (a:any, i:number) => {
                                        const boole = a.ID === items.length ? true : false
                                        return (
                                            <Table.Row key={a.ID}>
                                                <Table.Cell positive={boole}> {a.ID}</Table.Cell>
                                                <Table.Cell>{a.X}</Table.Cell>
                                                <Table.Cell>{a.Y}</Table.Cell>
                                                <Table.Cell>{a.Z}</Table.Cell>
                                                <Table.Cell>{a.AMT}</Table.Cell>
                                                <Table.Cell>{a.CINCH}</Table.Cell>
                                                <Table.Cell>{a.MAT}</Table.Cell>
                                                <Table.Cell>{a.CNC_HOURS.toFixed(2)}</Table.Cell>
                                                <Table.Cell>{a.PPI.toFixed(2)}</Table.Cell>
                                                <Table.Cell positive={boole}>{boole ? <i>* Last Added</i> : undefined}</Table.Cell>
                                            </Table.Row>
                                        )
                                    }
                                )
                                }
                            </Table.Body>
                        </Table>
                    </Accordion.Content>
                </Accordion>
            </div>
        </Baseline>
    )
}