import React from 'react';

const SwipeTile = props => {
  let icon;
  if (props.type === "left"){
    icon = "fa fa-bomb fa-2x vertical-center"
  } else {
    icon = "fa fa-thermometer-full fa-2x vertical-center"
  }

  return(
    <div className="clickable" onClick={props.handleSwipe}>
      <i className={icon} aria-hidden="true"></i>
    </div>
  )
}

export default SwipeTile;
