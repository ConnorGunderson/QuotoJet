import { Baseline } from '../../globals/overview_baseline_form'
import { Accordion, Table } from 'semantic-ui-react'
import { breakdownPanels } from '../../globals/globalVars'
import { RootStateOrAny, useSelector } from 'react-redux'
import { useState} from 'react'


export const Breakdown = () => {
    const [active, setActive] = useState(true)
    const { _inserts } = useSelector((state:RootStateOrAny) => state.insert)
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
                                    <Table.HeaderCell content='x'/>
                                    <Table.HeaderCell content='y'/>
                                    <Table.HeaderCell content='z'/>
                                    <Table.HeaderCell content='Amount'/>
                                    <Table.HeaderCell content={<span>in<sup>3</sup></span>}/>
                                    <Table.HeaderCell content='CNC hr(s)'/>
                                    <Table.HeaderCell  content='Total'/>
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