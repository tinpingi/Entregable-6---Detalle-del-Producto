import React, { useState } from 'react';



const ItemCount = ()=> {
  const [counter, setCounter] = useState(1);
 

  const decrement = () => {
    if (counter === 1) {
      return alert("El minimo es 1");
    }
    setCounter(counter - 1);
    
  };

  const increment = () => {
    setCounter(counter + 1);
    
  };
	

  return(
    <div className='CounterSection'>
				<h3>Contador: {counter}</h3>
				
				<div className='btn-section'>
					<button onClick={increment}>+</button>
					<button onClick={decrement}>-</button>
				</div>
			</div>
  );
};

export default ItemCount;