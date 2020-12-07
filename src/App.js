import React, {useState} from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/app.css'
import { AttachedMenu } from './components/attached-menu/app-pagination-bar'
import { Container, Statistic } from 'semantic-ui-react'
import quotojet from './Images/quotojet.png'
import moment from 'moment'

function App() {
  return (
      <Container as={'main'} id='main'>
        <QuotoHeader />
        <AttachedMenu id={'attachedMenu'} />
      </Container>
  );
}
export default App;

const QuotoHeader = () => {
  const [time, setTime] = useState(moment().format('MMMM Do YYYY, h:mm:ss a'))

  React.useEffect(() => {
    let timerId = setInterval(() => tick(), 1000)
    return function cleanUp() {
      clearInterval(timerId)
    }
  })
  async function tick() {
    setTime(moment().format('MMMM Do YYYY, h:mm:ss a'))
  }
  return (
    <Container as={'section'} id={'quotoHeader'}>
      <img  id='quotoJet' src={quotojet} alt='quotoQuote' />
      <Statistic floated='right' >{time}</Statistic>
    </Container>
  )
}