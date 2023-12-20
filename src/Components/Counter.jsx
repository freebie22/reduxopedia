import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier,
} from "../redux/slice/counterSlice";

function Coutner() {
  const count = useSelector((state) => state.counterStore.count);
  const dispatch = useDispatch();

  const [multiplier, setMultiplier] = useState(() => {
    return 0;
  });

  return (
    <div
      className="pt-3 pl-2 text-center"
      style={{
        borderTop: "1px solid #999",
      }}
    >
      <div className="h5 pb-2">Counter: {count}</div>
      <div className="row">
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Basic Counter</h4>
            <button
              onClick={() => dispatch(increment())}
              className="btn btn-success"
            >
              Add
            </button>
            &nbsp;
            <button
              onClick={() => dispatch(decrement())}
              className="btn btn-danger"
            >
              Remove
            </button>
          </div>
        </div>
        <div className="p-4 col-12 col-md-6">
          <div className="border p-4">
            <h4 className="text-success pb-2">Multiplier Counter</h4>
            <div className="row">
              <div className="col-4 p-1">
                <input
                  onChange={(e) => setMultiplier(e.target.value)}
                  type="text"
                  placeholder="multiplier..."
                  className="form-control"
                ></input>
              </div>
              <div className="col-4 p-1">
                <button
                  onClick={() => dispatch(incrementMultiplier(multiplier))}
                  className="btn btn-success form-control"
                >
                  Add
                </button>
              </div>
              <div className="col-4 p-1">
                <button
                  onClick={() => dispatch(decrementMultiplier(multiplier))}
                  className="btn btn-danger form-control"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coutner;
