<<<<<<< HEAD
# 📸 How to Upload Your Profile Picture

## Quick Guide - Enable Profile Picture Upload

Follow these simple steps to enable profile picture upload in your portfolio:

### Step 1: Enable Editing in Hero Section (Main/Home)

1. Open the file: `components/Hero.tsx`
2. Find line 47 (look for `<ProfilePicture size="large" isEditable={false} />`)
3. Change `isEditable={false}` to `isEditable={true}`
4. Save the file

**Before:**
```tsx
<ProfilePicture size="large" isEditable={false} />
```

**After:**
```tsx
<ProfilePicture size="large" isEditable={true} />
```

### Step 2: Enable Editing in About Section

1. Open the file: `components/About.tsx`
2. Find line 63 (look for `<ProfilePicture size="medium" isEditable={false} />`)
3. Change `isEditable={false}` to `isEditable={true}`
4. Save the file

**Before:**
```tsx
<ProfilePicture size="medium" isEditable={false} />
```

**After:**
```tsx
<ProfilePicture size="medium" isEditable={true} />
```

### Step 3: Restart Your Development Server

After making the changes:

1. Stop your current server (press `Ctrl+C` in terminal)
2. Start it again:
   ```bash
   npm run dev
   ```

### Step 4: Upload Your Picture

1. **Open your portfolio** in the browser (usually `http://localhost:3000`)
2. **Hover your mouse** over the profile picture in the Hero or About section
3. You'll see a **camera icon** appear
4. **Click the camera icon**
5. **Select your image** from your computer
6. Your picture will appear immediately!

### How to Remove Your Picture

1. **Hover** over your profile picture
2. Click the **X icon** (red button) that appears
3. Your picture will be removed

## 📝 Important Notes

- ✅ Your uploaded picture is saved in your browser's localStorage
- ✅ It will persist even after refreshing the page
- ✅ Only you can see/edit it (visitors see it but can't change it)
- ⚠️ The image is stored locally - if you clear browser data, you'll need to upload again
- ⚠️ If you want the same picture on different devices, upload it on each device

## 🎨 Image Recommendations

- **Format**: JPG, PNG, GIF, or WebP
- **Size**: Recommended 400x400px or larger (square images work best)
- **File Size**: Keep under 2MB for best performance
- **Aspect Ratio**: Square (1:1) images look best

## 🔒 Security

- When `isEditable={true}`, you can upload/change your picture
- When `isEditable={false}`, no one can edit (view-only mode)
- After uploading, you can set it back to `false` to prevent accidental changes

## 🚀 Alternative: Use Static Image File

If you prefer to use a static image file (that's part of your code):

1. Add your image to the `public` folder: `public/profile.jpg`
2. The image will be visible to everyone and won't require localStorage
3. Contact me if you need help implementing this method

---

**Need Help?** If you encounter any issues, make sure:
- Your dev server is running
- You've saved both files after making changes
- You've restarted the server after changes
- You're hovering over the profile picture (not just clicking)
=======
# 📸 How to Upload Your Profile Picture

## Quick Guide - Enable Profile Picture Upload

Follow these simple steps to enable profile picture upload in your portfolio:

### Step 1: Enable Editing in Hero Section (Main/Home)

1. Open the file: `components/Hero.tsx`
2. Find line 47 (look for `<ProfilePicture size="large" isEditable={false} />`)
3. Change `isEditable={false}` to `isEditable={true}`
4. Save the file

**Before:**
```tsx
<ProfilePicture size="large" isEditable={false} />
```

**After:**
```tsx
<ProfilePicture size="large" isEditable={true} />
```

### Step 2: Enable Editing in About Section

1. Open the file: `components/About.tsx`
2. Find line 63 (look for `<ProfilePicture size="medium" isEditable={false} />`)
3. Change `isEditable={false}` to `isEditable={true}`
4. Save the file

**Before:**
```tsx
<ProfilePicture size="medium" isEditable={false} />
```

**After:**
```tsx
<ProfilePicture size="medium" isEditable={true} />
```

### Step 3: Restart Your Development Server

After making the changes:

1. Stop your current server (press `Ctrl+C` in terminal)
2. Start it again:
   ```bash
   npm run dev
   ```

### Step 4: Upload Your Picture

1. **Open your portfolio** in the browser (usually `http://localhost:3000`)
2. **Hover your mouse** over the profile picture in the Hero or About section
3. You'll see a **camera icon** appear
4. **Click the camera icon**
5. **Select your image** from your computer
6. Your picture will appear immediately!

### How to Remove Your Picture

1. **Hover** over your profile picture
2. Click the **X icon** (red button) that appears
3. Your picture will be removed

## 📝 Important Notes

- ✅ Your uploaded picture is saved in your browser's localStorage
- ✅ It will persist even after refreshing the page
- ✅ Only you can see/edit it (visitors see it but can't change it)
- ⚠️ The image is stored locally - if you clear browser data, you'll need to upload again
- ⚠️ If you want the same picture on different devices, upload it on each device

## 🎨 Image Recommendations

- **Format**: JPG, PNG, GIF, or WebP
- **Size**: Recommended 400x400px or larger (square images work best)
- **File Size**: Keep under 2MB for best performance
- **Aspect Ratio**: Square (1:1) images look best

## 🔒 Security

- When `isEditable={true}`, you can upload/change your picture
- When `isEditable={false}`, no one can edit (view-only mode)
- After uploading, you can set it back to `false` to prevent accidental changes

## 🚀 Alternative: Use Static Image File

If you prefer to use a static image file (that's part of your code):

1. Add your image to the `public` folder: `public/profile.jpg`
2. The image will be visible to everyone and won't require localStorage
3. Contact me if you need help implementing this method

---

**Need Help?** If you encounter any issues, make sure:
- Your dev server is running
- You've saved both files after making changes
- You've restarted the server after changes
- You're hovering over the profile picture (not just clicking)
>>>>>>> f0c692f (move nextjs app to root)
