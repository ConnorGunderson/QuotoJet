import { Segment, Header, Form } from 'semantic-ui-react'

export const Baseline = (props: any) => {
    return (
        <Segment>
            <Header dividing>
                {props.title}
            </Header>
            <Form className='overviewForm' widths={'equal'} >
                {props.children}
            </Form>
        </Segment>
    )
}