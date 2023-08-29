import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
  return (
    <div className="min-h-screen bg-black">
      <div className="App">
        <div className="bg-pink-600 text-center w-[200px] py-2 font-Nunito text-xl rounded-lg mx-auto">
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
          </Pdf>
        </div>
        <div ref={ref} className="my-2 bg-black w-11/12 mx-auto ">
          <h1>
            1.Tell us the differences between uncontrolled and controlled
            components.
          </h1>
          <h1>
            Ans:The controlled components have state and behavior which are
            basically controlled by the parrent components by sending props.But
            uncontrolled components are basically the type of components which
            manages their own component state and behavior on their own
          </h1>
          <h1>2.How to validate React props using PropTypes</h1>
          <h1>
            Ans:we validate them by setting the propTypes property of the
            FooComponent component to an object that has the names of the props
            to validate as the keys. And the corresponding values are the data
            type of the props.
          </h1>
          <h1>3.Tell us the difference between nodejs and express js</h1>
          <h1>
            Ans:Express.js is a minimalist web application framework built on
            top of Node.js, providing a simple and flexible way to create web
            servers and APIs. Node.js, on the other hand, is a runtime
            environment that allows JavaScript to be executed on the
            server-side, enabling high-performance and scalable network
            applications.
          </h1>
          <h1>
            3.What is a custom hook, and why will you create a custom hook?
          </h1>
          <h1>
            Ans: Custom hooks are an advanced concept that allows developers to
            create their own reusable hooks, If I need to perform side effects
            like API calls, managing subscriptions, or handling browser events,
            a custom hook can encapsulate this behavior, making it easier to
            manage and reuse across components.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
