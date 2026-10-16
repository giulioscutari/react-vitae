// import { useContext, createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExperienceDetail from './pages/ExperienceDetail.tsx';
import TechnologyDetail from './pages/TechnologyDetail.tsx';

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}


createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <Routes>
        <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/:experienceType/:experienceSlug" element={<ExperienceDetail />} />
            <Route path="/tech/:technologySlug" element={<TechnologyDetail />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </BrowserRouter>
);