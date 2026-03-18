import React from 'react'

const Topbar = () => {
    const goldRate = 1600;
    const silverRate = 78;

  return (
    <div className="text-white py-2 topbar">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          {/* Left Side */}
          <div>
            <span className="me-3">
              <strong>Gold:</strong> ₹{goldRate}/g
            </span>
            <span>
              <strong>Silver:</strong> ₹{silverRate}/g
            </span>
          </div>

          {/* Right Side */}
          <div>
            <a href="#" className="text-white me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-white me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="bi bi-youtube"></i>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Topbar
