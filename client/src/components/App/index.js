import React, { Component } from 'react';
import Cars from './Cars';

// let baseURL = process.env.REACT_APP_BASEURL

// if (process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3001/'
// } else {
//   baseURL = 'https://car-reseller-api.herokuapp.com/'
// }

// console.log('current base URL:', baseURL)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      clicked_car: '',
    }
  };

  // fetch cars when component mounts
  componentDidMount() {
    this.getCars();
  }

  // function to fetch cars from the database
  getCars() {
    fetch('/cars')
      .then(response => response.json())
      .then(resJSON => this.setState({ cars: resJSON }))
      .catch(error => console.log(error));
  }

  handleClick = (event, car) => {
    console.log('click', car);
    this.setState({
      clicked_car: car,
    })
  }

  render() {
    const { cars, clicked_car } = this.state;
    console.log('render=', clicked_car.image);
    let image_src;
    if (clicked_car.image) {
      image_src = '/' + clicked_car.image.substring(9);
    } else {
      image_src = '/placeholder.png'
    }
    console.log('image_src=', image_src);
    return (
      <React.Fragment>
        <div className="car-detail-info">
          <fieldset>
            <legend>
              Car Detail Info
            </legend>

            <div><b>Model: </b>{clicked_car.model}</div>
            <div><b>Year: </b>{clicked_car.year}</div>
            <div><b>Producer: </b>{clicked_car.producer}</div>
            <div><b>Price, $: </b>{clicked_car.price}</div>
            <div><b>Owner: </b>{clicked_car.owner}</div>
            <div><b>Tel/Mobile: </b>{clicked_car['tel/mobile']}</div>
            <div><b>Mileage: </b>{clicked_car.mileage}</div>
            <div><b>Registered: </b>{clicked_car.registered}</div>
          </fieldset>

          <div className="img_container">
            <img src={image_src} alt="a car" />
          </div>
        </div>

        <div className='cars_with_search'>
          <Cars cars={cars} handleClick={this.handleClick}/>
        </div>
      </React.Fragment>

    )
  }
}

export default App;
