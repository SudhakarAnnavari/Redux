import React from 'react';
import { useSelector } from 'react-redux';

function AccountDetails() {
    const data = useSelector((state) => state.user)

    return (
        <table>
            <thead>
                <tr>
                    <th>Balance</th>
                    <th>Name</th>
                    <th>Mobile</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{data.balance}</td>
                    <td>{data.name}</td>
                    <td>{data.mobile}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default AccountDetails;
