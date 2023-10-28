import Image from 'next/image'
import Link from 'next/link';
import ProductCard from './components/ProductCard/ProductCard';

export default function Home() {
  // folosind Link si nu a tag. Pentru ca daca folosim a, pagina se va reincarca
  // folosind Link vom avea doar requesturile ce vor aduce contentul paginii la care vrem sa ajungem
  // Static rendering = render at build time. When we have static pages, we can build them once, at build time
  return (
    <main>
      <h1>Hello world</h1>
      <Link href={`/users`}>To users list</Link>
      <ProductCard/>
    </main>
  );
}
