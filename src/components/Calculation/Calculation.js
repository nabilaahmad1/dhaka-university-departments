import React from 'react';
import ShowNames from '../ShowNames/ShowNames';
import './Calculation.css'

const Calculation = (props) => {
    // read data from file 
    const { budget } = props;
    /* Calculation Part */
    let departmentQuantity = 0;
    let totalBudget = 0;
    // set quantity 
    for (const department of budget) {
        if (!department.quantity) {
            department.quantity = 1;
        }
        // total calculation 
        totalBudget = totalBudget + department.researchBudget * department.quantity;
        departmentQuantity = departmentQuantity + department.quantity;
    }
    return (
        /*Calculation Part Style  */
        <div className="calculationPart">
            <h2>Research Budget Given</h2>
            {/* show total calculation  */}
            <div className="calculationResult">
                <p>Number of Departments:</p>
                <p>{departmentQuantity}</p>
                <p>Total Funding: </p>
                <p>{totalBudget} Tk</p>
            </div>
            {/* show selected department name  */}
            <div className="departmentName">
                <h2>Department Name</h2>
                {
                    budget.map(funded => <ShowNames funded={funded}></ShowNames>)
                }
            </div>
        </div>
    );
};

export default Calculation;