
import { useState, useEffect } from "react";
import { Package, Moon, Sun, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";

export default function Terms() {
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
              Termos de Uso
            </h1>
            <p className="text-lg text-muted-foreground">
              Última atualização: Janeiro de 2025
            </p>
          </div>

          <Card className="p-8 lg:p-12 rounded-2xl border border-card-border">
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ao acessar e utilizar o sistema Pavisoft Sistemas ("Sistema", "Plataforma" ou "Serviço"), você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso sistema.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">2. Descrição do Serviço</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O Pavisoft Sistemas é uma plataforma de gestão de estoque que oferece:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Controle de inventário e produtos</li>
                  <li>Sistema de Ponto de Venda (PDV)</li>
                  <li>Gestão de clientes e fornecedores</li>
                  <li>Relatórios e análises de vendas</li>
                  <li>Dashboard com métricas em tempo real</li>
                  <li>Controle de vencimento de produtos</li>
                  <li>Personalização visual da interface</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">3. Cadastro e Conta de Usuário</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para utilizar nosso sistema, você deve:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Fornecer informações verdadeiras, precisas e completas durante o cadastro</li>
                  <li>Manter suas credenciais de acesso em sigilo</li>
                  <li>Notificar-nos imediatamente sobre qualquer uso não autorizado da sua conta</li>
                  <li>Ser responsável por todas as atividades realizadas sob sua conta</li>
                  <li>Ter capacidade legal para celebrar contratos vinculantes</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">4. Planos e Pagamentos</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.1 Plano Gratuito</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O plano gratuito oferece funcionalidades básicas com limitações de uso, incluindo:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Limite de até 100 produtos cadastrados</li>
                  <li>Relatórios básicos</li>
                  <li>Suporte por email</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.2 Plano Premium</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  O plano premium oferece acesso completo a todas as funcionalidades mediante pagamento mensal de R$ 49,00. Os pagamentos são processados mensalmente e a renovação é automática, salvo cancelamento prévio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">5. Uso Aceitável</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você concorda em NÃO:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Utilizar o sistema para fins ilegais ou não autorizados</li>
                  <li>Tentar acessar áreas restritas do sistema ou de outros usuários</li>
                  <li>Interferir no funcionamento normal do sistema</li>
                  <li>Realizar engenharia reversa, descompilar ou desmontar o software</li>
                  <li>Utilizar o sistema para transmitir vírus ou códigos maliciosos</li>
                  <li>Revender ou redistribuir o acesso ao sistema sem autorização</li>
                  <li>Fazer uso abusivo dos recursos do sistema</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">6. Propriedade Intelectual</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Todo o conteúdo, recursos, tecnologias e funcionalidades do Pavisoft Sistemas, incluindo mas não se limitando a software, textos, gráficos, logos, ícones e imagens, são de propriedade exclusiva da Pavisoft Sistemas e estão protegidos por leis de direitos autorais e propriedade intelectual.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Os dados inseridos por você no sistema permanecem de sua propriedade. Concedemos a você uma licença limitada, não exclusiva e intransferível para usar o sistema conforme estes termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">7. Disponibilidade do Serviço</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Embora nos esforcemos para manter o sistema disponível 24/7, não garantimos que:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>O serviço estará ininterrupto ou livre de erros</li>
                  <li>Os defeitos serão corrigidos imediatamente</li>
                  <li>O sistema estará livre de vírus ou outros componentes prejudiciais</li>
                </ul>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reservamo-nos o direito de modificar, suspender ou descontinuar o serviço (ou qualquer parte dele) a qualquer momento, com ou sem aviso prévio.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">8. Backup e Segurança de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Realizamos backups automáticos regulares dos dados armazenados em nosso sistema. No entanto, recomendamos que você também mantenha cópias de segurança de seus dados importantes. Não nos responsabilizamos por perda de dados devido a circunstâncias fora de nosso controle.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">9. Cancelamento e Rescisão</h2>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">9.1 Cancelamento pelo Usuário</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você pode cancelar sua assinatura a qualquer momento através das configurações da conta. O cancelamento entrará em vigor ao final do período de cobrança atual.
                </p>

                <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">9.2 Cancelamento pela Pavisoft</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reservamo-nos o direito de suspender ou encerrar sua conta caso você viole estes Termos de Uso, sem aviso prévio e sem reembolso.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">10. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Na extensão máxima permitida pela lei aplicável, a Pavisoft Sistemas não será responsável por:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                  <li>Danos indiretos, incidentais, especiais ou consequenciais</li>
                  <li>Perda de lucros, receitas, dados ou uso</li>
                  <li>Interrupções de negócios</li>
                  <li>Decisões tomadas com base nas informações fornecidas pelo sistema</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">11. Indenização</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Você concorda em indenizar, defender e isentar a Pavisoft Sistemas de quaisquer reivindicações, responsabilidades, danos, perdas e despesas (incluindo honorários advocatícios) decorrentes de ou relacionados ao seu uso do sistema ou violação destes Termos de Uso.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">12. Modificações nos Termos</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. Seu uso continuado do sistema após as alterações constitui aceitação dos novos termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">13. Lei Aplicável e Jurisdição</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Estes Termos de Uso são regidos pelas leis brasileiras. Quaisquer disputas relacionadas a estes termos serão submetidas à jurisdição exclusiva dos tribunais do Brasil.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">14. Disposições Gerais</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Se qualquer disposição destes Termos for considerada inválida ou inexequível, as demais disposições permanecerão em pleno vigor e efeito. A falha em fazer cumprir qualquer direito ou disposição não constitui renúncia a tal direito.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">15. Contato</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Para questões sobre estes Termos de Uso, entre em contato:
                </p>
                <ul className="list-none text-muted-foreground space-y-2 mb-4">
                  <li><strong>Email:</strong> contato@pavisoft.com.br</li>
                  <li><strong>Empresa:</strong> Pavisoft Sistemas</li>
                </ul>
              </section>

              <section>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Ao utilizar o Pavisoft Sistemas, você reconhece que leu, compreendeu e concordou com estes Termos de Uso.
                </p>
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
