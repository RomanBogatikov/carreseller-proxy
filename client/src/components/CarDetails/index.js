import React from 'react';
import styled from 'styled-components';

const CarDetailInfo = styled.div`
  display: flex;
  height: 45vh;

  fieldset {
    min-width: 12rem;

    div {
      line-height: 1.5rem;
    }
  }

  fieldset, .img_container {
    flex: auto;
  }

  .img_container {
    text-align: center;
    line-height: 45vh;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }

  @media (max-width: 48rem) {
    & {
      flex-direction: column;

    }
    .car_details {
      display: flex;
      flex-wrap: wrap;
    }
    .car_details > div {
      flex-basis: 50%;
    }
    .img_container {
      line-height: 0;
      height: 20vh;
    }
    img {
      margin: 0 auto;
      // object-fit: contain;
    }
    fieldset {
      height: auto;
    }
  }
`

const CarDetails = (props) => {
  const clicked_car = props.clicked_car;
  const image_src = props.image_src;
  return (
  <CarDetailInfo className="car-detail-info">
    <fieldset>
      <legend>
        Car Detail Info
      </legend>
      <div className="car_details">
        <div><b>Model: </b>{clicked_car.model}</div>
        <div><b>Year: </b>{clicked_car.year}</div>
        <div><b>Producer: </b>{clicked_car.producer}</div>
        <div><b>Price, $: </b>{clicked_car.price}</div>
        <div><b>Owner: </b>{clicked_car.owner}</div>
        <div><b>Tel/Mobile: </b>{clicked_car['tel/mobile']}</div>
        <div><b>Mileage: </b>{clicked_car.mileage}</div>
        <div><b>Registered: </b>{clicked_car.registered}</div>
      </div>
    </fieldset>

    <div className="img_container">
      <img src={image_src} alt="a car" />
    </div>
  </CarDetailInfo>
  )
}

export default CarDetails;
