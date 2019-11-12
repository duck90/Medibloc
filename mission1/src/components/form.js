import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            email: "",
            name: "",
            phone:"",
            address: ""
        };
    };
    
    
    /** 
     * When input value changed, changing state
     * 
    */
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submitBtnButtonClick = () => {
        var userInfo = {
            id: this.state.id,
            email: this.state.email,
            name: this.state.name,
            phone: this.state.phone,
            address: this.state.address
        }
        this.setState({
            id: this.state.id + 1, 
            email: "",
            name: "",
            phone:"",
            address: ""
        });
        // apply home function
        this.props.addUserData(userInfo);
    }

    render(){
        return (
            <div>
                 <form style={{display:"flex", flexDirection: "column", justifyContent: "space-around"}}>
                    <div>
                        <input
                            placeholder="이름"
                            value={this.state.name}
                            onChange={this.handleChange}
                            name="name"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            name="email"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="전화번호"
                            value={this.state.phone}
                            onChange={this.handleChange}
                            name="phone"
                        />
                    </div>
                    <div>
                        <input
                            placeholder="주소"
                            value={this.state.address}
                            onChange={this.handleChange}
                            name="address"
                        />
                    </div>
                    <button type="button" onClick={this.submitBtnButtonClick}>생성</button>
                </form>
            </div>
        );
    }
}

export default Form;