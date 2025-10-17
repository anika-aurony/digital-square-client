import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import DataSolution from "../pages/DataAndFttxSolution/DataSolution/DataSolution";
import FttxSolution from "../pages/DataAndFttxSolution/FttxSolution/FttxSolution";
// import ProductHome from "../pages/ProductAndSolution/ProductHome/ProductHome";
import ProductHomeLayout from "../Layout/ProductHomeLayout";
import PonModule from "../pages/ProductAndSolution/PonModule/PonModule";
import SfpModule from "../pages/ProductAndSolution/SfpModule/SfpModule";
import Splice from "../pages/ProductAndSolution/Splice/Splice";
import PatchCord from "../pages/ProductAndSolution/PatchCord/PatchCord";
import Cleaver from "../pages/ProductAndSolution/Cleaver/Cleaver";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import AboutUs from "../pages/AboutUS/AboutUs";
import ProductAll from "../pages/ProductAndSolution/ProductAll/ProductAll";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import AddProduct from "../pages/AdminPages/AddProduct/AddProduct";
import ShowProductsInTable from "../pages/AdminPages/ShowProductsInTable/ShowProductsInTable";
import BulkSMSHome from "../pages/BulkSMS/BulkSMSHome";
import ONU from "../pages/ProductAndSolution/ONU/ONU";
import PrivateRoute from "../router/PrivateRoute";
import ContactUs from "../pages/ContactUs/ContactUs";
import OTDR from "../pages/ProductAndSolution/OTDR/OTDR";
// import ProductHome from "../pages/ProductAndSolution/ProductHome/ProductHome";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/datasolution',
        element: <DataSolution></DataSolution>
      },
      {
        path: '/fttxsolution',
        element: <FttxSolution></FttxSolution>
      },
      {
        path: "/products/:id",
        element: <SingleProduct></SingleProduct>
      },
      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/showProductsAdmin',
        element: <PrivateRoute><ShowProductsInTable></ShowProductsInTable></PrivateRoute>
      },
      {
        path: '/bulkSMS',
        element: <BulkSMSHome></BulkSMSHome>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/bulkSMS',
        element: <BulkSMSHome></BulkSMSHome>
      },
    ]
  },
  {
    path:"products",
    element: <ProductHomeLayout></ProductHomeLayout>,
    children:[
      {
        path: "productHome",
        element: <ProductAll></ProductAll>
      },
      {
        path: "pon",
        element: <PonModule></PonModule>
      },
      {
        path: "onu",
        element: <ONU></ONU>
      },
      {
        path: "sfp",
        element: <SfpModule></SfpModule>
      },
      {
        path: "splice",
        element: <Splice></Splice>
      },
      {
        path: "patchcord",
        element: <PatchCord></PatchCord>
      },
      {
        path: "otdr",
        element: <OTDR></OTDR>
      },
      {
        path: "cleaver",
        element: <Cleaver></Cleaver>
      },
    ]
  }  
]);