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
        <TextDisplay text={this.state.inputText} />
      </div>
    );
  }
}

export default TextInput;
