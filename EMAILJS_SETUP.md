EmailJS setup instructions

1) Install package (already done):

```bash
npm install @emailjs/browser
```

2) Create EmailJS account at https://www.emailjs.com and configure:
   - Add Email Service (e.g., Gmail)
   - Create Email Template with variables: `from_name`, `from_email`, `message`
   - Note your **Service ID**, **Template ID**, and **Public Key** (user/public key)

3) Create a `.env` file at project root with these values. If you want, copy the provided `.env.example` file and replace placeholders.

```
VITE_EMAILJS_SERVICE_ID=service_lev7let
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=public_xxx
```

- `VITE_EMAILJS_SERVICE_ID` = `service_lev7let`
- `VITE_EMAILJS_TEMPLATE_ID` = ID template dari EmailJS
- `VITE_EMAILJS_PUBLIC_KEY` = public key/emailjs user ID

4) Restart dev server (`npm run dev`) so Vite picks up env vars.

5) Test by submitting the contact form.

Security note: Do not commit `.env` to the repository. Use deployment secrets for production.
