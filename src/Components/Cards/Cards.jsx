import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ quiz }) => {
  const { name, logo, id, total } = quiz;
  return (
    
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img className="bg-[#41403d]" src={logo}alt="Shoes" />
      </figure>
      <div className="card-body w-3/4">
          <h2 className="card-title ">{name}</h2>
          <p className="text-lg font-medium">Total Quiz: {total}</p>
          <div className="card-actions">
            <Link to={`/quiz/${id}`} className="w-full">
              <button className="btn w-full btn-dark">Test Quiz</button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Cards;
