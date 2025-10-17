
import { useState, useEffect } from "react";
import { Package, Moon, Sun, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function Privacy() {
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
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Política de Privacidade
            </h1>
            <p className="text-lg text-muted-foreground">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          <Card className="p-8 lg:p-12 rounded-2xl border border-card-border">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Introdução</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A Pavisoft Sistemas ("nós", "nosso" ou "Pavisoft") está comprometida em proteger a privacidade dos usuários do nosso sistema de controle de estoque. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Informações que Coletamos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Coletamos as seguintes informações quando você utiliza nosso sistema:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li><strong>Dados de Cadastro:</strong> Nome, email, telefone e informações da empresa</li>
                  <li><strong>Dados de Produtos:</strong> Nome, descrição, preço, código de barras, estoque e imagens de produtos</li>
                  <li><strong>Dados de Clientes e Fornecedores:</strong> Nome, CPF/CNPJ, endereço, telefone e email</li>
                  <li><strong>Dados de Vendas:</strong> Histórico de transações, valores, formas de pagamento e datas</li>
                  <li><strong>Dados de Inventário:</strong> Movimentações de estoque, entradas, saídas e ajustes</li>
                  <li><strong>Dados de Preferências:</strong> Tema da interface (claro/escuro) e personalização visual</li>
                  <li><strong>Dados de Uso:</strong> Informações sobre como você utiliza o sistema e interações realizadas</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Como Usamos suas Informações</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos as informações coletadas para:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Fornecer e manter o funcionamento do sistema de controle de estoque</li>
                  <li>Processar transações de vendas e pagamentos</li>
                  <li>Gerar relatórios e análises de desempenho do seu negócio</li>
                  <li>Enviar notificações sobre produtos próximos ao vencimento ou estoque baixo</li>
                  <li>Personalizar sua experiência no sistema</li>
                  <li>Melhorar nossos serviços e desenvolver novas funcionalidades</li>
                  <li>Fornecer suporte técnico e atendimento ao cliente</li>
                  <li>Cumprir obrigações legais e regulatórias</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Armazenamento e Segurança</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Criptografia de dados sensíveis</li>
                  <li>Backup automático regular dos dados</li>
                  <li>Acesso restrito às informações por meio de autenticação</li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Armazenamento em servidores seguros</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Compartilhamento de Informações</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Com seu consentimento explícito</li>
                  <li>Para cumprir obrigações legais ou regulatórias</li>
                  <li>Para proteger nossos direitos, propriedade ou segurança</li>
                  <li>Com prestadores de serviços que auxiliam na operação do sistema (sob acordos de confidencialidade)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Seus Direitos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Acessar suas informações pessoais</li>
                  <li>Corrigir dados incompletos, inexatos ou desatualizados</li>
                  <li>Solicitar a exclusão de dados pessoais</li>
                  <li>Revogar o consentimento a qualquer momento</li>
                  <li>Solicitar a portabilidade dos dados</li>
                  <li>Obter informações sobre o compartilhamento de dados</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Cookies e Tecnologias Similares</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos cookies e tecnologias similares para:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Manter sua sessão ativa no sistema</li>
                  <li>Salvar suas preferências de tema e personalização</li>
                  <li>Melhorar o desempenho e funcionalidade do sistema</li>
                  <li>Analisar o uso do sistema</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Retenção de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mantemos suas informações pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Alterações nesta Política</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações significativas através do email cadastrado ou por meio de aviso no sistema.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em contato conosco:
                </p>
                <ul className="list-none text-muted-foreground space-y-2 mb-4">
                  <li><strong>Email:</strong> contato@pavisoft.com.br</li>
                  <li><strong>Empresa:</strong> Pavisoft Sistemas</li>
                </ul>
              </section>
            </div>
          </Card>

          <div className="text-center mt-12">
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

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-primary-foreground/70">
            &copy; 2025 Pavisoft Sistemas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
