import React,{useEffect} from 'react'
import "./Home.css"
import Product from "../../components/Product/Product"
import { useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../../actions/productActions'
import Loader from "../../components/Loader/Loader"

const Home = () => {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const {loading, products, productsCount} = useSelector(state => state.products)

    useEffect(()=>{
        if(products.length === 0){
            dispatch(getProducts())

        }
        
    }, [dispatch])

    return (
            <section className="products">
                {loading ? <Loader /> : products.map(product => (
                        <Product key={product.id} product={product}/>
                    )
                )}
            </section>
    )
}

export default Home
