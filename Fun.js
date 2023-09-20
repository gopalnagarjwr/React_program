
import React, { useState } from 'react';
import Data from './Data';
function Fun() {
  const arr = [
    { name: 'Ram', email: 'gopalnagarjwr@gmail.com', contact: 8696742758 },
    { name: 'vikas', email: 'vikasjaintk@gmail.com', contact: 855542758 },
    { name: 'raj', email: 'raj123tk@gmail.com', contact: 9983642758 },
    { name: 'ghanshaym', email: 'gan431tk@gmail.com', contact: 9886932758 }
  ];
  return (
    <div>
      <h1>Hello Coders</h1>
      {
        arr.map((item,i) =>
        <div key={i}>
              <Data data={item}  />
              </div>
        )
      }
    </div>
  )
}
export default Fun;
