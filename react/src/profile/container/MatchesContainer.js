import React, { Component } from 'react';
import MatchTile from '../components/MatchTile'

class MatchesContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      matches: []
    }
    // this.swipeLeft = this.swipeLeft.bind(this)
  }

  // swipeLeft(){
  //   let nextPicture = this.state.currentPicture + 1
  //   this.setState({ currentPicture: nextPicture})
  // }
  //
  // swipeRight(){
  //
  // }

  componentDidMount(){
    $.ajax({
        method: "GET",
        url: "/api/v1/users",
      })
      .done(data => {
        this.setState({
          matches: data.kyle_json
        });
      })
  }

  render(){
    let matches = this.state.matches.map(match =>{

      return(
        <MatchTile
          key={match.match_id}
          id={match.match_id}
          kyleId={match.kyle_id}
          name={match.name}
          image={match.image}
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
