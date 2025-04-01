# Folder Structure

```
src/
├── assets/           # Static assets like images, icons, fonts
├── components/       # Reusable UI components
│   ├── common/      # Shared components like Button, Input, Card
│   ├── layout/      # Layout components like Header, Footer, Sidebar
│   └── sections/    # Page sections like Hero, Features, Pricing
├── hooks/           # Custom React hooks
├── lib/            # Utility functions and configurations
├── pages/          # Page components
│   ├── auth/       # Authentication related pages
│   ├── courses/    # Course related pages
│   └── dashboard/  # Dashboard related pages
├── styles/         # Global styles and Tailwind utilities
├── types/          # TypeScript type definitions
└── utils/          # Helper functions and utilities
```

## Component Categories

### Common Components
- Button
- Input
- Card
- Badge
- Avatar
- Modal
- Dropdown

### Layout Components
- Header
- Footer
- Sidebar
- Navigation
- Container

### Section Components
- Hero
- Features
- CourseCard
- Testimonials
- CTASection
- PricingTable

## Style Guidelines

### Colors
- Primary: Purple (#7F56D9)
- Secondary: Orange (#FF6636)
- Gray scales for text and backgrounds

### Typography
- Headers: Plus Jakarta Sans
- Body: Inter

### Spacing
- Use Tailwind's default spacing scale
- Container padding:
  - Mobile: 1rem
  - Tablet: 2rem
  - Desktop: 4rem-6rem 