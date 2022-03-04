import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/Global/Common/NavBar";

function App() {
  return (
    <>
      <AppRoutes>
        <NavBar />
      </AppRoutes>
    </>
  );
}

export default App;
