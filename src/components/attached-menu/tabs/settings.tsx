import { useDispatch, useSelector } from 'react-redux'
import { Container, Form } from 'semantic-ui-react'
import { ESTIMATE, IMR, DR, TR, CNC, EDM } from '../../../features/settings_logic'

export function SettingsApp(props : any) {
    const settings = useSelector((state: any) => state.settings)
    const dispatch = useDispatch()
    const logFunction= (action:any, elem:any) => dispatch(action(Number(elem.target.value)))

    return (
        <Container id={props.id} >
            <h1 id='settingsHeader'>Global Application Settings</h1>
            <Form size='large'>
                <Form.Group unstackable widths={1} key={1}>
                    <Form.Input 
                    label='Estimate Cost Multiplier'
                    value={settings[0]}
                    onChange={(e) =>
                        logFunction(ESTIMATE,e)
                    }
                    required 
                    />
                    <Form.Input 
                    label='Injection Molding Rate'
                    value={settings[1]}
                    onChange={(e) =>
                        logFunction(IMR,e)
                    }
                    required 
                    />
                </Form.Group>
                <Form.Group unstackable widths={1} key={2}>
                    <Form.Input 
                    label='Design Rate' 
                    value={settings[2]}
                    onChange={(e) =>
                        logFunction(DR,e)
                    }
                    required 
                    />
                    <Form.Input 
                    label='ToolMaker Rate' 
                    value={settings[3]}
                    onChange={(e) =>
                        logFunction(TR,e)
                    }
                    required 
                    />
                </Form.Group>
                <Form.Group unstackable widths={1} key={3}>
                    <Form.Input 
                    label='CNC Rate' 
                    value={settings[4]}
                    onChange={(e) =>
                        logFunction(CNC,e)
                    }
                    required 
                    />
                    <Form.Input 
                    label='EDM Rate' 
                    value={settings[5]}
                    onChange={(e) =>
                        logFunction(EDM,e)
                    }
                    required 
                    />
                </Form.Group>
            </Form>
        </Container>
    )
}