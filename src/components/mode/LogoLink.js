
function LogoLink ({logo, link}){
    return(
        <a className='cube' href={link} target='blank' >
            <div className='cube__face cube__face--front'><i className={logo}></i></div>
            <div className='cube__face cube__face--right'></div>
            <div className='cube__face cube__face--back'><i className={logo}></i></div>
            <div className='cube__face cube__face--left'></div>
        </a>
    )
}

export default LogoLink