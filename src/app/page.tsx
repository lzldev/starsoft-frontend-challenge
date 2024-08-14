import { Products } from "./(products)/Products";
import { Navbar } from "./components/Navbar";
import { Rights } from "./components/Rights";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Navbar />
      <Products />
      <Rights />
    </main>
  );
}
