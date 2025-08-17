# 🚀 **Portfolio Customization Guide - Make It Your Own!**

## **Step 1: Fork & Clone**
```bash
# Fork this repository on GitHub, then clone your fork
git clone https://github.com/YOUR_USERNAME/Portfolio.git
cd Portfolio
npm install
npm run dev
```

## **Step 2: Update Personal Information**

### **📍 Core Profile Data** (`src/lib/consolidatedData.ts`)
Find the `CORE_PROFILE_DATA` section and update:

```typescript
export const CORE_PROFILE_DATA = {
  // Update these fields
  name: "Your Full Name",
  role: "Your Job Title",
  initials: "YL", // Your initials
  
  // Update descriptions
  shortDescription: "Your professional tagline",
  experience: "Your experience summary (e.g., '5+ years of experience')",
  education: "Your education summary (e.g., 'Computer Science Degree')",
  
  // Update contact info
  contact: {
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    phoneDisplay: "(555) 123-4567",
    location: "Your City, State/Country",
    linkedin: "https://www.linkedin.com/in/your-profile/",
    github: "https://github.com/your-username"
  }
}
```

### **📧 Contact Section UI** (same file)
Update the contact section text:

```typescript
contactSection: {
  ui: {
    title: "Get In Touch",
    subtitle: "Let's Work Together",
    description1: "Customize this message about your availability...",
    description2: "Customize this message about how people can reach you..."
  },
  status: {
    availableStatus: "Your availability status",
    statusDescription: "More details about your availability",
    responseTimeDescription: "How quickly you respond to inquiries"
  }
}
```

## **Step 3: Update Experience Data**

### **📍 Work Experience** (same file)
Find `CORE_EXPERIENCE_DATA` and replace with your experience:

```typescript
export const CORE_EXPERIENCE_DATA = [
  {
    id: "exp-1",
    title: "Your Job Title",
    company: "Company Name",
    fromDate: "2023-01",
    toDate: "Present",
    details: "Describe your role and achievements...",
    technologies: ["React", "TypeScript", "Node.js"] // Your tech stack
  },
  // Add more experiences...
] as const;
```

## **Step 4: Update Education Data**

### **📍 Education** (same file)
Find `CORE_EDUCATION_DATA` and update:

```typescript
export const CORE_EDUCATION_DATA = [
  {
    id: "edu-1",
    title: "Your Degree",
    organization: "University Name",
    dates: "2020-2024",
    description: "Brief description of your studies...",
    technologies: ["Python", "Machine Learning", "Data Science"]
  }
] as const;
```

## **Step 5: Update Projects Data**

### **📍 Projects** (same file)
Find `CORE_PROJECTS_DATA` and replace with your projects:

```typescript
export const CORE_PROJECTS_DATA = [
  {
    id: "proj-1",
    title: "Project Name",
    organization: "Company/Personal",
    dates: "2024",
    description: "Describe what you built and its impact...",
    technologies: ["React", "Node.js", "MongoDB"],
    status: "completed" // or "active"
  }
] as const;
```

## **Step 6: Update Skills Data**

### **🛠️ Skills Section** (same file)
Find `CORE_SKILLS_SECTION` and update with your skills:

```typescript
export const CORE_SKILLS_SECTION = {
  skills: {
    "React": 4,        // Years of experience
    "TypeScript": 3,
    "Node.js": 3,
    "Python": 5
  },
  workedWith: {
    "Docker": "Used in production",
    "AWS": "Deployed multiple services"
  }
} as const;
```

## **Step 7: Update Section Titles**

### **🏷️ UI Strings** (same file)
Find `UI_STRINGS.sectionTitles` and customize:

```typescript
sectionTitles: {
  about: "About Me",
  experience: "Work Experience", // Customize as needed
  education: "Education & Training",
  projects: "Featured Projects",
  skills: "Technical Skills",
  portfolio: "Portfolio",
  writing: "Writing & Articles"
}
```

## **Step 8: Update Navigation**

### **🧭 Navigation Items** (`src/lib/navigation.ts`)
Customize the navigation labels:

```typescript
export const NAV_ITEMS = [
  { to: '/', label: 'Home', icon: 'home', section: 'hero' },
  { to: '/', label: 'Experience', icon: 'work', section: 'experience' },
  { to: '/', label: 'Projects', icon: 'folder', section: 'projects' },
  { to: '/', label: 'About', icon: 'person', section: 'about' },
  { to: '/', label: 'Contact', icon: 'email', section: 'contact' },
] as const;
```

## **Step 9: Customize Styling**

### **🎨 Theme Colors** (`src/styles/globals.css`)
Find the CSS variables and update colors:

```css
:root {
  --accent: 59 130 246; /* Your preferred accent color */
  --bg: 255 255 255;    /* Background color */
  --fg: 17 24 39;       /* Text color */
}
```

### **🎨 Tailwind Config** (`tailwind.config.js`)
Update brand colors if needed:

```javascript
theme: {
  extend: {
    colors: {
      accent: {
        DEFAULT: 'rgb(var(--accent))',
        // Add your custom color palette
      }
    }
  }
}
```

## **Step 10: Update Meta Information**

### **📄 Page Title & Description**
Update the main page title in `src/lib/consolidatedData.ts`:

```typescript
// This will be used for page titles
title: `${CORE_PROFILE_DATA.name} — ${CORE_PROFILE_DATA.role}`,
metaDescription: CORE_PROFILE_DATA.shortDescription,
```

## **Step 11: Test & Deploy**

```bash
# Test your changes
npm run dev

# Build for production
npm run build

# Deploy the dist/ folder to your hosting service
```

## **🎯 Quick Customization Checklist**

- [ ] Update name, role, and contact information
- [ ] Replace experience data with your work history
- [ ] Update education with your academic background
- [ ] Add your own projects
- [ ] Customize skills and technologies
- [ ] Update section titles and navigation labels
- [ ] Customize colors and styling
- [ ] Test all sections work correctly
- [ ] Deploy to your hosting service

## **💡 Pro Tips**

1. **Start with the data** - Update `consolidatedData.ts` first
2. **Use your resume** - Copy directly from your CV to save time
3. **Keep it simple** - Don't over-engineer, focus on content first
4. **Test incrementally** - Make small changes and test often
5. **Use real data** - Include actual projects and technologies you've used

## **🚨 Common Issues & Solutions**

- **Images not loading?** Replace placeholder URLs with your own images
- **Styling looks off?** Check that Tailwind CSS is properly configured
- **Build errors?** Make sure all TypeScript types are properly defined
- **Deployment issues?** Ensure your hosting service supports SPA routing

---

**That's it!** Follow these steps and you'll have a personalized portfolio in no time. The structure is already there - you just need to fill it with your own content! 🎉

---

## **📚 Additional Resources**

- **Tailwind CSS Documentation**: https://tailwindcss.com/docs
- **React Documentation**: https://react.dev
- **TypeScript Handbook**: https://www.typescriptlang.org/docs
- **Framer Motion**: https://www.framer.com/motion

## **🤝 Need Help?**

If you run into issues:
1. Check the browser console for errors
2. Verify all required fields are filled in the data files
3. Make sure all imports are correct
4. Check that the file structure matches the examples

---

**Happy customizing!** 🚀✨
