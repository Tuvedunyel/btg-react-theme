import { FC, useEffect, useState } from 'react';
import axios from "axios";

const OverlayMenu: FC = () => {
    const [ menuData, setMenuData ] = useState< {} | null >(null)

    useEffect( () => {
        axios.get("https://btg-communication.fr/wp-json/better-rest-endpoints/v1/menus/principal").then( res => setMenuData(res.data) )
        console.log(menuData)
    }, [])

    return (
        <div id="overlay-menu">
            <div className="content">
                <div className="list-nav">
                    <nav>
                        <ul className="menu-principal"></ul>
                    </nav>
                </div>
                <div className="logo-list"></div>
            </div>
        </div>
    );
};

export default OverlayMenu;
