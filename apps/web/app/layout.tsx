import { Geist, Geist_Mono, Public_Sans } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import { AiFab } from "@/components/ai-fab"
import { cn } from "@workspace/ui/lib/utils";

const publicSans = Public_Sans({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", publicSans.variable)}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            {children}
            <AiFab />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
