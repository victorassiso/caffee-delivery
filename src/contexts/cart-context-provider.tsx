import { createContext, ReactNode, useReducer } from 'react'

import { coffees } from '../data/products.json'
import { ActionTypes } from '../reducers/cart/action'
import { cartReducer, CartState } from '../reducers/cart/reducer'

export interface IProduct {
  id: string
  title: string
  description: string
  price: number
  tags: string[]
  image: string
}

export interface ICartItem {
  id: string
  quantity: number
}

interface ICartContext {
  cartState: CartState
  products: IProduct[]
  handleIncrementItemQuantity: (itemId: string) => void
  handleDecrementItemQuantity: (itemId: string) => void
  removeItem: (itemId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as ICartContext)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  })

  function incrementItemQuantity(itemId: string) {
    dispatch({
      type: ActionTypes.INCREMENT_ITEM_QUANTITY,
      payload: {
        itemId,
      },
    })
  }

  function addItem(item: ICartItem) {
    console.log(item)
    dispatch({
      type: ActionTypes.ADD_ITEM,
      payload: {
        item,
      },
    })
  }

  function decrementItemQuantity(itemId: string) {
    dispatch({
      type: ActionTypes.DECREMENT_ITEM_QUANTITY,
      payload: {
        itemId,
      },
    })
  }

  function removeItem(itemId: string) {
    dispatch({
      type: ActionTypes.REMOVE_ITEM,
      payload: {
        itemId,
      },
    })
  }

  function findItem(itemId: string) {
    const item = cartState.cart.find((item) => item.id === itemId)
    console.log(item)
    return item || null
  }

  function handleIncrementItemQuantity(itemId: string) {
    console.log(itemId)
    if (findItem(itemId)) {
      incrementItemQuantity(itemId)
    } else {
      addItem({ id: itemId, quantity: 1 })
    }
  }

  function handleDecrementItemQuantity(itemId: string) {
    const item = findItem(itemId)
    if (item) {
      if (item.quantity > 1) {
        decrementItemQuantity(itemId)
      } else {
        removeItem(itemId)
      }
    }
  }

  const products = coffees

  console.log(cartState.cart)
  return (
    <CartContext.Provider
      value={{
        products,
        cartState,
        handleIncrementItemQuantity,
        handleDecrementItemQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
