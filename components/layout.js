import AuthProviders from '@/pages/Providers';
import Footer from '../components/Footer';
import Header from '../components/Header';
import classes from './Layout.module.css'
function Layout({ children }) {
    return (
        <div className={classes.container}>
            <Header />
            {children}
            <Footer />
        </div>
    )
} export default Layout;