import React from 'react';
import { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import Department from '../Department/Department';
import './Research.css'

const Research = () => {
    /* UseState */
    const [departments, setDepartments] = useState([]);
    const [budget, setBudget] = useState([]);
    /* Data load */
    useEffect(() => {
        fetch('./research.JSON')
            .then(res => res.json())
            .then(data => setDepartments(data));
    }, [])
    const handleBudget = (department) => {
        const newBudget = [...budget, department];
        setBudget(newBudget);
    }
    return (
        /* Main part Container */
        <div className="container">
            {/* department information  */}
            <div className="cardContainer">
                {/* call all departments data  */}
                {
                    departments.map(department => <Department
                        key={department.id}
                        department={department}
                        handleBudget={handleBudget}
                    ></Department>
                    )
                }
            </div>
            {/* calculation part  */}
            <div className="calculation">
                <Calculation budget={budget}></Calculation>
            </div>
        </div>
    );
};

export default Research;

