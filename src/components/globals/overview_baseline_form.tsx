import { Segment, Header } from 'semantic-ui-react'

export const Baseline = (props: any) => {
    return (
        <Segment vertical basic>
            <Header dividing>
                {props.title}
            </Header>
            <Segment onSubmit={(e:any) => {e.preventDefault()}} className='overviewForm' widths={'equal'} >
                {props.children}
            </Segment>
        </Segment>
    )
}