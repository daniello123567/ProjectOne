import {create} from "zustand"
import { persist } from "zustand/middleware";
type state = {
  Bag:any[],
  setBag:(newProduct:any)=>void;
  removeFromBag:(id:string)=>void;
  updatefromLocalstorage:(newData:any)=>void;
}
type Wish = {
  wishlist:any[],
  setWishlist:()=>void;
  removeFromWish:()=>void;
}
const myStore = create<state|any>(
   persist((set)=>({
  Bag:[],
  setBag:(newProduct:any)=>set((state:any)=>({Bag:[...state.Bag,newProduct]})),
  removeFromBag:(id:string)=>set((state:any)=>({Bag:state.Bag.filter((product:product)=>product.id!==id)})),
}),{name:"Bag"})

)
export const Wishlist = create<Wish|any>(persist(
  (set)=>({
    wishlist:[],
    setWishlist:(newWish:any)=>set((state:any)=>({wishlist:[...state.wishlist,newWish]})),
    removeFromWish:(id:string)=>set((state:any)=>({wishlist:state.wishlist.filter((product:product)=>product.id!=id)}))
  }),{
    name:"Wishlist"
  }
))
export default myStore;


