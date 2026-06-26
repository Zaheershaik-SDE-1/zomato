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