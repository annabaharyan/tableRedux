import React from 'react';
import { useDispatch } from 'react-redux';
import componentsCss from './components.css'
const Header = () => {
    const dispatch=useDispatch()
  function showAll(){
        dispatch({
          type:'ShowAll',
          
        })
        }
  function showProgress(){
  dispatch({
    type:'ShowProgress',
    payload:{
       status:'progress'
    }
  })
  }
  function showCompleted(){
    dispatch({
      type:'ShowCompleted',
      payload:{
         status:'completed'
      }
    })
    }
    function showCancel(){
        dispatch({
          type:'ShowCancel',
          payload:{
             status:'cancel'
          }
        })
        }
        function showReject(){
         dispatch({
          type:'ShowReject',
          payload:{
                status:'reject'
             }
        })
        }
        function showSmartphones(){
            dispatch({
             type:'showSmartphones',
             payload:{
                   category:'smartphones'
                }
           })
           }
        function showLaptops(){
            dispatch({
             type:'showLaptops',
             payload:{
                   category:'laptops'
                }
           })
           }
        function showFragrances(){
            dispatch({
             type:'showFragrances',
             payload:{
                   category:'fragrances'
                }
           })
           }
        function showSkincare(){
            dispatch({
             type:'showSkincare',
             payload:{
                   category:'skincare'
                }
           })
           }
    return (
        <header>
            <div className='uls'>
                <button onClick={showAll}>Show All</button>
                <ul>
                    <li onClick={showProgress}>Progress</li>
                    <li onClick={showCompleted}>Completed</li>
                    <li onClick={showCancel}>Cancel</li>
                    <li onClick={showReject}>Reject</li>
                </ul>
                <ul>
                    <li onClick={showSmartphones}>Smartphones</li>
                    <li onClick={showLaptops}>Laptops</li>
                    <li onClick={showFragrances}>Fragrances</li>
                    <li onClick={showSkincare}>Skincare</li>
                </ul>
            </div>
            
        </header>
    );
}

export default Header;
