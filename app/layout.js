import "./globals.css";

export const metadata = {
  title: "DeepThought Task 3",
  description: "Profile Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200 text-gray-900">
        {children}
      </body>
    </html>
  );
}
