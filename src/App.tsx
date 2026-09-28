import Content from "./components/Content";
import { Routes, Route, Navigate } from "react-router";
import DetailFilm from "./pages/DetailFilm";

function App() {
  return (
    <>
      {/* routes */}
      <Routes>
        {/* route navigate from / to /discover */}
        < Route path="/" element={ <Navigate to={"/discover"}></Navigate> } />

        {/* route /discover */}
        <Route  path="/discover" element={< Content/>}></Route>

        {/* route detail films */}
        <Route  path="/discover/:media_type/:id" element={< DetailFilm /> }></Route>
      </Routes>
    </>
  );
}

export default App;
