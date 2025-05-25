# ModernUI - Next.js Frontend Template

A modern, production-ready frontend template built with Next.js 13, Tailwind CSS, and TypeScript. This template includes essential components, responsive design, and dark mode support out of the box.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3.3-blue)

## Features

- 🚀 **Next.js 13** with App Router
- 💅 **Tailwind CSS** for styling
- 🌙 **Dark Mode** support with theme persistence
- 📱 **Responsive Design** across all devices
- 🎨 **shadcn/ui Components** for beautiful UI elements
- 🔄 **Framer Motion** for smooth animations
- 📝 **Form Validation** using React Hook Form and Zod
- 🖼️ **Image Gallery** with filtering and slider
- 🎯 **Accessibility** focused components
- 📦 **TypeScript** for type safety
- 🎨 **Prettier** for code formatting
- 🧹 **ESLint** for code linting

## Demo Pages

- 🏠 **Home Page** - Modern landing page with features showcase
- 📝 **Contact Form** - Form with validation and responsive design
- 🖼️ **Image Gallery** - Interactive gallery with filtering and image slider

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/modern-frontend.git
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                  # Next.js 13 app directory
│   ├── contact/         # Contact page
│   ├── gallery/         # Gallery page
│   └── page.tsx         # Home page
├── components/          # React components
│   ├── layout/         # Layout components
│   └── ui/             # UI components
├── lib/                # Utility functions and configurations
├── public/             # Static assets
└── styles/             # Global styles
```

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://github.com/colinhacks/zod) - Schema validation
- [Lucide React](https://lucide.dev/) - Icons

## Customization

### Theming

The project uses Tailwind CSS for styling. You can customize the theme in `tailwind.config.ts`:

- Colors
- Typography
- Spacing
- Breakpoints
- And more

### Components

All UI components are built using shadcn/ui and can be customized in the `components/ui` directory.

## Best Practices

- ✅ Use TypeScript for type safety
- ✅ Follow accessibility guidelines
- ✅ Implement responsive design
- ✅ Optimize performance
- ✅ Write clean, maintainable code
- ✅ Use proper component structure
- ✅ Implement proper error handling
- ✅ Follow React best practices

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Framer Motion Documentation](https://www.framer.com/motion/)