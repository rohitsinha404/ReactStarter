import "./App.css";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <main className="flex justify-center gap-4 flex-col min-h-screen">
      <Header />

      <ContactPage />
      <ExampleComponent />

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
