import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
// import { addToCart } from "../../store/action";
import { addToCart } from "../../../../store/actions/cartaction";
import Loader from '../../../Loader/Loader';




function MealDetails(){

    const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  },[])
    const params = useParams([])
    const [Menu, setMenu] = useState({})
    const dispatch = useDispatch()
    const Favmenu = useSelector((state)=>{return state.cartreducer.menu})

     
    useEffect(()=>{
        axios.get(`http://localhost:4000/foods/${params.id}`)
        .then((res)=>{
            console.log(res.data)
            setMenu(res.data)

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
        {loading ? <Loader/>:
        <div>
        <h1 style={{color:'#47B07F'}} className='m-5 p-2'> Meal Details</h1>
        <div className='details'>
            <div className='nameImg'>
                <p className='mealName fs-3'> {Menu.name}</p>
                <div className='myim'>
                    <img src={Menu.image}/>
                </div>
            </div>
            <div className='nameImg' style={{height:"fitContent "}}>
                <div className='mealName fs-2'> Recipe Informations</div>
                <ul style={{marginLeft:"5%"}}>
                {
                    Menu['Recipeinfo'] && 
                        
                        <div>
                        {Object.keys(Menu['Recipeinfo']).map(key => (
                            <li key={Math.random()} className='fs-5 m-1' > {key}  : {Menu['Recipeinfo'][key]} </li>
                        ))}
                        </div>
                    }
                </ul>

                <div >
            <h3 className='mealName fs-2'> Nutrition Informations</h3>
            <ul style={{marginLeft:"5%"}}>
            {
                    Menu['NutritionInfo'] && 
                        
                        <div>
                        {Object.keys(Menu['NutritionInfo']).map(key => (
                            <li key={Math.random()} className='fs-5 m-1'> {key}  : {Menu['NutritionInfo'][key]} </li>
                        ))}
                        </div>
                        
                    }

            </ul>
            </div>


            </div>
            <div className='nameImg' style={{height:"fitContent " , margin:"10% 2% " , width:"189% " , padding:"5%"}} >

                <div className='mealName fs-2'> Meal Details</div>
                <div className='fs-4'style={{marginLeft:"5%"}} > {Menu.details}
                <div >
                    <button type="button" className="add btn btn-warning" style={{ float:"right"}}  onClick={()=>{handelMenu(Menu._id)}} >
                         Add to Cart </button> 
                </div>
                </div>                   


            </div>
               

        </div>
        </div>
}</>
        
        
    )
    

}
export default MealDetails