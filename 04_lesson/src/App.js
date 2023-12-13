import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import SinglePostPage from "./features/posts/SinglePostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<PostsList />}/>

        <Route path="post">
          <Route index element={<AddPostForm />}/>
          <Route path=":postId" element={<SinglePostPage />}/>
        </Route>

      </Route>
    </Routes>

  );
}

export default App;
