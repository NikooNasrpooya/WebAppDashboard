import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-50 text-gray-900">
        {/* Left rail */}
        <Sidebar />

        {/* Right side: column with topbar + page content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar /> {/* now spans the top of the content area */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
          
        </div>
      </body>
    </html>
  );
}

