import '../styles/Content.css'
import Apropos from './content/Apropos'
import Formation from './content/Formation'
import Experience from './content/Experience'
import Aptitude from './content/Aptitude'
import Interets from './content/Interets'

function Content(){
    return (
        <div>
            <div className='firstRow'>
                <Apropos />
                <Formation />
            </div>

            <div className='secondRow'>
                <Aptitude />
                <Experience />
            </div>

            <Interets />
        </div>
    )
}

export default Content