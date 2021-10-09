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

  handleClick = (name) => {
    this.setState({message:`Goodbye ${name}`})
  };
  handleClick2 = (name) => {
    this.setState({message:`Hello ${name}`})
  };

  render() {
    return (
      <div> 
        <button onClick={()=>this.handleClick("Hilmi")}>Goodbye</button>
         <p>{this.state.message}</p>
        <button onClick={()=>this.handleClick2("Hilmi")}>Hello</button>
      </div>
    );
  }
}

export default EventBind;