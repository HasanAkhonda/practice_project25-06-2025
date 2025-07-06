import Footer from "@/components/footer/Footer";
import Topbar from "@/components/Home/topbar/Topbar";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <div className=" ">
      <Topbar />
      <body>
        {children}
      </body>
      <Footer />
    </div>


  );
}
