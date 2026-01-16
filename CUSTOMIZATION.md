# Portfolio Customization Guide

## 🎨 Profile Picture Upload

Your portfolio now includes a **Profile Picture Upload** feature that works in both the Hero and About sections!

### How to Use:
1. **Hover over the profile picture** in the Hero or About section
2. **Click the camera icon** to upload a new image
3. **Click the X icon** to remove the current image
4. Your image is **automatically saved** in browser localStorage and will persist across page refreshes

### Supported Formats:
- JPG/JPEG
- PNG
- GIF
- WebP

### Image Sizes:
- **Hero Section**: Large (160px - 192px)
- **About Section**: Medium (128px)

## 🎨 White Background Sections

The portfolio now features **alternating backgrounds** for better visual contrast:

- **Dark Background**: Hero, Projects
- **White Background**: About, Skills, Contact

This creates a modern, professional look with better readability.

## ⚙️ Easy Customization

### 1. Configuration File
Edit `config/portfolio.config.ts` to customize:
- Personal information
- Social links
- About section content
- Skills and levels
- Projects
- Stats

### 2. Profile Picture
- Upload directly from the browser (no server needed!)
- Images are stored in browser localStorage
- Works in both Hero and About sections
- Hover to see upload/remove options

### 3. Colors
Edit `tailwind.config.js` to change:
- Primary colors
- Secondary colors
- Accent colors

### 4. Content
Update components directly:
- `components/Hero.tsx` - Hero section
- `components/About.tsx` - About section
- `components/Skills.tsx` - Skills section
- `components/Projects.tsx` - Projects section
- `components/Contact.tsx` - Contact section

## 📝 Quick Customization Steps

1. **Update Personal Info**: Edit `config/portfolio.config.ts`
2. **Upload Profile Picture**: Hover over profile picture and click camera icon
3. **Change Colors**: Edit `tailwind.config.js`
4. **Update Projects**: Edit `config/portfolio.config.ts` or `components/Projects.tsx`
5. **Modify Skills**: Edit `config/portfolio.config.ts` or `components/Skills.tsx`

## 🎯 Features Added

✅ Profile picture upload/display in Hero section
✅ Profile picture upload/display in About section
✅ White background sections (About, Skills, Contact)
✅ Dark background sections (Hero, Projects)
✅ Configuration file for easy customization
✅ LocalStorage persistence for profile pictures
✅ Professional color scheme
✅ Responsive design maintained

## 💡 Tips

- **Profile Pictures**: Use square images (1:1 ratio) for best results
- **Image Size**: Keep images under 2MB for better performance
- **Colors**: Test color combinations for accessibility
- **Content**: Keep descriptions concise and professional
