import * as React from 'react';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { countMinus, countPlus } from '../reducers/counter';

export function Counter() {
    
    //透過useDispatch來使用action
    const dispatch = useDispatch();
    //透過useSelector去取得State
    const count: number = useSelector(state => (state as any).counterReducer.count);

    useEffect(() => {
        console.log(`You clicked ${count} times`);
    },[count]);

    return (
        <React.Fragment>
            <h1>Counter</h1>

            <h3> Redux</h3>
            <p aria-live="polite">Current count: <strong>{count}</strong></p>

            <button style={{ margin: '5px' }}
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => { dispatch(countPlus); }}>
                Increment
            </button>
            <button style={{ margin: '5px' }}
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => { dispatch(countMinus); }}>
                Decrement
            </button>

        </React.Fragment>
    );
}

