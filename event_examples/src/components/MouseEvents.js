import { useState } from "react";

const MouseEvents = () => {
  const [coordX, setCoordX] = useState("");
  const [coordY, setCoordY] = useState("");

  /**
   * TODO list
   * click
   * doubleClick
   * mouseMove
   */
  // click event
  // mouseMove

  const handleMouseMove = (e) => {
    setCoordX(e.nativeEvent.offsetX);
    setCoordY(e.nativeEvent.offsetY);
  };

  // click

  const handleClick = (event, name) => {
    console.log({ eventType: event.type, id: event.target.id, name:"Hi " + name });
  };


  function handleDoubleClick(e){
    e.preventDefault();
    console.log(e.currentTarget);
  }

  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>X</span> and Y
      </p>
      <p>
        <span>{coordX}</span> {coordY}{" "}
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onMouseMove={handleMouseMove} style= {{border: "1px solid"}}>
            Coordinates, X-Y ; onMouseMove 
          </li>
          <br/>
          <li id="todo-2" onClick={(e) => handleClick(e, "Hilmi")} style= {{border: "1px solid"}}>
          onClick
          </li>
          <br/>
          <li id="todo-3" onDoubleClick={handleDoubleClick} style= {{border: "1px solid"}}>
          onDoubleClick 
          </li>
          <br/>
          
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
