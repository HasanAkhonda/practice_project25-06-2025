import Footer from "@/components/footer/Footer";
import Topbar from "@/components/Home/topbar/Topbar";


export default function ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <body>{children}</body>
        </div>
    );
}
