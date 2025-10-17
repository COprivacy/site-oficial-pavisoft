# Pavisoft Controle de Estoque - Site Institucional

## Visão Geral
Site institucional moderno e responsivo para apresentar o sistema Pavisoft Controle de Estoque, desenvolvido para a empresa Pavisoft Sistemas. O site segue o estilo visual da Slack - limpo, profissional e focado em conversão.

## Última Atualização
**Data:** 17 de outubro de 2025
**Status:** MVP em desenvolvimento - Frontend completo

## Estrutura do Projeto

### Frontend (React + TypeScript)
- **Página Principal:** `client/src/pages/home.tsx`
  - Header fixo com logo, navegação e toggle de tema
  - Seção Hero com gradiente azul e CTAs laranja
  - Seção de Funcionalidades (7 cards com ícones)
  - Seção de Vantagens (4 benefícios)
  - Seção de Planos e Preços (Gratuito vs Premium)
  - Footer com links de contato e redes sociais

### Design System
- **Cores Principais:**
  - Azul-escuro: `217 91% 25%` (Primary - modo claro)
  - Azul médio: `217 80% 40%` (Secondary)
  - Laranja suave: `25 95% 63%` (Accent/CTAs)
  - Background claro: `0 0% 98%`
  - Background escuro: `217 40% 8%`

- **Tipografia:** Inter (Google Fonts)
- **Componentes:** Shadcn UI (Button, Card)
- **Ícones:** Lucide React

### Funcionalidades Implementadas
- ✅ Navegação suave entre seções
- ✅ Menu mobile responsivo (hamburger)
- ✅ Modo claro/escuro com persistência em localStorage
- ✅ Scroll reveal para header (backdrop blur quando scrollado)
- ✅ Animações hover nos cards (elevate system)
- ✅ Design responsivo mobile-first
- ✅ Hero section com mockup visual do dashboard
- ✅ CTAs destacados em laranja
- ✅ Footer completo com redes sociais

## Tecnologias
- React 18
- TypeScript
- Tailwind CSS
- Shadcn UI
- Lucide React (ícones)
- Wouter (roteamento)
- Express (servidor)
- Vite (build)

## Comandos
- `npm run dev` - Inicia servidor de desenvolvimento
- Porta: 5000 (frontend + backend integrados)

## Próximos Passos
1. Backend para formulário de contato
2. Integração com analytics
3. Modal de demonstração interativa
4. Otimizações de performance

## Notas de Design
- Seguindo guidelines do Slack: clean, profissional, intuitivo
- Foco em conversão com CTAs bem posicionados
- Hierarquia visual clara com uso de espaçamento consistente
- Modo escuro com transições suaves (200ms)
- Cards com efeito hover-elevate para feedback visual
