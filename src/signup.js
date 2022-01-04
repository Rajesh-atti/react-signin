import React from 'react'
import logo from './logo.svg'
import Select from 'react-select'

const imaginaryThings = [
    { label: 'Thing 1', value: 1 },
    { label: 'Thing 2', value: 2 },
    { label: 'Thing 3', value: 3 },
    { label: 'Thing 4', value: 4 },
    { label: 'Thing 5', value: 5 },
  ];

export default class Signup extends React.Component {


    state = {
        userName: '',
        phonenumber: '',
        mail: '',
        password: '',
        showLoginPage: false
    }


    componentDidMount() {
        const getUserDetails = localStorage.getItem("currentUser")
        console.log(getUserDetails)
        if (getUserDetails) {
            this.setState({
                showLoginPage: true
            })
        }
    }
    handleTextChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        if (name === "phonenumber") {
            if (value.length > 10) {
                return alert('phone number should not be greater than 10')
            }
        }
        this.setState({
            [name]: value
        })
    }


    handleSubmit = () => {
        const { userName, phonenumber, mail, password } = this.state

        if (phonenumber.length < 10) {
            return alert('Enter valid phone num')
        }
        let userDetails = {
            userName: userName,
            phonenumber: phonenumber,
            mail: mail,
            password: password
        }
        localStorage.setItem("currentUser", JSON.stringify(userDetails));
        alert('User created successfully')
        this.setState({
            showLoginPage: true
        })
    }

    handleSignIn = () => {
        const { userName, password } = this.state
        const getUserDetails = localStorage.getItem("currentUser")
        console.log(getUserDetails)

        let userDetails = JSON.parse(getUserDetails)
        if (userDetails.userName === userName && userDetails.password === password) {
            alert("Login Successfull")
        } else {
            alert("Invalid user or user not found")
        }
    }
    onKeyDown=(event)=>{
console.log(event.keyCode)
        if(event.keyCode==9){
            event.preventDefault()
        }
    }
    render() {
        const { showLoginPage } = this.state
        return (
            <div className="App">
            <header className="App-header">
              <input   type="number" style={{border:'1px solid red' ,width:'200px',height:'30px'}}/>
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={imaginaryThings[0]}
          name="color"
          options={imaginaryThings}
          onKeyDown={this.onKeyDown}
        />

            </header>
          </div>
            )
    }
}