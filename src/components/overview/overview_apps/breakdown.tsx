import { Baseline } from '../ov_baseline'
import { Accordion, Table } from 'semantic-ui-react'
import { breakdownPanels } from '../../globals/g_vars'
import { RootStateOrAny, useSelector } from 'react-redux'
import { useEffect, useState }  from 'react'
import { SortHook } from '../../../features/misc-logic/ov_sort'
import _ from 'lodash'

export const Breakdown = () => {
    const [active, setActive] = useState(true);
    const { _inserts } = useSelector((state:RootStateOrAny) => state.insert);
    const { items, requestSort, sortConfig} = SortHook([..._inserts], 'vertical');
    useEffect(() => {
        console.log(sortConfig)
    })

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
                        <Table basic='very' striped sortable fixed stackable textAlign='center'>
                            <Table.Header>
                                    {
                                        new Array(10).fill('').map((i:any, index:number) => {
                                            return (
                                                <Table.Cell>
                                                    {   _inserts.length === 0 ? '' :
                                                        index === 4
                                                        ? _.reduce(_inserts.map((i:any) => i.AMT), function(sum, n) {
                                                            return sum + n
                                                        })
                                                        : index === 5
                                                        ? _.reduce(_inserts.map((i:any) => i.CINCH), function(sum, n) {
                                                        return sum + n
                                                        })
                                                        : index === 8
                                                        ? '$' +_.reduce(_inserts.map((i:any) => i.PPI), function(sum, n) {
                                                            return sum + n
                                                        }).toFixed(2)
                                                        : index === 7
                                                        ? _.reduce(_inserts.map((i:any) => i.CNC_HOURS), function(sum, n) {
                                                            return sum + n
                                                        }).toFixed(2)
                                                        : ''
                                                    }
                                                </Table.Cell> 
                                            )
                                        })
                                    }
                                <Table.Row >
                                    <Table.HeaderCell
                                        // sorted={sortConfig.key !== 'ID' ? undefined : sortConfig.direction === 'ascending' ? 'descending' : 'ascending'}
                                        content='ID'
                                        onClick={() => requestSort('ID')}
                                    />
                                    <Table.HeaderCell 
                                        // sorted={sortConfig.key !== 'X' ? undefined : sortConfig.direction === 'ascending' ? 'descending' : 'ascending'}
                                        content='X'
                                        onClick={() => requestSort('X')}
                                    />
                                    <Table.HeaderCell
                                        // sorted={sortConfig.key !== 'Y' ? undefined : sortConfig.direction === 'ascending' ? 'descending' : 'ascending'} 
                                        content='Y'
                                        onClick={() => requestSort('Y')}
                                    />
                                    <Table.HeaderCell
                                        // sorted={sortConfig.key !== 'Z' ? undefined : sortConfig.direction === 'ascending' ? 'descending' : 'ascending'}
                                        content='Z'
                                        onClick={() => requestSort('Z')}
                                    />
                                    <Table.HeaderCell 
                                        // sorted={sortConfig.key !== 'AMT' ? undefined : sortConfig.direction === 'ascending' ? 'descending' : 'ascending'}
                                        content={'Amount'}
                                    onClick={() => requestSort('AMT')}
                                    
                                    />
                                    <Table.HeaderCell 
                                        // sorted={sortConfig.key !== 'CINCH' ? undefined : sortConfig.direction === 'ascending' ? 'descending' : 'ascending'}
                                        content={<span>in<sup>3</sup></span>}
                                        onClick={() => requestSort('CINCH')}
                                    />
                                    <Table.HeaderCell 
                                        // sorted={sortConfig.key !== 'MAT' ? undefined : sortConfig.direction === 'ascending' ? 'descending' : 'ascending'}
                                        content='Material'
                                        onClick={() => requestSort('MAT')}
                                    />
                                        
                                    <Table.HeaderCell 
                                        // sorted={sortConfig.key !== 'CNC_HOURS' ? undefined : sortConfig.direction === 'ascending' ? 'descending' : 'ascending'}
                                        content={'CNC Hours'}
                                        onClick={() => requestSort('CNC_HOURS')}
                                    />
                                    <Table.HeaderCell
                                            // sorted={sortConfig.key !== 'PPI' ? undefined : sortConfig.direction === 'ascending' ? 'descending' : 'ascending'}
                                            content={"Total"}
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
                                                <Table.Cell width={3} positive={boole}> {a.ID}</Table.Cell>
                                                <Table.Cell width={3}>{a.X}</Table.Cell>
                                                <Table.Cell width={3}>{a.Y}</Table.Cell>
                                                <Table.Cell width={3}>{a.Z}</Table.Cell>
                                                <Table.Cell width={3}>{a.AMT}</Table.Cell>
                                                <Table.Cell width={3}>{a.CINCH}</Table.Cell>
                                                <Table.Cell width={3}>{a.MAT}</Table.Cell>
                                                <Table.Cell width={3}>{a.CNC_HOURS.toFixed(2)}</Table.Cell>
                                                <Table.Cell width={3}>{a.PPI.toFixed(2)}</Table.Cell>
                                                <Table.Cell width={3} positive={boole}>{boole ? <i>* Last Added</i> : undefined}</Table.Cell>
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


/**<Table.Row>
    {
        new Array(10).fill('').map((i:any, index:number) => {
            return (
                <Table.Cell>
                    {   _inserts.length === 0 ? '' :
                        index === 4
                        ? _.reduce(_inserts.map((i:any) => i.AMT), function(sum, n) {
                            return sum + n
                        })
                        : index === 5
                        ? _.reduce(_inserts.map((i:any) => i.CINCH), function(sum, n) {
                        return sum + n
                        })
                        : index === 8
                        ? _.reduce(_inserts.map((i:any) => i.PPI), function(sum, n) {
                            return sum + n
                        }).toFixed(2)
                        : index === 7
                        ?_.reduce(_inserts.map((i:any) => i.CNC_HOURS), function(sum, n) {
                            return sum + n
                        }).toFixed(2)
                        : ''
                    }
                </Table.Cell> 
            )
        })
    }
</Table.Row> */