export interface CartItem {
  id: string
  name: string
  price: number
  image: string
  artist: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
}

export const calculateCartTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

export const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0)
}
