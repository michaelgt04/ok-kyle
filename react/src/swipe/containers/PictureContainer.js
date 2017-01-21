import React, { Component } from 'react';
import PictureTile from '../components/PictureTile'

class PictureContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPicture: 0,
      pictures: []
    }
    this.swipeLeft = this.swipeLeft.bind(this)
    this.swipeRight = this.swipeRight.bind(this)
  }

  swipeLeft(){
    let nextPicture = this.state.currentPicture + 1
    this.setState({ currentPicture: nextPicture})
  }

  swipeRight(){
    let kyleId = this.state.pictures[this.state.currentPicture].id
    let fetchBody = { id: kyleId }
    fetch('/api/v1/matches',
      { method: "POST",
      body: JSON.stringify(fetchBody),
      credentials: 'include' })
      .then(function(response) {
        debugger;
      })
  }

  componentDidMount(){
    $.ajax({
        method: "GET",
        url: "/api/v1/kyles",
      })
      .done(data => {
        this.setState({
          pictures: data
        });
      })
  }

  render(){
    let kyle_url
    if (this.state.pictures[this.state.currentPicture]){
      kyle_url = this.state.pictures[this.state.currentPicture].image_url
    } else {
      kyle_url = ""
    }

    return(
      <div className="row full-screen">
        <span className="full-screen fa fa-arrow-left columns small-2 full-screen center align-middle" onClick={this.swipeLeft} />
        <PictureTile url={kyle_url} />
        <span className="full-screen fa fa-arrow-right columns small-2 right full-screen center align-middle" onClick={this.swipeRight}/>
      </div>
    )
  }
}

export default PictureContainer;