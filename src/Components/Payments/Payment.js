import React from "react";
import Recharge from "./Booking";
import "./payment.css"

const recharge = [
  {
    img: "https://www.treatpay.com/front/images/services/2.png",
    tittle: "Mobile",
  },
  {
    img: "https://rukminim2.flixcart.com/image/450/400/xif0q/dth-new/y/n/h/fast-delivery-only-for-gujrat-hd-set-top-box-1-month-gujrati-original-imagjpvdpcrsavz7.jpeg?q=90&crop=true",
    tittle: "DTH",
  },
  {
    img: "https://thumbs.dreamstime.com/z/electricity-logo-electric-bulb-logo-icon-electricity-logo-electric-bulb-logo-icon-simple-vector-logo-173466810.jpg",
    tittle: "Electricity",
  },
  {
    img: "https://media.istockphoto.com/id/1381628440/vector/gas-cylinder-oxygen-balloon-isolated-icon-equipment-for-safe-butane-and-propane-petroleum.jpg?s=612x612&w=0&k=20&c=s3_JK8M9hMAeNdtIIhNKwzWANHVGXqUDX7vvI1690_4=",
    tittle: "Gas",
  },
  {
    img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202305/cheapest-term-insurance-plans-in-india-sixteen_nine.jpg?size=948:533",
    tittle: "Insurance",
  },
];

const bookings = [
    {
      img: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202301/ezgif-sixteen_nine_355.jpg?size=948:533",
      tittle: "Flight",
    },
    {
      img: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/BS%20VI%20Bus%20Single%20Axcel_Single%20Bus?wid=1400&fit=constrain",
      tittle: "Bus",
    },
    {
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/495770673.jpg?k=a3ab75777fe408c49dfc8fc475bb53264440a0af4bcffd3fa3e65b15bf60ddd3&o=&hp=1",
      tittle: "Hotel",
    },
    {
      img: "https://www.reuters.com/resizer/TRPGeRro0dIGUYBbT4hVaOt0q-Y=/1920x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5BG4CNQIKZOOBCTGMWF3RHHMEE.jpg",
      tittle: "Train",
    },
    {
      img: "https://www.topgear.com/sites/default/files/2022/07/13.jpg",
      tittle: "Car",
    },
  ];

const tittle = {

    heading: "Bills & Recharge",
    description:"Pay your bills & recharge instantly with Justdial"

}
const tittle1 = {

    heading: "Travel Bookings",
    description:"Instant ticket bookings for your best travel experience"

}

const Payment = () => {
  return (
    <div>
      <Recharge data = {recharge} tittle = {tittle}/>
      <Recharge data = {bookings} tittle = {tittle1}/>
    </div>
  );
};

export default Payment;
