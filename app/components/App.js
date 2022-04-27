import { AppProvider } from '../context/appContext';
import './App.css';
import VBanner from './Banners/VBanner';
import Layout from './Layout';
import ProductsList from './ProductsList';
import TagsList from './TagsList';

export default function App() {
    return (
        <AppProvider>
            <main>
                <Layout>
                    <div className='product-list-divider'>
                        <div>
                            <TagsList />
                            <ProductsList />
                        </div>
                        <VBanner />
                    </div>
                </Layout>
            </main>
        </AppProvider>
    )
}