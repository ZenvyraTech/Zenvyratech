# Formspree Setup Guide

## Setting up Formspree for Contact Form

To make the contact form on the Zenvyra Tech website fully functional, you'll need to set up a Formspree account and configure it properly.

## Step-by-step Instructions

### 1. Create a Formspree Account
1. Visit [https://formspree.io](https://formspree.io)
2. Sign up for a free account or log in if you already have one
3. Once logged in, click on "Create a new form"

### 2. Configure Your Form
1. Enter the email address where you want to receive form submissions
2. Give your form a name (e.g., "Zenvyra Tech Contact Form")
3. Copy the unique form ID that Formspree generates for you

### 3. Update the Contact Component
1. Open `src/pages/Contact.jsx` in your project
2. Find the line containing: `useFormspree("YOUR_FORM_ID")`
3. Replace `"YOUR_FORM_ID"` with your actual Formspree form ID
4. Save the file

### 4. Example
```javascript
// Before
const [state, handleSubmit] = useFormspree("YOUR_FORM_ID");

// After (example)
const [state, handleSubmit] = useFormspree("xyourformid");
```

### 5. Test the Form
1. Deploy your site or run it locally with `npm run dev`
2. Navigate to the contact page
3. Submit a test message
4. Check your email for the form submission

## Features Included
- Name, email, subject, and message fields
- Loading state during submission
- Success/error messages
- Responsive design
- Validation for required fields

## Troubleshooting
- If the form doesn't submit, verify that your Formspree ID is correct
- Check that your Formspree email address is verified
- Ensure the form fields match what you expect to receive

## Security Notes
- Formspree handles spam protection automatically
- All submissions are sent directly to your email
- No server-side code needed