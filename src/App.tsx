import React from 'react';
import './asset/css/css.css'
import './asset/fonts/flaticon/font/Flaticon.woff'
import './asset/fonts/icomoon/icomoon.ttf'
import './asset/fonts/icomoon/fonts/icomoon.ttf'
import './asset/fonts/ionicons/fonts/ionicons.woff2'
// import './App.css';

import Page from "./components/ComponentPage/Page";
import Main from "./main/Main";

function App() {
  return (
    <div className="App">
      <Page>
          <Main/>
      </Page>
    </div>
  );
}

export default App;
