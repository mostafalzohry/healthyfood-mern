import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "../../components/card";
import { useDispatch , useSelector} from "react-redux";
 import { addToCart } from "../../../../store/actions/cartaction";
 



function Lunch(){
    const dispatch = useDispatch()
    const [Menu, setMenue] = useState([])
   const Favmenu = useSelector((state)=>{return state.cartreducer.menu})

    useEffect(()=>{
        axios.get('http://localhost:4000/foods')
        .then((res)=>{
                    setMenue(res.data)
                })
                .catch((err)=>{
                    console.log(err)
                })
    },[])

    const handelMenu=(id)=>{
        if (Favmenu.includes(id))
        {
            console.log(id)
            const index= Favmenu.indexOf(id)
            console.log(index)
            Favmenu.splice(index,1)
            dispatch(
                addToCart([...Favmenu])
            )
        }else{
            dispatch(addToCart([id, ...Favmenu]))
        }
    }
    return(

        <>
      <div>
        <h3  className='tit p-1'> Lunch </h3>
          <div className="MenList card-group m-1 p-1">
              {
                  Menu.map(men=>{
                      if(men.category=="Lunch"){
                        return(
                            <>
                        <div key={men}>
                        <Card title={men.name}
                          poster={men.image} 
                          price={men.price}
                          addFun={handelMenu}
                          favMenu={Favmenu}
                          category={men.category}
                          id={men._id}
                          calories = {men.calories}
                          />
                         </div>
                         
                        </>
                        )
                      }else{
                        <h1>Error</h1> 
                      }
                      
                  })
              }
          </div>

          


        </div>

           </>
    )
}
export default Lunch