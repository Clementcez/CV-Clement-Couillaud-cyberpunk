import '../../styles/contentStyle/Apropos.css'
import '../../styles/FileEffect.css'
import '../../styles/loader/LoaderContent.css'
import ecranBrouillé from '../../assets/brouille.gif'

function Apropos(){
    return (
        <div className="apropos">
            <img className='fullContainer' src={ecranBrouillé} alt='brouillé'></img>
            <div className="container">
                <div className="loader">
                    <p>(CCXS COMPRESSED)</p>
                    <p>LOAD ADDRESS: 000011244</p>
                    <div className="loader__container">
                        <div className="loader__container__bar"></div>
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

            <div className="fileEffect1"></div><div className="fileEffect2"></div>
            <h2 className='aproposTitle'>Apropos de moi</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed eleifend, felis bibendum rutrum ultricies, felis mauris tincidunt libero, 
            eu tristique lectus massa vitae arcu. 
            Suspendisse quis urna sem. 
            Phasellus semper magna id luctus tristique. 
            Nullam iaculis convallis nulla ut tempus. Duis non velit sit amet urna semper 
            cursus ut sagittis urna. Suspendisse mattis urna sagittis mi suscipit, 
            consectetur maximus velit molestie. Vivamus ex nisi, porttitor eget bibendum ac, 
            auctor dignissim erat. Vivamus aliquam efficitur dolor molestie venenatis. Quisque 
            imperdiet porta mi non eleifend. Nam hendrerit blandit felis. In faucibus nec sapien 
            vitae pulvinar. Vivamus accumsan ultrices turpis, vitae faucibus diam consequat a. 
            Aenean euismod tristique turpis ut fermentum. Vestibulum dignissim, lacus non luctus 
            interdum, eros magna ullamcorper nisi, sed ullamcorper neque enim ac urna. Aliquam 
            sit amet interdum lorem. Vestibulum eget quam sit amet ex pulvinar feugiat placerat nec ante.
            Vestibulum eu ullamcorper ante. 
            Etiam ut tristique arcu. Integer 
            ligula erat, vestibulum nec ullamcorper sit amet, venenatis in nibh. 
            Nam a ipsum sit amet enim feugiat finibus. Vestibulum dignissim, 
            purus eu faucibus laoreet, lacus sapien pretium nisl, vitae pretium quam tortor in lorem. 
            Vivamus et iaculis lectus. Donec vestibulum dolor vitae felis aliquam, 
            sit amet malesuada ante eleifend. Interdum et malesuada fames ac ante ipsum primis in 
            faucibus. Nulla ac lorem vel magna ullamcorper porta sed eget libero. Praesent luctus
             magna lacus, eget mollis mi scelerisque vel. Sed bibendum dictum pellentesque. 
             Mauris ac posuere ex. Fusce venenatis tristique orci sed aliquet. Orci varius natoque 
             penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce egestas quam 
             non sem porta euismod. Etiam facilisis nibh eget felis faucibus euismod.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
            Cras tincidunt, diam eget consectetur dapibus, mauris urna fringilla lorem, non bibendum 
            justo velit et lectus. Morbi lorem lectus, molestie viverra erat vitae, bibendum porttitor 
            mi. Cras a enim vestibulum, condimentum augue eget, hendrerit lorem. Praesent blandit 
            magna at metus pellentesque, ut vehicula odio auctor. Proin eu purus nulla. Suspendisse 
            potenti.
            </p>
        </div>
    )
}

export default Apropos