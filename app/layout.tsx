import { ReactNode } from "react";
import type { Metadata } from "next";
import Navbar from "components/layout/navbar";
import Footer from "components/layout/footer";
import ScrollToTop from "lib/utils/scroll-to-top";
import { ChakraProvider } from "lib/providers/chakra";
import { LatoFont } from "styles/font";
import { Container } from "@chakra-ui/react";
import "styles/globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Danial Khakbaz",
  description:
    "Welcome to Danial's portfolio, where creativity meets innovation in every pixel.",
  other: {
    "theme-color": "#000000",
    "color-scheme": "dark",
    "twitter:title": "Danial's Portfolio",
    "twitter:description":
      "Welcome to Danial's portfolio, where creativity meets innovation in every pixel.",
    "twitter:url": "https://danieloo.vercel.app/",
    "twitter:domain": "danieloo.vercel.app",
    "twitter:image": "https://danieloo.vercel.app/logos/dk-cover.jpeg",
    "twitter:card": "summary_large_image",
    "og:title": "Danial's Portfolio",
    "og:description":
      "Welcome to Danial's portfolio, where creativity meets innovation in every pixel.",
    "og:url": "https://danieloo.vercel.app/",
    "og:image": "https://danieloo.vercel.app/logos/dk-cover.jpeg",
    "og:type": "website",
  },
};

const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={LatoFont.className}>
        <ChakraProvider>
          <Navbar />
          <Container maxWidth="container.sm" minHeight="80vh" paddingY={6}>
            {children}
          </Container>
          <Footer />
          <ScrollToTop />
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
