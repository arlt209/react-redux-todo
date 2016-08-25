
/**
 * Created by arlt on 8/24/16.
 */
import React from 'react';

class TextDisplay extends React.Component {

  handleClick(){
    // console.log(this);
    this.props.removeLetter()
  }

  render (){
    return (
      <div>
        <ul>I can display state via props passed down from the parent container.</ul>
        <ul>with react dev tools i can follow the state down the tree easily.</ul>
        <div>Here is the changing state/props: {this.props.text}</div>
        <button onClick={this.handleClick.bind(this)}>remove a letter</button>
      </div>
    );
  }
}

export default TextDisplay;
