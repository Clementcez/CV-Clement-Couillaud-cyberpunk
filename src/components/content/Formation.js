import AnimationContent from './AnimationContent'
import React from 'react'
import LettreAL from '../../assets/lettre_recommandation_clement_AL.pdf'
import LettreJL from '../../assets/lettre_recommandation_clement_JL.pdf'
import '../../styles/contentStyle/Formation.css'

function Formation(){
    return (
        <div className="formation">
            <React.Fragment>
                {/* duration = un nombre entre 1 et 5 */}
                <AnimationContent duration='5'/>
            </React.Fragment>
            <div className="fileEffect1"></div><div className="fileEffect2"></div>
            <h2 className='formationTitle'>Formations</h2>

            <div className='formationContent'>
                <h3>JOLICODE 2022 ( Poitiers )</h3>
                <p>
                    Symfony
                </p>
                <figcaption>
                    <cite>
                        Formation à Symfony, qui associe théorie et exercices pratiques,  
                        d’en comprendre les mécanismes clé 
                        et de maîtriser le développement d’applications web modernes. 
                    </cite>
                </figcaption>
            </div>

            <div className='formationContent'>
                <h3>OPENCLASSROOMS 2020/2021 ( remote )</h3>
                <p>
                    Parcours développeur web
                    Diplôme RNCP32173 niveau 5
                </p>
                <figcaption>
                    <cite>
                        Formation qualifiante qui fait suite à "La Fab du Num" afin d'enrichir 
                        mes compétences et mes connaissances en développement web. Le côté full remote de se 
                        projet professionnel m'a permis de gerer mon temps de travail et d'optimiser mon apprentissage.
                    </cite>
                    <br></br><br></br>
                    <cite>
                        Commentaire de Fabien Rahaingomanana, mentor Openclassrooms :
                        "Clément est un élève très curieux, qui n'a eu de cesse d'approfondir
                         les différentes technologies abordées tout au long du parcours. 
                        Sociable, il n'hésitait pas à aider ceux qui étaient moins avancés."
                    </cite>
                </figcaption>
            </div>

            <div className='formationContent formationContent--last'>
                <h3>FABRIQUE DU NUMERIQUE 2019/2020 ( Poitiers )</h3>
                <p>
                    Parcours développeur web
                    Certificat de fomation
                </p>
                <figcaption>
                    <cite>
                        Formation "préparatoire" dans le but d'aquerrir les bases du développement et 
                        de découvrir les outils mais aussi différent languages de programmation.
                        Ce fut une formation extrêmement enrichissante tant sur le plan social 
                        et personnel, que professionnel. Découvrez les recommandations de  
                        <a href={LettreAL} target='blank'> Andréas Livet</a> formateur front-end et
                        <a href={LettreJL} target='blank'> Juliette Lauriol</a> responsable pédagogique à mon sujet.
                    </cite>
                </figcaption>
            </div>
        </div>
    )
}

export default Formation