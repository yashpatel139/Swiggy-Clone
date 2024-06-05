import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Body from "./src/components/Body";

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

const HeaderComponent = () => {
    return(
        <> 
            {/* {Tittle}
            {Tittle1()}
            <Tittle1/>
            <h2>this is functional component</h2>
            <h2>using h2 tag</h2> */}

            <Header />
            {/* <Outlet /> */}
            <Footer />
        </>
    );
};
 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />); //this is how we render our functional component