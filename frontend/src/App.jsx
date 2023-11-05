import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts'
import { HomePage, UserLogin } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/user" element={<UserLogin />} /> 
        </Route>

        { /** <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;