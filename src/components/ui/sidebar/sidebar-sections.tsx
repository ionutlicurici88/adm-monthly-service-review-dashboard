
import * as React from "react"
import { Image } from "@/components/ui/image"
import { cn } from "@/lib/utils"

export const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("flex flex-col gap-2 p-2 items-center", className)}
      {...props}
    >
      <Image
        src="/lovable-uploads/1ef9e097-d765-4a7f-a71a-e5ccde7a6c30.png"
        alt="Company Logo"
        width={40}
        height={40}
        className="opacity-70 hover:opacity-100 transition-opacity"
      />
    </div>
  )
})
SidebarHeader.displayName = "SidebarHeader"
