import React, { Component } from 'react';
import ValidationComponent from './Validation/Validation';
import CharComponent from './Char/Char';
import './App.css';

class App extends Component {
  state = {
    inputText: ''
  }

  updateInputText = (event) => {
    const inputText = event.target.value;
    this.setState({
      inputText: inputText
    });
  };

  deleteThisBox = (inputTextIndex) => {
    const inputTextList = this.state.inputText.split('');
    inputTextList.splice(inputTextIndex, 1);
    const inputText = inputTextList.join('');

    this.setState({ inputText: inputText });
  };

  render() {
    const charComponent = this.state.inputText.split('').map(
      (char, index) => {
        return <CharComponent
          value={char}
          key={index}
          click={() => this.deleteThisBox(index)}></CharComponent>
      }
    );


    return (
      <div className="App" >
        <h1> Hi, I'm a react APP!</h1>
        <p>This is really working!</p>
        <input type="text" onChange={this.updateInputText} value={this.state.inputText}></input>
        <p>{this.state.textLength}</p>
        <ValidationComponent inputText={this.state.inputText}></ValidationComponent>
        {charComponent}
      </div >
    );
  }
}

export default App;
