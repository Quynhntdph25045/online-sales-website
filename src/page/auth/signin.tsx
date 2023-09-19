import React from 'react'
import { useSigninMutation } from '@/api/Ath';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import luffy from "../.././assets/luffy-gear-5.png"
import './auth.css'

interface Form {
  email: string,
  password: string
}
const Signin = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<Form>();
  const [signin, { error }] = useSigninMutation();
  const onFinish = async (values: any) => {
    // console.log(values);
    await signin(values).unwrap()
      .then(() => alert("Đăng nhập thành công"))
      .then(() => {
        const userString = localStorage.getItem('user');
        const user = userString ? JSON.parse(userString) : null;
        if (user.role == 'admin') {
          navigate("/admin")
        }
        else {
          navigate("/")
        }
      })
  };
  if (error) {
    if ("data" in error) {
      console.log(error.data);
      alert(error.data)
    }
  }
  return (

    <>
      <div className="login-box grid grid-cols-2 gap-10 w-[800px]">
        <img src={luffy} alt="" className='luffy' />
        <div className=" my-auto space-y-18">
          <h2 className='font-semibold text-2xl'>Login</h2>
          <form onSubmit={handleSubmit(onFinish)}>
            <div className="user-box">
              <input type="email" {...register("email", { required: true })} />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password"  {...register("password", { required: true })} />
              <label>Password</label>
            </div>
            <a className='mx-32'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button>submit</button>
            </a>
          </form>
        </div>
      </div>
    </>

  );

}

export default Signin