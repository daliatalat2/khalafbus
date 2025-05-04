import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/auth/AuthProvider';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetails';
import Services from './pages/Services';
import AfterSales from './pages/AfterSales';
import About from './pages/About';
import Media from './pages/Media';
import Quote from './pages/Quote';
import Contact from './pages/Contact';
import RequestQuote from './pages/RequestQuote';
import Login from './pages/auth/Login';
import Dashboard from './pages/admin/Dashboard';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className={`min-h-screen bg-gray-50 flex flex-col ${i18n.language === 'ar' ? 'font-arabic' : 'font-english'}`} dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
          <Routes>
            {/* Admin Routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/*" element={<Dashboard />} />

            {/* Public Routes */}
            <Route
              path="/*"
              element={
                <>
                  <TopBar />
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:productId" element={<ProductDetail />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/after-sales" element={<AfterSales />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/media" element={<Media />} />
                      <Route path="/quote" element={<Quote />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/request-quote" element={<RequestQuote />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;