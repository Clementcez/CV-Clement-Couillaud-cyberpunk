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
                <p>AWAIT MORE XP ...</p>
            </div>

            <div className='experienceContent'>
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

            <div className='experienceContent experienceContent--last'>
                <h3>TECHNICIEN DE MAINTENANCE EN HOTELLERIE 2013/2019</h3>
                <ul>
                    <li>
                        Responsable du service
                    </li>
                    <li>
                        Organisation du travail
                    </li>
                    <li>
                        Satisfaction client
                    </li>
                </ul>
                <figcaption>
                    <cite>
                        En relation directe avec les clients je donnais le meilleur de moi-même pour satisfaire
                        leurs demandes et gérer les problèmes. Cette expérience m'a permis de développer 
                        une forte persévérance, une conscience professionnelle et une volonté de sortir de ma  
                        zone de confort.
                    </cite>
                </figcaption>
            </div>
        </div>
    )
}

export default Experience