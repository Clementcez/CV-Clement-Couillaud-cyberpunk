import  Nomade  from '../../music/nomad-path.mp3'
import  Rebel  from '../../music/the-rebel-path.mp3'
import  Corpo  from '../../music/corpo-path.mp3'
import '../../styles/Audio.css'

function Audio({ stateMode }){

    return (
        <div className='modulAudio'>
                { stateMode.mode === 'nomade' && 
                    <div>
                        <audio controls='controls'>
                            <source src={Nomade} type="audio/mpeg" />
                            <p>Votre navigateur ne peut pas lire cette piste</p>
                        </audio>
                        <div className='containerTitleMusic'>
                            <p className='musicTitle'>nomad-path.mp3</p>
                        </div>
                    </div>
                }

                { stateMode.mode === 'rebel' && 
                    <div>
                        <audio controls='controls'>
                            <source src={Rebel} type="audio/mpeg" />
                            <p>Votre navigateur ne peut pas lire cette piste</p>
                        </audio>
                        <div className='containerTitleMusic'>
                                <p className='musicTitle'>the-rebel-path.mp3</p>
                        </div>
                    </div>
                }

                { stateMode.mode === 'corpo' && 
                    <div>
                        <audio controls='controls'>
                            <source src={Corpo} type="audio/mpeg" />
                            <p>Votre navigateur ne peut pas lire cette piste</p>
                        </audio>
                        <div className='containerTitleMusic'>
                            <p className='musicTitle'>corpo-path.mp3</p>
                        </div>
                    </div>
                }
            <span> R25</span>
        </div>
        )
}

export default Audio