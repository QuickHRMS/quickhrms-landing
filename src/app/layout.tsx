import './globals.css';

export const metadata = {
  title: 'QuickHRMS',
  description: 'Streamline HR with one powerful tool.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
