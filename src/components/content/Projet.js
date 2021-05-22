import '../../styles/contentStyle/Projet.css'

function Projet ({link, img, alt, text}){
    return(
        <a className='portfolio' href={link} target='blank'>
            <img src={img} alt={alt}></img>
            <div className='portfolio__text'>
                <p>{text}</p>
            </div>
        </a>
    )
}

export default Projet