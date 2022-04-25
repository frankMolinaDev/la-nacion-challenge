import Header from '../Header';

const Layout = ({ children }) => {
    console.log('children', children)
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout;