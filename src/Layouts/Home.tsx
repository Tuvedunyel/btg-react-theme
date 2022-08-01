import { FC } from 'react';
import Header from "../Components/Header";
import OverlayMenu from "../Components/OverlayMenu";
import OverlayContact from "../Components/OverlayContact";
import logoBtgEncadrer from '../assets/logo-btg-encadre.svg'
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import './Home.scss'

const Home: FC = () => {
    const subMenu = useSelector( (state: RootState) => state.subMenu.subMenu )

    return (
        <>
            <header>
                <Header/>
                <div className="banner">
                    <div className="elem-center">
                        <div className="logo">
                            <img src={ logoBtgEncadrer } alt="Agence BTG de communication à Tours"/>
                        </div>
                        <div className="list">
                            <ul>
                                { subMenu.map( menuItem => (
                                    <li key={menuItem.ID} >{ menuItem.title }</li>
                                ) ) }
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <OverlayMenu/>
            <OverlayContact />
        </>
    );
};

export default Home;
