import React, { Component } from 'react';
import PictureTile from '../components/PictureTile';
import SwipeTile from '../components/SwipeTile';

class PictureContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPicture: 0,
      pictures: [],
      alert: ""
    }
    this.swipeLeft = this.swipeLeft.bind(this)
    this.swipeRight = this.swipeRight.bind(this)
  }

  swipeLeft(){
    let nextPicture;
    if (this.state.currentPicture < this.state.pictures.length - 1){
      nextPicture = this.state.currentPicture + 1
    } else {
      nextPicture = 0
    }
    this.setState({ currentPicture: nextPicture, alert: ""})
  }

  swipeRight(){
    let kyleId = this.state.pictures[this.state.currentPicture].id
    let fetchBody = { id: kyleId }
    fetch('/api/v1/matches',
      { method: "POST",
      body: JSON.stringify(fetchBody),
      credentials: 'include' })
      .then((response) => {
        let kyle = response.json()
        return kyle
      }).then((response) => {
        let name = response.name
        let nextPicture;
        if (this.state.currentPicture < this.state.pictures.length - 1){
          nextPicture = this.state.currentPicture + 1
        } else {
          nextPicture = 0
        }
        this.setState({ alert: `You've been matched with ${name}, the Kyle of your dreams.`, currentPicture: nextPicture })
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

    let notice;
    if (this.state.alert){
      notice = "flash"
    } else {
      notice = "placeholder"
    }

    return(
      <div>
        <div>
          <h3 className={notice}>{this.state.alert}</h3>
        </div>
        <div>
          <SwipeTile type="left" handleSwipe={this.swipeLeft} />
          <PictureTile url={kyle_url} />
          <SwipeTile type="right" handleSwipe={this.swipeRight}/>
        </div>
      </div>
    )
  }
}

export default PictureContainer;
