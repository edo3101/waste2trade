import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts'
import { HomePage } from './pages'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Route>

        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;