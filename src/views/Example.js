import React, { Component } from 'react'

export default class Example extends Component {
    constructor(){
        super();this.state={
            name: "Pika",
            students: ["Anu", "McCall", "Christina", "Time", "Mike", "David"],
        }
        console.log("In the Constructor")
    }

    componentDidMount(){
        console.log("In Component Did Mount")
    }

    componentDidUpdate(){
        console.log("In component did update")
    }

    componentWillUnmount(){
        console.log("in component will unmount")
    }


    render() {
        const styles = {
            button:{
                backgroundColor: 'blue', 
                color: 'white'
            },
            text:{
                color: 'green',
                backgroundColor: 'yellow'
            }
        }
        const handleSetName = (input_name)=>{
            this.setState({name:input_name}, ()=>console.log(`state has been changed now. the name is ${this.state.name}`))
            console.log("Log the name after I do setState", this.state.name)
        }


        return (
            <div>
                {console.log("In render")}
                {this.state.name==='Pika' ? `Let's play a game ${this.state.name}`: `${this.state.name}, did I scare you?`}
                <br />
                <span style={styles.text}>The name is {this.state.name}</span>
                <br />
                <button onClick={()=>handleSetName("Boo")} style = {styles.button}>Set name to "Boo"</button>
                <button onClick={()=>handleSetName("Pika")}style = {styles.button}>Set name to "Pika"</button>
                <div style={{backgroundColor: 'red', color: 'green', marginTop: '60px'}}>
                    Display a new list element for every item in array
                </div>

                <ul>
                    {this.state.students.map((student, index)=><li key={index}> {student}</li>)}
                </ul>
            </div>
        )
    }
}
