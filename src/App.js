import React, { Component } from "react";
import "./App.css"
import jaca from "./jaca.jpg"

class App extends Component {
  state = {
    dados: [ 
      {
      $name: `Igor`,
      age: 20,
      favFood: `Macarrão a molho pesto (e coquinha gelada)`,
      song: [`Everything You've Come To Expect - The Last Shadow Puppets`,`Batphone - Arctic Monkeys`,`Lemons - Brye`]
      }
    ]
  }

render(){
  return( 
  <div className="MainBox">
    <h1>Meu nome é: {this.state.dados[0].$name}</h1>

    <h2>Eu tenho: {this.state.dados[0].age} anos</h2>

    <h3>E minha comida favorita é: {this.state.dados[0].favFood}</h3>
    
    <h2>E três músicas que gosto muito são:</h2>
    
    {this.state.dados.map( (item) => (
              <ol>
                  <li>{item.song[0]}</li>
                  <li>{item.song[1]}</li>
                  <li>{item.song[2]}</li>
              </ol>
          ) ) }

      <h2>E minha fruta favorita:</h2>
      <img className="jaca" src={jaca}/>
      <h6>(Jaca)</h6>

  </div>
  )
}

}

export default App;