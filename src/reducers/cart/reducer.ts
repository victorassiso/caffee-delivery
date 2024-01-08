import { ICartItem } from '../../contexts/cart-context-provider'
import { Actions, ActionTypes } from './action'

export interface CartState {
  cart: ICartItem[]
}

export function cartReducer(state: CartState, action: Actions) {
  let itemIndex = -1
  let updatedCart: ICartItem[]

  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      console.log(action.payload)
      return {
        ...state,
        cart: [...state.cart, action.payload.item],
      }
      return state

    case ActionTypes.INCREMENT_ITEM_QUANTITY:
      console.log(action.payload)
      itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.itemId,
      )
      console.log(itemIndex)
      if (itemIndex >= 0) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload.itemId) {
              return { ...item, quantity: item.quantity + 1 }
            }
            return item
          }),
        }
      }
      return state

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.itemId,
      )
      if (itemIndex >= 0) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload.itemId) {
              return { ...item, quantity: item.quantity - 1 }
            }
            return item
          }),
        }
      }
      return state

    case ActionTypes.REMOVE_ITEM:
      updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.itemId,
      )
      return {
        ...state,
        cart: updatedCart,
      }

    default:
      return state
  }
}
