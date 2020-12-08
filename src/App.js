import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/app.css'
import { AttachedMenu } from './components/header-menu/app_bar'
import { Container, Grid } from 'semantic-ui-react'
import { QuotoHeader } from './components/header-menu/head'

function App() {
  return (
      <div as={'main'} id='main'>
        <QuotoHeader />
        <AttachedMenu id={'attachedMenu'} />
      </div>
  );
}
export default App;
