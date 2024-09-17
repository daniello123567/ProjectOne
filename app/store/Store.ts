import {create} from "zustand"
import { persist } from "zustand/middleware";
type state = {
  Bag:any[],
  setBag:(newProduct:any)=>void;
  removeFromBag:(id:string)=>void;
  updatefromLocalstorage:(newData:any)=>void;
  updateQuantity:(id:string)=>void;
  decreaseQuantity:(id:string)=>void;
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
  removeFromBag:(id:string)=>set((state:any)=>({Bag:state.Bag.filter((product:any)=>product.id!==id)})),
  updateQuantity:(id:string)=>set((state:any)=>({Bag:state.Bag.map((product:any)=>{
    if(product.id===id){
      return {...product,quantity:product.quantity+1}
    }else{
      return product
    }
  }),
 decreaseQuantity:(id:string)=>set((state:any)=>({Bag:state.Bag.map((Product:BagProduct)=>{
   if(Product.id==id&&Product.quantity!==1){
    return {...Product,quantity:Product.quantity-1}
   }else{
    return Product;
   }
 })}))
})),

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
));
type sing = {
   SingleProductVisiblity:boolean,
   setSingleProduct:(res:boolean)=>void;
}
// WORK ON THIS LATER
export const SingleProduct = create<sing>((set)=>({
  SingleProductVisiblity:false,
  setSingleProduct:(res:boolean)=>set(()=>({SingleProductVisiblity:res}))
}));
type  BagVisi = {
  bagVisiblity:boolean,
  showBag:()=>void,
  hideBag:()=>void,
}
export const BagVisiblity = create<BagVisi>((set)=>({
  bagVisiblity:false,
  showBag:()=>set(()=>({bagVisiblity:true})),
  hideBag:()=>set(()=>({bagVisiblity:false})),
}))
type ActivePage = {
  activePage:string,
  setActivePage:(res:string)=>void;
}
export const ActiveBagPage = create<ActivePage>((set)=>({
  activePage:"Bag",
  setActivePage:(res:string)=>set(()=>({activePage:res}))
}));
// export const 
export default myStore;


