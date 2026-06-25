import React from "react";

// function Greet()
// {
//     return <h1>Hello, Welcome to Zomato!  </h1>
// }

//export const Greet = () => <h1>Functional Component </h1>

const Greet = props => {
    return(
        <div>
            <h1>Hello, {props.name} Welcome to Zomato! a.k.a {props.heroName} </h1>
            {props.children}
        </div>
        
    ) 
}

export default Greet;