import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from "../../components/card";
import { useDispatch , useSelector} from "react-redux";
 import { addToCart } from "../../../../store/actions/cartaction";
import ReactPaginate from "react-paginate";
import '../../styleSearch.css'
import Loader from '../../../Loader/Loader';




function AllMeals(){

    const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  },[])

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


    Menu.slice(0, 50)
    const [q, setQ] = useState("");
    const [searchParam] = useState(["name"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [pageNumber, setPageNumber] = useState(0);

    const mealsPerPage = 10;
    const pagesVisited = pageNumber * mealsPerPage;
    const [sortTop, setSortTop] = useState();
    const [sortDown, setSortDown] = useState();

    function search(Menu) {
        return Menu.filter((meal) => {
            if (meal.category == filterParam) {
                return searchParam.some((filterMeal) => {
                    return (
                        meal[filterMeal]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }else if (filterParam == "All") {
                return searchParam.some((filterMeal) => {
                    return (
                        meal[filterMeal]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
            
        });
    }


    const TopSort = type => {
        const types = {
            price: 'price',
            calories:'calories'
        };
        const sortProperty = types[type];
        Menu.sort((a, b) => a[sortProperty] - b[sortProperty]);
    };

    TopSort(sortTop);

    const DownSort = type => {
        const types = {
            price: 'price',
            calories:'calories' 
        };
        const sortProperty = types[type];
        Menu.sort((a, b) => b[sortProperty] - a[sortProperty]);
    };

    DownSort(sortDown);


    const pageCount = Math.ceil(Menu.length / mealsPerPage);

    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };



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
       <nav class="navbar navbar-expand-lg navbar-light bg-light menu">
            <div class="container-fluid gap-2">
                <div className="col">
                <input value={q} onChange={(e) => setQ(e.target.value)} class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                </div>
                <div className="col">
                <select onChange={(e) => {setFilterParam(e.target.value);}} class="form-select" aria-label="Default select example">
                    <option value="All" selected>Meals</option>
                    <option value="BreakFast">BreakFast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>

                </select>
                </div>
                <div className="col">
                <select onChange={(e) => setSortTop(e.target.value)} class="form-select" aria-label="Default select example">
                    <option selected>From low to high</option>
                    <option value="price">price</option>
                    <option value="calories">calories</option>
                </select>
                </div>
                <div className="col">
                <select onChange={(e) => setSortDown(e.target.value)} class="form-select" aria-label="Default select example">
                    <option selected>From high to low</option>
                    <option value="price">price</option>
                    <option value="calories">calories</option>
                </select>
                </div>
            </div>
        </nav> 

         <h3  className='tit p-3'> Meals  </h3>
         <div className="MenList card-group m-1 p-1">
              {
                  search(Menu).slice(pagesVisited, pagesVisited + mealsPerPage).map(men=>{
                        return(
                            <>
                        <div key={men}>
                        <Card title={men.name}
                          poster={men.image} 
                          id={men._id} 
                          price={men.price}
                          addFun={handelMenu}
                          favMenu={Favmenu}
                          category={men.category}
                          calories = {men.calories}
                          />
                         </div>
                         
                        </>
                        )

                      
                  })
              }
          </div>

              <br />
          <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
          
          <br />

        
</div>
}</>
    )
}
export default AllMeals