import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout, AuthLayout } from './layouts';
import { HomePage, LoginPage, RegisterPage } from './pages';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;