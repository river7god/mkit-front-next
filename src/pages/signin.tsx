import { useRouter } from "next/router"
import { useState } from "react"
import Layout from "../components/layout"

export default function SignIn() {
  const router = useRouter()

  const [authForm, setAuthForm] = useState({
    username: "",
    password: ""
  })

  function handleChange(e) {
    const copy = { ...authForm }
    copy[e.target.name] = e.target.value
    setAuthForm(copy)
  }

  async function handleSubmit() {
    const url = 'http://localhost:4200/api/auth/login';

    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(authForm),
      headers: {
        "Content-Type": "application/json"
      }
    })
    if (res.ok) {
      const json = await res.json()
      localStorage.setItem("token", json.token)
      router.push("/admin")
    } else {
      alert("Bad credentials")
    }
  }

  return (
    <Layout>
      <div className="flex max-w-lg w-96 p-8 flex-col items-center justify-between rounded-md bg-black  font-['Open_Sans']  text-white">
         <div className=" space-y-2">       
            <div className=" text-xl items-center flex " > Welocome to  MKIT SAAS</div>
            
            <div className=" text-gray-400" >用户名: </div>
            <div><input className=" text-black border-0" value={authForm.username}
                      type="text" name="username" placeholder="username"  onChange={handleChange} autoComplete="off" ></input></div>
            <div className=" text-gray-400">密码：</div>
            <div><input className=' text-black' type="password" name="password" placeholder="password" value={authForm.password} onChange={handleChange}>
                </input></div>

            <button onClick={handleSubmit}>登录</button>
         </div>       
      </div>

    </Layout>
  )
}