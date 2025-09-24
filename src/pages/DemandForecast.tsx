import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DemandAnalysis } from '@/components/demand/DemandAnalysis';
import { PurchasePredictions } from '@/components/demand/PurchasePredictions';
import { SubscriptionGuard } from '@/components/ui/subscription-guard';
import { 
  TrendingUp, 
  ShoppingCart, 
  BarChart3,
  Brain,
  ArrowLeft,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useRestaurant } from '@/hooks/useRestaurant';
import MobileNav from '@/components/ui/mobile-nav';

export default function DemandForecast() {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const { currentRestaurant } = useRestaurant();
  
  const features = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Análise Inteligente",
      description: "IA analisa padrões de consumo histórico para prever demanda futura"
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Tendências de Mercado",
      description: "Identifica produtos em alta ou baixa para otimizar estoque"
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "Compras Inteligentes",
      description: "Recomendações de quando e quanto comprar de cada produto"
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Previsões Precisas",
      description: "Evite faltas e excessos com previsões baseadas em dados reais"
    }
  ];

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
              <img src="src/assets/logo-foodflow-new.png" alt="FoodFlow Logo" className="h-7 w-11 sm:h-8 sm:w-13" />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-primary">
                  Previsão de Demanda
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
        <SubscriptionGuard 
          requiredPlan="professional" 
          feature="Análise e Previsão de Demanda"
        >
          <div className="space-y-6 sm:space-y-8">
            {/* Header */}
            <div className="text-center sm:text-left space-y-4">
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
                Análise e Previsão de Demanda
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto sm:mx-0">
                Use inteligência artificial para prever a demanda de produtos e otimizar suas compras, 
                evitando faltas de estoque e reduzindo desperdícios.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 p-2 bg-primary/10 rounded-lg w-fit">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-base sm:text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Content */}
            <Tabs defaultValue="analysis" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 h-auto">
                <TabsTrigger value="analysis" className="flex items-center space-x-2 text-sm px-2 py-3">
                  <BarChart3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Análise de Demanda</span>
                  <span className="sm:hidden">Análise</span>
                </TabsTrigger>
                <TabsTrigger value="predictions" className="flex items-center space-x-2 text-sm px-2 py-3">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="hidden sm:inline">Previsões de Compra</span>
                  <span className="sm:hidden">Previsões</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="analysis" className="space-y-6">
                <DemandAnalysis />
              </TabsContent>

              <TabsContent value="predictions" className="space-y-6">
                <PurchasePredictions />
              </TabsContent>
            </Tabs>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Brain className="h-5 w-5" />
                    <span>Como Funciona</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium shrink-0">1</div>
                    <div>
                      <p className="font-medium text-sm">Coleta de Dados</p>
                      <p className="text-xs text-muted-foreground">Analisa o histórico de consumo dos últimos 90 dias</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium shrink-0">2</div>
                    <div>
                      <p className="font-medium text-sm">Análise de Padrões</p>
                      <p className="text-xs text-muted-foreground">Identifica tendências e sazonalidades</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-medium shrink-0">3</div>
                    <div>
                      <p className="font-medium text-sm">Previsões Inteligentes</p>
                      <p className="text-xs text-muted-foreground">Gera recomendações personalizadas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <TrendingUp className="h-5 w-5" />
                    <span>Benefícios</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
                    <p className="text-sm">Redução de até 30% nos custos de estoque</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0"></div>
                    <p className="text-sm">Evita faltas de produtos populares</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-purple-500 shrink-0"></div>
                    <p className="text-sm">Otimiza o fluxo de caixa</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-orange-500 shrink-0"></div>
                    <p className="text-sm">Melhora a satisfação dos clientes</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SubscriptionGuard>
      </main>
    </div>
  );
}