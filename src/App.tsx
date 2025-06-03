
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Rooms from "./pages/Rooms";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Amenities from "./pages/Amenities";
import Continental from "./pages/Continental";
import Dinner from "./pages/Dinner";
import Lunch from "./pages/Lunch";
import Refreshment from "./pages/Refreshment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/continental" element={<Continental />} />
          <Route path="/dinner" element={<Dinner />} />
          <Route path="/lunch" element={<Lunch />} />
          <Route path="/refreshment" element={<Refreshment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
