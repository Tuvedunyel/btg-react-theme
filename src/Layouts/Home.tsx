import { FC } from 'react';
import Header from "../Components/Header";
import OverlayMenu from "../Components/OverlayMenu";
import OverlayContact from "../Components/OverlayContact";

const Home: FC = () => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <h1>Home</h1>
            <OverlayMenu/>
            <OverlayContact />
        </>
    );
};

export default Home;
