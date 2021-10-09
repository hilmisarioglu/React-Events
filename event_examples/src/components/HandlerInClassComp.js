import React from "react";

class EventBind extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message : "Click",
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
    }

  handleClick = () => {
    this.setState({message:"Goodbye!"})
  };
  handleClick2 = () => {
    this.setState({message:"Hello"})
  };

  render() {
    return (
      <div> 
        <button onClick={this.handleClick}>Goodbye</button>
         <p>{this.state.message}</p>
        <button onClick={this.handleClick2}>Hello</button>
      </div>
    );
  }
}

export default EventBind;