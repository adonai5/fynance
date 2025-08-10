
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, CreditCard, PiggyBank } from "lucide-react";
import OFXImporter from "@/components/shared/OFXImporter";

const importOptions = [
  {
    id: "transactions",
    title: "Transações",
    description: "Importar transações via arquivo OFX",
    icon: FileText,
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "cards",
    title: "Cartões",
    description: "Importar dados de cartões de crédito",
    icon: CreditCard,
    color: "from-green-500 to-green-600",
    disabled: true
  },
  {
    id: "investments",
    title: "Investimentos",
    description: "Importar dados de investimentos",
    icon: PiggyBank,
    color: "from-purple-500 to-purple-600",
    disabled: true
  }
];

const Imports = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedImport, setSelectedImport] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleImportSelect = (importId: string) => {
    setSelectedImport(importId);
  };

  const handleBackToOptions = () => {
    setSelectedImport(null);
  };

  if (selectedImport === "transactions") {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToOptions}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2"
          >
            ← Voltar para importações
          </button>
        </div>
        
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-1">Importar Transações</h1>
          <p className="text-muted-foreground">Importe suas transações através de arquivos OFX</p>
        </div>
        
        <OFXImporter />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-1">Importações</h1>
        <p className="text-muted-foreground">Importe dados de diferentes fontes para o seu sistema financeiro</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {importOptions.map((option) => (
          <Card
            key={option.id}
            className={`cursor-pointer transition-all duration-200 hover:shadow-lg border ${
              option.disabled 
                ? 'opacity-50 cursor-not-allowed bg-muted/50' 
                : 'hover:border-primary/50 hover:shadow-primary/10'
            }`}
            onClick={() => !option.disabled && handleImportSelect(option.id)}
          >
            <CardHeader className="text-center pb-2">
              <div className={`mx-auto w-12 h-12 rounded-lg bg-gradient-to-r ${option.color} flex items-center justify-center mb-4 ${
                option.disabled ? 'grayscale' : ''
              }`}>
                <option.icon className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-lg">{option.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pt-0">
              <CardDescription className="text-sm">
                {option.description}
                {option.disabled && (
                  <span className="block text-xs text-muted-foreground mt-2 italic">
                    Em breve
                  </span>
                )}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Imports;
