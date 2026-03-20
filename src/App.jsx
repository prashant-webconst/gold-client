import {Routes, Route} from "react-router-dom";
import HomePage from "pages/Homepage";
import AdminLayout from "admin/AdminLayout";

function App() {
  return (
    <>
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminLayout />} />
    </Routes>
    </>
  );
}

export default App;
