import React, { Suspense } from 'react'
import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import CakeView from './features/cake/CakeView';
import IcedCreamView from './features/icedcream/IcedCreamView';
import UserView from './features/user/UserView';
import AuthorView from './features/author/AuthorView';
import ItemlistView from './features/item/ItemlistView';

const router = createBrowserRouter([
    { path: '/', element: <ItemlistView/> },
]);

function App() {
  return (
    <>
      <Suspense fallback={<div>...loading</div>}>
        {/* <AuthorView/>
        <CakeView></CakeView>
        <IcedCreamView></IcedCreamView>
        <UserView></UserView> */}
        <RouterProvider router={router} />
      </Suspense>
    </>
  )
}
export default App;

