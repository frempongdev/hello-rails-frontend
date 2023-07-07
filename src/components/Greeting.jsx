import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/GreetingSlice';

const Greeting = () => {
  const { greeting } = useSelector((store) => store.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <div><h1>{greeting}</h1></div>
  );
};

export default Greeting;
