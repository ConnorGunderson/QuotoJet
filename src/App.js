import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/app.css'
import { MainMenu } from './components/main_menu'
import { Banner } from './components/banner'

// Main app component
function App() {
  return (
      <div as={'main'} id='main' >
        <Banner />
        <MainMenu id={'attachedMenu'} />
      </div>
  );
}

export default App;