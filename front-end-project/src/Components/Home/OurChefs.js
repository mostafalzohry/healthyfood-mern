import './chefs.css'

const OurChefs = () => {
    return (
        <>
        <div style={{paddingTop:"5%" , backgroundColor:"#e9ffe2"}}>
            <div className="ourchefs">
                <div  className='first'>
                    <img src={require('./chefsImages/kk.jpeg')}  />
                </div>
                <div className='second'>
                    <div className='desc'>
                       <h2>Our Chefs </h2>
                       <p className='fs-5 p-5 m-0'>“Reem’s is a place where you can imagine a different way for the world to run, where those in the margins are at the center.” - Reem Assil 
                        </p>
                    </div>
                    <div width={"100%"}>
                    <img src={require('./chefsImages/mm.jpeg')} width={"100%"}height="50%" />
                    </div>
                </div>
                
                <div className='third'>
                    <div>
                    <img src={require('./chefsImages/ss.jpeg')} width={"100%"} style={{marginTop:"-25%"}}/>
                    </div>
                    <div className='thrdText'>
                       <p className='fs-3 p-5 m-0'>"When you run a kitchen, no matter how crazy and chaotic it gets, you have to be the calm one. You cannot show any sign of fear - the guests pick up on it. The beauty of this kitchen, though, is that everybody helps everybody." - Nina Compton
                        </p>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default OurChefs