# Nicolas Gundel Management – Johannes Oerding

A professional artist management contact website showcasing Nicolas Gundel's management services for Johannes Oerding.

## 🎯 Features

- **Professional Design**: Clean, modern, and responsive layout
- **Multiple Sections**: About, Services, Contact, Social Media
- **Contact Form**: Fully functional form with validation
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Smooth Navigation**: Sticky navbar with smooth scrolling
- **Animations**: Engaging fade-in and hover effects
- **Form Validation**: Real-time email validation and error checking
- **Notification System**: User-friendly success/error messages
- **Accessibility**: Keyboard navigation support

## 📁 File Structure

```
├── index.html       # Main HTML file
├── styles.css       # Complete CSS styling
├── script.js        # Interactive JavaScript
└── README.md        # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary Dark**: #111
- **Primary Light/Gold**: #f4c400
- **Accent**: #ffd700
- **Background**: #f5f5f5

### Responsive Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 769px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

### Typography
- Font: Arial, Helvetica, sans-serif
- Smooth scroll behavior enabled
- Optimized line heights for readability

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations
- **Vanilla JavaScript**: No dependencies
- **Responsive Design**: Mobile-first approach

## ✨ Key Sections

### Header
- Professional title and tagline
- Gradient background effect
- Clear branding

### Navigation
- Sticky positioning
- Active link highlighting
- Smooth scrolling to sections

### About
- Manager profile information
- Professional description
- Contact hours and location

### Services
- Six key management services
- Grid layout with hover effects
- Clear descriptions

### Contact
- Two-column layout (desktop)
- Contact information sidebar
- Functional contact form with fields:
  - Name
  - Email
  - Subject
  - Inquiry Type (dropdown)
  - Message
- Form validation
- Success/error notifications

### Social Media
- Links to major platforms
- Instagram, Facebook, Spotify, YouTube, TikTok
- Centered layout with hover effects

## 🚀 Getting Started

### Clone the Repository
```bash
git clone https://github.com/preachperry32-cell/johannes-oerding-management.git
cd johannes-oerding-management
```

### Open Locally
Simply open `index.html` in your web browser.

### Deploy
Upload all files to your web hosting service:
- Upload `index.html`
- Upload `styles.css`
- Upload `script.js`

## 📝 Form Features

- **Real-time Validation**: Email format checked on blur
- **Required Fields**: All fields must be filled
- **Inquiry Type**: Dropdown with preset options
- **Success Notifications**: Confirmation message after submission
- **Error Handling**: Helpful error messages for validation failures
- **Form Reset**: Form clears after successful submission

## 🎯 Contact Information

Update these in the HTML:

```html
<!-- Email -->
<a href="mailto:contact@gundel-management.com">contact@gundel-management.com</a>

<!-- Phone -->
<a href="tel:+49123456789">+49 (0) 123 456789</a>

<!-- Location -->
Hamburg, Germany
```

## 🌐 Social Media Links

Update in the social section:

```html
<a href="YOUR_INSTAGRAM_URL" target="_blank" class="social-btn">Instagram</a>
<a href="YOUR_FACEBOOK_URL" target="_blank" class="social-btn">Facebook</a>
<!-- etc. -->
```

## 🎨 Customization

### Change Colors
Edit CSS variables in `styles.css`:

```css
:root {
    --primary-dark: #111;
    --primary-light: #f4c400;
    --accent: #ffd700;
    /* ... etc ... */
}
```

### Modify Services
Edit the services grid in `index.html`:

```html
<div class="service-card">
    <h3>🎯 New Service</h3>
    <p>Service description here</p>
</div>
```

### Update Contact Form
Modify inquiry types in the select dropdown:

```html
<select id="inquiry" name="inquiry" required>
    <option value="">Select type...</option>
    <option value="booking">Booking Inquiry</option>
    <!-- Add more options -->
</select>
```

## 💻 JavaScript Functions

- `initSmoothScrolling()` - Enables smooth page scrolling
- `handleFormSubmission()` - Processes contact form
- `showNotification()` - Displays success/error messages
- `updateActiveNavLink()` - Highlights current nav section
- `initAnimations()` - Adds scroll animations

## 🔒 Security Notes

⚠️ **Important**: This is a frontend-only website. To actually send emails:

1. Set up a backend service (Node.js, Python, PHP, etc.)
2. Configure email provider (SendGrid, Mailgun, AWS SES, etc.)
3. Update the form submission to send data to your backend
4. Never expose API keys in frontend code

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly buttons and links
- Optimized font sizes for all devices
- Single-column layout on mobile
- Hamburger menu ready (if needed)

## ♿ Accessibility Features

- Semantic HTML elements
- Keyboard navigation support
- Proper form labels
- Color contrast compliance
- Focus indicators on form fields

## 📊 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚖️ Legal Notice

**Demo Website Disclaimer**: This is a fictional design concept created for demonstration purposes only. It is not affiliated with or endorsed by Johannes Oerding, Nicolas Gundel, or their management.

## 📄 License

© 2026 Nicolas Gundel Management. All rights reserved.

---

## 🤝 Support

For questions or issues, contact:
- **Email**: contact@gundel-management.com
- **Phone**: +49 (0) 123 456789

**Professional Artist Management | Representing Excellence**
