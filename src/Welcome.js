import react, {Component} from "react";

class Welcome extends Component
{
    render()
    {
        return(
            <div>
                <h1>Hello, {this.props.name} Welcome to Zomato! a.k.a {this.props.heroName} </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;