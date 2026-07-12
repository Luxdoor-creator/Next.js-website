import "./globals.css";

export const metadata = {
  title: "Bohne & Zeit — Kaffeehaus",
  description:
    "Bohne & Zeit ist ein kleines Premium-Kaffeehaus mit hausgerösteten Bohnen, frischen Kuchen und einem entspannten Frühstück. Besuchen Sie uns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
