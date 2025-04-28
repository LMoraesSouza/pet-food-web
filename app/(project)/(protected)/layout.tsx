import { Header } from "@/app/components/header";

export default function ProtectedLayout({    
    children,
}: Readonly<{    children: React.ReactNode;
}>) {
    return (
        <div className="min-h-screen bg-[#FBF9F9]">            
            <Header />
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                {children}            
            </main>
        </div>
    )


}