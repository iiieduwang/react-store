import React, { Component } from 'react';
import ProductList from './products.json';

class Products extends Component {
    constructor(props) {
        super(props);
        const id = this.props.categoryId || 1;
        let products = ProductList.filter(function (product) {
            return product.CategoryID === parseInt(id);
        });
        this.state = {
            "products": products
        };
    }


    static getDerivedStateFromProps(props, state) {
        if (props.categoryId !== state.categoryId) {
            var id = props.categoryId;
            let products = ProductList.filter(function (product) {
                return product.CategoryID === parseInt(id);
            });
            return {
                "categoryId": props.categoryId,
                "products": products
            }
        }
        return null;
    }
    render() {
        return (
            // <div className="card-deck">
            <div className="row">
                {this.state.products.map((product) => {
                    // var show = <div className="card" key={product.ProductID}>
                    //     <img className="card-img-top" src={"ProductImages/" + product.ProductImage} alt={product.ModelName} />
                    //     <div className="card-body">
                    //         <h6 className="card-title">{product.ModelName}</h6>
                    //         <p>產品型號 {product.ModelNumber}</p>
                    //         <p>優惠價 {product.UnitCost}</p>
                    //     </div>
                    // </div>;
                    var show =
                        <div className="col-sm-4" key={product.ProductID}>
                            <div className="cart">
                            <img className="card-img-top" src={"/ProductImages/" + product.ProductImage} alt={product.ModelName} />
                                  <div className="card-body">
                                    <h6 className="card-title">{product.ModelName}</h6>
                                    <p className="cart-text">產品型號 {product.ModelNumber}</p>
                                    <p className="cart-text">優惠價 {product.UnitCost}</p>
                                </div>
                            </div>
                        </div>
                    ;

                    return show;
                })}
            </div>
        )
    }
    // componentDidUpdate(prevProps) {
    //     // Typical usage (don't forget to compare props):
    //     if (this.props.categoryId !== prevProps.categoryId) {
    //         var id = this.props.categoryId;
    //         let products = ProductList.filter(function(product){
    //             return product.CategoryID === parseInt(id);
    //         });
    //         this.setState({
    //                 "products":products
    //             });
    //     }
    //   }

}
export default Products;