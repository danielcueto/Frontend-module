import { useState } from "react"
import { MessageCircle, Plus } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux"
import { selectThreads, selectSelectedThreadId } from "@/features/chat/chatSelectors"
import { addThread, selectThread } from "@/features/chat/chatSlice"
import { cn } from "@/lib/utils"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInput,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

export function AppSidebar() {
  const dispatch = useAppDispatch()
  const threads = useAppSelector(selectThreads)
  const selectedThreadId = useAppSelector(selectSelectedThreadId)
  const [newChannelName, setNewChannelName] = useState("")

  const handleSelectThread = (threadId: string) => {
    dispatch(selectThread(threadId))
  }

  const addChannel = () => {
    if (newChannelName.trim() === "") return
    
    const channelId = newChannelName.toLowerCase().replace(/\s+/g, '-')
    dispatch(addThread({
      id: channelId,
      name: newChannelName.trim()
    }))
    setNewChannelName("")
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Threads</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {threads.map((thread) => (
                <SidebarMenuItem key={thread.id}>
                  <SidebarMenuButton 
                    asChild
                    className={cn(
                      "cursor-pointer",
                      thread.id === selectedThreadId && "bg-main text-main-foreground"
                    )}
                  >
                    <div onClick={() => handleSelectThread(thread.id)}>
                      <MessageCircle />
                      <span>#{thread.name}</span>
                      {thread.unreadCount > 0 && (
                        <span className="ml-auto bg-chart-4 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                          {thread.unreadCount}
                        </span>
                      )}
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-3 gap-2">
        <div className="flex gap-2">
          <SidebarInput 
            placeholder="Nuevo canal" 
            value={newChannelName}
            onChange={(e) => setNewChannelName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addChannel()}
          />
          <Button size="sm" onClick={addChannel}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}