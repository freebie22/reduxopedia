import React from 'react'

const Destination = (props) => {
  return (
    <div className="p-4 border text-center">
        <h4 className="text-success">Destinations</h4>
        {props.children}
    </div>
  )
}

export default Destination