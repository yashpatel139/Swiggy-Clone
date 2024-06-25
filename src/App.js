import React, { useState, useEffect, Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import About from "./components/About";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";

// lazy loading
const Instamart = lazy(() => import("./components/Instamart"));

/*
//React element....
const heading1 = React.createElement("h1",
{
    id: "tittle",
    key: "h1", //this id tittle was created inside h1 tag // this is props (attributes)
}
,"Hello World"); //stuff u wanna to insert in the tag created

const heading2 = React.createElement("h2",
{
    id: "mittle",
    key: "h2",
},
"Hello Yash from paracel");


const container= React.createElement("div",
{
    id: "container",
    
},
[heading1,heading2]);
//these react elements heading1 and heading2 will override everything


const root= ReactDOM.createRoot(document.getElementById("root"));

console.log(heading1); // this shows that heading was an java script object

//now passing the react element inside the root
root.render(container); //react will override everything

*/
// to skip this mess we use jsx.........

// const Tittle=( //tittle as a normal js variable
//     <h1 id="tittle" key="h2">
//     Namaste React
//     </h1>
// ); //this is just a normal variable

// const Tittle1=()=>( //tittle as a js components or js function
//     <h1 id="tittle1" key="h12">
//     A java script function
//     </h1>
// ); //this is a java script function

// const HeaderComponent = () => { //making header a functional component then calling by render function
//     return(
//         <>
//             {/* {Tittle}
//             {Tittle1()}
//             <Tittle1/>
//             <h2>this is functional component</h2>
//             <h2>using h2 tag</h2> */}

//             <Header />
//             {/* <Outlet /> */}
//             <Footer />
//         </>
//     );
// };

//best way to make dynamic web pages....

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Yash",
    };
    setUserName(data?.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeaderComponent />); //this is how we render our functional component
//root.render(<AppLayout/>);

root.render(<RouterProvider router={appRouter} />);
