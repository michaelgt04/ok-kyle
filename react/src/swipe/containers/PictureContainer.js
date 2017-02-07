import React, { Component } from 'react';
import PictureTile from '../components/PictureTile';
import SwipeTile from '../components/SwipeTile';
import SuperLike from '../components/SuperLike';

class PictureContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentPicture: 0,
      pictures: [],
      alert: ""
    }
    this.swipeLeft = this.swipeLeft.bind(this);
    this.createMatch = this.createMatch.bind(this);
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

  createMatch(type){
    let kyleId = this.state.pictures[this.state.currentPicture].id
    let fetchBody = { id: kyleId, type: type }
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
        let alert;
        if (type === "superLike") {
          alert = `You have super-liked ${name}`
        } else {
          alert = `You've been matched with ${name}, the Kyle of your dreams.`
        }
        this.setState({ alert: alert, currentPicture: nextPicture })
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

    let swipeRight;
    let superLike;
    if (this.state.pictures[this.state.currentPicture]) {
    swipeRight = () => { this.createMatch("swipe") };
    superLike = () => { this.createMatch("superLike") };
  }

    return(
      <div>
        <div>
          <h3 className={notice}>{this.state.alert}</h3>
        </div>
        <div>
          <SwipeTile type="left" handleSwipe={this.swipeLeft} />
          <PictureTile url={kyle_url} />
          <SwipeTile type="right" handleSwipe={swipeRight}/>
        </div>
        <div>
          <SuperLike
            handleSwipe={superLike}
          />
        </div>
      </div>
    )
  }
}

export default PictureContainer;
