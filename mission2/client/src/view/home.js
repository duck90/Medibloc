import React from 'react';
import axios from 'axios';

import Table from '../components/table'
import Form from '../components/form'

const apiServerUrl = 'http://localhost:4500/' 

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: []
        };
    }

    // When Mount home
    componentWillMount () {
        this.getUserData();
    }
    
    getUserData = () => {
        axios.get(apiServerUrl + 'user/')
        .then( res => {
            const userData = res.data;
            this.setState({userData: userData});
        })
        .catch(function (e) {
            console.log(e);
        })
    }
  
    addUser = (userInfo) => {
        axios.post(apiServerUrl + 'user/', userInfo)
        .then(() => {
            this.getUserData();
        })
        .catch(function (e) {
            console.log(e);
        })
    }

    deleteUser = (userId) => {
        axios.delete(apiServerUrl + 'user/userid/' + userId )
        .then(() => {
            this.getUserData();
        })
        .catch(function (e) {
            console.log(e);
        })
    }

    render(){
        return (
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <Form addUser={this.addUser} ></Form>
                <Table deleteUserData={this.deleteUser} userDate={this.state.userData}></Table>
            </div>
        );
    }
}

export default Home;