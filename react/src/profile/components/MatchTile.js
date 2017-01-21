import React from 'react';

const MatchTile = props => {
  return(
    <div>
      <img src={props.image}/>
      <h3>{props.name}</h3>
      <button onClick={props.unmatchKyle}>Unmatch this Kyle</button>
    </div>
  )
}

export default MatchTile;
