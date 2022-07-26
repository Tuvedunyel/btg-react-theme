import { FC, useState, Dispatch, SetStateAction } from 'react';
import logoTop from '../assets/logo-btg.svg'
import openMenuImg from '../assets/menu.svg';
import closeMenu from '../assets/close-menu.svg';
import contact from '../assets/contact.svg';
import closeContact from '../assets/close-contact.svg';
import './Header.scss';

const Header: FC = () => {
    const [ openMenu, setOpenMenu ] = useState( false );
    const [openContact, setOpenContact] = useState(false);

    const handleClick = (typeVariables: string) => {
        if ( typeVariables === 'menu' ) {
            setOpenContact(false)
            setOpenMenu( !openMenu );
        } else if ( typeVariables === 'contact' ) {
            setOpenMenu(false)
            setOpenContact( !openContact );
        }
    }

    return (
        <div className='top'>
            <img src={ logoTop } alt="BTG Communication" className='logo-top'/>
            <strong className="accroche">- Le bureau très graphique -</strong>
            <div className="contact flip-container" onClick={ () => handleClick('contact') } >
                <div className="flip-card">
                    <img src={ closeContact } alt="Fermer le volet de contact" style={ openContact ? { transform: "rotateY(0)" } : { transform: "rotateY(180deg)" } } />
                    <img src={ contact } alt="Ouvrir le volet de contact"  style={ openContact ? { transform: "rotateY(180deg)" } : { transform: "rotateY(0)" } }/>
                </div>
            </div>
            <div className="menu flip-container" onClick={ () => handleClick('menu') }>
                <p style={ openMenu ? {
                    transform: "rotate(-90deg)",
                    left: "-27px",
                    top: "10px"
                } : { transform: "rotate(0)" } }>Menu</p>
                <div className="flip-card">
                    <img src={ closeMenu } alt="Fermer le menu"
                         style={ openMenu ? { transform: "rotateY(0)" } : { transform: "rotateY(180deg)" } }/>
                    <img src={ openMenuImg } alt="Ouvrir le menu"
                         style={ openMenu ? { transform: "rotateY(180deg)" } : { transform: "rotateY(0)" } }/>
                </div>
            </div>
        </div>
    );
};

export default Header;
