import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom'

const MenBrands = (props) => {
    const menProducts = useSelector((state) => state.shopReducer.filter(gender => gender.Gender === 'Men'))
    if (props.value !== '') {
        const brands = menProducts.filter(brand => brand.Brand === props.value)
        return (
            <div className='grid-container'>
                {brands.map((val, ind) => {
                    // console.log(val.Price);

                    return (
                        <div className='grid-box' key={ind}>
                            <Link key={ind} to={`/shoe${val.id}`}>
                                <img src={val.image} alt='' width='200px' height='200px' />
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
                {menProducts.map((val, ind) => {
                    // console.log(val.Price);

                    return (
                        <div className='grid-box' key={ind}>
                            <Link key={ind} to={`/shoe${val.id}`}>
                                <img src={val.image} alt='' width='200px' height='200px' />
                            </Link>
                            <p><strong>Name: {val.Name}</strong></p>
                            <p><strong>Price: {val.Price}</strong></p>
                        </div>)
                })}
            </div>

        )
    }
}

export default MenBrands