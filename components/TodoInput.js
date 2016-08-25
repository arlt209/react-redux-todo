/**
 * Created by arlt on 8/24/16.
 */
import React from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends React.Component {

 constructor(props, context) {
   super(props, context)
   this.state = {
     inputText: 'Shes Dead Jim',
   }
 }

 removeLetter(){
   //take current this.state.inputText
   // delete letter
   //update state
   this.setState({
     inputText: this.state.inputText.substring(0, this.state.inputText.length -1)
   });
 }

 handleChange(event){

   this.setState({
     inputText: event.target.value
   })
 }

  render (){
    return (
      <div>
        <input
          type="text"
          placeholder="Shes Dead Jim..."
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <TextDisplay text={this.state.inputText} removeLetter={this.removeLetter.bind(this)} />
      </div>
    );
  }
}

export default TextInput;
