"use client"

import { useEffect, useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://legaleasy-backend.herokuapp.com/api/v1/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return <div>{message ? message : 'Loading...'}</div>;
};

export default Home;
