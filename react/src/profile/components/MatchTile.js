import React from 'react';

const MatchTile = props => {
  return(
    <div className="match-div">
      <img className="match-picture" src={props.kyleImage}/>
      <h3>{props.kyleName}</h3>
      <button className="unmatch-button" onClick={props.unmatchKyle}>Unmatch this Kyle</button>
    </div>
  )
}

export default MatchTile;
