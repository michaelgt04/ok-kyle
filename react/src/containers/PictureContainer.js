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
  }

  swipeLeft(){
    let nextPicture = this.state.currentPicture + 1
    this.setState({ currentPicture: nextPicture})
  }

  swipeRight(){

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
        <span className="full-screen fa fa-arrow-right columns small-2 right full-screen center align-middle" />
      </div>
    )
  }
}

export default PictureContainer;
