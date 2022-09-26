import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import componentsCss from './components.css'
const Table = () => {
    const products=useSelector(function(state){
        return state
    })
const dispatch=useDispatch()
   function changetoProgress(item){
    dispatch({
        type:'ChangeToProgress',
        payload:{
            itemId:item.id,
            itemStatus:'progress'
        }
    })
   } 

   function changetoCompleted(item){
    dispatch({
        type:'ChangeToCompleted',
        payload:{
            itemId:item.id,
            itemStatus:'completed'
        }
    })
   } 
   function changetoCancel(item){
    dispatch({
        type:'ChangeToCancel',
        payload:{
            itemId:item.id,
            itemStatus:'cancel'
        }
    })
   } 
   function changetoReject(item){
    dispatch({
        type:'ChangeToReject',
        payload:{
            itemId:item.id,
            itemStatus:'reject'
        }
    })
   } 
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item,index)=>(
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.brand}</td>
                        <td>{item.category}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.price}$</td>
                        <td><img src={item.images} alt="itemImage" /></td>
                        <td>
                            <button className={item.status==='progress'?'displays':''}onClick={()=>changetoProgress(item)}>Progress</button>
                            <button className={item.status==='completed'?'displays':''} onClick={()=>changetoCompleted(item)}>Completed</button>
                            <button className={item.status==='cancel'?'displays':''}onClick={()=>changetoCancel(item)}>Cancel</button>
                            <button className={item.status==='reject'?'displays':''}onClick={()=>changetoReject(item)}>Reject</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
