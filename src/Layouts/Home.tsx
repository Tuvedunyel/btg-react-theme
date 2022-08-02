import { FC, useEffect, useState } from 'react';
import Header from "../Components/Header";
import OverlayMenu from "../Components/OverlayMenu";
import OverlayContact from "../Components/OverlayContact";
import logoBtgEncadrer from '../assets/logo-btg-encadre.svg'
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import './Home.scss'
import axios from "axios";
import { dataType } from "../features/data.type";

const Home: FC = () => {
    const subMenu = useSelector( ( state: RootState ) => state.subMenu.subMenu )
    const mainMenu = useSelector( ( state: RootState ) => state.mainMenu.mainMenu )
    const baseUrl = "https://btg-communication.fr/"
    const [ data, setData ] = useState<dataType | null>( null )

    useEffect( () => {
        if (mainMenu) {
            mainMenu.map( item => {
                if (item.url === baseUrl) {
                    axios.get( `${ baseUrl }wp-json/better-rest-endpoints/v1/page/7` ).then( res => {
                        setData( res.data )
                    } )
                }
            } )
        }
    }, [] )

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
                                    <li key={ menuItem.ID }>{ menuItem.title }</li>
                                ) ) }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="bot">
                    <h1>{ data?.title }</h1>
                </div>
            </header>
            <OverlayMenu/>
            <OverlayContact/>
        </>
    );
};

export default Home;
