'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { House, Moon, PawPrint, SignOut } from "@phosphor-icons/react";

export function Header(){ 
    const pathname = usePathname()

    const handleLogout = () => {
        console.log('Logout clicked')
    }

    const handleThemeToggle = () => {
        console.log('Theme toggle clicked')
    }

    return (
        <header className="bg-[#FBF9F9] shadow-sm">
            <nav className="px-6 sm:px-6 lg:px-8">                    
                <div className="flex justify-between py-5">
                    {/* Left side - Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/Icon.png"
                            alt="Logo"
                            width={48}
                            height={48}
                        />
                    </div>

                    {/* Center - Navigation */}
                    <div className="flex items-center">                            
                        <div className="flex space-x-4">
                            <Link 
                                href="/home"
                                className={`inline-flex items-center px-3 py-2 rounded-md  text-sm gap-2 font-medium ${
                                    pathname === '/home'
                                        ? 'bg-[#F5F0F0] text-[#628745]'   
                                        : 'border-transparent text-gray-500 hover:bg-[#EFE7E7] hover:text-gray-700'
                                }`}
                            >
                                
                                <House size={20} weight="regular" />
                                Home                                
                            </Link>
                            <Link
                                href="/settings"
                                className={`inline-flex items-center px-3 py-2 rounded-md text-sm gap-2 font-medium ${
                                    pathname === '/settings' 
                                        ? 'bg-[#F5F0F0] text-[#628745]'                                            
                                        : 'border-transparent text-gray-500 hover:bg-[#EFE7E7] hover:text-gray-700'
                                }`}
                            >
                                <PawPrint size={20} weight="regular" />
                                Settings                                
                            </Link>
                        </div>                        
                    </div>

                    {/* Right side - Action Buttons */}
                    <div className="flex items-center space-x-1">
                        <button
                            onClick={handleThemeToggle}
                            className="text-[#628745] hover:text-gray-700 focus:outline-none"
                        >
                            <Moon size={20} weight="regular" />
                        </button>
                        <button
                            onClick={handleLogout}
                            className="text-gray-500 hover:text-gray-700 focus:outline-none"
                        >
                            <SignOut size={20} weight="regular" />
                        </button>
                    </div>
                </div>                
            </nav>
        </header> 
    )
}
