import { useState,useEffect } from "react";
import axios from "axios";
import as from"./Styles.module.css"
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ProductCard from "../../components/ProductCard/ProductCard";

function Home(){
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(false);
   
    function fetchProducts(){
        setLoading(true);
        axios.get("https://fakestoreapi.com/Products")
        .then(res=>{
            setLoading(false);
            setProducts(res.data);

        })
        .catch(err=>console.log(err));
    }
    useEffect(()=>{
        fetchProducts();
    },[]);
    // if(loading){
    //     return<h1>loading....</h1>
    // }
    if(loading){
        return(
    //         <Loader
    //     type="Puff"
    //     color="#00BFFF"
    //     height={100}
    //     width={100}
    //     timeout={3000} //3 secs
    //   />
    <div className={as.bar}>
    <Loader type="Bars" color="black" height={80} width={80} /></div>
        )
    }
    // const renderProduct=()=>{
    //     return products.map((product)=>{

    //     })

        
    // }
    const renderProducts = () =>{
        return products.map((product,idx)=><ProductCard key={idx} product={product}/>);
    }
    return(
        <div className={as.home}>
            {/* <h1>Home</h1>
            <p>
                THIS IS THE HOME PAGE
            </p> */}
            {renderProducts()}
            <button>addcart</button>
         
        </div>
    )
}
export default Home;