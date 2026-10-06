import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Home from "./pages/Home";
import Posts from "./pages/post/Posts";
import CreatePost from "./pages/post/CreatePost";
import UpdatePost from "./pages/post/UpdatePost";
import PostDetails from "./pages/post/PostDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { ToastContainer } from "react-toastify";
import Help from "./pages/auth/Help";
import CreateCateogry from "./pages/category/CreateCateogry";
import DeleteCategory from "./pages/category/DeleteCategory";
import CategoryList from "./pages/category/CategoryList";
import PageNotFound from "./pages/PageNotFound";
import GameList from "./pages/GameList";
import PostDelete from "./pages/post/PostDelete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/posts" element={<Posts />} />

          <Route path="/posts/create" element={<CreatePost />} />

          <Route path="/posts/:id" element={<PostDetails />} />

          <Route path="/posts/:id/update" element={<UpdatePost />} />
          <Route path="/posts/:id/delete" element={<PostDelete/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/categorycreate" element={<CreateCateogry/>}/>
          <Route path="/categorydelete" element={<DeleteCategory/>}/>
         
          <Route path="/categorylist" element={<CategoryList/>}/>
          <Route path="/games" element={<GameList/>} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
