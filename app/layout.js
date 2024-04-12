import "./ui/global.css";
import { meta } from "./data";

export const metadata = meta;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
