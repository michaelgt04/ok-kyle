import React, { Component } from 'react';
import PictureTile from '../components/PictureTile'

class PictureContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPicture: 0,
      pictures: {}
    }
  }

  swipeLeft(){
    let nextPicture = curentPicture ++
    this.setState({ currentPicture: nextPicture})
  }

  swipeRight(){

  }

  componentDidMount(){

  }

  render(){
    return(
      <div className="row full-screen">
        <span className="fa fa-arrow-left columns small-2 full-screen center align-middle" />
        <PictureTile />
        <span className="fa fa-arrow-right columns small-2 right full-screen center align-middle" />
      </div>
    )
  }
}

export default PictureContainer;
