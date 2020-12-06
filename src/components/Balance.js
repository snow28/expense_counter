import { GlobalContext } from "../context/GlobalState";
import {useContext} from 'react';

function Balance( props ) {
    const { transactions } = useContext( GlobalContext );

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((total, item) => (total += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${ total }</h1>
        </>
    );
}

export default Balance;
