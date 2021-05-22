import '../../styles/CyberBtn.css'

function ButtonMode({ text, updateMode }){

  const elem = document.getElementById('root')
  elem.classList.add('nomade')

  return (
    <button className='cyberBtn' onClick={() => {changeMode(elem, {text}); updateMode({mode: text})}}>
        {text}_
        <span> R25</span>
    </button>
  )

  function changeMode(elem, text){

    if(text.text === 'hard skills'){
      return
    }
    else if(text.text === 'soft skills'){
      return
    }
    
    const inv = document.getElementById('invisible')
    inv.classList.add('brouillage')

    function removeClass(){
      const inv = document.getElementById('invisible')
      inv.classList.remove('brouillage')
    }
    setTimeout(removeClass,200)

    if(text.text === "nomade"){
      elem.classList.remove('gosseDesRues', 'corpo')
      elem.classList.add('nomade')
    }
  
    else if(text.text === "rebel"){
      elem.classList.remove('nomade', 'corpo')
      elem.classList.add('gosseDesRues')
    }
  
    else if(text.text === "corpo"){
      elem.classList.remove('nomade', 'gosseDesRues')
      elem.classList.add('corpo')
    }

  }
}

export default ButtonMode;