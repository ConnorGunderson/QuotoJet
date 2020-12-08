import React, {useState} from 'react'
import moment from 'moment'
import { Container, Statistic } from 'semantic-ui-react'
import quotojet from '../../Images/quotojet.svg'
import quotoicon from '../../Images/quotoicon.svg'

export const QuotoHeader = () => {
    const [time, setTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss A'))

    React.useEffect(() => {
        let timerId = setInterval(() => tick(), 1000)
        return function cleanUp() {
        clearInterval(timerId)
        }
    })

    async function tick() {
        setTime(moment().format('MMMM Do YYYY, h:mm:ss A'))
    }
    
    return (
        <Container as={'section'} id={'quotoHeader'}>
            <img  id='quotoJet' src={quotojet} alt='quotoQuote' />
            <img src={quotoicon} alt=""/>
            <Statistic floated='right' >
                <div id="timer">
                    {time}
                </div>
            </Statistic>
        </Container>
    )
}