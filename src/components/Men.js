import { useState } from "react";
import MenBrands from "./MenBrands";
function Men() {
    let [value, setValue] = useState('')
    // console.log(value)
    return (
        <div className='men-main'>
            <div className='dropdown'>
                <strong>Select Brand:</strong>
                <select className='select' onChange={event => setValue(event.target.value)} className='select'>
                    <option value=''>All</option>
                    <option value='Addidas'>Addidas</option>
                    <option value='Nike'>Nike</option>
                    <option value='Air Jordan'>Air Jordan</option>
                    <option value='Vans'>Vans</option>
                    <option value='New Balance'>New Balance</option>
                    <option value='Gucci'>Gucci</option>
                    <option value='Casual'>Casual</option>
                    <option value='Super Max'>Super Max</option>
                    <option value='Sky'>Sky</option>
                    <option value='Balenciaga'>Balenciaga</option>
                </select>
            </div>
            <MenBrands value={value} />
        </div>
    )

}
export default Men;