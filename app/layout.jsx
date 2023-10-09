"use client";

import { useRef } from "react";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
import "@styles/globals.css";

const RootLayout = ({ children }) => {
  const footerRef = useRef(null);

  return (
    <html lang="en">
      <header>
        <title>4TBlog</title>
        <meta name="description" content="My personal blog" />
      </header>
      <body className="bg-slate-50">
        <Nav footerRef={footerRef} />
        <main className="app overflow-auto">{children}</main>
        <Footer footerRef={footerRef} />
      </body>
    </html>
  );
};

export default RootLayout;
