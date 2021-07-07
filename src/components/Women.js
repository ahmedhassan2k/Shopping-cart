import WomenBrands from "./WomenBrands";
import { useState } from "react";
function Women() {
    let [value, setValue] = useState('')
    // console.log(value)
    return (
        <div className='men-main'>
            <div className='dropdown'>
                <strong>Women Collections:</strong>
                <select className='select' onChange={event => setValue(event.target.value)} className='select'>
                    <option value=''>All</option>
                    <option value='Addidas'>Addidas</option>
                    <option value='Nike'>Nike</option>
                    <option value='Vans'>Vans</option>
                    <option value='Gucci'>Gucci</option>
                </select>
            </div>
            <WomenBrands value={value} />
        </div>
    )

}
export default Women;