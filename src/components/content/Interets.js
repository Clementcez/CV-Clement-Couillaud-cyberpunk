import '../../styles/contentStyle/Interets.css'

function Interets() {
    return (
        <div className='interets'>
            <h2 className='interetsTitle'>Interets</h2>
            <div className='containerInterets'>
                <div>
                    <div className='interets1'>
                        <p>Youtube</p>
                    </div>
                    <div className='containerInteretsList'>
                        <ul className='interetsList'>
                            <li>MR Mv</li>
                            <li>The Net Ninja</li>
                            <li>Nota Bene</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className='interets1'>
                        <p>Jeux vidéo</p>
                    </div>
                    <div className='containerInteretsList'>
                        <ul className='interetsList'>
                            <li>League of legend</li>
                            <li>Faster than light</li>
                            <li>Starsector</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className='interets1'>
                        <p>Sujets</p>
                    </div>
                    <div className='containerInteretsList'>
                        <ul className='interetsList'>
                            <li>Espace</li>
                            <li>Corps humain</li>
                            <li>Histoire</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <div className='interets1'>
                        <p>Autres</p>
                    </div>
                    <div className='containerInteretsList'>
                        <ul className='interetsList'>
                            <li>Randonée</li>
                            <li>Team chat</li>
                            <li>Escalade</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Interets