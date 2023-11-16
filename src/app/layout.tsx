import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
// <!-- Google Fonts -->
// import "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i";

// <!-- Vendor CSS Files -->
import "../assets/vendor/aos/aos.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/glightbox/css/glightbox.min.css";
import "../assets/vendor/remixicon/remixicon.css";
import "../assets/vendor/swiper/swiper-bundle.min.css";

// <!-- Template Main CSS File -->

import "../assets/css/style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Manyazewal Eshetu",
  description: "Website of Manyazewal Eshetu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Script src="../assets/vendor/purecounter/purecounter_vanilla.js" />
        <Script src="../assets/vendor/aos/aos.js" />
        <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
        <Script src="../assets/vendor/glightbox/js/glightbox.min.js" />
        <Script src="../assets/vendor/isotope-layout/isotope.pkgd.min.js" />
        <Script src="../assets/vendor/swiper/swiper-bundle.min.js" />
        <Script src="../assets/vendor/php-email-form/validate.js" />

        {/* <!-- Template Main JS File --> */}
        <Script src="../assets/js/main.js" />
      </body>
    </html>
  );
}
