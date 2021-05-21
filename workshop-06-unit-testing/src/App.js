import React from 'react';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isLoggedIn: false
        }
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    submitClick = () => {
        if ((this.state.username === "2020566") && (this.state.password === "testing")) {
            this.setState({isLoggedIn: true});
        }
    }

    render() {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-lg-4 offset-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="mb-3">React JS Unit testing</h4>
                                <div className="form-group">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" name="username" hint="username" onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" name="password" hint="password" onChange={this.handleInputChange}/>
                                    </div>
                                    <button className="btn btn-primary" name="submit" onClick={this.submitClick}> Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
