import { defineType, defineField } from 'sanity';

export const pageSeo = defineType({
  name: 'pageSeo',
  title: 'Page SEO',
  type: 'document',
  icon: () => '🔎',
  description: 'Manage SEO meta tags for every page on the Wet Pets website',
  fields: [
    defineField({
      name: 'pageName',
      title: 'Page Name',
      type: 'string',
      description: 'Which page is this SEO for?',
      validation: (r) => r.required(),
      options: {
        list: [
          { title: 'Home Page', value: 'home' },
          { title: 'Products Page', value: 'products' },
          { title: 'Contact Page', value: 'contact' },
          { title: 'About Page', value: 'about' },
        ],
      },
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title (Title Tag)',
      type: 'string',
      description: 'Appears in Google search results & browser tab. 50–60 characters is ideal.',
      placeholder: 'e.g. Wet Pets Kolkata — Best Aquarium Store | Fish, Tanks & Supplies',
      validation: (r) =>
        r.required().max(70).warning('Best between 50–60 characters for Google'),
      // ── SEO-optimised examples per page ──────────────────────────────────
      // HOME:     "Wet Pets Kolkata | Best Aquarium Store — Fish, Tanks & Supplies"
      // PRODUCTS: "Buy Aquarium Fish, Tanks & Accessories Online | Wet Pets Kolkata"
      // CONTACT:  "Contact Wet Pets Kolkata | Visit Us, Call or WhatsApp 24/7"
      // ABOUT:    "About Wet Pets | Kolkata's #1 Aquarium & Ornamental Fish Store"
    }),

    defineField({
      name: 'seoDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Shown under the title in Google. 150–160 characters is ideal. Include your main keyword naturally.',
      // ── SEO-optimised examples per page ──────────────────────────────────
      // HOME:
      //   "Shop 200+ freshwater & marine fish, aquarium tanks, filters & supplies at Wet Pets Kolkata.
      //    Open 24/7. Expert advice. Free delivery on orders above ₹2000. Visit us today!"
      //
      // PRODUCTS:
      //   "Explore Wet Pets' full range of tropical fish, live plants, aquarium tanks, LED lighting,
      //    filtration systems & more. Best prices in Kolkata. Order online or visit in-store."
      //
      // CONTACT:
      //   "Get in touch with Wet Pets Kolkata. Visit our store, call us, or WhatsApp anytime 24/7.
      //    We're located in South Kolkata and offer expert aquarium guidance & fish care support."
      //
      // ABOUT:
      //   "Wet Pets is Kolkata's trusted aquarium and ornamental fish store. We offer premium livestock,
      //    aquarium equipment & professional fish care advice. Serving hobbyists since 2015."
      validation: (r) =>
        r.required().max(170).warning('Best between 150–160 characters for Google'),
    }),

    defineField({
      name: 'ogImage',
      title: 'Social Share Image (OG Image)',
      type: 'image',
      description:
        'Image shown when this page is shared on WhatsApp, Facebook, Instagram. Recommended size: 1200×630px.',
    }),

    defineField({
      name: 'seoKeywords',
      title: 'Focus Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
      description:
        'Add relevant search terms. Press Enter after each one. Examples: "aquarium store kolkata", "buy fish online kolkata", "freshwater fish kolkata", "aquarium tank price kolkata"',
    }),

    defineField({
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description:
        'Only fill this if the same content exists at multiple URLs. Leave blank for normal pages.',
    }),

    defineField({
      name: 'noIndex',
      title: 'Hide from Search Engines (noindex)',
      type: 'boolean',
      description: 'Turn ON to prevent Google from indexing this page. Keep OFF for all main pages.',
      initialValue: false,
    }),

    defineField({
      name: 'structuredData',
      title: 'Structured Data (JSON-LD)',
      type: 'text',
      rows: 10,
      description:
        'For advanced SEO. Paste a valid Schema.org JSON-LD block here to get rich results in Google (star ratings, business info, etc.). Example type: LocalBusiness, Product.',
      // Example LocalBusiness JSON-LD for Wet Pets:
      // {
      //   "@context": "https://schema.org",
      //   "@type": "PetStore",
      //   "name": "Wet Pets",
      //   "url": "https://wetpets.in",
      //   "telephone": "+91-XXXXXXXXXX",
      //   "address": {
      //     "@type": "PostalAddress",
      //     "streetAddress": "Your Street Address",
      //     "addressLocality": "Kolkata",
      //     "addressRegion": "West Bengal",
      //     "postalCode": "700XXX",
      //     "addressCountry": "IN"
      //   },
      //   "openingHours": "Mo-Su 00:00-23:59",
      //   "priceRange": "₹₹"
      // }
    }),
  ],

  preview: {
    select: { title: 'pageName', subtitle: 'seoTitle' },
    prepare({ title, subtitle }: { title: string; subtitle: string }) {
      const labels: Record<string, string> = {
        home: '🏠 Home Page',
        products: '🛒 Products Page',
        contact: '📞 Contact Page',
        about: '📖 About Page',
      };
      return { title: labels[title] ?? title, subtitle };
    },
  },
});
