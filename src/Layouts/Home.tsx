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
    const [ x, setX ] = useState( 0 );
    const [ y, setY ] = useState( 1 );

    const handlePrev = () => {
        if (data) {
            if (x > 0) {
                setX( x - 1 )
                setY( y - 1 )
            } else {
                setX( data.acf.slide.length - 1 )
                setY( data.acf.slide.length )
            }
        }
    }

    const handleNext = () => {
        if (data) {
            if (y < data.acf.slide.length) {
                setX( x + 1 )
                setY( y + 1 )
            } else {
                setX( 0 )
                setY( 1 )
            }
        }
    }

    const handleBullet = ( index: number ) => {
        setX(index)
        setY(index + 1)
    }

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
            <section id="acc-projet">
                <div className="container">
                    <h2 className="reversed flipped no-transition">
                        Projets
                    </h2>
                    <div className="slider-container">
                        <div className="slider">
                            <ul>
                                { data?.acf.slide.slice( x, y ).map( slide => (
                                    <li key={ slide.image.id }>
                                        <img src={ slide.image.url } alt={ slide.image.alt }/>
                                    </li>
                                ) ) }
                            </ul>
                        </div>
                        <div className="controls">
                            <button className="prev" onClick={ handlePrev }>Prev</button>
                            <div className="bullets">
                                { data?.acf.slide.map( ( slideBullet, key ) => (
                                    <button key={ key } className="bullet" onClick={ () => handleBullet(key) } >bullet</button>
                                ) ) }
                            </div>
                            <button className="next" onClick={ handleNext }>Next</button>
                        </div>
                    </div>
                </div>
            </section>
            <OverlayMenu/>
            <OverlayContact/>
        </>
    );
};

export default Home;
