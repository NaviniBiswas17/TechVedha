# Quick Start Guide

## Run the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit **http://localhost:3000** to see your landing page.

## Customize Your Landing Page

### 1. Update Company Information

**File**: `components/Navbar.tsx` and `components/Footer.tsx`

```tsx
// Change company name
<span className="font-bold text-gray-900 text-lg">YourCompany</span>

// Update contact info in Footer.tsx
<a href="mailto:your@email.com">your@email.com</a>
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

### 2. Change Colors

**File**: `tailwind.config.ts`

Replace `green` with your brand color throughout the components:
- `bg-green-500` → `bg-blue-500`
- `text-green-500` → `text-blue-500`
- `hover:bg-green-600` → `hover:bg-blue-600`

### 3. Update Hero Content

**File**: `components/Hero.tsx`

```tsx
<h1>Your Headline Here</h1>
<p>Your description here</p>
```

### 4. Replace Hero Image

**File**: `components/Hero.tsx`

```tsx
<img
  src="your-image-url.jpg"
  alt="Your description"
/>
```

### 5. Modify Features

**File**: `components/Features.tsx`

Edit the `features` array:

```tsx
const features = [
  {
    icon: YourIcon,
    title: 'Your Feature',
    description: 'Your description',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  // Add more features...
]
```

### 6. Update Stats

**File**: `components/Stats.tsx`

```tsx
const stats = [
  { icon: Trophy, value: '15+', label: 'Your Metric' },
  // Update values...
]
```

### 7. Customize Process Steps

**File**: `components/Process.tsx`

Edit the `steps` array with your workflow.

### 8. Update Footer Links

**File**: `components/Footer.tsx`

```tsx
const footerLinks = {
  Company: ['Your', 'Links', 'Here'],
  // Add your sections...
}
```

## Deploy to Production

### Vercel (Recommended)

1. Push code to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy automatically

### Build Manually

```bash
npm run build
npm start
```

## Tips

- Keep animations subtle for better performance
- Optimize images before uploading
- Test on mobile devices
- Use real content instead of placeholders
- Add your own logo in the navbar

## Need Help?

Check the main README.md for detailed documentation.
