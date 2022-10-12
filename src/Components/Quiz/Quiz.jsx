import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingelQuiz from "../SingelQuiz/SingelQuiz";

const Quiz = () => {
  const quizData = useLoaderData();
  const { total, name, logo, questions: Questions } = quizData.data;

  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);

  return (
    <div className="grid grid-cols-12 md:grid-cols-[3fr ,1fr]  gap-4 w-[90%] mx-auto bg-rose-50 py-6">
      <div className="w-[90%] mx-auto col-span-full md:col-span-9">
        <h2 className="text-3xl font-bold text-center">
          Crack the Quiz {name}
        </h2>

        <div>
          <div>
            <img
              className="w-[20%] md:w-[10%] xl:w-[8%] mx-auto"
              src={logo}
              alt=""
            />
          </div>

          {/* logo end */}

          {/* main quiz section start */}
          <div>
            {Questions.map((ques, idx) => (
              <SingelQuiz
                key={ques.id}
                question={ques}
                idx={idx}
                right={right}
                setRight={setRight}
                wrong={wrong}
                setWrong={setWrong}
              />
            ))}
          </div>
          {/* main quiz section end */}
        </div>
      </div>

      {/* second section */}

      <div className="h-full w-[90%] mx-auto bg-lime-50 col-span-full md:col-span-3 p-4 rounded-2xl relative">
        <div className="sticky top-2">
          <h2 className="text-center font-semibold text-2xl">
            Number of Quiz : {total}
          </h2>
          <div className="mt-6">
            <h4 className="text-xl font-medium mb-3">
              Total Correct Ans : {right}
            </h4>
            <h4 className="text-xl font-medium">Total Wrong Ans : {wrong}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
