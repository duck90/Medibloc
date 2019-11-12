import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    render(){
        return (
            <div style={{width: "40%"}}>
                <table>
                <colgroup>
                    <col width="50px" />
                    <col width="100px" />
                    <col width="200px" />
                    <col width="100px" />
                    <col width="100px" />
                    <col width="100px" />
                </colgroup>
                    <thead>
                        <tr style={{border: "1px solid black"}}>
                            <td align="center">id</td>
                            <td align="center">name</td>
                            <td align="center">email</td>
                            <td align="center">phone</td>
                            <td align="center">address</td>
                            <td align="center">삭제</td>
                        </tr>
                    </thead>
                    <tbody>
                       { this.props.userDate.map( (item, i) => {
                           return <tr key={i}> 
                                <td align="center">{item.id}</td>
                                <td align="center">{item.name}</td>
                                <td align="center">{item.email}</td>
                                <td align="center">{item.phone}</td>
                                <td align="center">{item.address}</td>
                                <td align="center"><button type="button" onClick={()=>this.props.deleteUserData(item.id)}>삭제</button></td>
                           </tr>
                       }) }
                    </tbody> 
                </table>
            </div>
        );
    }
}

export default Table;