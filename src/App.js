import { Route, Routes } from "react-router-dom";
import Register from "./component/Register";
import LogIn from "./component/LogIn";
import Home from "./component/Home";
import Layout from "./component/Layout";
import Editor from "./component/Editor";
import Admin from "./component/Admin";
import Missing from "./component/Missing";
import Unauthorized from "./component/Unauthorized";
import Lounge from "./component/Lounge";
import LinkPage from "./component/LinkPage";
import RequireAuth from "./component/RequireAuth";
import { AuthProvider } from "./context/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* public routes */}
          <Route path="/" element={<LinkPage />} />
          <Route path="login" element={<LogIn />} />
          <Route path="register" element={<Register />} />
          <Route path="unauthorized" element={<Unauthorized />} />

          {/* protected routes */}
          <Route element={<RequireAuth />}>
            <Route path="home" element={<Home />} />
            {/* Home route is now protected */}
            <Route path="editor" element={<Editor />} />
            <Route path="admin" element={<Admin />} />
            <Route path="lounge" element={<Lounge />} />
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
