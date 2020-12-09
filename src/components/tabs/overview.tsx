import { OverviewContent } from '../overview/ov_pop'
import { Container } from 'semantic-ui-react'

export function QuoteOverviewApp(props : any) {
    return (
        <Container fluid id={props.id}>
            <OverviewContent id='overviewContainer'/>
        </Container>
    )
}