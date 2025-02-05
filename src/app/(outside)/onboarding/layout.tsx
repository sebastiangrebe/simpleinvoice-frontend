import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-8xl bg-neutral-100">
      {children}
    </div>
  );
}