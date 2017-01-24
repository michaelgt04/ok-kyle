import React from 'react';

const MatchTile = props => {
  return(
    <div>
      <img src={props.kyleImage}/>
      <h3>{props.kyleName}</h3>
      <button onClick={props.unmatchKyle}>Unmatch this Kyle</button>
    </div>
  )
}

export default MatchTile;
