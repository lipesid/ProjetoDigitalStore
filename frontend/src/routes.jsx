import { 
    Route,
    createBrowserRouter,
    createRoutesFromElements
 } from 'react-router-dom';

 import Home from './pages/HomePage'
 import ProductListingPage from './pages/ProductListingPage'
 import ProductViewPage from './pages/ProductViewPage';
export default createBrowserRouter (
    createRoutesFromElements(
        <>
            <Route path='/' element={<Home />}/>
            <Route path='/products' element={<ProductListingPage/>}/>
            <Route path='/p/:slug' element={<ProductViewPage/>}/>
        </>
    ) )

    