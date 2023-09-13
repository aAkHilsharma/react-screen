import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="h-full">
      <Header />
      <Sidebar>
        <main className="w-full h-full col-span-4">
          <Banner />
          <Profile />
        </main>
      </Sidebar>
    </div>
  );
}

export default App;
