import React, { Component } from 'react';
import MatchTile from '../components/MatchTile'

class MatchesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      matches: []
    }
    this.unmatchKyle = this.unmatchKyle.bind(this);
  }

  componentDidMount(){
    fetch("/api/v1/users", {
      credentials: 'same-origin'
    })
      .then(response => {
        let matches = response.json()
        return matches
      }).then(matches => {
        this.setState({
          matches: matches.kyle_json
        });
      })
  }

  unmatchKyle(id){
    fetch(`/api/v1/matches/${id}`,
    { method: "DELETE",
    credentials: 'include'})
    .then(function(response) {
        let newMatches = response.json()
        return newMatches
      }).then((response) => this.setState({
        matches: response,
      }))}

  render(){
    let matches = this.state.matches.map(match =>{
      let unmatchKyle = () => {
        this.unmatchKyle(match.match_id)
      }

      return(
        <MatchTile
          key={match.match_id}
          id={match.match_id}
          kyleId={match.kyle_id}
          kyleName={match.kyle_name}
          kyleImage={match.kyle_image}
          superlike={match.superlike}
          unmatchKyle={unmatchKyle}
        />
      )

    })

    return(
      <div>
        {matches}
      </div>
    )
  }
}

export default MatchesContainer;
