import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout, AuthLayout } from './layouts';
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
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="mitra/dashboard" element={<MitraPage />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        <Route path="/user" element={<LoginUser />}>
          <Route path="list" element={<ListProdUser />} />
          <Route path="kedai" element={<KedaiUserPage />} />
          <Route path="profile" element={<UserPage />} />
          <Route path="tukar" element={<RewardCount />} />
          <Route path="berhasil" element={<ExcNotif />} />
        </Route>

        <Route path="/mitra" element={<LoginMitra />}>
          <Route path="tukar" element={<TukarSampahMitra />} />
        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
