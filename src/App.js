import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import {countries} from"./shared/countries"
import Countries from './components/Countries';



class App extends Component {
render() { 
 return (  
    <div className="App">
        <Header countries={countries} />
        <Countries />
    </div>
       )
       }
}

export default App;