import { IconHome, IconTools, IconFileInfo } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

export const Navbar = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <IconHome className="h-6 w-6 text-neutral-500 dark:text-white" />
        },
        {
            name: "Services",
            link: "/services",
            icon: <IconTools className="h-6 w-6 text-neutral-500 dark:text-white" />
        },
        {
            name: "About",
            link: "/about",
            icon: <IconFileInfo className="h-6 w-6 text-neutral-500 dark:text-white" />,
        }
    ]
    return (
        <nav className="fixed inset-0 flex items-start justify-center text-white z-40 h-[5rem]">
            <div className="flex justify-center items-center gap-5 py-2 border-[0.1px] border-[rgba(255,255,255,0.5)] bg-black rounded-full px-5 mt-5">
                {navItems.map((navItem: any, idx: number)=> (
                    <Link 
                    to={navItem.link}
                    key={idx}
                    className={cn(
                        "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
                      )}
                    >
                    <span className="block sm:hidden">{navItem.icon}</span>
                    <span className="hidden sm:block text-sm">{navItem.name}</span>
                    </Link>
                ))}
                <button className="border text-l font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
                     <Link to='/login'><span>Login</span></Link>
                    <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
                </button>
            </div>
        </nav>
    )
}