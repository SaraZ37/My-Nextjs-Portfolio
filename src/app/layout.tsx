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

// === إعدادات الـ SEO المحدثة لنطاق saracrew.com ===
export const metadata: Metadata = {
  // العنوان الاحترافي الذي سيظهر في جوجل
  title: "Sara Crew | Filmmaker ",
  
  // الوصف الأساسي (Filmmaker) مع التركيز على الخبرة
  description: "Official portfolio of Sara Crew. Professional Filmmaker and Director specializing in documentary storytelling, film production, and visual arts.",
  
  // كلمات مفتاحية قوية جداً لجلب الزوار المهتمين بصناعة الأفلام
  keywords: [
    "Sara Crew", 
    "Filmmaker Sweden", 
    "Film Director", 
    "Documentary Filmmaker", 
    "Sara Al-Zeer", 
    "Female Director", 
    "Film Production", 
    "Visual Storytelling", 
    "Cinema Portfolio"
  ],

  // إعدادات الـ Open Graph (التي تظهر في واتساب وسوشيال ميديا)
  openGraph: {
    title: "Sara Crew | Filmmaker Portfolio",
    description: "Explore the cinematic world of Sara Crew. Award-winning films and professional directing.",
    url: "https://www.saracrew.com", // الرابط الجديد الخاص بكِ
    siteName: "Sara Crew",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/IMAGE.jpg", // تأكدي من وضع شعار شركتك بهذا الاسم في مجلد public
        width: 1200,
        height: 630,
        alt: "Sara Crew Logo",
      },
    ],
  },

  // إعدادات تويتر / X
  twitter: {
    card: "summary_large_image",
    title: "Sara Crew | Filmmaker",
    description: "Professional portfolio of Film Director Sara Crew.",
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
          
          {/* الشريط الجانبي */}
          <aside className="w-72 bg-white shadow-xl border-r border-gray-100 hidden lg:block sticky top-0 h-screen overflow-y-auto">
            <Sidebar/>
          </aside>
          
          {/* محتوى الصفحة */}
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