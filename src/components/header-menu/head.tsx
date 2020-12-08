import React, {useState} from 'react'
import moment from 'moment'
import { Container, Statistic, Image } from 'semantic-ui-react'
import quotojet from '../../Images/quotojet.svg'

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
        <div id={'quotoHeader'}>
            <div>
                <Image  spaced size='small' id='quotoJet' src={quotojet} alt='quotoQuote' />
            </div>
            <div id="timer">
                {time}
            </div>
        </div>
    )
}