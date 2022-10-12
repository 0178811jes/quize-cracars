import React, { useContext } from "react";
import Lottie from "lottie-react";
import coding from "./coding.json";
import { Link } from "react-router-dom";
import Cards from "../Cards/Cards";
import { CardDataContext } from "../Root/Root";

const Home = () => {
  const cardData = useContext(CardDataContext);

  return (
    <div className="">
      {/* top section  */}
      <div className="bg-orange-100">
        <section className="grid gap-x-8 grid-cols-1 md:grid-cols-2 items-center py-8 w-[80%] mx-auto">
          <div>
            <h2 className="text-center md:text-left text-xl md:text-3xl lg:text-5xl font-medium ">
              
              <span className="text-red-500 font-bold">
                Crack The Quiz
              </span>
              <p className="text-2xl">This platform is just for you to grow your brain.</p>
            </h2>
            <div className="flex justify-center md:block">
              <Link to="/blogs">
                <button className="btn btn-dark mt-6">Explore Blogs</button>
              </Link>
            </div>
          </div>
          <div className="">
            <Lottie className="w-full" animationData={coding} />
          </div>
        </section>
      </div>
      {/* top section  */}

      {/* card section */}
      <section className="bg-cyan-100 py-8">
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 items-center py-8 w-[80%] mx-auto ">
          {cardData.data.map((quiz) => (
            <Cards key={quiz.id} quiz={quiz}></Cards>
          ))}
        </div>
      </section>
      {/* card section */}
    </div>
  );
};

export default Home;
