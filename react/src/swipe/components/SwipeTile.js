import React from 'react';

const SwipeTile = props => {
  let icon;
  if (props.type === "left"){
    icon = "fa fa-bomb swipe-icon"
  } else {
    icon = "fa fa-thermometer-full swipe-icon"
  }

  return(
    <div className="clickable" onClick={props.handleSwipe}>
      <i className={icon} aria-hidden="true"></i>
    </div>
  )
}

export default SwipeTile;
