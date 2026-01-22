# Arunkumar K R - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Sections**:
  - Hero section with personal introduction
  - Skills showcase with progress bars
  - Certificates gallery with download options
  - Contact form with social links
  - Smooth scrolling navigation

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Scripts** - Build tool

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arunkumar-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills showcase
│   ├── Certificates.tsx # Certificates gallery
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer section
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## Customization

### Personal Information

Update the following files with your personal information:

- **Hero.tsx**: Update name, title, and description
- **Contact.tsx**: Update contact information and social links
- **Footer.tsx**: Update footer information

### Skills

Edit the `skills` array in `Skills.tsx` to showcase your technical skills and proficiency levels.

### Certificates

Update the `certificates` array in `Certificates.tsx` to display your certifications and achievements.

### Styling

The project uses Tailwind CSS with custom color schemes defined in `tailwind.config.js`. You can customize colors, fonts, and other design tokens there.

## Deployment

### Netlify

1. Run `npm run build`
2. Upload the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically build and deploy your site

### GitHub Pages

1. Add `homepage` field to package.json
2. Run `npm run build`
3. Deploy the `build` folder to GitHub Pages

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or inquiries, please reach out through the contact form on the website or via email at arun8778jul@gmail.com.
