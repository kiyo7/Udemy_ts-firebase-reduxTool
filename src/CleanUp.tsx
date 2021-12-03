import React, { useState, useEffect } from 'react';

const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0);

  useEffect(() => {
    console.log('useEffect in CleanUp invoked !');
    window.addEventListener('mousedown', incrementNum);
    return () => {
      console.log('CleanUpのuseEffectやで');
      window.removeEventListener('mousedown', incrementNum);
    };
  }, []);

  const incrementNum = () => {
    console.log('マウスイベントが起きたで');
    setCurrentNum((prevNumber) => prevNumber + 1);
  };

  return <div>{currentNum}</div>;
};

export default CleanUp;
