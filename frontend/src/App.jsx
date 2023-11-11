import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout, AuthLayout, UserLayout, MitraLayout } from './layouts';
import {
  HomePage,
  LoginPage,
  RegisterPage,
  ExcNotif,
  KedaiUserPage,
  LoginMitra,
  LoginUser,
  RewardCount,
  UserPage,
  MitraPage,
  ListProdUser,
  TukarSampahMitra,
  Giftcode,
  AboutUs
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="auth/register" element={<RegisterPage />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="user" element={<LoginUser />} />
          <Route path="mitra" element={<LoginMitra />} />
          {/* <Route path="register" element={<RegisterPage />} /> */}
        </Route>

        <Route path="/user" element={<UserLayout />}> 
          <Route path="profile" element={<UserPage />} />
          <Route path="tukar" element={<RewardCount />} />
          <Route path="kedai" element={<KedaiUserPage />} />
          <Route path="berhasil" element={<ExcNotif />} />
        </Route>

        <Route path="/mitra" element={<MitraLayout />}>
          <Route path="dashboard" element={<MitraPage />} />
          <Route path="tukar" element={<TukarSampahMitra />} />    
          <Route path="giftcode" element={<Giftcode />} />
        </Route>

        <Route path="list" element={<ListProdUser />}></Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
