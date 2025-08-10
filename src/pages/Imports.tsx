
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import AppLayout from "@/components/shared/AppLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Receipt, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import OFXImporter from "@/components/shared/OFXImporter";

const Imports = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedImport, setSelectedImport] = useState<string | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const importOptions = [
    {
      id: 'transactions',
      title: 'Transações',
      description: 'Importar transações bancárias via arquivo OFX',
      icon: Receipt,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const handleSelectImport = (importId: string) => {
    setSelectedImport(importId);
  };

  const handleBackToGrid = () => {
    setSelectedImport(null);
  };

  if (selectedImport === 'transactions') {
    return (
      <AppLayout>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleBackToGrid}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-1">Importar Transações</h1>
              <p className="text-muted-foreground">Importe suas transações bancárias via arquivo OFX</p>
            </div>
          </div>

          <div className="flex justify-center">
            <OFXImporter />
          </div>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">Importações</h1>
            <p className="text-muted-foreground">Importe dados de diferentes fontes para o sistema</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {importOptions.map((option) => {
            const IconComponent = option.icon;
            return (
              <Card 
                key={option.id}
                className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group border-2 hover:border-primary/20"
                onClick={() => handleSelectImport(option.id)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${option.color} text-white transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
};

export default Imports;
