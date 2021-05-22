import '../../styles/contentStyle/Jugement.css'

function Jugement (){
    return (
        <div className='jugement'>
            <h2 className='jugementTitle'>Ce que l'on pense de moi</h2>
            <div className='jugement__content'>
                <div className='speedEffect'></div>
                <div className='speedEffect speedEffect--2'></div>
                <div className='speedEffect speedEffect--3'></div>
                <div className='speedEffect speedEffect--4'></div>
                <div className='speedEffect speedEffect--5'></div>
                <div className='speedEffect speedEffect--6'></div>
                <div className='speedEffect speedEffect--7'></div>
                <div className='speedEffect speedEffect--8'></div>

                <div className='jugement__content__text'>
                    <p className='carrousel'>Serviable</p> 
                    <p className='carrousel carrousel--2'>Simpathique</p>
                    <p className='carrousel carrousel--3'>Courtois</p>
                    <p className='carrousel carrousel--4'>Curieux</p>
                    <p className='carrousel carrousel--5'>Honnête</p>
                    <p className='carrousel carrousel--6'>Persévérant</p>
                    <p className='carrousel carrousel--7'>Capable</p>
                </div>
            </div>
        </div>
    )
}

export default Jugement