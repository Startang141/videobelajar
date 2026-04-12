import Login from "../features/login";
import Navbar from "../features/navbar";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar></Navbar>
        <Login></Login>
      </main>
    </div>
  );
}
