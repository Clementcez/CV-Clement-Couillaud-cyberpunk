import AnimationContent from './AnimationContent'
import AptitudeList from './AptitudeList/AptitudeList'
import React, {useState} from 'react'
import ButtonMode from '../mode/ButtonMode'
import '../../styles/contentStyle/Aptitude.css'

function Aptitude({duration}){

    const [stateMode, setStateMode] = useState({mode: 'nomade'})
    const animSkills = stateMode.mode

    return (
        <div className="aptitude">
            <React.Fragment>           
                {/* duration = un nombre entre 1 et 5 */}
                <AnimationContent duration={duration}/>
            </React.Fragment>
            <div className="fileEffect1"></div><div className="fileEffect2"></div>
            <h2 className='aptitudeTitle'>Aptitudes</h2>
            <div className='aptitudeContent'>
                <div>
                    <ButtonMode updateMode={setStateMode} text='hard skills'/>
                    <ButtonMode updateMode={setStateMode} text='soft skills'/>
                </div>

                {stateMode.mode === 'nomade' && 
                    <div className='waitClick'>
                        <p>WAITING FOR A CLICK...</p>
                    </div>
                }
                {stateMode.mode === 'hard skills' && 
                    <div className='divSkills' animSkills={animSkills}>
                        <AptitudeList text='Symfony'/>
                        <AptitudeList text='Java script'/>
                        <AptitudeList text='Node Js'/>
                        <AptitudeList text='Vue Js'/>
                        <AptitudeList text='GitHub'/>
                    </div>
                }

                {stateMode.mode === 'soft skills' && 
                    <div className='divSkills' animSkills={animSkills}>
                        <AptitudeList text='Autonome'/>
                        <AptitudeList text='Investigateur'/>
                        <AptitudeList text="Esprit d'équipe"/>
                        <AptitudeList text='Consciencieux'/>
                        <AptitudeList text='Esprit critique'/>
                    </div>
                }
            </div>
        </div>
    )
}

export default Aptitude