import AnimationContent from './AnimationContent'
import React from 'react'
import '../../styles/contentStyle/Experience.css'

function Experience(){
    return (
        <div className="experience">
            <React.Fragment>
                {/* duration = un nombre entre 1 et 5 */}
                <AnimationContent duration='3'/>
            </React.Fragment>
            <div className="fileEffect1"></div><div className="fileEffect2"></div>
            <h2 className='experienceTitle'>Experiences</h2>

            <div className='experienceContent'>
                <p>WAITING FOR MORE XP...</p>
            </div>

            <div className='experienceContent'>
                <h3>DEVELOPPEUR BACK SYMFONY, HOPLIE 2022 / ?</h3>
                <ul>
                    <li>
                        ERP
                    </li>
                    <li>
                        Ecommerce
                    </li>
                    <li>
                        Sites vitrine
                    </li>
                </ul>
                <figcaption>
                    <cite>
                        Actuellement en poste chez Hoplie, j'ai énormément approfondi Symfony et prend du plaisir 
                        à chercher, tester et utiliser les différents bundles du framework.
                        Grace aux multiples refontes/créations de sites, ERP et aussi à la maintenance de ceux-ci
                        ou encore à la confection d'un "starter" admin natif puis une reféction vers Easyadmin,
                        j'ai aujourd'hui un certains nombres de cordes à mon arc pour exploiter Symfony.
                    </cite>
                </figcaption>
            </div>

            <div className='experienceContent'>
                <h3>DEVELOPPEUR INTEGRATEUR SYMFONY, EOCOM 2021</h3>
                <ul>
                    <li>
                        Refonte d'une application web Symfony
                    </li>
                    <li>
                        Ajout de nouvelles fonctionnalités sur une application ecommerce Sylius
                    </li>
                    <li>
                        Modification de rendu Twig
                    </li>
                </ul>
                <figcaption>
                    <cite>
                        Incroyable expérience personnelle et professionnelle, j'ai découvert "Symfony" un framework PHP
                        avec la refonte d'un projet ecommerce.
                        Dans ce lapse de temps j'ai également intégré les modifications demander par le client sur 
                        un projet ecommerce "Sylius".  
                    </cite>
                </figcaption>
            </div>

            <div className='experienceContent experienceContent--last'>
                <h3>DEVELOPPEUR INTEGRATEUR, EMANDARINE 2020</h3>
                <ul>
                    <li>
                        Réalisation d'un outil WordPress en PHP
                    </li>
                </ul>
                <figcaption>
                    <cite>
                        Stage de fin de formation pour "La Fabrique du Numérique", j'ai pu découvrir 
                        "Bulma" un framework CSS bien sympa mais aussi le PHP spécifique de WordPress et de son 
                        arborescence.
                    </cite>
                </figcaption>
            </div>

        </div>
    )
}

export default Experience