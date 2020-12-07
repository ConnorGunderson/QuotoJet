import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/app.css'
import { AttachedMenu } from './components/attached-menu/app-pagination-bar'
import { Container } from 'semantic-ui-react'
import quotojet from './Images/quotojet.png'

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
  return (
    <Container as={'section'} id={'quotoHeader'}>
      <img  id='quotoJet' src={quotojet} alt='quotoQuote' />
    </Container>
  )
}