import React from 'react';

function Rhombuses({ count }) {
  const divs = [];

  for (let i = 0; i < count; i++) {
    divs.push(<div key={i} className='rhombus'></div>);
  }

  return <>{divs}</>;
}

export default Rhombuses;