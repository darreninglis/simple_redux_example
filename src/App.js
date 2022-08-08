import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, login, logout } from './actions';

function App () {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-200 h-screen justify-center flex">
      <div className="bg-white shadow-xl rounded-xl h-96 w-96 p-4 m-auto text-center">
        { isLogged ? (
          <>
            <h3 className="text-2xl font-black mb-4">Welcome to Redux!</h3>
            <p className="mb-4">This is a small example app to learn Redux without using Redux Toolkit.</p>
            <button className="underline text-gray-400" onClick={ () => dispatch(logout()) }>Logout</button>

            <h1 className="my-4">Counter: { counter }</h1>
            <div className="flex gap-4 justify-center">
              <button className="rounded-xl bg-blue-600 p-4 text-white" onClick={ () => dispatch(increment()) }>+</button>
              <button className="rounded-xl bg-blue-600 p-4 text-white" onClick={ () => dispatch(decrement()) }>-</button>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-2xl font-black mb-4">Welcome to Redux!</h3>
            <p className="mb-4">This is a small example app to learn Redux without using Redux Toolkit.</p>
            <button className="rounded-xl bg-blue-600 p-4 text-white" onClick={ () => dispatch(login()) }>Login</button>
          </>
        ) }
      </div>
    </div>
  );
}

export default App;
