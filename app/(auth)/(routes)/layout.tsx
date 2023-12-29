import { ThemeProvider } from "@/components/providers/theme-providers";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/mode-toggle"
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <span className="flex items-end justify-end relative top-4 right-4">
                <ModeToggle />
            </span>
            <div className={cn("h-full flex justify-center items-center bg-white dark:bg-[#313338]")}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem={false}
                >

                    {children}
                </ThemeProvider>
            </div>
        </>
    );
}

export default AuthLayout;