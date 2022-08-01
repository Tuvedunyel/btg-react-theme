import { FC, useEffect, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import './OverlayMenu.scss';
import yellowWave from '../assets/wave-yellow.gif'

type MenuObject = {
    ID: number,
    menu_order: number,
    title: string,
    slug: string,
    url: string,
    target: string,
    description: string,
    classes: string[]
    menu_item_parent: string
}
type Menu = MenuObject[];

const OverlaySubMenu: FC<{ menuItem: MenuObject, subMenu: Menu | null }> = ( { menuItem, subMenu } ) => {
    const [ openSubMenu, setOpenSubMenu ] = useState( false );

    return (
        <>
            <p onClick={ () => setOpenSubMenu( !openSubMenu ) }>{ menuItem.title }</p>
            { openSubMenu && (
                <ul className="subMenu">
                    { subMenu && subMenu.map( ( menuItem: MenuObject ) => (
                        <li key={ menuItem.ID } className='subMenu-item' >
                            { menuItem.title }
                        </li>
                    ) ) }
                </ul>
            ) }
        </>
    )
}

const OverlayMenu: FC = () => {
    const [ mainMenu, setMainMenu ] = useState<Menu | null>( null )
    const [ subMenu, setSubMenu ] = useState<Menu | null>( null )

    const handleData = async () => {
        let tempMainMenu: Menu = [];
        let tempSubMenu: Menu = [];
        await axios.get( "https://btg-communication.fr/wp-json/better-rest-endpoints/v1/menus/principal" ).then( ( res: AxiosResponse<Menu> ) => {

            res.data.map( ( item: MenuObject ) => {
                if (Number( item.menu_item_parent ) !== 941) {
                    tempMainMenu.push( item )
                } else {
                    tempSubMenu.push( item )
                }
            } )
        } )
        setMainMenu( tempMainMenu );
        setSubMenu( tempSubMenu );
    }

    useEffect( () => {
        handleData()
    }, [] )

    return (
        <div id="overlay-menu">
            <div className="content">
                <div className="list-nav">
                    <div className="vague">
                        <img src={ yellowWave } alt="Vague Jaune"/>
                    </div>
                    <nav>
                        <ul className="main-menu">
                            { mainMenu && mainMenu.map( menuItem => (
                                    <li key={ menuItem.ID } className="menu-item">
                                        { menuItem.url !== "#" ?
                                            menuItem.title
                                            : (
                                                <OverlaySubMenu menuItem={ menuItem } subMenu={ subMenu }/>
                                            ) }
                                    </li>
                                )
                            ) }
                        </ul>
                    </nav>
                </div>
                <div className="logo-list"></div>
            </div>
        </div>
    );
};

export default OverlayMenu;
