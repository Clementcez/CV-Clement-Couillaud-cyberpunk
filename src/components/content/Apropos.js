import AnimationContent from './AnimationContent'
import React from 'react'
import LogoLink from '../mode/LogoLink'
import CvPdf from '../../assets/CV_Couillaud_Clement.pdf'
import '../../styles/contentStyle/Apropos.css'
import '../../styles/FileEffect.css'

function Apropos(){
    return (
        <div className="apropos">
            <React.Fragment>
                {/* duration = un nombre entre 1 et 5 */}
                <AnimationContent duration='2'/>
            </React.Fragment>
            <div className="fileEffect1"></div><div className="fileEffect2"></div>
            <h2 className='aproposTitle'>Apropos de moi</h2>

            <p>
                Depuis mon plus jeune âge, je suis passionné par les nouvelles technologies et le Web. 
                C'était pour moi une évidence que je me réoriente vers un métier lié au monde du numérique.
            </p>

            <p>
                Afin de me conforter dans mon choix de reconversion, j'ai suivi une formation à la <b>Fabrique du Numérique </b>  
                où j'ai acquis la méthodologie du développement. Elle m'a permis de découvrir les fondamentaux de différents languages en Html, Css, Js et Php ainsi que les bases de WordPress.
                Nous avons été sensibilisé à la sobriété numérique, aux logiciels libres et à l'expérience utilisateur.
            </p>

            <p>
                Et tout ça sous Linux ! <i class="fab fa-linux yellow"></i>
            </p>

            <p>
                J'ai décidé de poursuivre l'aventure avec <b>Openclassrooms</b>.
            </p>

            <p>
                Cette formation se compose de 7 projets différents tels que l'intégration de maquette avec scss, 
                la réalisation d'animation grâce aux @keyframes, l'optimisation SEO, l'accessibilité numérique et les API Rest ...
                Le projet final était de réaliser une application Web avec VueJs connecté à NodeJs et une base de donnée.
                Je suis titulaire du BTS Développeur Web.
            </p>

            <p>
                En poste chez Hoplie depuis mars 2022, j'ai fait un virage serré dans mon apprentissage en passant
                sur du développement BACK symfony, avec succès !
            </p>

            <p>
                <i class="fas fa-long-arrow-alt-right yellow"></i> Aujourd'hui je souhaite mettre à profit mes acquis mais aussi me perfectionner au sein d'une entreprise en tant que <b>Développeur Web</b>.
            </p>

            <div className='apropos__dl'>
                <p>Téléchargez mon CV</p> 
                <div className='rotateLink rotateLink--mod'>
                    <LogoLink logo='fas fa-file-download' link={CvPdf}/>
                </div>
            </div>
        </div>
    )
}

export default Apropos