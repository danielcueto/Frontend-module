import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "./components/mode-toggle"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="h-screen w-full flex flex-col">
        <div className="flex items-center gap-2 p-2">
          <SidebarTrigger />
          <ModeToggle/>
        </div>
        <div className="flex-1 w-full">
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}