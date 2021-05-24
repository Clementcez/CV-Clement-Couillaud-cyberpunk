
function Footer (){

    function scrollTop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    return (
        <footer>
            <div>
                <p>With love</p>
                <i class="fas fa-heart heart"></i>
            </div>

            <div>
                <p>React App</p>
                <i class="fab fa-react react"></i>
            </div>

            <div onClick={scrollTop}>
                <i class="fas fa-arrow-circle-up yellow toTop"></i>
            </div>
        </footer>
    )
}

export default Footer