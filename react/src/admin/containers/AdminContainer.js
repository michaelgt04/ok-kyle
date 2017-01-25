import React, { Component } from 'react';
import AdminMatchTitle from '../components/AdminMatchTile'

class AdminContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      matches: []
    }
    this.unmatchUser = this.unmatchUser.bind(this);
  }

  componentDidMount(){
    $.ajax({
        method: "GET",
        url: "/api/v1/admins",
      })
      .done(data => {
        this.setState({
          matches: data.unique_matches_json
        });
      })
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
        <AdminMatchTitle
          key={match.match_id}
          id={match.match_id}
          userId={match.user_id}
          userName={match.user_name}
          userImage={match.user_image}
          unmatchUser={unmatchUser}
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
