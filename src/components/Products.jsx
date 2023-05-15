import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { STATUSES, fetchProducts } from '../store/productSlice'

const Products = () => {

    const dispatch = useDispatch()
    const { data: products, status } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    const handleAdd = (product) => {
        dispatch(add(product))
    }

    if(status === STATUSES.LOADING){
        return <h2>Loading....</h2>
    }

    if(status === STATUSES.ERROR){
        return <h2>Something went wrong !</h2>
    }

    return (
        <div className='productsWrapper'>
            {
                products && products.map((product) => {
                    return <div className='card' key={product.id}>
                        <img src={product.image} alt="image" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className='btn' onClick={() => handleAdd(product)}>Add to cart</button>
                    </div>
                })
            }
        </div>
    )
}

export default Products