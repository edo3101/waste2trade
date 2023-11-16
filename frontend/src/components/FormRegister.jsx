import Container from './Container';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useAxios from '../hooks/useAxios';

const FormRegister = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { axiosInstance } = useAxios();

  const handleInput = (event) => {
    const user = event.target.value;
    setUsername(user);
  };

  const handleMail = (event) => {
    const mail = event.target.value;
    setEmail(mail);
  };

  const handlePass = (event) => {
    const pass = event.target.value;
    setPassword(pass);
  };

  const handleLogin = async () => {
    const response = await axiosInstance.post('/user/signup', {
      username,
      email,
      password,
    });

    navigate('/');
  };

  return (
    <section className="mt-8 lg:mt-10">
      <Container>
        <h2 className="text-2xl font-bold tracking-tighter text-center lg:text-4xl lg:mb-4 text-custom-tertiary">
          Yuk, Daftar!
        </h2>
        <div className="w-full bg-white shadow-xl form-control card p-7 lg:my-5 text-custom-tertiary">
          <form action="">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan Email"
              className="w-full mb-4 input input-bordered input-accent"
              required
              onChange={handleMail}
            />
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Masukkan Username"
              className="w-full mb-4 input input-bordered input-accent"
              required
              onChange={handleInput}
            />
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Masukkan Password"
              className="w-full mb-8 input input-bordered input-accent"
              required
              onChange={handlePass}
            />
            <Link to="#">
              <button
                className="w-full rounded-full lg:w-1/4 btn btn-accent lg:px-10 text-custom-primary"
                onClick={handleLogin}
              >
                <span className="text-base">Daftar</span>
              </button>
            </Link>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default FormRegister;
