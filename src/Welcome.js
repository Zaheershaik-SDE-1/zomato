import react, {Component} from "react";

class Welcome extends Component
{
    render()
    {
        const {name, heroName, children} = this.props
        //cosnt {state1, state2} = this.state
        return(
            <div>
                <h1>Hello, {name} Welcome to Zomato! a.k.a {heroName} </h1>
                {children}
            </div>
        )
    }
}

export default Welcome;