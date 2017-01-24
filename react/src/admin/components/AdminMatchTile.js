import React from 'react';

const AdminMatchTitle = props => {
  return(
    <div>
      <img src={props.userImage}/>
      <h3>{props.name}</h3>
      <button onClick={props.unmatchUser}>Unmatch {props.userName}</button>
    </div>
  )
}

export default AdminMatchTitle;
