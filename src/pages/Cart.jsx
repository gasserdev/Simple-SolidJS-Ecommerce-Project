import Card from '../components/Card';
import { useCartContext } from '../context/CartContext'
import { For, Show } from 'solid-js';

function Cart() {
  const { items, setItems } = useCartContext();
  function removeItem(id) {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <div class="max-w-3xl mx-auto my-10 px-4">
      <Card>
        <h2 class="text-2xl font-bold mb-6 text-center text-indigo-600">
          Your Shopping Cart
        </h2>

        <Show
          when={items.length > 0}
          fallback={
            <p class="text-center text-gray-500">
              Your cart is empty
            </p>
          }
        >
          <div class="flex flex-col gap-4">
            <For each={items}>
              {(item) => (
                <div class="flex items-center gap-4 border border-indigo-200 rounded-lg p-4 shadow-sm hover:shadow-md transition">

                  <img
                    src={item.image}
                    alt={item.title}
                    class="w-20 h-20 object-contain"
                  />

                  <div class="flex-1">
                    <h3 class="font-semibold text-sm mb-1 text-gray-800">
                      {item.title}
                    </h3>
                    <p class="text-indigo-600 font-medium">
                      ${item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    class="text-sm text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition"
                  >
                    Remove
                  </button>

                </div>
              )}
            </For>
          </div>
        </Show>
      </Card>
    </div>
  );
}

export default Cart;
