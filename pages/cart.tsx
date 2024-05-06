import React from 'react';
import { StateProps, StoreProduct } from "../type";
import { useSelector } from "react-redux";
import CartProduct from '../src/components/CartProduct';
import ResetCart from '@/src/components/ResetCart';
import CartPayment from '@/src/components/CartPayment';
import Link from 'next/link';

const CartPage = () => {
 const { productData } = useSelector((state: StateProps) => state.next);
 return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          {productData.length > 0 ? (
          <>
            <div className='bg-white col-span-full sm:col-span-4 p-4 rounded-lg'>
                <div className='flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1'>
                  <p className='text-2x1 font-semibold text-amazon_blue'>
                    Shopping Cart
                  </p>
                  <p className='text-lg font-semibold text-amazon_blue'>Subtitle</p>
                </div>
                <div className='pt-2 flex flex-col gap-2'>
                  {productData.map((item: StoreProduct) => (
                    <div key={item._id} className='pt-2 flex flex-col gap-2'>
                    <CartProduct item={item} />
                    </div>
                  ))}
                  <ResetCart />
                </div>
              </div>
              <div className='col-md-4'>
                <CartPayment />
              </div>
            </>
          ):(
          <div className='bg-white h-64 col-span-full flex flex-col items-center justify-center py-5 rounded-lg shadow-lg'>
            <h1 className='text-lg font-medium'>Your cart is empty</h1>
            <Link href={"/"}>
              <button className='w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black'>go to shopping</button>
            </Link>
        </div>
      )}  
      </div>
      </div>
    </div>
 );
};

export default CartPage;