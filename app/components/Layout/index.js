import HBanner from '../Banners/HBanner';
import Header from '../Header';
import './styles.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <HBanner />
            <div className='main-wrapper'>
                {children}
            </div>
        </>
    )
}

export default Layout;