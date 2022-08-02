import { FC, useEffect } from 'react';
import './OverlayContact.scss';
import facebookDegrade from './../assets/facebook-degrade.svg';
import twitterDegrade from './../assets/twitter-degrade.svg'
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { motion, useAnimation } from "framer-motion";

const OverlayContact: FC = () => {
    const openContact = useSelector( (state: RootState) => state.contact.isOpenContact )
    const animation = useAnimation();

    const contactVariants = {
        initial: {
            translateX: '-100%'
        },
        animate: {
            translateX: 0
        }
    }

    useEffect( () => {
        if (openContact) {
            animation.start('animate')
        } else {
            animation.start('initial')
        }
    }, [openContact])

    return (
        <motion.div initial="initial" animate={animation} variants={contactVariants} transition={{ duration: 0.4, ease: "linear" }} className='overlay-contact'>
            <div className="content">
                <div className="socials">
                    <a href="https://www.facebook.com/btg.communication/" target="_blank" >
                        <img src={ facebookDegrade } alt="Notre profil facebook"/>
                    </a>
                    <a href="https://twitter.com/btg_com" target="_blank" >
                        <img src={ twitterDegrade } alt="Notre twitter"/>
                    </a>
                </div>
                <div className="formulaire">
                    <div className="entree">
                        <p>Vous avez un projet, une question, envie de rejoindre l’équipe ?</p>
                        <div className="vague">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 188 32"><path d="M156.7 32c-9.5 0-14.2-7.7-18.2-14.5-4.4-7.1-7.4-11.5-13.2-11.5-5.7 0-8.8 4.4-13.1 11.5C108.1 24.3 103.5 32 94 32s-14.2-7.7-18.2-14.5C71.4 10.4 68.4 6 62.7 6c-5.7 0-8.8 4.4-13.1 11.5C45.5 24.3 40.9 32 31.3 32s-14.2-7.7-18.2-14.5C8.8 10.4 5.7 6 0 6V0c9.5 0 14.2 7.7 18.2 14.5C22.6 21.6 25.6 26 31.3 26c5.7 0 8.8-4.4 13.1-11.5C48.5 7.7 53.1 0 62.7 0c9.5 0 14.2 7.7 18.2 14.5C85.2 21.6 88.3 26 94 26s8.8-4.4 13.1-11.5C111.2 7.7 115.8 0 125.3 0s14.2 7.7 18.2 14.5c4.3 7.2 7.4 11.5 13.1 11.5s8.8-4.4 13.1-11.5C173.8 7.7 178.5 0 188 0v6c-5.7 0-8.8 4.4-13.1 11.5-4.1 6.8-8.7 14.5-18.2 14.5z"></path></svg>
                        </div>
                        <form>
                            <div>
                                <input type="text" name="nom" id="nom" placeholder='Votre nom et prénom' />
                                <input type="text" name="entreprise" id="entreprise" placeholder='Nom de votre entreprise' />
                            </div>
                            <div>
                                <input type="email" name="email" id="email" placeholder='Votre adresse mail' />
                                <input type="tel" name="tel" id="tel" placeholder='Votre numéro de téléphone' />
                            </div>
                            <textarea name="message" id="message" placeholder='Votre message'></textarea>
                            <div className="envoi">
                                {/*<input type="submit" value="Envoyer"/>*/}
                                <button>Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default OverlayContact;
