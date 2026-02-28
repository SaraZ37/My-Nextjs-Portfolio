import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Sidebar from "@/components/Sidebar/Sidebar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// === النسخة النهائية: Filmmaker فقط بدون Director ===
export const metadata: Metadata = {
  // 1. العنوان الرئيسي
  title: "Sara Crew | Filmmaker",
  
  // 2. الوصف (تم حذف Director)
  description: "Official portfolio of Sara Crew. Professional Filmmaker specializing in documentary storytelling, film production, and visual arts.",
  
  // 3. الكلمات المفتاحية (تم تنظيفها)
  keywords: [
    "Sara Crew", 
    "Filmmaker",
    "Filmmaker Sweden", 
    "Documentary Filmmaker", 
    "Sara Al-Zeer", 
    "Film Production", 
    "Visual Storytelling", 
    "Cinema Portfolio"
  ],

  // 4. إعدادات التواصل الاجتماعي (تم حذف Director)
  openGraph: {
    title: "Sara Crew | Filmmaker Portfolio",
    description: "Explore the cinematic world of Sara Crew. Professional filmmaking and visual storytelling.",
    url: "https://www.saracrew.com",
    siteName: "Sara Crew",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/IMAGE.jpg", 
        width: 1200,
        height: 630,
        alt: "Sara Crew Filmmaker",
      },
    ],
  },

  // 5. تويتر (تم حذف Director)
  twitter: {
    card: "summary_large_image",
    title: "Sara Crew | Filmmaker",
    description: "Professional filmmaking portfolio of Sara Crew.",
    images: ["/logo/IMAGE.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} scroll-smooth`}> 
      <body className="flex flex-col min-h-screen antialiased bg-white text-gray-900"> 
        
        <Navbar/>
      
        <div className="flex w-full flex-grow"> 
          <aside className="w-72 bg-white shadow-xl border-r border-gray-100 hidden lg:block sticky top-0 h-screen overflow-y-auto">
            <Sidebar/>
          </aside>
          
          <main className="flex-grow py-8 px-6 lg:px-10"> 
            <div className="container mx-auto">
              {children} 
            </div>
          </main>
        </div> 
        
        <Footer/>
      </body>
    </html>
  );
}