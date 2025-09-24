import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { MenuItemList } from '@/components/menu/MenuItemList';
import { MenuSuggestions } from '@/components/menu/MenuSuggestions';
import { MenuCostAnalysis } from '@/components/menu/MenuCostAnalysis';
import { ChefHat, TrendingUp, AlertCircle, BarChart3, ArrowLeft, LogOut } from 'lucide-react';
import MobileNav from '@/components/ui/mobile-nav';
import { useAuth } from '@/hooks/useAuth';
import { useRestaurant } from '@/hooks/useRestaurant';

const MenuManagement = () => {
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
              <img src="src/assets/logo-foodflow-new.png" alt="FoodFlow Logo" className="h-7 w-11 sm:h-8 sm:w-13" />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-primary">
                  Gerenciamento de Cardápio
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Gestão de Cardápio</h2>
          <p className="text-muted-foreground leading-relaxed">
            Gerencie pratos, ingredientes e analise custos integrados ao inventário
          </p>
        </div>

        <Tabs defaultValue="items" className="space-y-6">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 h-auto">
            <TabsTrigger value="items" className="flex items-center gap-2 justify-center text-sm px-2 py-3">
              <ChefHat className="h-4 w-4 sm:h-4 sm:w-4" />
              <span className="whitespace-nowrap">Pratos</span>
            </TabsTrigger>
            <TabsTrigger value="suggestions" className="flex items-center gap-2 justify-center text-sm px-2 py-3">
              <AlertCircle className="h-4 w-4 sm:h-4 sm:w-4" />
              <span className="whitespace-nowrap">Sugestões</span>
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2 justify-center text-sm px-2 py-3">
              <BarChart3 className="h-4 w-4 sm:h-4 sm:w-4" />
              <span className="whitespace-nowrap sm:hidden">Custos</span>
              <span className="hidden sm:inline whitespace-nowrap">Análise de Custos</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="items">
            <Card>
              <CardHeader>
                <CardTitle>Pratos do Cardápio</CardTitle>
                <CardDescription>
                  Gerencie os pratos do seu cardápio e suas receitas com ingredientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MenuItemList />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suggestions">
            <Card>
              <CardHeader>
                <CardTitle>Sugestões Baseadas no Estoque</CardTitle>
                <CardDescription>
                  Recomendações automáticas para otimizar seu cardápio com base no inventário
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MenuSuggestions />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analysis">
            <Card>
              <CardHeader>
                <CardTitle>Análise de Custos</CardTitle>
                <CardDescription>
                  Analise a lucratividade e custos dos pratos baseados nos preços dos ingredientes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <MenuCostAnalysis />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default MenuManagement;