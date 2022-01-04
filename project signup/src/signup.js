import React from 'react'

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
    render() {
        const { showLoginPage } = this.state
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <div style={{ height: '450px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#EEEEEE', margin: '10%', width: '50%', paddingLeft: '10px' }}>
                    <h1>{showLoginPage ? 'Sign In' : 'Sign Up'}</h1>
                    {!showLoginPage && <div>
                        <p>Enter your User Name:</p>
                        <input
                            type="text"
                            name="userName"
                            onChange={this.handleTextChange}
                        />
                        <p>Enter your Phone:</p>
                        <input
                            type="text"
                            name="phonenumber"
                            onChange={this.handleTextChange}
                        />
                        <p>Enter your Mail:</p>
                        <input
                            type="text"
                            name="mail"
                            onChange={this.handleTextChange}
                        />
                        <p>Enter your Password:</p>
                        <input
                            type="text"
                            name="password"
                            onChange={this.handleTextChange}
                        />
                        <div style={{ marginTop: '10px' }}>
                            <button onClick={this.handleSubmit} style={{ height: '50px', backgroundColor: 'green', color: "#fff" }}>
                                Create User
                         </button>
                        </div>
                    </div>}
                    {
                        showLoginPage &&
                        <div>
                            <p>Enter your UserName:</p>
                            <input
                                type="text"
                                name="userName"
                                onChange={this.handleTextChange}
                            />
                            <p>Enter your Password:</p>
                            <input
                                type="text"
                                name="password"
                                onChange={this.handleTextChange}
                            />
                            <div style={{ marginTop: '10px' }}>
                                <button onClick={this.handleSignIn} style={{ height: '50px', backgroundColor: 'green', color: "#fff" }}>
                                    Sign In
                         </button>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}