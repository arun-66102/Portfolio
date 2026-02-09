# Project Images Customization Guide

## 📁 Where to Store Project Images

Place your project images in the `public/` folder:

```
d:/Portfolio/public/
├── ARUNKUMAR K R_23CS020.jpg          # Your profile photo
├── certificates/                       # Certificate PDFs
├── projects/                          # Project images folder (recommended)
│   ├── routeX-screenshot.png
│   ├── just-chat-interface.png
│   ├── communHub-dashboard.png
│   ├── weather-prediction-chart.png
│   └── encryptor-cli-demo.png
└── index.html
```

## 🖼️ How to Update Project Images

### Step 1: Add Your Images
1. Create a `projects/` folder inside `public/` (optional but recommended)
2. Add your project screenshots/images with descriptive names

### Step 2: Update Project Data
Edit `src/components/Projects.tsx` and update the `image` field for each project:

```typescript
{
  id: 'sentiment-analysis',
  title: 'RouteX - PDF Routing System',
  description: 'A system that routes PDF documents...',
  image: '/projects/routeX-screenshot.png', // ← UPDATE THIS
  technologies: ['Transformers', 'LLM', 'ChromaDB'],
  liveUrl: 'https://pdf-router.streamlit.app/',
  githubUrl: 'https://github.com/arun-66102/PDF-Summarizer',
  date: '2026',
  category: 'AI Automation'
}
```

## 🎨 Image Guidelines

### Recommended Image Specifications:
- **Size**: 800x400 pixels (16:9 ratio)
- **Format**: PNG or JPG
- **File Size**: Under 500KB for fast loading
- **Content**: Project interface, dashboard, or representative visual

### Image Ideas:
- **Web Apps**: Screenshot of the main interface
- **ML Models**: Visualization of results or training process
- **CLI Tools**: Terminal output or help screen
- **APIs**: Postman interface or API documentation
- **Mobile Apps**: App screenshots

## 🔧 Current Projects and Image Paths

### 1. RouteX - PDF Routing System
```typescript
image: '/projects/routeX-screenshot.png'
```

### 2. Just-Chat - RAG based chatbot
```typescript
image: '/projects/just-chat-interface.png'
```

### 3. CommunHub - Community help hub
```typescript
image: '/projects/communHub-dashboard.png'
```

### 4. Weather Prediction System
```typescript
image: '/projects/weather-prediction-chart.png'
```

### 5. Encryptor - Java CLI App
```typescript
image: '/projects/encryptor-cli-demo.png'
```

## 🎯 Fallback System

If no image is provided or image fails to load, the system shows:
- **Category-specific icons** (🤖 for AI, 💬 for Chatbot, 🌐 for Full Stack, etc.)
- **Project title** as text
- **Gradient background**

## 🚀 Quick Setup Example

1. **Add images to public folder:**
```bash
# Create projects folder
mkdir d:/Portfolio/public/projects

# Add your images (copy/paste or save directly)
# routeX-screenshot.png
# just-chat-interface.png
# communHub-dashboard.png
# weather-prediction-chart.png
# encryptor-cli-demo.png
```

2. **Update the code:**
```typescript
// In src/components/Projects.tsx
const projects: Project[] = [
  {
    id: 'sentiment-analysis',
    title: 'RouteX - PDF Routing System',
    image: '/projects/routeX-screenshot.png', // Real image
    // ... rest of project data
  },
  // ... other projects
];
```

3. **Restart your development server:**
```bash
npm start
```

## 📱 Responsive Images

The images will automatically:
- **Scale** to fit the card (48px height)
- **Maintain aspect ratio**
- **Cover** the entire image area
- **Fallback** to icons if image fails to load

## 🎨 Design Tips

### Good Project Images:
- **Clear interface** showing the main functionality
- **High contrast** and readable text
- **Professional appearance**
- **Relevant to the project purpose**

### Avoid:
- **Blurry screenshots**
- **Too much text** that becomes unreadable
- **Personal information** or sensitive data
- **Very large files** that slow down loading

## 🔍 Testing Your Images

After adding images:
1. Check each project card displays the image correctly
2. Test on different screen sizes (mobile, tablet, desktop)
3. Verify hover effects still work
4. Ensure images load quickly

## 🆘 Troubleshooting

### Image Not Showing?
- Check file path is correct (starts with `/`)
- Verify image is in `public/` folder
- Check file name spelling (case-sensitive)
- Restart development server

### Image Looks Distorted?
- Use 16:9 ratio images (800x400px recommended)
- Check image quality before adding
- Test different image formats (PNG vs JPG)

---

**Need help?** Check the browser console for image loading errors!
