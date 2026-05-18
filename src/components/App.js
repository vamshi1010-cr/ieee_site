import HomePage from "./HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PageNotFound from "./PageNotFound";
import ComputerSociety from "./ComputerSociety";
import SignalProcessingSociety from "./SignalProcessingSociety";
import CircuitsAndSystemsSociety from "./CircuitsAndSystemsSociety";
import RoboticsAutomationSociety from "./RoboticsAutomationSociety";
import WomenEngineeringSociety from "./WomenEngineeringSociety";
import EducationSociety from "./EducationSociety";
import PowerEnergySociety from "./PowerEnergySociety";
import VehicularTechnologySociety from "./VehicularTechnologySociety";
import EventsPage from "./EventsPage";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CreateEventForm from "../features/events/CreateEventForm";
import LoginForm from "../features/authentication/loginForm";
import ProtectedRoute from "./ProtectedRoute";

import ScrollToTop from "./ScrollToTop";

import Navbar from "./Navbar/Navbar";   // ← ADD THIS

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Navbar />                        {/* ← ADD THIS */}
        
        <ScrollToTop />
        <main>   {/* ← WRAP routes in this */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="computer-society" element={<ComputerSociety />} />
            <Route path="signal-processing-society" element={<SignalProcessingSociety />} />
            <Route path="circuits-systems-society" element={<CircuitsAndSystemsSociety />} />
            <Route path="robotics-automation-society" element={<RoboticsAutomationSociety />} />
            <Route path="women-engineering-society" element={<WomenEngineeringSociety />} />
            <Route path="vehicular-technology-society" element={<VehicularTechnologySociety />} />
            <Route path="education-society" element={<EducationSociety />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="power-energy-society" element={<PowerEnergySociety />} />
            <Route path="events/:id" element={<EventsPage />} />
            <Route
              path="add-event"
              element={
                <ProtectedRoute>
                  <CreateEventForm />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>                           {/* ← CLOSE main here */}
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastoptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;