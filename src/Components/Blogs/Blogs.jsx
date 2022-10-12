import React from "react";
import Lottie from "lottie-react";
import blog from "./blog.json";

const Blogs = () => {
  return (
    <div className="bg-yellow-50 pt-8">
      <section className="w-[90%] mx-auto py-4">
        
        <div className="my-8 w-[80%] mx-auto">
          <h2 className="text-3xl font-semibold py-4 text-center">
            Questions & Answers
          </h2>
          <div className="mt-8">
            {/* ques no 1 */}
            <div>
              <h3 className="text-2xl font-semibold text-purple-500">
                1. What is the purpose of React Router ?
              </h3>
              <p className="text-xl font-medium">
                Ans : React Router is a library that used to handle client and
                server-side routing in React applications . It is mainly used to
                build single page web applications also known as SPA. It gives
                us the ability to navigte among the components without
                refreshing the page. It allows changing the browser URL and
                keeps the UI sync with the URL.
              </p>
            </div>

            {/* ques no 2 */}
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-purple-500">
                2. How does Context Api work ?
              </h3>
              <p className="text-xl font-medium">
                Ans : If we need to pass some props from parent to child or
                grandparent to child we will do the prop drilling to pass the
                props. But it would be very difficult at some point to get rid
                of this problem we can use Context Api . Context provides a way
                to pass data through the component tree without having to pass
                props down manually at every level.Context is designed to share
                data that can be considered “global” for a tree of React
                components, such as the current authenticated user, theme, or
                preferred language.
              </p>
            </div>

            {/* ques no 3 */}
            <div className="mt-4">
              <h3 className="text-2xl font-semibold text-purple-500">
                3. What is the work of useRef hook ?
              </h3>
              <p className="text-xl font-medium">
                Ans : The useRef Hook allows us to persist values between
                renders. It can be used to store a mutable value that does not
                cause a re-render when updated. It can be used to access a DOM
                element directly . If we tried to count how many times our
                application renders using the useState Hook, we would caught an
                infinite loop since this Hook itself causes a re-render. To
                avoid this, we can use the useRef Hook.
              </p>
            </div>
            {/* ques end */}
          </div>
        </div>
      </section>

      <h2 className="text-4xl text-center font-bold py-8">The End</h2>
    </div>
  );
};

export default Blogs;
