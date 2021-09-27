import React from 'react';
import './Department.css'

const Department = (props) => {
    // read data from json file 
    const { departmentName, numberOfStudent, numberOfFaculty, numberOfFemaleStudent, img, researchBudget } = props.department;
    return (
        /* Card Part  */
        <div className="card">
            {/* card image  */}
            <div class="cardImg">
                <img src={img} alt="" />
            </div>
            {/* card body information  */}
            <div className="cardDetails">
                <h2>{departmentName}</h2>
                <h3> Number of Faculty: {numberOfFaculty}</h3>
                <h3>Number of Students: {numberOfStudent}</h3>
                <h3>Number of Female Students: {numberOfFemaleStudent}</h3>
                <h3>Research Budget: {researchBudget} Tk</h3>
                <button onClick={() => props.handleBudget(props.department)}> <i class="fas fa-hand-holding-usd budgetIcon"></i>Add Budget</button>
            </div>
        </div>
    );
};

export default Department;