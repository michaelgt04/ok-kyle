import React, { Component } from 'react';
import AdminMatchTile from '../components/AdminMatchTile'

class AdminContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      matches: []
    }
    this.unmatchUser = this.unmatchUser.bind(this);
  }

  componentDidMount(){
    fetch('/api/v1/admins')
      .then(response => {
        let matches = response.json()
        return matches
      }).then(matches =>{
        this.setState({
          matches: matches.unique_matches_json
        });
      });
  }

  unmatchUser(id){
    let matches = this.state.matches
    let selectedMatch = matches.filter(function(match) {
      return match.match_id == id
    });
    let user = selectedMatch[0].user_name
    let confirmed = confirm("Are you sure you can afford to unmatch " + user + "?");

    if (confirmed) {
      fetch(`/api/v1/matches/${id}`,
      { method: "DELETE",
      credentials: 'include'})
      .then(function(response) {
          let newMatches = response.json()
          return newMatches
        }).then((response) => {
          debugger;
          this.setState({
          matches: response,
        })})
      }
    }


  render(){
    let adminMatches = this.state.matches.map(match =>{
      let unmatchUser = () => {
        this.unmatchUser(match.match_id)
      }

      return(
        <AdminMatchTile
          key={match.match_id}
          id={match.match_id}
          userId={match.user_id}
          userName={match.user_name}
          userImage={match.user_image}
          superlike={match.superlike}
          unmatchUser={unmatchUser}
          chatId={match.chatroom}
        />
      )
    })


    return(
      <div>
        {adminMatches}
      </div>
    )
  }
}

export default AdminContainer;
