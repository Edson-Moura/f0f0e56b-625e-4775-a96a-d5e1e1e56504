import React from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, LogOut } from 'lucide-react';
import { UsersDashboard } from '@/components/users/UsersDashboard';
import LoadingScreen from '@/components/ui/loading-screen';
import MobileNav from '@/components/ui/mobile-nav';
import { useRestaurant } from '@/hooks/useRestaurant';

const UserManagement = () => {
  const { user, loading, signOut } = useAuth();
  const { currentRestaurant } = useRestaurant();
  const navigate = useNavigate();

  if (loading) {
    return <LoadingScreen message="Carregando usuários..." />;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

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
              <Users className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-primary">
                  Gestão de Usuários
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
        <UsersDashboard />
      </main>
    </div>
  );
};

export default UserManagement;