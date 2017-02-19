import React from 'react';

const AdminMatchTitle = props => {
  let flameIcon;
  if(props.superlike){
    flameIcon = <img src="https://res.cloudinary.com/duor0bzmo/image/upload/v1486591055/glyphicons-23-fire_a0auay.png"/>
  } else {
    flameIcon = ""
  }

  return(
    <div className="admin-match-tile">
      <img src={props.userImage}/>
      <h3>{props.userName} {flameIcon} </h3>
      <button className="unmatch-button" onClick={props.unmatchUser}>Unmatch</button>
    </div>
  )
}

export default AdminMatchTitle;
