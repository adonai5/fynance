
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
import AccountsAndDebts from "./pages/AccountsAndDebts";
import Cards from "./pages/Cards";
import Control from "./pages/Control";
import Budgets from "./pages/Budgets";
import Goals from "./pages/Goals";
import Reports from "./pages/Reports";
import Imports from "./pages/Imports";
import Calendar from "./pages/Calendar";
import AIAssistant from "./pages/AIAssistant";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import TagsDashboard from "./pages/TagsDashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <AuthProvider>
            <Toaster />
            <Sonner />
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              
              {/* Protected Routes with Layout */}
              <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
              <Route path="/transacoes" element={<Layout><Transactions /></Layout>} />
              <Route path="/contas-dividas" element={<Layout><AccountsAndDebts /></Layout>} />
              <Route path="/cartoes" element={<Layout><Cards /></Layout>} />
              <Route path="/contas" element={<Layout><Accounts /></Layout>} />
              <Route path="/controle" element={<Layout><Control /></Layout>} />
              <Route path="/orcamentos" element={<Layout><Budgets /></Layout>} />
              <Route path="/metas" element={<Layout><Goals /></Layout>} />
              <Route path="/relatorios" element={<Layout><Reports /></Layout>} />
              <Route path="/importacoes" element={<Layout><Imports /></Layout>} />
              <Route path="/calendario" element={<Layout><Calendar /></Layout>} />
              <Route path="/assistente-ia" element={<Layout><AIAssistant /></Layout>} />
              <Route path="/configuracoes" element={<Layout><Settings /></Layout>} />
              <Route path="/ajuda" element={<Layout><Help /></Layout>} />
              <Route path="/tags" element={<Layout><TagsDashboard /></Layout>} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
