import { addToCart } from "../../../store/actions/cartaction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect , useState } from "react";
import { Button, Table } from "react-bootstrap";
import Rows from "../components/Rows";
import EmptyCart from "./Menu/EmptyCart";
import { Card } from "react-bootstrap";
// import { CartProvider, useCart } from "react-use-cart";
// import totalArr from "../components/TotalArray";
import { Link } from 'react-router-dom';
import Loader from '../../Loader/Loader'


function ShoppingList(){
    const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[])

    let total = 0;

    const dispatch = useDispatch()

    const [Menu,setMenu] = useState([])

    let quantity=0;

    const handleQuantity = (event) => {
        const value = event.target.value;

        if(value < 0)
            return ;
        else{this.quantity = value}
        //console.log(state.quantity)
    }


    const { user: currentUser } = useSelector((state) => state.auth);

const FavMen= useSelector((state)=>{return state.cartreducer.menu})
let TotalPrice = 0;
     let qty ;

    const filterMenu = Menu.filter((m)=>{
        return FavMen.includes(m._id)
    })

    useEffect(()=>{
        axios.get('http://localhost:4000/foods')
        .then((res)=>{
            setMenu(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

    const handelMenu=(id)=>{
        if (FavMen.includes(id))
        {
            console.log(id)
            const index= FavMen.indexOf(id)
            console.log(index)
            FavMen.splice(index,1)
            dispatch(
                addToCart([...FavMen])
            )
        }else{
            dispatch(addToCart([id, ...FavMen]))
        }
    }

    let [num, setNum]= useState(1);
    // let incNum =()=>{
    //     if(num<10)
    //     {
    //     setNum(Number(num)+1);
    //     }
    // };
    // let decNum = () => {
    //     if(num>0)
    //     {
    //     setNum(num - 1);
    //     }
    // }
    let handleChange = (e)=>{
    setNum(e.target.value);
    }

    const [meals, setMeals] = useState([]);

    const onChangeInputValue = (inputValue, id) =>{
        setMeals(prevMeals => {
            return [...prevMeals, {id,inputValue}]
        })
    }


    if(filterMenu==0){
        return(<EmptyCart/>)
    }else{
        return(
            <>
             {loading ? <Loader/>:
            <>
             <h1 style={{color:'#47B07F'}}> your cart </h1>
                    <>
                    <div className="cart">
                    <div className=" col-8" > 
                    <Table >
                            <thead>
                                <tr>
                                
                                <th>Meal</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                   
                                filterMenu.map((men,index)=>{
                                   let newMeals = meals.filter(meal => meal.id == men._id)
                                //    console.log(newMeals );
                                   if(newMeals.length === 0){
                                        TotalPrice = TotalPrice +  parseInt(men.price) 
                                   }else{
                                      TotalPrice = TotalPrice + ( parseInt(men.price)  * newMeals[newMeals.length -1].inputValue );
                                   }
                                    return(
                                    <>
                                     <Rows img = {men.image}
                                        name= {men.name}
                                        price={men.price}
                                        remove={handelMenu}
                                        id={men._id}
                                        onChangeInputValue={onChangeInputValue}
                                    />
                                    </>
                                    
                                //  <tr key={men._id}>
                                //     <td className="col-3">
                                //         <div>
                                //         <img className="myimg" src={men.image}/>   
                                //         </div>
                                //     </td>  
                                //     <td >{men.name}{index}</td>
                                //     <td>{men.price} </td>
                                //     <td className="count" key={men._id}>
                                //     <input type="number" id='myinput' defaultValue={1} onChange={event => setInput(event.target.value)} />
                                //     </td>
                                //     <td>
                                //         {input==null? men.price: men.price*input}
                                //     </td>
                                //     <td >
                                //         <button type="button"  className="add btn btn-danger" onClick={()=>{handelMenu(men._id)}} >
                                //             <i className="far fa-star"></i> Remove From Cart  </button>
                                //     </td>
                                // </tr>

            
                                    )
                                })
                                }                           
                            </tbody>

                    </Table>
                <div>
                    { 
                       filterMenu.map(men=>{
                        let p = Number(men.price)
                        total = total +p 
                        })
                    }
                    <div className="panel-footer">
                    <div className="row text-center">
                        <div className="col-xs-11">
                            <h4 className="text-right">TotalPrice <strong>{TotalPrice}</strong></h4>

                        </div>
                    </div>
                </div>
                    </div>
                    </div>
                    <div className=" total col-4">
                    <Card className=" bg-dark text-white " style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title className=" M-2 P-2 fw-bold" style={{fontWeight:"bolder" , fontSize:"28px"}}>CARD TOTAL </Card.Title>
                            <Card.Text>
                                <div>Total :<span> {TotalPrice} </span> </div>
                            </Card.Text>

                            {currentUser ? (

                            <Link to="/checkout/cashOnDelivery" className="btn btn-primary">Checkout Now</Link>                   
                            ) : (
                             <Link to="/login" className="btn btn-primary"> Checkout Now</Link>
                            )}
                             </Card.Body>

                        </Card>
                    </div>
                    </div>
                    </>
                    
            </>}
    </>
        )
    }

   
}

export default ShoppingList