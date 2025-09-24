import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useRestaurant } from '@/hooks/useRestaurant';
import { useSubscription } from '@/hooks/useSubscription';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, LogOut, Users, ChefHat, Package, BarChart3, Settings, DollarSign, Building2, MenuIcon, Network, Shield, TrendingUp, HelpCircle } from 'lucide-react';
import MobileNav from '@/components/ui/mobile-nav';
import SimpleCard from '@/components/ui/simple-card';
import LoadingScreen from '@/components/ui/loading-screen';
import { SubscriptionStatus } from '@/components/ui/subscription-status';
import Landing from './Landing';

const Index = () => {
  console.log("🚀 Index.tsx: Componente Index renderizado");
  
  const navigate = useNavigate();
  const { user, signOut, loading } = useAuth();
  const { currentRestaurant, userRole, loading: restaurantLoading } = useRestaurant();
  const { subscriptionStatus } = useSubscription();
  
  console.log("🚀 Index.tsx: Estados:", { 
    userLogged: !!user, 
    loading, 
    restaurantLoading, 
    hasRestaurant: !!currentRestaurant,
    userRole 
  });

  useEffect(() => {
    if (!loading && !user) {
      // Show landing page for unauthenticated users
      return;
    }
  }, [user, loading, navigate]);

  const getRoleBadgeVariant = (role: string | null) => {
    switch (role) {
      case 'admin': return 'default';
      case 'manager': return 'secondary';
      case 'chef': return 'outline';
      case 'inventory': return 'outline';
      case 'staff': return 'outline';
      default: return 'outline';
    }
  };

  const getRoleDisplayName = (role: string | null) => {
    switch (role) {
      case 'admin': return 'Administrador';
      case 'manager': return 'Gerente';
      case 'chef': return 'Chef';
      case 'inventory': return 'Estoque';
      case 'staff': return 'Funcionário';
      default: return 'Sem Role';
    }
  };

  if (loading || restaurantLoading) {
    return <LoadingScreen message="Carregando seu dashboard..." />;
  }

  if (!user) {
    return <Landing />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container-mobile mx-auto py-3 sm:py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MobileNav />
            <div className="flex items-center space-x-3">
              <img src="src/assets/logo-foodflow-new.png" alt="Logo" className="h-20 w-20 sm:h-24 sm:w-24" />
              <div className="hidden sm:block">
                <p className="text-sm text-muted-foreground">Sistema de Gestão</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="hidden lg:block">
              <SubscriptionStatus compact />
            </div>
            <div className="hidden md:block text-right">
              <div className="flex items-center space-x-2">
                <p className="text-sm font-medium">Bem-vindo!</p>
                {userRole && (
                  <Badge variant={getRoleBadgeVariant(userRole)} className="text-xs">
                    {getRoleDisplayName(userRole)}
                  </Badge>
                )}
              </div>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
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
        {!currentRestaurant ? (
          // No restaurant setup
          <div className="text-center py-12 px-4">
            <ChefHat className="h-14 w-14 sm:h-16 sm:w-16 text-muted-foreground mx-auto mb-6" />
            <h2 className="text-xl sm:text-2xl font-bold mb-3">Configure seu Restaurante</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto leading-relaxed">
              Para começar a usar o sistema, você precisa configurar seu restaurante
            </p>
            <Button 
              onClick={() => navigate('/restaurant-setup')}
              className="btn-mobile"
            >
              Configurar Restaurante
            </Button>
          </div>
        ) : (
          <>
            <div className="mb-6 sm:mb-8 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Dashboard</h2>
              <p className="text-muted-foreground leading-relaxed">
                Gerencie todos os aspectos do seu restaurante em um só lugar
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <SimpleCard
                icon={Users}
                title="Gestão de Usuários"
                description="Gerencie funcionários e permissões"
                details="Controle de acesso para diferentes perfis: admin, gerente, chef, funcionário do estoque."
                buttonText={['admin', 'manager'].includes(userRole || '') ? 'Acessar' : 'Sem Permissão'}
                buttonDisabled={!['admin', 'manager'].includes(userRole || '')}
                onButtonClick={() => {
                  if (['admin', 'manager'].includes(userRole || '')) {
                    navigate('/user-management');
                  }
                }}
              />

              <SimpleCard
                icon={Package}
                title="Controle de Estoque"
                description="Monitore ingredientes e produtos"
                details="Alertas de baixo estoque, datas de validade e sugestões de reposição automáticas."
                buttonText={['admin', 'manager', 'inventory'].includes(userRole || '') ? 'Acessar Inventário' : 'Sem Permissão'}
                buttonDisabled={!['admin', 'manager', 'inventory'].includes(userRole || '')}
                onButtonClick={() => {
                  if (['admin', 'manager', 'inventory'].includes(userRole || '')) {
                    navigate('/inventory-management');
                  }
                }}
              />

              <SimpleCard
                icon={MenuIcon}
                title="Cardápio"
                description="Gerencie pratos e receitas"
                details="Crie e edite pratos, defina ingredientes e calcule custos baseados no inventário. Receba sugestões automáticas de otimização."
                buttonText={['admin', 'manager', 'chef'].includes(userRole || '') ? 'Gerenciar Cardápio' : 'Sem Permissão'}
                buttonDisabled={!['admin', 'manager', 'chef'].includes(userRole || '')}
                onButtonClick={() => {
                  if (['admin', 'manager', 'chef'].includes(userRole || '')) {
                    navigate('/menu-management');
                  }
                }}
              />

              <SimpleCard
                icon={Package}
                title="Inventário"
                description="Controle estoque e produtos"
                details="Gerencie produtos, categorias, fornecedores e movimentações de estoque. Receba alertas automáticos."
                buttonText={['admin', 'manager', 'inventory'].includes(userRole || '') ? 'Gerenciar Inventário' : 'Sem Permissão'}
                buttonDisabled={!['admin', 'manager', 'inventory'].includes(userRole || '')}
                onButtonClick={() => {
                  if (['admin', 'manager', 'inventory'].includes(userRole || '')) {
                    navigate('/inventory-management');
                  }
                }}
              />

              <SimpleCard
                icon={DollarSign}
                title="Gestão de Preços"
                description="Otimize preços e margens"
                details="Ajuste inteligente de preços baseado em custos, demanda e metas de lucratividade."
                buttonText={['admin', 'manager'].includes(userRole || '') ? 'Acessar Preços' : 'Sem Permissão'}
                buttonDisabled={!['admin', 'manager'].includes(userRole || '')}
                onButtonClick={() => {
                  if (['admin', 'manager'].includes(userRole || '')) {
                    navigate('/price-management');
                  }
                }}
              />

              <SimpleCard
                icon={TrendingUp}
                title="Análise de Demanda"
                description="Previsões inteligentes de vendas"
                details="IA analisa padrões históricos para prever demanda e otimizar compras, evitando faltas e excessos."
                buttonText={['admin', 'manager'].includes(userRole || '') ? 'Ver Previsões' : 'Sem Permissão'}
                buttonDisabled={!['admin', 'manager'].includes(userRole || '')}
                onButtonClick={() => {
                  if (['admin', 'manager'].includes(userRole || '')) {
                    navigate('/demand-forecast');
                  }
                }}
              />

              <SimpleCard
                icon={Building2}
                title="Gestão de Fornecedores"
                description="Controle fornecedores e compras"
                details="Cadastre fornecedores, gerencie contatos e acompanhe histórico de compras para melhor negociação."
                buttonText={['admin', 'manager'].includes(userRole || '') ? 'Acessar Fornecedores' : 'Sem Permissão'}
                buttonDisabled={!['admin', 'manager'].includes(userRole || '')}
                onButtonClick={() => {
                  if (['admin', 'manager'].includes(userRole || '')) {
                    navigate('/supplier-management');
                  }
                }}
              />

              <SimpleCard
                icon={BarChart3}
                title="Relatórios"
                description="Análises e métricas do negócio"
                details="Dashboards com vendas, custos, performance de pratos e análise de lucratividade."
                buttonText={['admin', 'manager'].includes(userRole || '') ? 'Acessar Dashboard' : 'Sem Permissão'}
                buttonDisabled={!['admin', 'manager'].includes(userRole || '')}
                onButtonClick={() => {
                  if (['admin', 'manager'].includes(userRole || '')) {
                    navigate('/dashboard');
                  }
                }}
              />

              <SimpleCard
                icon={Shield}
                title="Segurança de Dados"
                description="Backup e autenticação 2FA"
                details="Backup automático de dados críticos, autenticação de dois fatores e logs de segurança para proteger seu restaurante."
                buttonText={['admin', 'manager'].includes(userRole || '') ? 'Configurar Segurança' : 'Sem Permissão'}
                buttonDisabled={!['admin', 'manager'].includes(userRole || '')}
                onButtonClick={() => {
                  if (['admin', 'manager'].includes(userRole || '')) {
                    navigate('/security');
                  }
                }}
              />

              <SimpleCard
                icon={Network}
                title="Rede de Restaurantes"
                description="Gerencie múltiplas unidades"
                details="Sistema avançado para administrar redes de restaurantes com relatórios consolidados e gestão centralizada."
                buttonText={userRole === 'admin' ? 'Gerenciar Rede' : 'Apenas Administradores'}
                buttonDisabled={userRole !== 'admin'}
                onButtonClick={() => {
                  if (userRole === 'admin') {
                    navigate('/chain-management');
                  }
                }}
              />

              <SimpleCard
                icon={HelpCircle}
                title="Suporte ao Cliente"
                description="Central de ajuda e suporte"
                details="Acesse FAQs, tutoriais em vídeo, guias passo a passo e entre em contato com nossa equipe de suporte especializada."
                buttonText="Acessar Suporte"
                buttonDisabled={false}
                onButtonClick={() => navigate('/support')}
              />

            </div>

            {/* Quick Actions */}
            <div className="mt-8 sm:mt-12">
              <div className="bg-card rounded-lg border p-4 sm:p-6">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">Ações Rápidas</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Configurações e ações importantes para seu restaurante
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {userRole === 'admin' && (
                    <Button 
                      className="w-full justify-start h-auto p-4 sm:p-5" 
                      onClick={() => navigate('/restaurant-setup')}
                    >
                      <div className="text-left flex items-center space-x-3">
                        <Settings className="h-5 w-5 shrink-0" />
                        <div>
                          <div className="font-medium text-base">Configurar Restaurante</div>
                          <div className="text-sm text-primary-foreground/80 mt-1">
                            Edite informações básicas do seu estabelecimento
                          </div>
                        </div>
                      </div>
                    </Button>
                  )}
                  {['admin', 'manager'].includes(userRole || '') && (
                    <Button 
                      variant="outline" 
                      className="w-full justify-start h-auto p-4 sm:p-5"
                    >
                      <div className="text-left flex items-center space-x-3">
                        <Users className="h-5 w-5 shrink-0" />
                        <div>
                          <div className="font-medium text-base">Convidar Equipe</div>
                          <div className="text-sm text-muted-foreground mt-1">
                            Adicione funcionários ao sistema
                          </div>
                        </div>
                      </div>
                    </Button>
                  )}
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 sm:p-5"
                    onClick={() => navigate('/pricing')}
                  >
                    <div className="text-left flex items-center space-x-3">
                      <DollarSign className="h-5 w-5 shrink-0" />
                      <div>
                        <div className="font-medium text-base">Planos e Preços</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Veja nossos planos e gerencie sua assinatura
                        </div>
                      </div>
                    </div>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full justify-start h-auto p-4 sm:p-5"
                    onClick={() => navigate('/support')}
                  >
                    <div className="text-left flex items-center space-x-3">
                      <HelpCircle className="h-5 w-5 shrink-0" />
                      <div>
                        <div className="font-medium text-base">Central de Suporte</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Acesse FAQs, tutoriais e entre em contato conosco
                        </div>
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Index;
