import {Component} from "react";

class Row extends Component{
    render(){
        console.log(this);
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.date}</td>
                <td>{this.props.count}</td>
                <td>{this.props.price}</td>
                <td>{(this.props.price == "") ? "551960 dollar" : this.props.count * this.props.price + " dollar"}</td>
            </tr>
            
            
            );
    
    }
}

export default Row;
