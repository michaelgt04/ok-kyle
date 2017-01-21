import React from 'react';

const MatchTile = props => {
  return(
    <div>
      <img src={props.image}/>
      <h3>{props.name}</h3>
      <a href="#">Unmatch this Kyle</a>
    </div>
  )
}

export default MatchTile;
