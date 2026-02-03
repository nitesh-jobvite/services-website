# Make My Move - Packers & Movers Website

Professional, responsive website for a packers and movers business built with HTML, CSS, and vanilla JavaScript.

## 🚀 Features

- **Responsive Design**: Mobile-first approach, works on all devices
- **Top Header**: Contact phone number and social media links
- **Moving-themed Hero Section**: Professional background with call-to-action
- **Services Section**: 6 comprehensive moving services
  - House Moving
  - Office Relocation
  - Packing Services
  - Furniture Moving
  - Local Moves
  - Long Distance Moves
- **Why Choose Us**: 4 key selling points
- **About Section**: Company information with statistics
- **Enhanced Contact Form**: Name, Email, Phone, and Message fields
- **Email Integration**: Sends form submissions via EmailJS to me.nkj7@gmail.com
- **Form Validation**: Client-side validation with error messages
- **Smooth Scrolling**: Between sections
- **Animations**: Hover effects and scroll animations

## 📧 EmailJS Setup (REQUIRED)

The contact form uses EmailJS to send emails. Follow these steps to configure it:

### Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

### Step 2: Add Email Service

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Note your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template structure:

```
Subject: New Moving Quote Request from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from the Make My Move contact form.
```

4. Note your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (e.g., `abcdefgh12345678`)

### Step 5: Update JavaScript File

Open `js/script.js` and replace the placeholders:

```javascript
// Line 5-7: Initialize EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key

// Line 105-106: Service and Template IDs
const serviceID = 'YOUR_SERVICE_ID'; // Replace with your service ID
const templateID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
```

**Example:**
```javascript
emailjs.init("abcdefgh12345678");
const serviceID = 'service_abc123';
const templateID = 'template_xyz789';
```

## 🎨 Customization

### Change Colors

Edit `css/styles.css` and modify the CSS variables:

```css
:root {
    --color-primary: #1e3a8a;        /* Main blue */
    --color-primary-dark: #1e293b;   /* Dark blue */
    --color-accent: #3b82f6;         /* Accent blue */
    --color-text: #1f2937;           /* Text color */
    --color-text-light: #6b7280;     /* Light text */
}
```

### Update Contact Information

**Phone Number:**
- Update in `index.html` (lines 13-16 for top header)
- Update in contact section

**Email:**
- Update in contact section
- EmailJS will send to: `me.nkj7@gmail.com` (configured in template params)

**Location:**
- Update in contact section (line 252)

### Social Media Links

Update in `index.html` top header (lines 18-34):

```html
<a href="https://facebook.com/yourpage" target="_blank">...</a>
<a href="https://instagram.com/yourpage" target="_blank">...</a>
<a href="https://wa.me/6491234567" target="_blank">...</a>
```

### Add Real Moving Images

Replace the SVG placeholder in the hero section with a real image:

```css
/* In css/styles.css, find .hero-bg-image and replace with: */
.hero-bg-image {
    background-image: url('../images/moving-truck.jpg');
    background-size: cover;
    background-position: center;
}
```

Then add your image to an `images/` folder.

## 📁 File Structure

```
services-website/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── script.js       # All JavaScript
└── README.md           # This file
```

## 🌐 Deployment to GitHub Pages

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/make-my-move.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `main` branch
   - Click Save
   - Your site will be live at: `https://yourusername.github.io/make-my-move/`

## ✅ Testing Checklist

Before going live:

- [ ] Configure EmailJS with your credentials
- [ ] Test contact form submission
- [ ] Verify email arrives at me.nkj7@gmail.com
- [ ] Update all placeholder text and links
- [ ] Test on mobile devices
- [ ] Test on different browsers
- [ ] Check all social media links work
- [ ] Verify phone number is clickable
- [ ] Test smooth scrolling between sections
- [ ] Check form validation works correctly

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Form Validation Rules

- **Name**: Minimum 2 characters
- **Email**: Valid email format (example@domain.com)
- **Phone**: 8-15 digits (allows spaces, hyphens, parentheses)
- **Message**: Minimum 10 characters

## 🐛 Troubleshooting

### Form Not Sending Emails

1. Check browser console for errors (F12 → Console)
2. Verify EmailJS credentials are correct
3. Check EmailJS dashboard for error logs
4. Ensure you're not exceeding the monthly limit (200 emails/month on free plan)

### Styling Issues

1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check CSS file is properly linked
3. Verify CSS syntax (no missing brackets)

### Mobile Menu Not Working

1. Check JavaScript is loaded
2. Open browser console for errors
3. Test on different mobile devices

## 📧 Support

For questions or issues, contact: me.nkj7@gmail.com

## 📄 License

This website is for Make My Move. All rights reserved.

---

**Built with ❤️ for Make My Move - Your trusted moving partner**
