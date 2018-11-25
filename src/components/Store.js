import React, {Component} from 'react';
import {Link } from 'react-router-dom';
import Categories from './Categories';
import Products from './Products';

class Store extends Component{
    constructor(props){
        super(props)
        console.log(this.props.match.params.id);
    }
    render(){
        return(
            <React.Fragment>
                <h1>分類編號 {this.props.match.params.id} 的產品資料</h1>
                 <div className="row">
                    <div className="col-3">
                    <Categories />
                    </div>
                    <div className="col-9">
                    <Products categoryId={this.props.match.params.id} />
                    </div>
                 </div>
                
                <hr />
               
            </React.Fragment>
            
        )
    }
    componentDidMount(){
        console.log("didMount" + this.props.match.params.id);
    }
    componentDidUpdate(){
        console.log("didUpdate" + this.props.match.params.id);
    }
}

export default Store;