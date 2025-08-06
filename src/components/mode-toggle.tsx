import { Moon, Sun } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { useTheme } from "@/hooks/use-theme"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface ModeToggleProps {
  className?: string
  backgroundClass?: string
}

export function ModeToggle({ className, backgroundClass }: ModeToggleProps) {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(theme === 'dark')
  }, [theme])

  const toggleTheme = () => {
    const newTheme = isDark ? 'light' : 'dark'
    setTheme(newTheme)
    setIsDark(!isDark)
  }

  return (
    <Toggle
      pressed={isDark}
      onPressedChange={toggleTheme}
      variant="default"
      size="sm"
      className={cn(
        "h-9 w-9 p-0",
        // Base styling
        "border-2 rounded-md",
        // Consistent red background in both light and dark mode
        "bg-red-900",
        "border-red-700",
        "text-white",
        // Hover states - slightly lighter red
        "hover:bg-red-800",
        "hover:border-red-600",
        // Pressed/Active states - slightly darker
        "data-[state=on]:bg-red-950",
        "data-[state=on]:text-white",
        // Smooth transitions
        "transition-all duration-200",
        // Focus states
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",
        // Apply custom background if provided (override default)
        backgroundClass,
        className
      )}
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Moon className={cn(
          "h-4 w-4",
          // Consistent white text for both modes
          backgroundClass 
            ? "text-white" 
            : "text-white"
        )} />
      ) : (
        <Sun className={cn(
          "h-4 w-4", 
          // Consistent white text for both modes
          backgroundClass 
            ? "text-white" 
            : "text-white"
        )} />
      )}
    </Toggle>
  )
}
