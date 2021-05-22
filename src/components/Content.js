import '../styles/Content.css'
import {useEffect} from 'react'
import Apropos from './content/Apropos'
import Formation from './content/Formation'
import Experience from './content/Experience'
import Aptitude from './content/Aptitude'
import Interets from './content/Interets'
import Portfolio from './content/Portfolio'
import Jugement from './content/Jugement'

function Content(){

    const duration = 5

    useEffect(()=>{
        const arrayId = []
        arrayId.push(document.getElementsByClassName('fullContainer')) 
        for(let elem of arrayId[0]){
           setTimeout( 
               function(){
                   elem.classList.add('hidden')
                },
               duration * 1000
            ) 
        }
    })

    return (
        <div>
            <div className='firstRow'>
                <Apropos />
                <Formation />
            </div>

            <div className='secondRow'>
                <Aptitude duration={duration}/>
                <Experience />
            </div>
            <Interets />
            <Portfolio />
            <Jugement />
        </div>
    )
}

export default Content