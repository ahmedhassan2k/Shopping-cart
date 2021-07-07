import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const WomenBrands = (props) => {
    const womenProducts = useSelector((state) => state.shopReducer.filter(gender => gender.Gender === 'Women'))
    if (props.value !== '') {
        const brands = womenProducts.filter(brand => brand.Brand === props.value)
        return (
            <div className='grid-container'>
                {brands.map((val, ind) => {
                    // console.log(val.Price);

                    return (
                        <div key={ind}>
                            <Link key={ind} to={`/shoe${val.id}`}>
                                <img src={val.image} width='200px' height='200px' />
                            </Link>
                            <p><strong>Name: {val.Name}</strong></p>
                            <p><strong>Price: {val.Price}</strong></p>
                        </div>)
                })}
            </div>
        )
    }

    else if (props.value === '') {
        return (
            <div className='grid-container'>
                {womenProducts.map((val, ind) => {
                    // console.log(val.Price);

                    return (
                        <div className='grid-box' key={ind}>
                            <Link key={ind} to={`/shoe${val.id}`}>
                                <img src={val.image} width='200px' height='200px' />
                            </Link>
                            <p><strong>Name: {val.Name}</strong></p>
                            <p><strong>Price: {val.Price}</strong></p>
                        </div>)
                })}
            </div>

        )
    }
}

export default WomenBrands