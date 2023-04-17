import Login from "./login";
import React, { FC, useEffect, useState } from 'react';
//import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import { useRouter } from 'next/router'
import Link from 'next/link'
import http from '../util/http';
import useAuth from "../hooks/useAuth"
import AuthContext from "../contexts/AuthContext"

//import Todo from "./pages/Todo"
/*import AuthContext from "../contexts/AuthContext"
import useAuth from "../hooks/useAuth"
import AuthButton from "./Components/AuthButton"
import PrivateRoute from "./Components/PrivateRoute"
import Admin from './pages/Admin';
import AdminRoute from './Components/AdminRoute';

import { CountRsp } from './types/Common';
import styles from './styles.module.scss';
import { Quote } from './types/Quote';
*/

export default function Home() {
    const auth = useAuth();

    useEffect(() => {
   
    }, []);
  
    return (
        <main className="flex p-40 bg-zinc-600 min-h-screen flex-col items-center justify-between font-sans">
          <AuthContext.Provider value={auth}>
        
          {auth.isAdmin && (
              <div>admin ................................</div> 
          )}
          <div>
          <Link href="/login">
                <Login />
              </Link>
          </div>
       </AuthContext.Provider>
       </main>
    );
}
