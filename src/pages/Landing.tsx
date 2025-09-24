import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ChefHat, 
  Package, 
  BarChart3, 
  Users, 
  Shield, 
  DollarSign, 
  CheckCircle, 
  Star, 
  TrendingUp,
  Clock,
  Smartphone,
  Building2,
  ArrowRight,
  Crown,
  Building
} from 'lucide-react';
import HeroSection from '@/components/landing/HeroSection';
import IntelligentFeaturesSection from '@/components/landing/IntelligentFeaturesSection';
import restaurantBg from '@/assets/restaurant-bg.jpg';

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Package,
      title: "Controle de Estoque Inteligente",
      description: "Monitore ingredientes em tempo real com alertas automáticos de baixo estoque e datas de validade.",
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    },
    {
      icon: ChefHat,
      title: "Gestão de Cardápio",
      description: "Crie pratos, calcule custos baseados no inventário e receba sugestões de otimização.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: BarChart3,
      title: "Relatórios Avançados",
      description: "Dashboards com vendas, custos, performance de pratos e análise de lucratividade.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Users,
      title: "Gestão de Equipe",
      description: "Controle de acesso por perfis: admin, gerente, chef, funcionário do estoque.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: DollarSign,
      title: "Otimização de Preços",
      description: "Ajuste inteligente de preços baseado em custos, demanda e metas de lucratividade.",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Backup automático, autenticação 2FA e logs de segurança para proteger seus dados.",
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    }
  ];

  const plans = [
    {
      name: "Básico",
      price: "R$ 49",
      period: "/mês",
      description: "Para restaurantes pequenos",
      icon: Star,
      features: [
        "Até 1 restaurante",
        "Até 5 usuários",
        "Gestão completa de estoque",
        "Cardápio completo",
        "Relatórios básicos",
        "Suporte prioritário"
      ],
      highlight: false
    },
    {
      name: "Profissional",
      price: "R$ 99",
      period: "/mês",
      description: "Para restaurantes em crescimento",
      icon: Crown,
      features: [
        "Até 1 restaurante",
        "Usuários ilimitados",
        "Gestão avançada de estoque",
        "Cardápio e preços inteligentes",
        "Relatórios avançados",
        "Gestão de fornecedores",
        "Suporte 24/7"
      ],
      highlight: true
    },
    {
      name: "Enterprise",
      price: "R$ 199",
      period: "/mês",
      description: "Para redes de restaurantes",
      icon: Building,
      features: [
        "Restaurantes ilimitados",
        "Usuários ilimitados",
        "Gestão de rede centralizada",
        "Relatórios consolidados",
        "API personalizada",
        "Suporte dedicado",
        "Treinamento incluído"
      ],
      highlight: false
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Proprietária",
      restaurant: "Cantina da Maria",
      content: "Desde que implementamos o FoodFlow, conseguimos reduzir o desperdício em 40% e nossos custos ficaram muito mais previsíveis. A gestão de estoque é fantástica!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Chef Executivo", 
      restaurant: "Bistrô do Chef",
      content: "A funcionalidade de cálculo automático de custos dos pratos me poupa horas de trabalho toda semana. Agora posso focar no que realmente importa: criar pratos incríveis.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Gerente",
      restaurant: "Rede Sabor & Cia",
      content: "Gerenciar 5 restaurantes ficou muito mais fácil com os relatórios consolidados. Tenho visibilidade completa do negócio em tempo real.",
      rating: 5
    }
  ];

  const stats = [
    { number: "10K+", label: "Restaurantes ativos" },
    { number: "98%", label: "Satisfação dos clientes" },
    { number: "30%", label: "Redução de desperdício" },
    { number: "24/7", label: "Suporte disponível" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container-mobile mx-auto py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="src/assets/logo-foodflow-new.png" alt="FoodFlow Logo" className="h-8 w-12" />
            <span className="text-xl font-bold text-primary">FoodFlow</span>
          </div>
          <Button variant="outline" onClick={() => navigate('/auth')}>
            Entrar
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Intelligent Features Section */}
      <IntelligentFeaturesSection />

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container-mobile mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tudo que você precisa para gerenciar seu restaurante
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recursos completos para otimizar cada aspecto do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className={`h-6 w-6 ${feature.color} transition-all duration-300 group-hover:scale-110`} />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${restaurantBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-mobile mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Por que escolher o FoodFlow?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0 mt-1 backdrop-blur-sm">
                    <CheckCircle className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Implementação Rápida</h3>
                    <p className="text-gray-300">Configure seu restaurante em menos de 30 minutos e comece a usar imediatamente.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center shrink-0 mt-1 backdrop-blur-sm">
                    <Smartphone className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Acesso Mobile</h3>
                    <p className="text-gray-300">Gerencie seu restaurante de qualquer lugar com nossa interface responsiva.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 animate-fade-in" style={{ animationDelay: '600ms' }}>
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center shrink-0 mt-1 backdrop-blur-sm">
                    <Building2 className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-white">Escalabilidade</h3>
                    <p className="text-gray-300">Comece pequeno e cresça. Nosso sistema acompanha o crescimento do seu negócio.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-card/95 p-8 rounded-lg border backdrop-blur-sm shadow-xl animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-primary mb-2 animate-pulse">30 dias</div>
                <div className="text-muted-foreground">Teste grátis</div>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '500ms' }}>
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span>Acesso completo a todos os recursos</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '600ms' }}>
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span>Suporte especializado</span>
                </li>
                <li className="flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '700ms' }}>
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span>Sem compromisso ou taxa de cancelamento</span>
                </li>
              </ul>
              <Button 
                className="w-full hover:scale-105 transition-transform duration-300" 
                size="lg"
                onClick={() => navigate('/auth')}
              >
                Começar Teste Grátis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 md:py-24" id="pricing">
        <div className="container-mobile mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Planos que crescem com seu negócio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para seu restaurante. Comece com 30 dias grátis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative group hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in ${
                  plan.highlight ? 'border-primary border-2 shadow-lg' : 'border hover:border-primary/30'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.highlight && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 animate-pulse">
                    Mais Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 ${
                    plan.highlight ? 'bg-primary/20' : 'bg-primary/10'
                  }`}>
                    <plan.icon className={`h-6 w-6 transition-all duration-300 group-hover:scale-110 ${
                      plan.highlight ? 'text-primary' : 'text-primary'
                    }`} />
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="flex items-baseline justify-center mt-4">
                    <span className="text-4xl font-bold group-hover:text-primary transition-colors duration-300">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${(index * 150) + (featureIndex * 50)}ms` }}>
                        <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full hover:scale-105 transition-all duration-300 ${plan.highlight ? '' : 'variant-outline'}`}
                    variant={plan.highlight ? 'default' : 'outline'}
                    size="lg"
                    onClick={() => navigate('/auth')}
                  >
                    Experimentar Grátis
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Todos os planos incluem 30 dias de teste grátis
            </p>
            <p className="text-sm text-muted-foreground">
              Cancele a qualquer momento. Sem taxas ocultas.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container-mobile mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Mais de 10.000 restaurantes confiam no FoodFlow para otimizar sua gestão
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <ChefHat className="h-6 w-6 text-primary transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors duration-300">{testimonial.name}</CardTitle>
                      <CardDescription>
                        {testimonial.role} • {testimonial.restaurant}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 transition-all duration-300 hover:scale-125" 
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-mobile mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para revolucionar seu restaurante?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Junte-se a mais de 10.000 restaurantes que já transformaram sua gestão com o FoodFlow.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6"
            onClick={() => navigate('/auth')}
          >
            Começar Agora - Grátis por 30 dias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t bg-background">
        <div className="container-mobile mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img src="src/assets/logo-foodflow-new.png" alt="FoodFlow Logo" className="h-20 w-44 sm:h-24 sm:w-52" />
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Sistema completo de gestão para restaurantes. Controle estoque, cardápio, preços e muito mais.
              </p>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="font-semibold mb-4">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Gestão de Estoque</li>
                <li>Controle de Cardápio</li>
                <li>Análise de Preços</li>
                <li>Relatórios Avançados</li>
                <li>Previsão de Demanda</li>
              </ul>
            </div>

            {/* Suporte */}
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Central de Ajuda</li>
                <li>Documentação</li>
                <li>Tutoriais</li>
                <li>Contato</li>
                <li>FAQ</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t pt-8 mt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-sm text-muted-foreground mb-4 md:mb-0">
                © 2024 FoodFlow. Todos os direitos reservados.
              </div>
              <div className="text-sm text-muted-foreground">
                Desenvolvido com ❤️ para restaurantes
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;