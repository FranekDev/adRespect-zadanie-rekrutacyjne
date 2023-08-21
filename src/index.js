import './style.css';
import Nav from './components/nav';
import Footer from './components/footer';
import Hero from './components/hero';
import Offers from './components/offers';
import About from './components/about';
import Contact from './components/contact';
import Realizations from './components/realizations';

const root = document.getElementsByTagName('html')[0];
root.classList.add('scroll-smooth');

document.body.classList.add('bg-[#F5F0EC]');

Nav();
Hero();
Offers();
About();
Realizations();
Contact();
Footer();
