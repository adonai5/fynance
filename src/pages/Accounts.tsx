
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import AccountList from "@/components/accounts/AccountList";
import AccountForm from "@/components/accounts/AccountForm";

const Accounts = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Contas</h1>
          <p className="text-muted-foreground">Gerencie suas contas bancárias e acompanhe seus saldos</p>
        </div>
        
        <AccountForm />
      </div>
      
      <AccountList />
    </div>
  );
};

export default Accounts;
