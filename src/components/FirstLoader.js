import {useEffect} from 'react'
import '../styles/loader/FirstLoader.css'

function FirstLoader ({ updateMode }){

    useEffect(() => {
        const resultNumber = document.getElementById("1")
        const resultNumber2 = document.getElementById("2")
        const resultNumber3 = document.getElementById("3")
        const resultNumber4 = document.getElementById("4")
        const pourcent = document.getElementById("pourcent")
        let n = 0

        const interval2 = setInterval( function(){
            let randomInt = Math.floor(Math.random() * (100))
            resultNumber.innerHTML = randomInt + 10
            resultNumber2.innerHTML = randomInt + 20
            resultNumber3.innerHTML = randomInt + 30
            resultNumber4.innerHTML = randomInt 
            if(n === 100){
                updateMode({mode: 'content'})
                clearInterval(interval2)
            }
        }, 90)

        const interval = setInterval( function(){
            n++
            pourcent.innerHTML = n
            if(n === 100){
                clearInterval(interval)
            }
        }, 33)
    });

    return (
        <div className='firstLoaderBox'>
            <div class="loader">

                <div class="loader__score">
                    <div class="loader__score__topLeft"></div>
                    <div class="loader__score__topRight"></div>
                    <p id="pourcent">100</p>
                    <div class="loader__score__botLeft"></div>
                    <div class="loader__score__botRight"></div>
                </div>

                <div class="loader__squareCorner">
                    <div class="loader__squareCorner__topDot"></div>
                    <div class="loader__squareCorner__square"></div>
                    <div class="loader__squareCorner__botDot"></div>
                </div>

                <div class="loader__squareCorner loader__squareCorner--botLeft">
                    <div class="loader__squareCorner__topDot"></div>
                    <div class="loader__squareCorner__square"></div>
                    <div class="loader__squareCorner__botDot"></div>
                </div>

                <div class="loader__squareCorner loader__squareCorner--topRight">
                    <div class="loader__squareCorner__topDot loader__squareCorner__topDot--mod"></div>
                    <div class="loader__squareCorner__square loader__squareCorner__square--mod"></div>
                    <div class="loader__squareCorner__botDot loader__squareCorner__botDot--mod"></div>
                </div>

                <div class="loader__squareCorner loader__squareCorner--botRight">
                    <div class="loader__squareCorner__topDot loader__squareCorner__topDot--mod"></div>
                    <div class="loader__squareCorner__square loader__squareCorner__square--mod"></div>
                    <div class="loader__squareCorner__botDot loader__squareCorner__botDot--mod"></div>
                </div>

                <div class="loader__tRevert">
                    <div class="loader__tRevert__medium"></div>
                    <div class="loader__tRevert__large"></div>
                    <div class="loader__tRevert__small"></div>
                </div>

                <div class="loader__plusUnderlineDotted">
                    <div class="loader__plusUnderlineDotted__plus">
                        <div class="loader__plusUnderlineDotted__plus__x"></div>
                        <div class="loader__plusUnderlineDotted__plus__y"></div>
                    </div>
                    <div class="loader__plusUnderlineDotted__dot"></div>
                    <div class="loader__plusUnderlineDotted__dot loader__plusUnderlineDotted__dot--mod"></div>
                </div>

                <p class="loader__text"> 
                    <span class="loader__text__L">L</span>
                    <span class="loader__text__O">O</span>
                    <span>A</span>
                    <span class="loader__text__D">D</span>
                    <span>I</span>
                    <span>N</span>
                    <span class="loader__text__G">G</span>
                    <span class="loader__text__number">
                        <span id="1"></span>.
                        <span id="2"></span>.
                        <span id="3"></span>.
                        <span id="4"></span>
                    </span>
                </p>
                <div class="loader__bar">
                    <div class="loader__bar__big">
                    </div><div class="loader__bar__small"></div>
                </div>

                <div class="loader__plusUnderlineDotted loader__plusUnderlineDotted--mod">
                    <div class="loader__plusUnderlineDotted__plus">
                        <div class="loader__plusUnderlineDotted__plus__x"></div>
                        <div class="loader__plusUnderlineDotted__plus__y"></div>
                    </div>
                    <div class="loader__plusUnderlineDotted__dot"></div>
                    <div class="loader__plusUnderlineDotted__dot loader__plusUnderlineDotted__dot--mod"></div>
                </div>

                <div class="loader__tRevert loader__tRevert--mod">
                    <div class="loader__tRevert__medium"></div>
                    <div class="loader__tRevert__large"></div>
                    <div class="loader__tRevert__small"></div>
                </div>

                <div class="loader__subLoader">
                    <p>ANALYSE</p>
                    <div class="loader__subLoader__big"></div>
                    <div class="loader__subLoader__small"></div>
                </div>

            </div>
        </div>
        
    )
}

export default FirstLoader