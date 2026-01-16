<<<<<<< HEAD
# Admin Guide - Profile Picture Upload

## How to Enable Profile Picture Upload (Owner Only)

By default, the profile picture is **view-only** for all visitors. Only you (the owner) can enable editing.

### To Enable Upload:

1. **Open** `components/Hero.tsx`
2. **Find** the ProfilePicture component (around line 47)
3. **Change** `isEditable={false}` to `isEditable={true}`

```tsx
// Change this:
<ProfilePicture size="large" isEditable={false} />

// To this:
<ProfilePicture size="large" isEditable={true} />
```

4. **Do the same** in `components/About.tsx` (around line 63)

```tsx
// Change this:
<ProfilePicture size="medium" isEditable={false} />

// To this:
<ProfilePicture size="medium" isEditable={true} />
```

5. **Save** the files and restart your dev server

### Security Note:
- When `isEditable={false}`, visitors cannot upload or modify your profile picture
- When `isEditable={true}`, you can hover over the profile picture to see upload/remove options
- The uploaded image is stored in browser localStorage (only visible to you)

### After Uploading:
- Your profile picture will persist across page refreshes
- It's stored locally in your browser
- To share the same image across devices, you'll need to upload it on each device

## Alternative: Use Static Image

If you prefer to use a static image file instead:

1. Add your profile image to the `public` folder (e.g., `public/profile.jpg`)
2. Update `components/ProfilePicture.tsx` to load from the public folder
3. This way, the image is part of your codebase and visible to everyone
=======
# Admin Guide - Profile Picture Upload

## How to Enable Profile Picture Upload (Owner Only)

By default, the profile picture is **view-only** for all visitors. Only you (the owner) can enable editing.

### To Enable Upload:

1. **Open** `components/Hero.tsx`
2. **Find** the ProfilePicture component (around line 47)
3. **Change** `isEditable={false}` to `isEditable={true}`

```tsx
// Change this:
<ProfilePicture size="large" isEditable={false} />

// To this:
<ProfilePicture size="large" isEditable={true} />
```

4. **Do the same** in `components/About.tsx` (around line 63)

```tsx
// Change this:
<ProfilePicture size="medium" isEditable={false} />

// To this:
<ProfilePicture size="medium" isEditable={true} />
```

5. **Save** the files and restart your dev server

### Security Note:
- When `isEditable={false}`, visitors cannot upload or modify your profile picture
- When `isEditable={true}`, you can hover over the profile picture to see upload/remove options
- The uploaded image is stored in browser localStorage (only visible to you)

### After Uploading:
- Your profile picture will persist across page refreshes
- It's stored locally in your browser
- To share the same image across devices, you'll need to upload it on each device

## Alternative: Use Static Image

If you prefer to use a static image file instead:

1. Add your profile image to the `public` folder (e.g., `public/profile.jpg`)
2. Update `components/ProfilePicture.tsx` to load from the public folder
3. This way, the image is part of your codebase and visible to everyone
>>>>>>> f0c692f (move nextjs app to root)
