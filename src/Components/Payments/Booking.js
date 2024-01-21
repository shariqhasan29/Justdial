import React from "react";

const recharge = ({data, tittle}) => {
  return (
    <div className="bills border">
      <div className="tittles">
         <h6>{tittle.heading}</h6>

         <p>{tittle.description}</p>
      </div>

      <div className="icons">
            {data.map((data) => {
                return (
                    <div className="service">
                        <div className="img">
                            <img src={data.img} alt="" />
                        </div>
                        <p>{data.tittle}</p>
                    </div>
                );
            })}
      </div>
    </div>
  );
};

export default recharge;
