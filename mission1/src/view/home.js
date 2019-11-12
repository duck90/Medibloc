import React from 'react';
import Table from '../components/table'
import Form from '../components/form'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {     
            userData: []
        };
    };
    
    addUser = (userInfo) => {
        this.setState({
            userData: [...this.state.userData, userInfo],
        });
    }

    deleteUser = (userId) => {
        var userData = this.state.userData;
        userData = userData.filter((data)=> data.id !== userId);
        this.setState({
            userData: userData
        });
    }

    render(){
        return (
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
                <Form addUserData={this.addUser} ></Form>
                <Table deleteUserData={this.deleteUser} userDate={this.state.userData}></Table>
            </div>
        );
    }
}

export default Home;