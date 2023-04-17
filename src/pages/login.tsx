import Link from 'next/link'
import {useContext, useEffect, useState } from 'react'
import authContext from "../contexts/AuthContext"
import { useRouter } from 'next/router'


export default function Login() {
  
    const auth = useContext(authContext);
    const router = useRouter();
  
    const [authForm, setAuthForm] = useState({
      username: '',
      password: '',
    });
    const [msg, setMsg] = useState('');
  
    const login = async () => {
      const isLogin = await auth.login({...authForm});
      alert(isLogin + "---isLogin" + authForm.username)
      if (isLogin) {
        setMsg('登录成功');
        //history.push('/')
        router.push({
            pathname: '/'
          })        

      } else {
        setMsg('登录失败');
      }
    };

    return (
      <div className="flex max-w-lg w-96 p-8 flex-col items-center justify-between rounded-md bg-black  font-['Open_Sans']  text-white">
         <div className=" space-y-2">       
            <div className=" text-xl items-center flex " > Welocome to  MKIT SAAS</div>
            
            <div className=" text-gray-400" >用户名: </div>
            <div><input className=" text-black border-0" value={authForm.username}
                      onChange={(e) => setAuthForm({...authForm, username: e.target.value})}
            type="text"></input></div>
            <div className=" text-gray-400">密码：</div>
            <div><input className=' text-black' value={authForm.password}
                 onChange={(e) => setAuthForm({...authForm, password: e.target.value})}
            type="text"></input></div>

            <button onClick={login}>登录</button>
         </div>       
      </div>
    )
  }
  