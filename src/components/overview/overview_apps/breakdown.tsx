import { Baseline } from '../../globals/overview_baseline_form'
import { Accordion } from 'semantic-ui-react'
import { breakdownPanels } from '../../globals/globalVars'

export const Breakdown = () => {
    return (
        <Baseline title='Breakdown'>
            <Accordion
                exclusive={false}
                panels={breakdownPanels}
                fluid
            />
        </Baseline>
    )
}