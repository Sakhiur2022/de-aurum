import Header from '../layout/header.jsx'
import Footer from '../layout/footer.jsx'

function Homepage(){
    return(
        <>
           <Header/>
           <Greeting/>
           <Footer/>
        </>
    )
}

function Greeting(){
    return(
        <>
            <p>Hi mate how are you?</p>
        </>
    )
}

export default Homepage