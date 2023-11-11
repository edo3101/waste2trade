import Container from './Container';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


export default function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleInput = (event) => {
    const user = event.target.value;
    setEmail(user);
  };

  const handlePass = (event) => {
    const pass = event.target.value;
    setPassword(pass);
  };

  const handleLogin = async () => {
    const response = await axios.post('http://localhost:3000/user/login', {
      email,
      password,
    });
    const token = response.data.token;
    Cookies.set('auth_token', token);
    console.log(token);
    window.location.assign('/user/list');
  };

  console.log(email, password);




  return (
    <section className="w-full bg-custom-primary">
      <Container className="py-5 lg:px-5">
        <div className="min-h-screen bg-custom-secondary flex items-center">
          <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
            <div className="py-12 p-10 bg-custom-primary">
              <div className="mb-6">
                <h2 className="text-2xl lg:text-4xl font-bold lg:mb-5 tracking-tighter text-center text-custom-tertiary">
                  USER
                </h2>
                <label
                  className="mr-4 text-custom-tertiary font-bold inline-block mb-2"
                  htmlFor="name"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered input-accent w-full max-w-xs  text-custom-tertiary "
                  onChange={handleInput}
                />
              </div>
              <div className="mb-6">
                <label
                  className="mr-4 text-custom-tertiary font-bold inline-block mb-2"
                  htmlFor="name"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Type here"
                  className="input input-bordered input-accent w-full max-w-xs  text-custom-tertiary"
                  onChange={handlePass}
                />
              </div>
              <div className="flex justify-center">
                <button className="w-full lg:w-1/4 btn btn-accent btn-outline rounded-full lg:px-20 text-custom-primary mb-5" onClick={handleLogin}>
                  <span className="text-base">Login</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
