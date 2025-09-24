import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2, BarChart3, History, AlertTriangle, ArrowLeft, LogOut } from 'lucide-react';
import WasteTrackingForm from '@/components/waste/WasteTrackingForm';
import WasteReports from '@/components/waste/WasteReports';
import WasteHistory from '@/components/waste/WasteHistory';
import { useWasteTracking } from '@/hooks/useWasteTracking';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useRestaurant } from '@/hooks/useRestaurant';
import MobileNav from '@/components/ui/mobile-nav';

const WasteManagement = () => {
  const { statistics, suggestions } = useWasteTracking();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { currentRestaurant } = useRestaurant();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-mobile mx-auto py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MobileNav />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="hidden sm:flex items-center space-x-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Voltar</span>
            </Button>
            <div className="flex items-center space-x-3">
              <Trash2 className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-primary">
                  Controle de Desperdício
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {currentRestaurant?.name || 'Sistema de Gestão'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={signOut}
              className="hidden md:flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Sair</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container-mobile mx-auto py-6 sm:py-8">
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Gestão de Desperdício</h2>
          <p className="text-muted-foreground leading-relaxed">
            Monitore e reduza o desperdício de ingredientes para otimizar custos e sustentabilidade.
          </p>
          
          {/* Alertas de Resumo */}
          {statistics && (
            <div className="flex gap-4 mt-4 flex-wrap">
              {statistics.total_waste_cost > 0 && (
                <Badge variant="destructive" className="text-sm">
                  Desperdício este mês: R$ {statistics.total_waste_cost.toFixed(2)}
                </Badge>
              )}
              {suggestions.length > 0 && (
                <Badge variant="default" className="text-sm">
                  {suggestions.length} sugestões de melhoria
                </Badge>
              )}
            </div>
          )}
        </div>

        <Tabs defaultValue="register" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto">
            <TabsTrigger value="register" className="flex items-center gap-2 text-sm px-2 py-3">
              <Trash2 className="h-4 w-4" />
              <span>Registrar</span>
            </TabsTrigger>
            <TabsTrigger value="reports" className="flex items-center gap-2 text-sm px-2 py-3">
              <BarChart3 className="h-4 w-4" />
              <span>Relatórios</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2 text-sm px-2 py-3">
              <History className="h-4 w-4" />
              <span>Histórico</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="register">
            <WasteTrackingForm />
          </TabsContent>

          <TabsContent value="reports">
            <WasteReports />
          </TabsContent>

          <TabsContent value="history">
            <WasteHistory />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default WasteManagement;