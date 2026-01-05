import Nav from '../component/Navbar';
import { Outlet} from 'react-router-dom';
import Footer from '../component/Footer';
import PageTransition from '../animation/pageTransition';
import ScrollTop from '../component/scrollTop';

export default function Layout() {
  
  return (
    
    <>
        <ScrollTop/>
        <Nav/>
        <PageTransition/>
        <Outlet/>
        <Footer/>
    </>
  );
}
