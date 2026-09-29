import "./globals.css";

export const metadata = {
  title: "MobiFlow AI",
  description: "Predictive Urban Mobility & Crisis Management Platform"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}