import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';



const Budget = (props) => {
    const { budget, dispatch, currency } = useContext(AppContext)
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudget = (budget) =>{

        if(parseInt(budget) > 20000){
            alert("The value cannot exceed funds £20000");
            return;
        }

        if(parseInt(budget) < totalExpenses){
            alert("You cannot reduce the budget value lower than the spending £" + totalExpenses)
            return;
        }

        const newBudget = {
            budget: parseInt(budget)
        }

        dispatch({
            type:'SET_BUDGET',
            payload: newBudget,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}
                <input
                    required='required'
                    type='number'
                    min={totalExpenses.toString()}
                    max='20000'
                    id='budget'
                    step='10'
                    value={budget}
                    onChange={(event) => handleBudget(event.target.value)}>
                </input></span>

        </div>
    )
}

export default Budget;