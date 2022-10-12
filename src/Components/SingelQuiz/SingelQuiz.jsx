import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingelQuiz = ({
  question: ques,
  right,
  setRight,
  idx,
  wrong,
  setWrong,
}) => {
  //   const ques = question;
  const { id, question, options, correctAnswer } = ques;

  const [result, setResult] = useState(true);

  const handleSeeResultBtn = () => {
    if (result === true) {
      toast.info(correctAnswer);
    }
    setResult(true);
  };

  const handleCorrectAns = (props) => {
    if (props === correctAnswer) {
      toast.success("You Have Selected The Right Ans");
      setRight(right + 1);
      //   console.log(right);
    } else {
      toast.error(
        `You Have Selected The Wrong Ans The Right Ans Is - ( ${correctAnswer} )`
      );
      setWrong(wrong + 1);
    }
  };

  return (
    <div>
      <div className="py-6 px-4 bg-slate-200 my-4 rounded-lg">
        <div className="flex  justify-end py-2">
          <button
            onClick={handleSeeResultBtn}
            className="btn btn-primary rounded-full"
          >
            <svg
              className="swap-on fill-current w-5 h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
          </button>
          <ToastContainer autoClose={2000} />
        </div>

        <h2 className="text-xl font-medium">
          Quiz no {idx + 1} : {question}
        </h2>
        <div className="">
          {options.map((option) => (
            <label key={option} className="flex items-center py-2">
              <input
                onClick={() => handleCorrectAns(option)}
                className="radio radio-primary my-2 mr-2"
                type="radio"
                id=""
                name={id}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingelQuiz;
