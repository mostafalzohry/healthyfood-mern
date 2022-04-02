import { addToCart } from "../../../store/actions/cartaction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import Rows from "../components/Rows";
import EmptyCart from "./Menu/EmptyCart";
import { Card } from "react-bootstrap";
// import { CartProvider, useCart } from "react-use-cart";
// import totalArr from "../components/TotalArray";
import { Link } from 'react-router-dom';
import TotalContext from './../../../store/total-context';
import { useContext } from 'react';
import Loader from '../../Loader/Loader'
import MealsContext from './../../../store/meals-context';


function ShoppingList(props) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500);
    }, [])


    const ctx = useContext(TotalContext)

    const mealsCtx = useContext(MealsContext);


    let total = 0;

    const dispatch = useDispatch()

    const [Menu, setMenu] = useState([])

    let quantity = 0;

    const handleQuantity = (event) => {
        const value = event.target.value;

        if (value < 0)
            return;
        else { this.quantity = value }
    }
    
    const { user: currentUser } = useSelector((state) => state.auth);





    const FavMen = useSelector((state) => { return state.cartreducer.menu })
    let TotalPrice = 0;
    let qty;

    const filterMenu = Menu.filter((m) => {
        return FavMen.includes(m._id)
    })

    useEffect(() => {
        axios.get('http://localhost:4000/foods')
            .then((res) => {
                setMenu(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const handelMenu = (id) => {
        if (FavMen.includes(id)) {
            console.log(id)
            const index = FavMen.indexOf(id)
            console.log(index)
            FavMen.splice(index, 1)
            dispatch(
                addToCart([...FavMen])
            )
        } else {
            dispatch(addToCart([id, ...FavMen]))
        }
    }

    let [num, setNum] = useState(1);
 
    let handleChange = (e) => {
        setNum(e.target.value);
    }

    const [meals, setMeals] = useState([]);

    const onChangeInputValue = (inputValue, id) => {
        setMeals(prevMeals => {
            return [...prevMeals, { id, inputValue }]
        })

        //  props.getTotalPrice = () => {
        //      return TotalPrice;
        // }
    }







    if (filterMenu == 0  ) {
        return (<EmptyCart />)
    } else {
        return (
            <>
                <>
                    <h1 style={{ color: '#47B07F' }}> Your cart </h1>
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

                                            filterMenu.map((men) => {
                                                // console.log(filterMenu[1].name)
                                                let newMeals = meals.filter(meal => meal.id == men._id)
                                                // console.log(newMeals );

                                                if (newMeals.length === 0) {
                                                    TotalPrice = TotalPrice + parseInt(men.price);
                                                    ctx.totalPrice = TotalPrice
                                                    mealsCtx.meals = filterMenu

                                                } else {
                                                    TotalPrice = TotalPrice + (parseInt(men.price) * newMeals[newMeals.length - 1].inputValue);
                                                    ctx.totalPrice = TotalPrice

                                                    let newFilterMeals = filterMenu;
                                                    let index = newFilterMeals.indexOf(men)
                                                    //  let newMeal = {...men, totalPrice:(parseInt(men.price) * newMeals[newMeals.length - 1].inputValue)}; 
                                                    let newMeal = { ...men, totalPrice: (parseInt(men.price) * newMeals[newMeals.length - 1].inputValue), quantity: newMeals[newMeals.length - 1].inputValue };

                                                    newFilterMeals[index] = newMeal

                                                    mealsCtx.meals = filterMenu



                                                }
                                                return (
                                                    <>
                                                        <Rows img={men.image}
                                                            name={men.name}
                                                            price={men.price}
                                                            remove={handelMenu}
                                                            id={men._id}
                                                            onChangeInputValue={onChangeInputValue}
                                                        />
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                                <div>
                                    {
                                        filterMenu.map(men => {
                                            let p = Number(men.price)
                                            total = total + p
                                        })
                                    }
                                    <div className="panel-footer">
                                        <div className="row text-center">
                                            <div className="col-xs-11">
                                                <h4 className="text-right">Total Price <strong>{TotalPrice}</strong></h4>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" total col-4">
                                <Card className=" bg-dark text-white " style={{ width: '20rem' }}>
                                    <Card.Body>
                                        <Card.Title className=" M-2 P-2 fw-bold" style={{ fontWeight: "bolder", fontSize: "28px" }}>Total Price </Card.Title>
                                        <Card.Text>
                                            <div>Total :<span> {TotalPrice} </span> </div>
                                        </Card.Text>
                                        {currentUser ? (

                                            <Link to="/checkout/cashOnDelivery"   className="btn btn-primary">Checkout Now</Link>
                                        ) : (
                                            <Link to="/login" className="btn btn-primary"> Checkout Now</Link>
                                        )}                        </Card.Body>
                                </Card>
                            </div>
                        </div>
                    </>
                </>
            </>
        )
    }
}

export default ShoppingList



