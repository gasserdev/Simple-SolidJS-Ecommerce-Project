import { Suspense, createSignal } from 'solid-js';
import { A } from '@solidjs/router';

const App = (props) => {
  const [open, setOpen] = createSignal(false);

  return (
    <div class="container mx-auto p-4">
      <header class="flex m-5 items-center justify-between mb-6">

        {/* Logo */}
        <A
          href="/"
          class="flex items-center gap-2 text-2xl font-bold hover:text-indigo-500 transition"
        >
          <span>Discord Store</span>
          <i class="fa-brands fa-discord text-indigo-500"></i>
        </A>

        {/* Desktop Nav */}
        <nav class="hidden md:flex gap-6 text-lg">
          <A href="/" class="hover:text-indigo-500 transition flex items-center gap-1">
            <i class="fa-solid fa-house"></i> Home
          </A>
          <A href="/cart" class="hover:text-indigo-500 transition flex items-center gap-1">
            <i class="fa-solid fa-cart-shopping"></i> Cart
          </A>
        </nav>

        {/* Mobile Button */}
        <button
          class="md:hidden text-2xl"
          onClick={() => setOpen(!open())}
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </header>

      {/* Mobile Menu */}
      {open() && (
        <div class="md:hidden mb-6 bg-white border rounded-lg shadow p-4 flex flex-col gap-4">
          <A
            href="/"
            class="hover:text-indigo-500"
            onClick={() => setOpen(false)}
          >
            Home
          </A>

          <A
            href="/cart"
            class="hover:text-indigo-500"
            onClick={() => setOpen(false)}
          >
            Cart
          </A>
        </div>
      )}

      <main>
        <Suspense
          fallback={
            <div class="flex justify-center items-center h-64">
              <div class="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          {props.children}
        </Suspense>
      </main>
    </div>
  );
};

export default App;
