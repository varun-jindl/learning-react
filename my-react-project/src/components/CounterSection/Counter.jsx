import React from 'react'

const Counter = () => {
  return (
    <>
      <div className="counterSection">
        <div className="counterItem">
          <h2 className="counterNumber" data-target="1500">0</h2>
            <p className="counterLabel">Projects Completed</p>
        </div>
        <div className="counterItem">
          <h2 className="counterNumber" data-target="1200">0</h2>
            <p className="counterLabel">Happy Clients</p>
        </div>
        <div className="counterItem">
          <h2 className="counterNumber" data-target="500">0</h2>
            <p className="counterLabel">Cups of Coffee</p>
        </div>
        <div className="counterItem">
          <h2 className="counterNumber" data-target="800">0</h2>
            <p className="counterLabel">Hours Worked</p>
        </div>
      </div>
    </>
  )
}

export default Counter
