import React, { Fragment } from "react";
import styles from './styles.module.css'
import ProductCard from "../product-card";
import Header from "../header/index";
import logged from "../logged";
import data from "../data";

// const Wrapper = styled.div`S
//   text-align: center;
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: flex-start;
//   font-size: calc(10px + 2vmin);
//   color: white;
//   padding-top: 40px;

//   ${(props) =>
//     props.blue &&
//     css`
//       background-color: blue;
//     `}
// `;

const renderCards = (products) => {
  return products.map((product) => {
    return (
     <Fragment key={product.id}>
    {logged(ProductCard, product)}
    </Fragment>
    )
  });
};

class ProductList extends React.Component {
  state = {
    ownerName: "" 
  }

  render() {

    return (
      <Fragment>
        <Header />
        <div>
          {this.state.ownerName}
        </div>
        <div className={styles.container}>
          {renderCards(data)}
        </div>
      </Fragment> 
    )
  }
}




export default ProductList;
