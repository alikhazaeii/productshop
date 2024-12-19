
import "./globals.css"
import  Video  from "@/components/video";
import ProductShop from "@/app/product/page";


import React from 'react'
import ProdoctShop from "./product/page";

export default function page() {
  return (
    <section className="w-full">
      <Video/>
      <ProductShop/>
    </section>
  )
}


