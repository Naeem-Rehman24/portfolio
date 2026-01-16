# 📁 Images Directory

Place all your portfolio images in this folder.

## 🎯 **Priority Images** (Add These First!)

### 1. Profile Picture
- **File**: `profile.jpg` or `profile.png`
- **Recommended size**: 800x800px (square, 1:1 ratio)
- **Usage**: Hero and About sections
- **Format**: JPG or PNG
- **File size**: Under 300KB
- **Note**: You can also upload via the profile picture component

### 2. Project Screenshots (MOST IMPORTANT!)
Add screenshots of your actual projects with these exact names:

- `project-ecommerce.jpg` - E-Commerce Platform
- `project-task.jpg` - Task Management App  
- `project-dashboard.jpg` - Social Media Dashboard
- `project-blog.jpg` - Blog Platform

**Recommended specs:**
- Size: 1200x800px or 1600x900px
- Format: JPG or PNG
- File size: Under 500KB each
- Aspect ratio: 16:9 or 3:2

**How to enable:**
1. Add images to this folder
2. Open `components/Projects.tsx`
3. Find line ~148 and uncomment the Image component

## 🎨 **Optional Images**

### Hero Background (Optional)
- `hero-background.jpg` - Subtle background for hero section
- Size: 1920x1080px
- Keep it subtle (low opacity)

### About Background (Optional)
- `about-background.jpg` - Background for about section
- Size: 1920x1080px
- Very subtle pattern or texture

## 📝 **Image Optimization Tips**

1. **Compress before adding:**
   - Use TinyPNG.com or Squoosh.app
   - Keep file sizes small for faster loading

2. **Use appropriate formats:**
   - JPG for photos/screenshots
   - PNG for graphics with transparency
   - Next.js automatically converts to WebP

3. **Quality vs Size:**
   - Balance between quality and file size
   - Aim for under 500KB per image
   - Use compression tools to optimize

## ✅ **Quick Checklist**

- [ ] Add profile picture (`profile.jpg`)
- [ ] Add 4 project screenshots (with exact names above)
- [ ] Compress all images
- [ ] Test images load correctly
- [ ] Check responsive behavior

## 📚 **Where to Get Images**

- **Project Screenshots**: Take screenshots of your actual projects
- **Profile Picture**: Professional photo or use upload feature
- **Backgrounds**: Unsplash.com, Pexels.com (free stock photos)

See `WHERE_TO_USE_IMAGES.md` for complete guide!
