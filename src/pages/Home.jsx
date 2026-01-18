import Card from '../components/Card';
import { createResource, Show, For } from 'solid-js';
import { A } from '@solidjs/router';
import banner from '../assets/banner.PNG';

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}

function Home() {
  const [products] = createResource(fetchProducts);

  return (
    <>
      <img
          src={banner}
          class="w-full   h-[210px] object-cover rounded-md mb-6"
          alt="site banner"
        />
      <Show
        when={products()}
        fallback={
          <div class="flex justify-center items-center h-64">
            <div class="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
      <div class="grid gap-8 my-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <For each={products()}>
          {(product) => (
            <Card class="flex flex-col items-center justify-between text-center p-4 bg-white rounded-xl shadow-lg 
                         transition-transform transition-shadow duration-300 
                         hover:shadow-2xl hover:-translate-y-2">
              <img
                src={product.image}
                alt={product.title}
                class="h-52 w-full object-contain mb-4"
              />
              <h2 class="font-semibold text-sm md:text-base mb-2 line-clamp-2">{product.title}</h2>
              <p class="text-indigo-600 font-bold text-lg">${product.price}</p>
              <A href={"/product/" + product.id} class="btn mt-2">View Product</A>
            </Card>

          )}
        </For>
      </div>
    </Show>
    </>
  );
}

export default Home;
