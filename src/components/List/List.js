import React, {Component} from 'react'
import PropTypes from 'prop-types';

class List extends Component {
  static propTypes = {
    images: PropTypes.array
  };

  render() {
    const {images} = this.props;
      return (
        <div className="carousel__inner">
          <ul className="list">
            {images.map((image) => (
              <li className="item" key={image.id}>
                <img src={image.src} alt=""/>
              </li>
            ))}
          </ul>
        </div>
      )
    }
}

export default List