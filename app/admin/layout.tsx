import AdminSidebar from "@/components/admin/AdminSidebar";
import Navbar from "@/components/Home/Navbar";
import ToastNotification from "@/components/Ui/ToastNotification";
import { linksHome } from "@/Data";


export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const links = linksHome
    return (
        <>
            <Navbar links={links} pathname="/admins/orders"/>
            <div className="md:flex">
                <aside className="md:w-72 md:h-screen bg-black">
                    <AdminSidebar />
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
                    {children}
                </main>
            </div>

            <ToastNotification />
        </>
    )
}