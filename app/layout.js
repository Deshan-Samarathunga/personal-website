import "./globals.css";

const favicon =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23102a43'/%3E%3Ctext x='50' y='68' font-size='54' font-family='Arial' font-weight='900' fill='%23ffd400' text-anchor='middle'%3EDS%3C/text%3E%3C/svg%3E";

export const metadata = {
  title: "Deshan Samarathunga | Web App & ERP Developer",
  description:
    "Deshan Samarathunga - web application developer building custom web apps, ERP systems, and WordPress sites. Based in Sri Lanka.",
  authors: [{ name: "Deshan Samarathunga" }],
  openGraph: {
    title: "Deshan Samarathunga | Web App & ERP Developer",
    description:
      "I build custom web applications, ERP systems, and WordPress sites - from database to interface.",
    type: "website",
  },
  icons: {
    icon: favicon,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="is-loading">{children}</body>
    </html>
  );
}
