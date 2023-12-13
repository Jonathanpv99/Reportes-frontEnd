import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import MonthlySalesPage from './pages/monthlySalesPage/MonthlySalesPage';
import ProductsPerQuarterPage from './pages/productsPerQuarterPage/ProductsPerQuarterPage';
import SalesPerPeriodPage from './pages/salesPerPeriodPage/SalesPerPeriodPage';
import TeamPage from './pages/teamPage/TeamPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <BrowserRouter>
          <main className='container mx-auto px-8 py-4'>
          <Navbar/>
            <Routes >
              { /*Public Routes */}
              <Route path='/' element={ <HomePage/> }/>
              <Route path='*' element={ <HomePage/> }/>
              <Route path='/products' element={ <ProductsPerQuarterPage/> }/>
              <Route path='/period' element={ <SalesPerPeriodPage/> }/>
              <Route path='/mensual' element={ <MonthlySalesPage/> }/>
              <Route path='/team' element={ <TeamPage/> }/>
                    
            </Routes>
          </main>
        </BrowserRouter>
  )
}

export default App
