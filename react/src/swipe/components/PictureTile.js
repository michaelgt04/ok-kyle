import React from 'react';

const PictureTile = props => {
  let pictureClasses = "picture columns large-6 medium-8 small-10"

  return(
    <img className={pictureClasses} src={props.url} />
  )
}

export default PictureTile;
