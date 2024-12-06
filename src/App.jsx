import "./App.css";
import Footer from "./componets/Footer";
import Header from "./componets/Header";

function App() {
  return (
    <main className="flex justify-center gap-4 flex-col min-h-screen">
      <Header />
      <h1 className="text-3xl text-center font-bold underline">
        React & Tailwind CSS Starter Pack
      </h1>
      <p className="text-center text-xl">
        This is a starter pack for React & Tailwind CSS projects.
      </p>
      <img src="https://bit.ly/3wsmzTy" alt="meme" className="mx-auto" />
      <Footer />
    </main>
  );
}

export default App;
