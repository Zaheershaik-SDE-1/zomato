import React,{Component} from 'react';

class Counter extends Component{

    constructor()
    {
        super()
        this.state = {
            count: 0
        }
    }

    increment()
    {
    //     this.setState({
    //         count: this.state.count + 1
    //     }, () => {console.log('Callback value', this.state.count)}
    //    )
    //    console.log(this.state.count)

          this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }
    incrementfive()
    {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render()
    {
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter;





/*Notes : 

Always make use of setState and never modify the state directly.

Code has to be executed after the state has been updated ? place that code in the callback function which is the second argument of the setState method.

When you have to update state based on the previous state value, pass in a function as an argument insted of regular object.

*/
