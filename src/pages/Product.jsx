import { useParams } from '@solidjs/router';
import { createResource, Show } from 'solid-js';
import { useCartContext } from '../context/CartContext'

const fetchProduct = async (id) => {
  const res = await fetch("https://fakestoreapi.com/products/" + id);
  return res.json();
};

function Product() {
  const params = useParams();
  const [product] = createResource(params.id, fetchProduct);
  const { items , setItems } = useCartContext();
function addProduct() {
  const exists = items.find(p => p.id === product().id);

  if (!exists) {
    setItems(prev => [...prev, product()]);
  }
}


  return (
    <div class="my-7 px-4 sm:px-6 lg:px-10">
      <Show when={product()} fallback={
        <div class="flex justify-center items-center h-64">
          <div class="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      }>
        <div class="grid gap-7 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5">

          <div class="col-span-3 lg:col-span-2 flex justify-center items-center">
            <img
              class="w-full max-w-[340px] h-[340px] object-contain"
              src={product().image}
              alt="product image"
            />
          </div>

          <div class="col-span-3 lg:col-span-3 flex flex-col justify-start">
            <h2 class="text-2xl sm:text-3xl font-bold mb-4 sm:mb-7">{product().title}</h2>
            <p class="text-sm sm:text-base mb-4">{product().description}</p>
            <p class="my-4 sm:my-7 text-xl sm:text-2xl font-semibold">Price: ${product().price}</p>
            <div class="flex items-center mb-4 text-xl sm:text-2xl">
              <span class="mr-2">{product().rating.rate}</span>
              <i class="fas fa-star text-yellow-500"></i>
              <span class="text-gray-500 text-sm sm:text-base ml-2">({product().rating.count} reviews)</span>
            </div>
            <button onClick={()=> addProduct()} class="btn px-4 py-2 sm:px-6 sm:py-3">
              Add to Cart
            </button>
          </div>

        </div>
      </Show>
    </div>
  );
}

export default Product;
