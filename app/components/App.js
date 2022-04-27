import { AppProvider } from '../context/appContext';
import './App.css';
import VBanner from './Banners/VBanner';
import Footer from './Footer';
import Layout from './Layout';
import ProductsList from './ProductsList';
import TagsList from './TagsList';

export default function App() {
    return (
        <AppProvider>
            <main>
                <Layout>
                    <div className='product-list-divider'>
                        <div className='product-list-content-wrapper'>
                            <h1 className='title'>La Nación Challenge  - Francisco Molina</h1>
                            <TagsList />
                            <ProductsList />
                        </div>
                        <VBanner />
                    </div>
                    <Footer />
                </Layout>
            </main>
        </AppProvider>
    )
}