"use client"
import React, { useEffect, useState, memo } from 'react'
import Hero from './Hero'
import Navtocat from './Navtocat'
import Notification from './Notification'
import Shop from './shopComponents/Shop'
import globalStore from '../store/globalstore'
import Popupfiltercomponent from './Popupfiltercomponent'
import { AnimatePresence } from 'framer-motion'
import supabase from '@/utils/supabase'
import { useSearchParams } from 'next/navigation'
import Mobile from './Mobileheader'
import { useQuery } from '@tanstack/react-query'
import BagShop from './Bag'
import SearchComponent from './search/search'
import Lastpart from './footer/Lastpart'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Singleproduct from './singleProduct/Singleproduct'

function App() {
  const [showFilter, setFilterVisiblity] = useState(false);
  const [showBag, setBagVisibility] = useState<boolean>(false);
  const [showSearch, setSearchVisible] = useState<boolean>(false);
  const [activePage, setactivePage] = useState<string>('');
  const [showSingleproduct, setSingleproductvisibilty] = useState<boolean>(false);
  const [currentProduct, setcurrentProduct] = useState<currentProduct>({
    arrayofImages: ["s"],
    Name: "nube",
    color: "any",
    Price: 20,
    details: "yes",
    Tag: "yes",
    id: "sampleid",
    Amt_in_stock: 1
  })
  const searchParam = useSearchParams();
  const params = new URLSearchParams(searchParam);
  const availabilty = params.get('availability');
  const sortBy = params.get('sortBy');
  const fromPrice = params.get('fromPrice');
  const Underprice = params.get('Underprice');
  const ProductType = params.getAll("Product-type");


  const checkForAvailabilty = (): string => {
    if (availabilty && availabilty == "in-stock") {
      return "out-of-stock"
    } else return ""
  }
  const ApplyOrderByprice = (): string => {
    if (sortBy) {
      return "Price"
    } else return "created_at"
  };
  const ApplyfilterByprice = () => {
    if (!sortBy) {
      return { ascending: false }
    } else {
      if (sortBy == "hightolow") {
        return { ascending: false }
      } else if (sortBy == "lowtohigh") {
        return { ascending: true }
      }
    }
  }
  const checkGreaterPrice = (): Number => {
    if (fromPrice) {
      return Number(fromPrice)
    } else return 0
  }
  const checkLesserPrice = () => {
    if (Underprice) {
      return Number(Underprice)
    } else return 9000000000
  }
  const handleProductType = (): string[] => {
    if (ProductType.length !== 0) {
      return ProductType;
    } else return allDefaultProductTypes;
  }


  const allDefaultProductTypes = ["Earring", "Ring", "Bracelet", "Necklace"];
  const fetchproducts = async (): Promise<any> => {
    const { data, error } = await supabase.from('jewelries').select('*').neq("Tag", checkForAvailabilty()).order(ApplyOrderByprice(), ApplyfilterByprice()).gte("Price", checkGreaterPrice()).lte("Price", checkLesserPrice()).in("Category", handleProductType())
    return data;
  }
  const { isPending, error, data } = useQuery({
    queryKey: ['products', availabilty, sortBy, fromPrice, Underprice, ProductType],
    queryFn: () => fetchproducts(),
  });
  return (
    <globalStore.Provider value={{ isPending, setSingleproductvisibilty, setcurrentProduct, setSearchVisible, setFilterVisiblity, data, setBagVisibility, activePage, setactivePage }} >
      <div className={`appBody`}>
        <Mobile />
        <Hero />
        <Notification />
        <AnimatePresence>

        <Navtocat />

        <Shop key={"9034"} />
          {showFilter && <Popupfiltercomponent />}
          {showBag && <BagShop />}
          {showSearch && <SearchComponent />}
          {showSingleproduct && <Singleproduct Amt_in_stock={currentProduct.Amt_in_stock} id={currentProduct.id} Tag={currentProduct.Tag} details={currentProduct.details} color={currentProduct.color} Price={currentProduct.Price} arrayofImages={currentProduct.arrayofImages} Name={currentProduct.Name} />}
        </AnimatePresence>
        {!isPending && <Lastpart />}
        <Footer1 />
        <Footer2 />
      </div>
    </globalStore.Provider>
  )
}

export default App;
