import { useState, useEffect, useRef } from "react";
import {
  Package,
  ShoppingCart,
  BarChart3,
  FileText,
  Calendar,
  Users,
  Palette,
  Zap,
  Shield,
  Database,
  Smartphone,
  Moon,
  Sun,
  Menu,
  X,
  Check,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [, navigate] = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".fade-in-on-scroll");
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const features = [
    {
      icon: Package,
      title: "Gestão de Produtos",
      description: "Controle completo do seu inventário com alertas automáticos de estoque mínimo",
    },
    {
      icon: ShoppingCart,
      title: "PDV Integrado",
      description: "Ponto de venda com leitura de código de barras e pagamento rápido",
    },
    {
      icon: BarChart3,
      title: "Dashboard em Tempo Real",
      description: "Gráficos e métricas de vendas atualizados instantaneamente",
    },
    {
      icon: FileText,
      title: "Relatórios e Análises",
      description: "Exportação de relatórios em PDF com análises semanais detalhadas",
    },
    {
      icon: Database,
      title: "Inventário Completo",
      description: "Gestão avançada de estoque com rastreamento de entradas, saídas e movimentações",
    },
    {
      icon: Calendar,
      title: "Controle de Vencimento",
      description: "Monitore produtos próximos ao vencimento e gerencie o inventário",
    },
    {
      icon: Users,
      title: "Cadastro Completo",
      description: "Gestão de clientes e fornecedores com histórico de transações",
    },
    {
      icon: Palette,
      title: "Personalização Total",
      description: "Customize a identidade visual da loja com sua marca",
    },
  ];

  const advantages = [
    {
      icon: Smartphone,
      title: "Interface Intuitiva",
      description: "Design responsivo que funciona perfeitamente em qualquer dispositivo",
    },
    {
      icon: Zap,
      title: "Rápido e Leve",
      description: "Desempenho otimizado para operações instantâneas",
    },
    {
      icon: Database,
      title: "Armazenamento Inteligente",
      description: "Dados seguros com backup automático e sincronização",
    },
    {
      icon: Shield,
      title: "Modo Claro/Escuro",
      description: "Adapte a interface ao seu conforto visual",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                <Package className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Pavisoft Sistemas
              </span>
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-inicio"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("funcionalidades")}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-funcionalidades"
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection("vantagens")}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-vantagens"
              >
                Painel
              </button>
              <button
                onClick={() => scrollToSection("precos")}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-precos"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-foreground hover:text-primary transition-colors font-medium"
                data-testid="link-contato"
              >
                Contato
              </button>
            </nav>

            <div className="flex items-center gap-3">
              <Button
                size="icon"
                variant="ghost"
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
                className="rounded-md"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </Button>

              <Button
                size="icon"
                variant="ghost"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden rounded-md"
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <nav className="flex flex-col py-4 px-6 gap-4">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                data-testid="mobile-link-inicio"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("funcionalidades")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                data-testid="mobile-link-funcionalidades"
              >
                Funcionalidades
              </button>
              <button
                onClick={() => scrollToSection("vantagens")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                data-testid="mobile-link-vantagens"
              >
                Painel
              </button>
              <button
                onClick={() => scrollToSection("precos")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                data-testid="mobile-link-precos"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                data-testid="mobile-link-contato"
              >
                Contato
              </button>
            </nav>
          </div>
        )}
      </header>

      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-18"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-ring" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(251,146,60,0.15),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Controle total do seu estoque com apenas alguns cliques
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Um sistema completo, visual e fácil de usar para pequenas e
                médias empresas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent text-accent-foreground font-semibold text-base px-8 border border-accent-border shadow-lg"
                  data-testid="button-testar-agora"
                >
                  Testar Agora
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold text-base px-8"
                  data-testid="button-ver-demo"
                  onClick={() => navigate("/demo")}
                >
                  Ver Demonstração
                </Button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 rounded-2xl blur-3xl animate-pulse-slow" />
                <Card className="relative bg-white/95 dark:bg-card/50 backdrop-blur-sm border-card-border p-8 rounded-2xl shadow-2xl" style={{ transform: "perspective(1000px) rotateY(-5deg)" }}>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-foreground">Dashboard Analytics</h3>
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <div className="w-2 h-2 rounded-full bg-muted" />
                      </div>
                    </div>
                    <div className="h-14 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-lg flex items-center px-4 gap-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse-slow" />
                      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-md relative z-10">
                        <BarChart3 className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1 relative z-10">
                        <div className="h-2 bg-primary/40 rounded-full w-3/4 mb-1" />
                        <div className="h-1.5 bg-primary/20 rounded-full w-1/2" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gradient-to-br from-accent/20 to-accent/5 rounded-xl p-4 text-center border border-accent/20">
                        <div className="text-2xl font-bold text-accent mb-1">254</div>
                        <div className="text-xs text-muted-foreground font-medium">Produtos</div>
                      </div>
                      <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-4 text-center border border-primary/20">
                        <div className="text-2xl font-bold text-primary mb-1">89</div>
                        <div className="text-xs text-muted-foreground font-medium">Vendas</div>
                      </div>
                      <div className="bg-gradient-to-br from-chart-2/20 to-chart-2/5 rounded-xl p-4 text-center border border-chart-2/20">
                        <div className="text-2xl font-bold text-chart-2 mb-1">12k</div>
                        <div className="text-xs text-muted-foreground font-medium">Receita</div>
                      </div>
                    </div>
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded flex items-center justify-center">
                          <Package className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2.5 bg-primary/30 rounded-full w-full" />
                          <div className="h-1.5 bg-primary/15 rounded-full w-2/3" />
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded flex items-center justify-center">
                          <ShoppingCart className="w-4 h-4 text-accent" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="h-2.5 bg-accent/30 rounded-full w-5/6" />
                          <div className="h-1.5 bg-accent/15 rounded-full w-1/2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="funcionalidades" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Funcionalidades Completas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tudo que você precisa para gerenciar seu estoque de forma
              profissional e eficiente
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300 hover:shadow-lg rounded-2xl border border-card-border fade-in-on-scroll opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`card-feature-${index}`}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-ring rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="vantagens" className="py-20 lg:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Por que escolher o Pavisoft?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologia moderna e design pensado para facilitar seu dia a dia
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center fade-in-on-scroll opacity-0"
                style={{ transitionDelay: `${index * 100}ms` }}
                data-testid={`advantage-${index}`}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {advantage.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="precos" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Planos e Preços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            <Card
              className="p-8 lg:p-10 rounded-2xl border border-card-border hover-elevate transition-all duration-300 fade-in-on-scroll opacity-0"
              data-testid="card-plan-gratuito"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Plano Gratuito
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-primary">R$ 0</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-muted-foreground">
                  Ideal para começar a organizar seu estoque
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Cadastro de até 50 produtos
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Controle básico de estoque</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Relatórios simples</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Suporte por email</span>
                </div>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="w-full font-semibold"
                data-testid="button-escolher-gratuito"
              >
                Começar Gratuitamente
              </Button>
            </Card>

            <Card
              className="p-8 lg:p-10 rounded-2xl border-2 border-accent bg-gradient-to-br from-card to-accent/5 hover-elevate transition-all duration-300 shadow-xl relative lg:scale-105 fade-in-on-scroll opacity-0"
              style={{ transitionDelay: "100ms" }}
              data-testid="card-plan-premium"
            >
              <div className="absolute -top-4 right-8">
                <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Recomendado
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Plano Premium
                </h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-5xl font-bold text-accent">R$ 49</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-muted-foreground">
                  Funcionalidades completas para sua empresa crescer
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Produtos ilimitados
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">PDV integrado com código de barras</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Dashboard em tempo real com gráficos
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Relatórios avançados em PDF</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Controle de vencimento automático</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Gestão de clientes e fornecedores
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Personalização completa da marca
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Suporte prioritário</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full bg-accent hover:bg-accent text-accent-foreground font-semibold border border-accent-border"
                data-testid="button-escolher-premium"
              >
                Começar Teste Grátis
              </Button>
            </Card>

            <Card
              className="p-8 lg:p-10 rounded-2xl border border-card-border hover-elevate transition-all duration-300 fade-in-on-scroll opacity-0 relative"
              style={{ transitionDelay: "200ms" }}
              data-testid="card-plan-anual"
            >
              <div className="absolute -top-4 right-8">
                <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Melhor Valor
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Plano Anual
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-primary">R$ 39</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-muted-foreground line-through">R$ 588/ano</span>
                  <span className="text-lg font-semibold text-primary ml-2">R$ 468/ano</span>
                </div>
                <p className="text-muted-foreground">
                  Economize 20% com pagamento anual
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Produtos ilimitados
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">PDV integrado com código de barras</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Dashboard em tempo real com gráficos
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Relatórios avançados em PDF</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Controle de vencimento automático</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Gestão de clientes e fornecedores
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    Personalização completa da marca
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">Suporte prioritário</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-semibold">2 meses grátis (economia de R$ 120)</span>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full font-semibold"
                data-testid="button-escolher-anual"
              >
                Assinar Plano Anual
              </Button>
            </Card>
          </div>
        </div>
      </section>

      <footer id="contato" className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-9 h-9 bg-primary-foreground/10 rounded-md flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Pavisoft Sistemas</span>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed">
                Soluções completas em gestão de estoque para pequenas e médias
                empresas.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Links Rápidos</h4>
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection("funcionalidades")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="footer-link-funcionalidades"
                >
                  Funcionalidades
                </button>
                <button
                  onClick={() => scrollToSection("precos")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="footer-link-precos"
                >
                  Preços
                </button>
                <button
                  onClick={() => navigate("/terms")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="footer-link-termos"
                >
                  Termos de Uso
                </button>
                <button
                  onClick={() => navigate("/privacy")}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="footer-link-privacidade"
                >
                  Política de Privacidade
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contato</h4>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:pavisoft.suporte@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  data-testid="footer-email"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                  </svg>
                  pavisoft.suporte@gmail.com
                </a>
              </div>

              <h4 className="font-semibold text-lg mb-4">Redes Sociais</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-md flex items-center justify-center transition-colors"
                  data-testid="social-facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-md flex items-center justify-center transition-colors"
                  data-testid="social-x"
                >
                  <SiX className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/pavisoftsistemas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-md flex items-center justify-center transition-colors"
                  data-testid="social-instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-md flex items-center justify-center transition-colors"
                  data-testid="social-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="text-primary-foreground/70">
              &copy; 2025 Pavisoft Sistemas. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
