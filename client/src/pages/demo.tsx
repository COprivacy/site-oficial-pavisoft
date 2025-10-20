import { useState, useEffect } from "react";
import { Package, Moon, Sun, ArrowLeft, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { useLocation } from "wouter";

import dashboardImg from "@assets/dashboard_1760974550061.png";
import produtosImg from "@assets/produtos_1760974550061.png";
import pdvImg from "@assets/ponto de venda_1760974550062.png";
import relatoriosImg from "@assets/relatorios_1760974550062.png";
import inventarioImg from "@assets/inventário_1760974550062.png";
import clientesImg from "@assets/clientes_1760974550060.png";
import fornecedoresImg from "@assets/fornecedores_1760974550060.png";

export default function Demo() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [, navigate] = useLocation();
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Define tema escuro como padrão
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
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
      image: dashboardImg,
    },
    {
      title: "Gestão de Produtos",
      description: "Interface intuitiva para gerenciar seu inventário",
      image: produtosImg,
    },
    {
      title: "Ponto de Venda (PDV)",
      description: "Sistema de vendas rápido e eficiente",
      image: pdvImg,
    },
    {
      title: "Relatórios Detalhados",
      description: "Análises completas do seu negócio",
      image: relatoriosImg,
    },
    {
      title: "Controle de Estoque",
      description: "Monitore entradas, saídas e movimentações",
      image: inventarioImg,
    },
    {
      title: "Gestão de Clientes",
      description: "Cadastro completo com histórico de compras",
      image: clientesImg,
    },
    {
      title: "Gestão de Fornecedores",
      description: "Gerencie seus fornecedores e histórico de compras",
      image: fornecedoresImg,
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
                data-testid="button-back"
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
              data-testid="button-theme-toggle"
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
                data-testid={`card-screenshot-${index + 1}`}
              >
                <div 
                  className="aspect-video bg-muted relative overflow-hidden cursor-pointer group"
                  onClick={() => setSelectedImage({ src: screenshot.image, title: screenshot.title })}
                  data-testid={`button-preview-${index + 1}`}
                >
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-screenshot-${index + 1}`}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-lg">
                      Clique para ampliar
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-title-${index + 1}`}>
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-description-${index + 1}`}>
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
                  <div className="w-24 h-24 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center mx-auto mb-6 cursor-pointer transition-all hover:scale-110 shadow-xl" data-testid="button-video-play">
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
              data-testid="button-back-home"
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
            data-testid="button-test-free"
          >
            Testar Gratuitamente
          </Button>
        </div>
      </footer>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-7xl w-[95vw] h-[95vh] p-0 bg-background/95 backdrop-blur-sm" data-testid="dialog-image-preview">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <Button
              size="icon"
              variant="ghost"
              className="h-10 w-10 bg-background/80 hover:bg-background"
              data-testid="button-close-preview"
            >
              <X className="h-6 w-6" />
            </Button>
          </DialogClose>
          {selectedImage && (
            <div className="flex flex-col items-center justify-center h-full p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4" data-testid="text-preview-title">
                {selectedImage.title}
              </h2>
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  data-testid="img-preview-full"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
