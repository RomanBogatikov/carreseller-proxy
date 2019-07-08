import React, { PureComponent } from 'react';
import styled from 'styled-components';

const StyledCars = styled.div`
  .cars > table thead {
    display: block;
  }

  .cars > table > tbody {
    display: block;
    height: 45vh;
    overflow: auto;
  }

  .cars > table {
    width: 100%;
  }

  .cars > table > thead > tr, .cars > table > tbody > tr {
    display: flex;
    justify-content: space-between;
    flex: auto;
  }

  .cars > table > thead > tr > *, .cars > table > tbody > tr > * {
    flex-basis: 20%;
  }

  .cars > table > thead > tr > th {
    text-align: left;
  }

  tr {
    border: 1px solid black;
    margin: 0.5rem 1rem 0.5rem 1rem;
    padding: 0.5rem;
  }

  tbody > tr {
    cursor: pointer;
  }

  tbody > tr:hover {
    box-shadow: 0 0 0.35rem rgba(0, 0, 0, 0.9);
  }

  thead > tr {
    box-shadow: 0 4px 2px -2px gray;
    background-color: rgb(129, 230, 169);
    margin-bottom: 0;
  }

  @media (max-width: 36rem) {
    .producer {
      display: none;
    }
  }
`

const Search = styled.div`
  & {
    text-align: right;
  }

  input[type="text"] {
    box-sizing: border-box;
    font-size: 1rem;
    margin-top: 0.5rem;
    width: 20rem;
    transition: width 1s;
  }

  input[type="text"]:focus {
    width: 100%;
  }
`

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

      <StyledCars>
        <Search className="search">
          <input value={this.state.filterTextInput} onChange={this.handleChange} placeholder="Search by car model" type="text" />
        </Search>

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
      </StyledCars>
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
