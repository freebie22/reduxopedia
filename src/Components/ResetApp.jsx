import React from 'react'
import { useDispatch } from 'react-redux'
// import { resetDestination } from '../redux/slice/destinationSlice';
import { resetReduxOPedia } from '../redux/action/actions';

function ResetApp() {
  const dispatch = useDispatch();

  const resetAll = () => {
    dispatch(resetReduxOPedia());
  }

  return (
    <div className="text-center">
        <button onClick={resetAll} className="btn btn-warning mb-2">Reset App</button>
    </div>
  )
}

export default ResetApp