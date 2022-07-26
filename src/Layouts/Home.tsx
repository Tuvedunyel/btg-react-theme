import { FC } from 'react';
import Header from "../Components/Header";
import OverlayMenu from "../Components/OverlayMenu";

const Home: FC = () => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <h1>Home</h1>
            <OverlayMenu/>
        </>
    );
};

export default Home;
