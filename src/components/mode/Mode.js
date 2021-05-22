import ButtonMode from './ButtonMode'
import Audio from './Audio'
import {useState} from 'react'
import LogoLink from './LogoLink'
import '../../styles/Mode.css'


function Mode (){
    
    const [stateMode, setStateMode] = useState({ mode: 'nomade' })

    return (
        <div className='selectMode'>
            <div>
                <ButtonMode updateMode={setStateMode} text='nomade'/>
                <ButtonMode updateMode={setStateMode} text='rebel'/>
                <ButtonMode updateMode={setStateMode} text='corpo'/>
            </div>
            <div className='rotateLink'>
                <LogoLink logo='fab fa-linkedin' link='https://www.linkedin.com/in/clement-couillaud'/>
                <LogoLink logo='fab fa-github' link='https://github.com/Clementcez'/>
                <LogoLink logo='far fa-paper-plane' link='mailto:couillaud11000@gmail.com'/>
                <LogoLink logo='fas fa-phone-square-alt' link='tel:0699224438'/>
            </div>
            <Audio stateMode={stateMode}/>
        </div>
    )
    
}

export default Mode