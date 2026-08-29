import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://priyankaeshwaroju.com"),

  title: {
    default: "Priyanka Eshwaroju | Full-Stack Software Engineer",
    template: "%s | Priyanka Eshwaroju",
  },

  description:
    "Portfolio of Priyanka Eshwaroju, a Full-Stack Software Engineer with 3+ years of experience building web and AI applications using React.js, TypeScript, Node.js, Express.js, PostgreSQL, Supabase and LangChain.",

  keywords: [
    "Priyanka Eshwaroju",
    "Full Stack Developer",
    "Full Stack Software Engineer",
    "Software Engineer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "React.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Supabase",
    "LangChain",
    "RAG",
    "AI Developer",
    "Hyderabad Software Developer",
  ],

  authors: [
    {
      name: "Priyanka Eshwaroju",
      url: "https://priyankaeshwaroju.com",
    },
  ],

  creator: "Priyanka Eshwaroju",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://priyankaeshwaroju.com",
    title: "Priyanka Eshwaroju | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building production web and AI applications with React.js, TypeScript, Node.js, PostgreSQL and LangChain.",
    siteName: "Priyanka Eshwaroju Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Priyanka Eshwaroju | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer building production web and AI applications.",
  },

  alternates: {
    canonical: "https://priyankaeshwaroju.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
