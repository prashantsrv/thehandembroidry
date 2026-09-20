# The Hand Embroidry — Website

React + Vite se banaya gaya simple business website (Home, Services, About, Contact).

## Local me chalana

```bash
npm install
npm run dev
```

## Ye 3 cheezein zaroor update karo — `src/siteConfig.js`

1. **Contact form email** — [web3forms.com](https://web3forms.com) pe free account bana ke access key lo, `web3formsAccessKey` me daal do. Isi email pe form ka message aayega.
2. **WhatsApp number** — `whatsappNumber` me country code ke saath number daalo (jaise `919876543210`, `+` ya space mat lagana).
3. **Social links** — `social.instagram` / `social.facebook` me pura URL daal do.

## Deploy (Vercel pe, free)

1. [vercel.com](https://vercel.com) pe GitHub se sign up karo.
2. Ye project GitHub pe push karo (naya repo bana ke).
3. Vercel me "New Project" → apna GitHub repo select karo → Deploy.
4. Deploy hone ke baad Vercel se ek `.vercel.app` link milega.

## Apna domain (thehandembroidry.com, GoDaddy) connect karna

1. Vercel project → Settings → Domains → apna domain (`thehandembroidry.com`) add karo.
2. Vercel jo DNS records (A record / CNAME) dikhayega, wahi GoDaddy me:
   GoDaddy → My Products → Domain → DNS → Manage → wahi records add/update karo.
3. DNS update hone me 15 min se 24 ghante lag sakte hain.

## Google pe brand search karne par aana (SEO)

1. Site live hone ke baad [Google Search Console](https://search.google.com/search-console) pe domain add/verify karo.
2. `https://thehandembroidry.com/sitemap.xml` submit karo Search Console me.
3. Google ko index hone me kuch din se 2-3 hafte lag sakte hain — normal hai.
