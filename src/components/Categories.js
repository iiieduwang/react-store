import React,{ Component } from 'react';
import CategoryList from './categories.json';
import { Link, NavLink } from 'react-router-dom';

class Categories extends Component{
    // constructor(props){
    //     super(props);
    // }
    // toggleClass(id,evt){
    //     //console.log(id);
    //    //evt.target.classList.toggle('active');
    //     // evt.target.classList.toggleClass('active')
    //     // const currentState = this.state.active;
    //     // this.setState({ active: !currentState });
    //     // var btn = $(evt.target);
    //     // btn.parents().find("button").removeClass('active');
    //     // btn.addClass('active');
    //     console.log(id)
    //     console.log(evt)
    //     console.log(this)
    //      this.props.add(id);
    // }
    render(){
        return(
            <div className="list-group">
            {CategoryList.map((category)=>{
                return <Link className="list-group-item list-group-item-action" to={`/store/${category.CategoryId}`}  key={category.CategoryId}>{category.CategoryName}</Link>
            })}         
            
          </div>
        );
    }
}
export default Categories;