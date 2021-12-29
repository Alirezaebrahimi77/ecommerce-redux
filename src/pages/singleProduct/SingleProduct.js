import React, {useEffect} from 'react'
import "./singleProduct.css"
import { useDispatch, useSelector } from 'react-redux'
import {getSingleProduct} from "../../actions/singleProductActions"
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

const SingleProduct = () => {
    const dispatch = useDispatch();
    const {loading, error, singleProduct} = useSelector(state => state.singleProduct)
    const {id} = useParams();
    useEffect(()=> {
        dispatch(getSingleProduct(id))
    },[dispatch, error])


    return (
        
        <div className='singleProductsWrapper'>
            {loading ? <Loader /> : 
            <>
            <div className="singleProductLeft">
                <img src={singleProduct.image} alt={singleProduct.title} />
                



            </div>

            <div className="singleProductRight">

                <div className="singleProductContent">
                    <p>{singleProduct.title}</p>
                    <p>{singleProduct.price}</p>
                    <p>{singleProduct.description}</p>
                </div>
                
            </div>            </>}
            
            

            
            
        </div>
    )
}

export default SingleProduct
