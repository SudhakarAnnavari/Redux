import React from 'react';
import { useSelector } from 'react-redux';

function TransDetails() {
    const data = useSelector((state) => state.trans);

    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>type</th>
                    <th>date</th>
                    <th>amount</th>
                    <th>remaining</th>

                </tr>
            </thead>
            <tbody>
                {data.map((each, i) => (
                    <tr key={i}>
                        <td>{each.name}</td>
                        <td>{each.type}</td>
                        <td>{each.date}</td> 
                        <td>{each.amount}</td>
                        <td>{each.remaining}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TransDetails;
