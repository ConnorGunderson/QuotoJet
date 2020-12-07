import { OverviewContent } from '../../overview/overview_population'
import { Container } from 'semantic-ui-react'

export function QuoteOverviewApp(props : any) {
    return (
        <Container id={props.id}>
            <OverviewContent id='overviewContainer'/>
        </Container>
    )
}