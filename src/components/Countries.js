import React, { Component } from 'react';
import {countries} from "../shared/countries"
import {randomHexaNumberGenerator} from "../shared/hexaColor"

 class Countries extends Component {
    state = {
        text: "",
        result: countries,
      };
    
      handleChange = (e) => {
        this.setState({
          text: e.target.value.toLowerCase(),
        });
    
      };
    
     
    
      startwith = () => {
        let arraystartwith = countries.filter((country) => country.toLowerCase().startsWith(this.state.text));
        //this.refs.country.value = ""; 
        this.setState({
          result: arraystartwith,
        });
      };
    
      include = () => {
        let arrayinclude = countries.filter((country) => country.toLowerCase().includes(this.state.text));
        this.refs.country.value = ""; 
        this.setState({
          result: arrayinclude,
        });
    
      };
    
      render() {
        const newArray = this.state.result.map ((item ,i) => <div style={{backgroundColor: randomHexaNumberGenerator()}}  key={"country-"+i} className="item"> {item}</div>);
       
     return (  
     <div className="App">
     
     
     <button id="button1" onClick={this.startwith} >Start With</button>
           <button id="button2" onClick={this.include}>Include</button>
           <br />
           <br />
          
         <div>
          
           <input onChange={this.handleChange} type="text" ref="country" placeholder="Search Country..." />
           <br />
          
           <p>Sum of listed countries: {newArray.length}</p>
           {newArray}
         </div>
    
     </div>
       );
    }
}
export default Countries ;