
import Aggregate from "./Aggreagate/Aggregate";
import React from "react";
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./Aggreagate/Nav/Nav";


class App extends Component {

  render()
  {
    return (

            <div>
                <Navigation/>
                <Aggregate/>
            </div>
    );
  }
}

export default App;
