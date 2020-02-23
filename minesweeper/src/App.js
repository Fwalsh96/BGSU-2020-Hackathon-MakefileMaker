import React, { cloneElement } from 'react';
import logo from './logo.svg';
import './App.css';

// Map class
// Should essentially be the element that holds all the cells.
class Map extends React.Component
{

  
  constructor()
  {
    // Gridsize variable
    super();
    this.gridSize = 8;

  }
  
  getGridSize()
  {
    return this._gridSize;
  }

  render()
  {
    return <body>stuff</body>
  };

  CreateGrid()
  {
    // Array of cells
    var theseGuys= new Array(this.gridSize)

    for(var i = 0; i < this.gridSize; i++)
    {
      theseGuys[i] = new Cell;
      theseGuys[i].render();
    }
  };

}

// Cell Class:
// Classes for each cell block on the grid
class Cell extends React.Component
{
  /*
  constructor()
  {
    // Determines if the tiles is a bomb or not, can be a int value to determine if close to a bomb
    //this.isBomb = 0;
  }*/

    render()
    {
      return( <div>This Guy</div>)
    };
}



// This is essentially a Main in C++?
function App() {

  var Board = new Map(8);

  //Cell newCell = new Cell
  
  return (

    <div>This guy33333</div>,
    Board.CreateGrid()

    
  );
}

export default App;
