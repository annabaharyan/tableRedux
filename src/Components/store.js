import { Products } from './ReduxComponents/initialValue'
import { createStore } from 'redux'
const initialState = Products
const store = createStore(function (state, { type, payload }) {
    switch (type) {
        case 'ShowAll':
            state = initialState
            return state
        case 'ShowProgress':
            state = initialState
            return state.filter(res => res.status === payload.status)
        case 'ShowCompleted':
            state = initialState
            return state.filter(res => res.status === payload.status)
        case 'ShowCancel':
            state = initialState
            return state.filter(res => res.status === payload.status)
        case 'ShowReject':
            state = initialState
            return state.filter(res => res.status === payload.status)
        case 'showSmartphones':
            state = initialState
            return state.filter(res => res.category === payload.category)
        case 'showLaptops':
            state = initialState
            return state.filter(res => res.category === payload.category)
        case 'showFragrances':
            state = initialState
            return state.filter(res => res.category === payload.category)
        case 'showSkincare':
            state = initialState
            return state.filter(res => res.category === payload.category)
        case 'ChangeToProgress':
            state = initialState
             const newState1=state.map(res => {
                
                if (res.id === payload.itemId) {
                    res.status = payload.itemStatus
                    return res
                }
            })
            return state=[...state,newState1]
        case 'ChangeToCompleted':
            state = initialState
             const newState2=state.map(res => {
                    
                   if (res.id === payload.itemId) {
                    res.status = payload.itemStatus
                    return res
                }
            })
            return state=[...state,newState2]
        case 'ChangeToCancel':
            state = initialState
             const newState3=state.map(res => {
                        
                   if (res.id === payload.itemId) {
                    res.status = payload.itemStatus
                    return res
                }
            })
            return state=[...state,newState3]
        case 'ChangeToReject':
            state = initialState
                const newState4=state.map(res => {
                            
                   if (res.id === payload.itemId) {
                    res.status = payload.itemStatus
                    return res
                }
            })
                return state=[...state,newState4]
        }
        
    return state
}, Products)

export default store