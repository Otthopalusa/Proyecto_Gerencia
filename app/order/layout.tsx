import { linksHome } from "@/Data";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import ToastNotification from "@/components/Ui/ToastNotification";
import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";

export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
        const links = linksHome
    return (
        <>
            <Navbar links={links} pathname="/order/rice"/>
            <div className="md:flex bg-gray-200">
                <OrderSidebar/>
                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    {children}
                </main>
                <OrderSummary/>
                <ToastNotification/>
            </div>
            <Footer/>
        </>
    )
}
