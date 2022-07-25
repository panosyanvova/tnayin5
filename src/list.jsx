import {Component} from "react";
import Row from "./row";

class Cucak extends Component{
    render(){

    return(
        <div className="main">
            <div className="list">
                <table border="1">
                    <caption>Tesla</caption>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>date</th>
                            <th>count</th>
                            <th>price</th>
                            <th>totalAmout</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Row id = {1} name = "Model X" date = "2015 September 29" count={3} price={94990}/>
                        <Row id = {2} name = "Model Y" date = "2020 Mart 13" count={2} price={103500}/>
                        <Row id = {3} name = "Model S" date = "2012  Hunis" count={1} price={59990}/>
                        <Row id = "" name = "Total" date = "" count="" price=""/>
                    </tbody>
                                        
                </table>
            </div>
        </div>
    )
    }
}

export default Cucak