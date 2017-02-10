import React from 'react';

const MatchTile = props => {
  let flameIcon;
  if(props.superlike){
    flameIcon = <img src="https://res.cloudinary.com/duor0bzmo/image/upload/v1486591055/glyphicons-23-fire_a0auay.png"/>
  } else {
    flameIcon = ""
  }

  return(
    <div className="match-div">
      <img className="match-picture" src={props.kyleImage}/>
      <h3>{props.kyleName} {flameIcon} </h3>
      <button className="unmatch-button" onClick={props.unmatchKyle}>Unmatch this Kyle</button>
    </div>
  )
}

export default MatchTile;
