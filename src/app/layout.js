import Uilayout from '@/components/Ui_layout';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AntdRegistry>
       <Uilayout>
        {children}
       </Uilayout>
        </AntdRegistry>
      </body>
    </html>
  );
}
