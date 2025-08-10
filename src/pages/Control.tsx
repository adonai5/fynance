
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import ControlForm from "@/components/control/ControlForm";
import ControlList from "@/components/control/ControlList";
import ControlStats from "@/components/control/ControlStats";

const Control = () => {
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
          <h1 className="text-2xl font-bold text-foreground mb-1">Controle</h1>
          <p className="text-muted-foreground">Gerencie e monitore suas finanças de forma detalhada</p>
        </div>
        
        <ControlForm />
      </div>
      
      <ControlStats />
      
      <ControlList />
    </div>
  );
};

export default Control;
