import React from 'react'
import { Button, Form, Input } from 'antd';
import { useSignupMutation } from '@/api/Ath';

type FieldType = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

const Signup = () => {
  const [signup, { error }] = useSignupMutation();

  const onFinish = async (values: any) => {
    console.log(values);
    const { confirmPassword, ...signupData } = values
    await signup(signupData);
  };
  console.log(error);

  return (
    <div className="login-box w-[800px]">
      <h2 className='font-semibold text-2xl'>Signup</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="email"
          name="email"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item<FieldType>
          label="Confirm Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Confirm password is required" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                } else {
                  return Promise.reject(
                    new Error("Confirm password does not match")
                  );
                }
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button className='bg-green-500' type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>

  );

}

export default Signup


{/* <div className=" my-auto space-y-18">
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
        </div> */}