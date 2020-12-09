import { useDispatch, useSelector } from 'react-redux'
import { Container, Form } from 'semantic-ui-react'
import { ESTIMATE, IMR, DR, TR, CNC, EDM } from '../../logic/settings_logic'

// Settings Overview
export function SettingsApp(props : any) {
    const { 
        _ER,
        _IMR,
        _DR,
        _TMR,
        _CNCR,
        _EDMR
    } = useSelector((state: any) => state.settings)
    const dispatch = useDispatch()
    const logFunction= (action:any, elem:any) => dispatch(action(Number(elem.target.value)))
    const pairings : any = {
        ER_IMR: [['Estimate Cost Multiplier',_ER, ESTIMATE],['Injection Mold Rate',_IMR, IMR]],
        DR_TMR: [['Design Rate',_DR, DR],['Tool Maker Rate',_TMR, TR]],
        CNCR_EDMR: [['CNC Rate',_CNCR, CNC],['EDM Rate', _EDMR, EDM]],
    }
    return (
        <Container id={props.id}  >
            <h1 id='settingsHeader'>Global Application Settings</h1>
            <Form size='large'>
            {
                Object.keys(pairings).map((key:any,index:number) => {
                    const keys = key.split('_')
                    return (
                        <Form.Group widths={'equal'}>
                            <Form.Input 
                                key={keys[0]}
                                label={pairings[key][0][0]}
                                value={pairings[key][0][1]}
                                onChange={(e) =>
                                    logFunction(pairings[key][0][2], e)
                                }
                                required={pairings[key][0][1] === 0 ? true : false}
                            />
                            <Form.Input 
                                key={keys[1]}
                                label={pairings[key][1][0]}
                                value={pairings[key][1][1]}
                                onChange={(e) =>
                                    logFunction(pairings[key][1][2], e)
                                }
                                required={pairings[key][1][1] === 0 ? true : false}
                            />
                        </Form.Group>
                    )
                })
            }
            </Form>
        </Container>
    )
}