import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import "./index.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import User from "./components/User/User.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,

//     errorElement: (
//       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//         <h1 className="text-4xl font-bold text-red-600">404</h1>
//         <p className="text-xl text-gray-700">
//           Oops! The page you are looking for does not exist.
//         </p>
//         <a href="/" className="mt-4 text-orange-600 hover:underline">
//           Go back Home
//         </a>
//       </div>
//     ),
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },

//       {
//         path: "about",
//         element: <About />,
//       },

//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
       <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
         <Route path='user/:userid' element={<User />} />
      {/* Other routes go here */}
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
