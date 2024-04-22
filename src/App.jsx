import "./App.css";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  NavLink,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TetaZita from "./components/TetaZita";
import User from "./components/User";
import { zitosVeikla } from "./data/activityData";
import Activity from "./components/Activity";
import Roots from "./components/Roots";
import { dataLoader } from "./services/fetchImg";
import Gallery from "./components/Gallery";

// const users = [
//   { id: 1, name: "Jonas" },
//   { id: 2, name: "Petras" },
//   { id: 3, name: "Zita" },
// ];

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Roots zitosVeikla={zitosVeikla} />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} loader={dataLoader} />
        <Route path="zita" element={<TetaZita zitosVeikla={zitosVeikla} />}>
          <Route path=":id" element={<TetaZita zitosVeikla={zitosVeikla} />} />
        </Route>
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Link to="/">Home</Link>
    //   {"    "}
    //   <Link to="/about">About</Link>
    //   {"    "}
    //   <NavLink
    //     to="/zita"
    //     className={({ isActive }) => (isActive ? "active" : "")}
    //   >
    //     zita
    //   </NavLink>
    //   <br />
    //   {users.map((user) => (
    //     <Link to={`/users/${user.id}`} key={user.id}>
    //       {user.name}
    //       <br />
    //     </Link>
    //   ))}
    //   <br />
    //   {zitosVeikla.map((veikla) => (
    //     <Link to={`/zitosVeiklos/${veikla.id}`} key={veikla.id}>
    //       {veikla.veikla}
    //       <br />
    //     </Link>
    //   ))}

    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/zita" element={<TetaZita />} />
    //     <Route path="/users/:id" element={<User users={users} />} />
    //     <Route
    //       path="/zitosVeiklos/:id"
    //       element={<Activity veiklos={zitosVeikla} />}
    //     />
    //     <Route path="*" element={<h1>404 page not found</h1>} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
