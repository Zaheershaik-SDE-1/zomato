import React from "react";

// function Greet()
// {
//     return <h1>Hello, Welcome to Zomato!  </h1>
// }

//export const Greet = () => <h1>Functional Component </h1>

const Greet = ({name, heroName, children}) => {
    return(
        <div>
            <h1>Hello, {name} Welcome to Zomato! a.k.a {heroName} </h1>
            {children}
        </div>
        
    ) 
}

export default Greet;