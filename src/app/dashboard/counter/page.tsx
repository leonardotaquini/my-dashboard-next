import { CartCounter } from "@/app/shoping-cart/components/CartCounter";

export const metadata = {
 title: 'Shopping Cart',
 description: 'Este es un simple contador',
};

export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>
      <CartCounter  />
    </div>
  );
}
