import React, { useContext } from "react";
import { CardDataContext } from "../Root/Root";
import { BarChart, Bar, XAxis, YAxis } from "recharts";
import Lottie from "lottie-react";
import chart from "./chart.json";

const Statistics = () => {
  const quizData = useContext(CardDataContext);

  return (
    <div className="bg-rose-50">
      <div className="grid grid-cols-1 md:grid-cols-2  items-center md:w-[90%] mx-auto h-[100vh] py-4 ">
       
        <div>
          <BarChart
            className="mx-auto"
            width={320}
            height={400}
            data={quizData.data}
          >
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
// const quizData = useContext(CardDataContext);
// console.log(quizData.data);
