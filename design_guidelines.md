# Design Guidelines: Pavisoft Controle de Estoque

## Design Approach
**Reference-Based Approach**: Slack-inspired design system
- Clean, professional aesthetic with focus on conversion
- Modern SaaS interface with approachable personality
- Balance between visual appeal and information clarity

## Color Palette

### Light Mode
- **Primary**: 217 91% 25% (Deep navy blue - headers, primary buttons)
- **Secondary**: 217 80% 40% (Medium blue - links, accents)
- **Accent**: 25 95% 63% (Soft orange - CTAs, highlights)
- **Background**: 0 0% 98% (Off-white)
- **Surface**: 0 0% 100% (Pure white cards)
- **Text Primary**: 217 50% 15%
- **Text Secondary**: 217 20% 45%

### Dark Mode
- **Primary**: 217 60% 55% (Lighter blue for contrast)
- **Secondary**: 217 50% 65%
- **Accent**: 25 90% 60%
- **Background**: 217 40% 8% (Dark navy)
- **Surface**: 217 35% 12% (Card backgrounds)
- **Text Primary**: 0 0% 95%
- **Text Secondary**: 0 0% 70%

## Typography
- **Primary Font**: 'Inter' or 'DM Sans' (Google Fonts) - modern, clean sans-serif
- **Headings**: 
  - H1: 48px (desktop) / 32px (mobile), font-weight 700
  - H2: 36px (desktop) / 28px (mobile), font-weight 700
  - H3: 24px (desktop) / 20px (mobile), font-weight 600
- **Body**: 16px base, line-height 1.6, font-weight 400
- **CTA Buttons**: 16px, font-weight 600, letter-spacing 0.02em

## Layout System
**Spacing Units**: Tailwind spacing - primarily 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Container max-width: 1200px with px-6 on mobile
- Card gaps: gap-8 on desktop, gap-6 on mobile

## Component Library

### Header (Fixed)
- Height: 72px, backdrop-blur with semi-transparent background
- Logo: Left-aligned, "Pavisoft Sistemas" with icon
- Navigation: Center-aligned horizontal menu (desktop), hamburger menu (mobile)
- Dark mode toggle: Right-aligned icon button

### Hero Section
- Height: 85vh minimum
- Background: Subtle gradient from primary to secondary blue
- Layout: Centered content with two-column button group
- **Hero Image**: Right side illustration/mockup of dashboard interface (40% width on desktop, full-width stacked on mobile)
- Primary CTA: Solid orange button ("Testar Agora")
- Secondary CTA: Outline button with backdrop blur ("Ver Demonstração")

### Feature Cards (7 items)
- Grid: 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Card style: White/surface background, rounded-2xl, p-8, subtle shadow with hover lift
- Icon: 48px circular container with gradient background
- Title: H3 weight, 4-spacing margin below icon
- Description: Secondary text color, 2-line minimum

### Pricing Cards (2 plans)
- Side-by-side layout (desktop), stacked (mobile)
- Premium plan: Highlighted with accent border and slight scale
- Include: Plan name, price (large), feature list with checkmarks, CTA button
- Card elevation: Premium slightly elevated above Gratuito

### Footer
- 3-column layout (desktop): Company info, Quick links, Social/Contact
- Background: Darker shade of primary color
- Social icons: 32px, hover state with orange accent
- All text in lighter contrast color

## Visual Elements

### Gradients
- Hero background: Linear gradient 135deg from primary to secondary
- Card hover: Subtle glow with accent color at 10% opacity
- Buttons: Orange gradient on primary CTAs

### Shadows
- Cards: 0 4px 6px -1px rgba(0,0,0,0.1) with hover: 0 20px 25px -5px rgba(0,0,0,0.1)
- Header: 0 1px 3px 0 rgba(0,0,0,0.1) for subtle separation

### Animations
- Smooth scroll behavior on navigation clicks
- Card hover: transform scale(1.02) with 300ms ease
- Button hover: slight brightness increase
- Dark mode transition: 200ms ease on all color properties
- Intersection observer for fade-in on scroll (subtle, 500ms)

## Images

### Hero Section
- Dashboard mockup/screenshot showing the Pavisoft interface
- Style: Modern, clean UI with visible charts and product listings
- Treatment: Slight perspective tilt (3D effect), floating shadow
- Placement: Right 40% of hero section (desktop), below text (mobile)

### Feature Icons
- Use Font Awesome or Heroicons via CDN
- Icons needed: box (products), shopping-cart (PDV), chart-bar (dashboard), document-text (reports), calendar (vencimento), users (cadastro), paint-brush (personalização)

## Responsive Breakpoints
- Mobile: < 640px (single column, stacked layouts)
- Tablet: 640px - 1024px (2-column grids, adjusted spacing)
- Desktop: > 1024px (full multi-column layouts, maximum spacing)

## Accessibility
- Color contrast: WCAG AA compliant in both modes
- Focus states: 2px orange outline on interactive elements
- Dark mode toggle: Clear icon with aria-label
- Keyboard navigation: Full support with visible focus indicators