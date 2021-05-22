import ecranBrouillé from '../../assets/brouille.gif'
import '../../styles/loader/LoaderContent.css'

function AnimationContent({duration}){
    const modeDuration = ' --mode' + duration

    return (
        <div>
            <img id='brouille' className={'fullContainer' + modeDuration} src={ecranBrouillé} alt='brouillé'></img>
            <div className={"container" + modeDuration}>
                <div className="loaderContent">
                    <p>(CCXS COMPRESSED)</p>
                    <p>LOAD ADDRESS: 000011244</p>
                    <div className="loaderContent__container">
                        <div className="loaderContent__container__bar"></div>
                    </div>
                </div>
                <div className="spinner">
                    <div className="spinner__corner spinner__corner--topLeft"></div>
                    <div className="spinner__corner spinner__corner--topRight"></div>
                    <div className="spinner__corner spinner__corner--botLeft"></div>
                    <div className="spinner__corner spinner__corner--botRight"></div>
                    <div className="spinner__circle"><i className="spinner__circle__center fas fa-compass"></i></div>
                </div>
            </div>
        </div>
    )
}

export default AnimationContent