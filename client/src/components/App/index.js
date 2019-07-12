import React, { Component } from 'react';
import Cars from '../Cars';
import CarDetails from '../CarDetails';
import LoadingRing from '../LoadingRing';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      clicked_car: '',
      // to display loading ring
      loading: false,
    }
  };

  // fetch cars when component mounts
  componentDidMount() {
    this.getCars();
  }

  // function to fetch cars from the database
  getCars() {
    // change 'loading' state to true when getCars() fires
    this.setState({ loading: true });
    // function to display loading ring (for demonstration purposes)
    const delay = time => new Promise(resolve => setTimeout(resolve, time));

    delay(30000)
      .then(() => fetch('/cars'))
      .then(response => response.json())
      .then(resJSON => this.setState({
         cars: resJSON,
         loading: false,
        }))
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
    if (this.state.loading) {
      return (
        <React.Fragment>
          <CarDetails clicked_car={clicked_car} image_src={image_src} />
          <LoadingRing />
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <CarDetails clicked_car={clicked_car} image_src={image_src} />
          <div className='cars_with_search'>
            <Cars cars={cars} handleClick={this.handleClick}/>
          </div>
        </React.Fragment>

      )
    }
  }
}

export default App;
