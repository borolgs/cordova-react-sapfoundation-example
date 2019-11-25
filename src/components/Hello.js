import React, { useState } from 'react';
import { Button } from 'fundamental-react/Button';

const Hello = () => {
  const [toogle, setToogle] = useState(false);

  const handleClick = () => {
    setToogle(!toogle);
    navigator.vibrate(300);
  };

  return (
    <div>
      <h1>Hello {toogle ? ' Cordova' : 'React'}</h1>
      <Button onClick={handleClick}>Say hello</Button>
    </div>
  );
};

export default Hello;
