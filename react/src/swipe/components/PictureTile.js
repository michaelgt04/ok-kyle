import React from 'react';

const PictureTile = props => {
  let pictureClasses = "swipe-picture"

  return(
    <img className={pictureClasses} src={props.url} />
  )
}

export default PictureTile;
