
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import BudgetList from "@/components/budgets/BudgetList";
import BudgetForm from "@/components/budgets/BudgetForm";
import BudgetAlert from "@/components/budgets/BudgetAlert";
import { useSupabaseData } from "@/hooks/useSupabaseData";

const Budgets = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const { data: budgets } = useSupabaseData('budgets', user?.id);
  const { data: categories } = useSupabaseData('categories', user?.id);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Orçamentos</h1>
          <p className="text-muted-foreground">Defina limites de gastos por categoria e acompanhe seu progresso</p>
        </div>
        
        <BudgetForm />
      </div>
      
      <BudgetAlert budgets={budgets} categories={categories} />
      
      <BudgetList />
    </div>
  );
};

export default Budgets;
