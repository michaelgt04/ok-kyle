import React from 'react';

const AdminMatchTitle = props => {
  let flameIcon;
  if(props.superlike){
    flameIcon = <img src="https://res.cloudinary.com/duor0bzmo/image/upload/v1486591055/glyphicons-23-fire_a0auay.png"/>
  } else {
    flameIcon = ""
  }

  return(
    <div>
      <img src={props.userImage}/>
      <h3>{props.name} {flameIcon} </h3>
      <button className="unmatch-button" onClick={props.unmatchUser}>Unmatch {props.userName}</button>
    </div>
  )
}

export default AdminMatchTitle;
