import React from 'react';
import Image from 'next/image';
import FormattedPrice from './FormattedPrice';
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from "react-redux";
import { decreaseQuantity, deleteProduct, increaseQuantity } from '../store/nextSlice';

interface Item {
    brand: string;
    category: string;
    description: string;
    image: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    title: string;
    _id: number;
    quantity: number;
}

interface CartProductsProps {
    item: Item;
}

const CartProduct = ({ item }: CartProductsProps) => {
 const dispatch = useDispatch();
 return (
    <div className='bg-gray-100 rounded-lg flex flex-col md:flex-row items-center gap-4 p-4'>
      <Image className='object-cover w-full md:w-auto' width={150} height={150} src={item.image} alt="productImage" />
      <div className='flex flex-col gap-1 w-full'>
        <p className='text-lg font-semibold text-amazon_blue'>{item.title}</p>
        <p className='text-sm text-gray-600'>{item.description}</p>
        <p className='text-sm text-gray-600'>
          Unit Price{" "}
          <span className='font-semibold text-amazon_blue'>
            <FormattedPrice amount={item.price} />
          </span>
        </p>
        <div className='flex items-center gap-6 mt-2'>
          <button
            onClick={() => dispatch(increaseQuantity({ _id: item._id, quantity: 1 }))}
            className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer'
          >
            <LuPlus />
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => dispatch(decreaseQuantity({ _id: item._id, quantity: 1 }))}
            className='w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer'
          >
            <LuMinus />
          </button>
        </div>
        <div
          onClick={() => dispatch(deleteProduct(item._id))}
          className='flex items-center text-sm font-medium text-gray-400 hover:text-red-600 cursor-pointer duration-300 mt-2'
        >
          <IoMdClose className='mt-[2px]' /> <p>remove</p>
        </div>
      </div>
      <div className='text-lg font-semibold text-amazon_blue mt-4 md:mt-0'>
        <FormattedPrice amount={item.price * item.quantity} />
      </div>
    </div>
 );
};

export default CartProduct;