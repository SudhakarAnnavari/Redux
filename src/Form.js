import React, { useState} from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import {updateName,updateMobile,deposit,withdraw, addTrans} from './Store'
// new comment addaed
function Form() {

    const data = useSelector((state) => state.user)

    const [balance, setBalance] = useState('');
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');

    const dispatch = useDispatch();

    const handleDeposit = () => {
        dispatch(deposit(balance))
        dispatch(addTrans({
            name: data.name,
            type: "credit",
            date: new Date().toISOString(),
            amount: balance,
            remaining: data.balance + parseInt(balance)
        }))
    };

    const handleWithdraw = () => {
        dispatch(withdraw(balance))
        dispatch(addTrans({
            name: data.name,
            type: "debit",
            date: new Date().toISOString(),
            amount: balance,
            remaining: data.balance - parseInt(balance)
        }))
    };

    const handleNameUpdate = () => {
        dispatch(updateName(name))
    };

    const handleMobileUpdate = () => {
        dispatch(updateMobile(mobile))
    };

    return (
        <div>
            <label htmlFor="balance">Balance:</label>
            <input 
                type="text" 
                id="balance" 
                value={balance} 
                onChange={(e) => setBalance(e.target.value)} 
            />
            <button onClick={handleDeposit}>Deposit</button>
            <button onClick={handleWithdraw}>Withdraw</button>
            <br/><br/>

            <label htmlFor="name">Name:</label>
            <input 
                type="text" 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
            <button onClick={handleNameUpdate}>Submit</button>
            <br/><br/>

            <label htmlFor="mobile">Mobile No:</label>
            <input 
                type="text" 
                id="mobile" 
                value={mobile} 
                onChange={(e) => setMobile(e.target.value)} 
            />
            <button onClick={handleMobileUpdate}>Submit</button>
            <br/><br/>
        </div>
    );
}

export default Form;




// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';

// function Form() {
//     const [balance, setBalance] = useState('');
//     const [name, setName] = useState('');
//     const [mobile, setMobile] = useState('');
//     const [transId, setTransId] = useState(1)

//     const dispatch = useDispatch();

//     const handleDeposit = () => {
//         dispatch({ type: "deposit", payload: balance });
//         setTransId(transId+1)
//         dispatch({type:"ADD",payload:{
//             id:transId,
//             amount: balance,
//             date: new Date(),
//             type: "credit"
//         }})
//     };

//     const handleWithdraw = () => {
//         dispatch({ type: "withdraw", payload: balance });
//         setTransId(transId+1)
//         dispatch({type:"ADD",payload:{
//             id:transId,
//             amount: balance,
//             date: new Date(),
//             type: "debit"
//         }})
//     };

//     const handleNameUpdate = () => {
//         dispatch({ type: "nameupdate", payload: name });
//     };

//     const handleMobileUpdate = () => {
//         dispatch({ type: "mobileupdate", payload: mobile });
//     };

//     return (
//         <div>
//             <label htmlFor="balance">Balance:</label>
//             <input 
//                 type="text" 
//                 id="balance" 
//                 value={balance} 
//                 onChange={(e) => setBalance(e.target.value)} 
//             />
//             <button onClick={handleDeposit}>Deposit</button>
//             <button onClick={handleWithdraw}>Withdraw</button>
//             <br/><br/>

//             <label htmlFor="name">Name:</label>
//             <input 
//                 type="text" 
//                 id="name" 
//                 value={name} 
//                 onChange={(e) => setName(e.target.value)} 
//             />
//             <button onClick={handleNameUpdate}>Submit</button>
//             <br/><br/>

//             <label htmlFor="mobile">Mobile No:</label>
//             <input 
//                 type="text" 
//                 id="mobile" 
//                 value={mobile} 
//                 onChange={(e) => setMobile(e.target.value)} 
//             />
//             <button onClick={handleMobileUpdate}>Submit</button>
//             <br/><br/>
//         </div>
//     );
// }

// export default Form;
