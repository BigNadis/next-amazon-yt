import Banner from "@/src/components/Banner";
import Products from "@/src/components/Products";
import { ProductProps } from "../type";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setAllProducts } from "@/src/store/nextSlice";

interface Props {
  productData: ProductProps;
}

export default function Home({ productData }: Props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAllProducts({ allProducts: productData }));
  }, [productData]);
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} /> 
        </div>
      </div>
    </main>
  );
}

// SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData }};
};
