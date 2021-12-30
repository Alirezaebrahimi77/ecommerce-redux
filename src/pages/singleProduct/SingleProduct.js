import React, { useEffect } from "react";
import "./singleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../../actions/singleProductActions";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import StarRatings from "react-star-ratings";

const SingleProduct = () => {
    const dispatch = useDispatch();
const { loading, singleProduct } = useSelector(
    (state) => state.singleProduct
  );
  const { id } = useParams();


  useEffect(() => {

    dispatch(getSingleProduct(id));
   
  }, [dispatch, id]);




  return (
    <div className="singleProductsWrapper">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="singleProductLeft">
            <img src={singleProduct.image} alt={singleProduct.title} />
          </div>
          <div className="singleProductRight">
            <div className="singleProductContent">
              <p className="singleProductTitle">{singleProduct.title}</p>

              <StarRatings
                rating={singleProduct.rating && singleProduct.rating.rate}
                starDimension="18px"
                starSpacing="2px"
                starRatedColor= "gold"
              />
              <span style={{color: "grey"}}> ({singleProduct.rating && singleProduct.rating.count})</span>
              <p className="singleProductPrice">{`${singleProduct.price}$`}</p>
              <p className="singleProductDesc">{singleProduct.description}</p>
            </div>

            <button className="addToCartBtn">Add to Cart</button>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
