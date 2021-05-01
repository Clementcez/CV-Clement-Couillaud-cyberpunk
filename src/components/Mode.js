import ButtonMode from './mode/ButtonMode'
import Audio from './mode/Audio'
import {useState} from 'react'
import '../styles/Mode.css'

function Mode (){
    
    const [stateMode, setStateMode] = useState({ mode: 'nomade' })

    return (
        <div className='selectMode'>
            <div>
                <ButtonMode updateMode={setStateMode} text='nomade'/>
                <ButtonMode updateMode={setStateMode} text='rebel'/>
                <ButtonMode updateMode={setStateMode} text='corpo'/>
            </div>
            <Audio stateMode={stateMode}/>
        </div>
    )
    
}

export default Mode