import { FC, useEffect, useState } from 'react';
import axios from "axios";

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
type Menu = [ MenuObject ];

const OverlayMenu: FC = () => {
    const [ menuData, setMenuData ] = useState<Menu | null>( null )
    const [mainMenu, setMainMenu] = useState<Menu | null>(null)
    const [subMenu, setSubMenu] = useState<Menu | null>(null)

    const handleData = async () => {
        await axios.get( "https://btg-communication.fr/wp-json/better-rest-endpoints/v1/menus/principal" ).then( res => {
            let tempMainMenu = [];
            let tempSubMenu = [];
            res.data.map( (item: MenuObject) => {
                if( item.menu_item_parent.length < 1 ) {
                    tempMainMenu.push(item)
                } else {
                    tempSubMenu.push(item)
                }
            } )
        } )
    }

    useEffect(  () => {
        handleData()
    }, [] )

    return (
        <div id="overlay-menu">
            <div className="content">
                <div className="list-nav">
                    <nav>
                        <ul className="menu-principal">
                            { menuData && menuData.map( menuItem => (
                                    <li key={ menuItem.ID } className="menu-item">
                                        { menuItem.title }
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
