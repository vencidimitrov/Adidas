import React, { Fragment } from "react";
import Header from '../header/index'
import {Link} from 'react-router-dom'
import data from '../data'

const ProductPage = (props) => {
    const id = props.match.params.id
    const product = data.filter((item) => {
      return item.id === id
    })[0]

    console.log(product)
    
  return (
    <Fragment>
    <Header />
      <div>
         Product Page - {product.title}
      <div>
        <Link to="/">
         Go back to homepage
        </Link> 
      </div>
        </div>
    </Fragment>
  );
};

export default ProductPage;
