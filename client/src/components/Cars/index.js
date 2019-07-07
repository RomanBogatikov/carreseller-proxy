import React, { PureComponent } from 'react';

// Cars is a PureComponent because we don't want to re-render it when clicking on a car (PureComponent does a shallow compare on the component's props and state)
class Cars extends PureComponent {
  constructor(props) {
    super(props)
    // state for search bar
    this.state = {
      filterTextInput: '',
    }
  }

  handleChange = event => {
    this.setState({
      filterTextInput: event.target.value,
    });
  };


  render() {
    // search bar functionality (to search by car model)
    const filteredList = this.props.cars.filter( car => car.model.toLowerCase().startsWith(this.state.filterTextInput.toLowerCase()));

    console.log('cars=', this.props.cars);
    console.log('props in cars=', this.props);
    return(

      <React.Fragment>
        <div className="search">
          <input value={this.state.filterTextInput} onChange={this.handleChange} placeholder="Search by car model" type="text" />
        </div>

        <div className="cars">

          <table>
            <thead>
              <tr>
                <th>Model</th>
                <th>Year</th>
                <th className="producer">Producer</th>
                <th>Price</th>
                <th>Mileage</th>
              </tr>
            </thead>

            <tbody>
              {filteredList.map( car => <Car car={car} key={car._id} handleClick={this.props.handleClick} />)}
            </tbody>

          </table>

        </div>
      </React.Fragment>
    )

  }

}

const Car = (props) => {
  const { car } = props;
  return (
    <tr onClick={event => props.handleClick(event, car)}>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td className="producer">{car.producer}</td>
      <td>{car.price}</td>
      <td>{car.mileage}</td>
    </tr>
  )

}

export default Cars;
