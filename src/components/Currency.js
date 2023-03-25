import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () =>{
    const { dispatch } = useContext(AppContext);

    const setCurrency = (val) => {

        const newCurrency = {
            currency: val
        }

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        })
    }

    return (
        <div>
            <select className="custom-select alert alert-success" id="inputGroupSelect02" onChange={(event) => setCurrency(event.target.value)}>
                <option defaultValue value="$" name="$"> $ Dollar </option>
                <option value="£" name="£"> £ Pound </option>
                <option value="€" name="€"> € Euro </option>
                <option value="₹" name="₹"> ₹ Ruppee </option>
            </select>
        </div>
    )
}


export default Currency;