import React from 'react';

const CarDetails = (props) => {
  const clicked_car = props.clicked_car;
  const image_src = props.image_src;
  return (
  <div className="car-detail-info">
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
  </div>
  )
}

export default CarDetails;
