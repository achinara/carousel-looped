import React, { Component } from 'react';
import List from './components/List/List';
import Arrow from "./components/Arrow/Arrow";
import images from './images';
import './App.css';

class App extends Component {
  state = {
    isLoadedImages: false
  };

  componentDidMount() {
    this.preloadImages();
  }

  preloadImages() {
    let loadedImagesLength = 0;
    const imagesLengt = images.length;

    images.forEach(img => {
        const IMG = new Image();

        IMG.onload = () => {
          loadedImagesLength++;
          if (loadedImagesLength === imagesLengt) {
            this.setState({ isLoadedImages: true })
          }
        };

        IMG.src = img.src;
      }
    )
  }

  prevHandleClick = () => this.move(-1);
  nextHandleClick = () => this.move(1);

  move = (dir) => {
    console.log('--- dir', dir);
  };

  render() {
    const {isLoadedImages} = this.state;

    return (
      <div className="carousel">
        <Arrow className="left" onClick={this.prevHandleClick} />
        {isLoadedImages ? <List images={images}/> : <div>Preloaded!</div>}
        <Arrow className="right" onClick={this.nextHandleClick} />
      </div>
    );
  }
}

export default App;
