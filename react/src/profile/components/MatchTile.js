import React from 'react';

const MatchTile = props => {
  let flameIcon;
  if(props.superlike){
    flameIcon = "fa fa-free-code-camp"
  } else {
    flameIcon = ""
  }

  return(
    <div className="match-div">
      <img className="match-picture" src={props.kyleImage}/>
      <h3>{props.kyleName} <i className={flameIcon}></i> </h3>
      <button className="unmatch-button" onClick={props.unmatchKyle}>Unmatch this Kyle</button>
    </div>
  )
}

export default MatchTile;
