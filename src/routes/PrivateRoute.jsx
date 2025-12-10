import React from 'react';
import useAuth from '../hooks/useAuth';
import load from '../assets/logo.png'
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen text-4xl font-bold tracking-wider gap-5 flex justify-center items-center opacity-50 ">
      L <img src={load} alt="" className="w-20 animate-spin" />O A D I N G
    </div>
  }

  if(!user){
    return <Navigate state={location.pathname} to='/login'></Navigate>

  }

  return children;
};

export default PrivateRoute;