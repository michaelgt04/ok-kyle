import React from 'react';

const AdminMatchTitle = props => {
  let flameIcon;
  if(props.superlike){
    flameIcon = "fa fa-free-code-camp"
  } else {
    flameIcon = ""
  }
  
  return(
    <div>
      <img src={props.userImage}/>
      <h3>{props.name} <i className={flameIcon}></i> </h3>
      <button onClick={props.unmatchUser}>Unmatch {props.userName}</button>
    </div>
  )
}

export default AdminMatchTitle;
