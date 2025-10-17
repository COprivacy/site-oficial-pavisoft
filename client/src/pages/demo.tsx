
import { useState, useEffect } from "react";
import { Package, Moon, Sun, ArrowLeft, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function Demo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
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

  const screenshots = [
    {
      title: "Dashboard Principal",
      description: "Visualização completa das métricas e estatísticas",
      placeholder: "Screenshot 1",
    },
    {
      title: "Gestão de Produtos",
      description: "Interface intuitiva para gerenciar seu inventário",
      placeholder: "Screenshot 2",
    },
    {
      title: "Ponto de Venda (PDV)",
      description: "Sistema de vendas rápido e eficiente",
      placeholder: "Screenshot 3",
    },
    {
      title: "Relatórios Detalhados",
      description: "Análises completas do seu negócio",
      placeholder: "Screenshot 4",
    },
    {
      title: "Controle de Estoque",
      description: "Monitore entradas, saídas e movimentações",
      placeholder: "Screenshot 5",
    },
    {
      title: "Gestão de Clientes",
      description: "Cadastro completo com histórico de compras",
      placeholder: "Screenshot 6",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-18">
            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant="ghost"
                onClick={() => navigate("/")}
                className="rounded-md"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center">
                  <Package className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">
                  Pavisoft Sistemas
                </span>
              </div>
            </div>

            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="rounded-md"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Demonstração do Sistema
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore todas as funcionalidades do Pavisoft através de capturas
              de tela e vídeo demonstrativo
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {screenshots.map((screenshot, index) => (
              <Card
                key={index}
                className="overflow-hidden hover-elevate transition-all duration-300 rounded-2xl border border-card-border"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
                  <div className="relative z-10 text-center p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Package className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {screenshot.placeholder}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {screenshot.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Vídeo Tutorial
              </h2>
              <p className="text-lg text-muted-foreground">
                Aprenda a usar todas as funcionalidades do sistema
              </p>
            </div>

            <Card className="overflow-hidden rounded-2xl border border-card-border shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,146,60,0.1),transparent_70%)]" />
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer transition-all hover:scale-110 shadow-xl">
                    <Play className="w-12 h-12 text-primary-foreground ml-1" />
                  </div>
                  <p className="text-xl font-semibold text-foreground mb-2">
                    Vídeo Demonstrativo
                  </p>
                  <p className="text-muted-foreground">
                    Clique para assistir ao tutorial completo
                  </p>
                </div>
              </div>
              
              <div className="p-8 bg-muted/30">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  O que você vai aprender:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-foreground">
                      Como configurar e personalizar o sistema
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-foreground">
                      Cadastro de produtos e gestão de estoque
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-foreground">
                      Utilização do PDV para vendas rápidas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-foreground">
                      Geração de relatórios e análise de dados
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-foreground">
                      Dicas e melhores práticas de uso
                    </span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>

          <div className="text-center mt-16">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent text-accent-foreground font-semibold text-base px-8 border border-accent-border shadow-lg"
              onClick={() => navigate("/")}
            >
              Voltar para a Página Inicial
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-primary-foreground/80 mb-4">
            Gostou do que viu? Comece a usar agora mesmo!
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold"
          >
            Testar Gratuitamente
          </Button>
        </div>
      </footer>
    </div>
  );
}
