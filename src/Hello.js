import React from 'react';


// const Hello = () => {
//     return (
//         <div>
//             <h1>Hello, Welcome to Zomato!  </h1>
//         </div>
//     )
// }

const Hello = () =>
{
    return React.createElement('div', {id: 'hello', classNamw:'dummy class'}, React.createElement('h1', null, 'Hello, Welcome to Zomato!'));
}

export default Hello;