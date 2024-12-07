import "./App.css";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import AuthorPage from "./pages/AuthorPage";
import Category from "./pages/Category";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <main className="">
      <Header />
      {/* <Category /> */}
      <AuthorPage />
      <Footer />
    </main>
  );
}

function ExampleComponent() {
  return (
    <div className="bg-primary text-whitePrimary p-6">
      <h1 className="font-heading text-yellowAccent text-3xl">
        Welcome to My Project
      </h1>
      <p className="font-body text-grayLight mt-2">
        This project follows a unified design system with a predefined color
        palette and typography.
      </p>
    </div>
  );
}

export default App;
