


import React, { useState } from 'react';

function Ham () {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className= {isOpen ? 'isOpen' : ''} >
      <button className='mainNavBtn' onClick={() => setIsOpen(!isOpen)}>
        <img className='hamMenu' src="../static/images/menu.svg" alt="" />
      </button>

      {isOpen && (
        <> 
        <div className="hamCon">
            <button className="btn">PortFolio</button>
            <button className="btn">About</button>
            <button className="btn">Contact</button>
        </div>
        </>
      )}
    </nav>
  );
}

export default Ham;