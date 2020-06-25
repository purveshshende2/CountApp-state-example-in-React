import React from 'react';
import './App.css';
class Profile extends React.Component{
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
increaseButton(){
    this.setState({
        count : this.state.count+1
    })
}

decreaseState(){
    this.setState({
        count : this.state.count-1
    })
}
    render(){
        return(
            <div>
                <h1>Counter App</h1>
                <h1>count :  {this.state.count} </h1>
                <button className = 'increaseButton' onClick  = {() =>{this.increaseButton()}}>Increase</button>
                <button className = 'decreaseButton'  onClick  = {() =>{this.decreaseState()}}>Decrease</button>

            </div>
        )
    }
}

export default Profile;