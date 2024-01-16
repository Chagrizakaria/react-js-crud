import React  ,{Component}from "react";
class Customer extends Component {
    onDelete=()=>{
        this.props.onDelete(this.props.customer.id);
        //  console.log("Ondelete");
    };
    onEdit=()=>{
        this.props.onEdit(this.props.customer);
        //  console.log("Onedit");
    };

    render(){

     const customer= this.props.customer;
             return   ( 
             <tr>
            <td style={{textAlign:"center"}}>{customer.id}</td>
            <td>{customer.first_name} - {customer.last_name}</td>
            <td>{customer.email}</td>
    
            <td className="ui buttons" >
            <button className="mini ui blue button" onClick={this.onEdit}>Edit</button> 
            <button className="mini ui red button"  onClick={this.onDelete}>Delete</button>
            </td>
        </tr>)   
    }
}
export default Customer