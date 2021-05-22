import Projet from './Projet'
import Reservia from '../../assets/portfolio/reservia.png'
import Ohmyfood from '../../assets/portfolio/ohmyfood.png'
import Orinoco from '../../assets/portfolio/orinoco.png'
import Loader from '../../assets/portfolio/loader.png'

function Portfolio (){
    
    const projet = {

        reservia: {
            link: "https://clementcez.github.io/ClementCouillaud_2_13102020/index.html",
            img: Reservia,
            alt: 'capture ecran reservia',
            text: "Projet Openclassrooms, intégration d'une maquette, introduction aux flex"
        },

        ohmyfood:{
            link: "https://clementcez.github.io/ClementCouillaud_3_06112020/",
            img: Ohmyfood,
            alt: 'capture ecran ohmyfood',
            text: "Projet Openclassrooms, intégration d'une maquette mobile, @keyframes / Media queries"
        },

        orinoco:{
            link: "https://cc-orinoco.netlify.app/index.html",
            img: Orinoco,
            alt: 'capture ecran orinoco',
            text: "Projet Openclassrooms, site e-commerce connecté à une API, JS"
        },

        loader:{
            link: "https://clementcez.github.io/cv-loader/",
            img: Loader,
            alt: 'capture ecran loader',
            text: 'Projet perso, création du loader pour ce CV, SCSS / JS'
        }
    }

    return (
        <div>
            <h2 className='portfolioTitle'>Realisations</h2>
            <div className='containerPortfolio'>
                <Projet
                    text={projet.reservia.text} 
                    link={projet.reservia.link} 
                    img={projet.reservia.img} 
                    alt={projet.reservia.alt} 
                />

                <Projet
                    text={projet.ohmyfood.text} 
                    link={projet.ohmyfood.link} 
                    img={projet.ohmyfood.img} 
                    alt={projet.ohmyfood.alt}
                />

                <Projet 
                    text={projet.orinoco.text} 
                    link={projet.orinoco.link} 
                    img={projet.orinoco.img} 
                    alt={projet.orinoco.alt}
                />

                <Projet 
                    text={projet.loader.text} 
                    link={projet.loader.link} 
                    img={projet.loader.img} 
                    alt={projet.loader.alt}
                />
            </div>
        </div>
    )
}

export default Portfolio