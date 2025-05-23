import React, { useState } from 'react'
import SideBar from './SideBar.tsx';
import RightSideBar from './RightSideBar.tsx';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';
import Header from "./Header.tsx";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) => {
    const [isSideBarOpen,setIsSideBarOpen] = useState(false);
    const {pathname} = useLocation();
    console.log("pathname ",pathname);

    return (
        <div className='flex h-screen overflow-hidden relative'>

            {isSideBarOpen && <div
                className="fixed inset-0 bg-black/75 z-30 md:hidden
       transition-opacity duration-300 ease-in-out"
                onClick={()=> setIsSideBarOpen(!isSideBarOpen)}
                aria-hidden="true"
            />}


            {/*Left SiderBar  */}
            <SideBar isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen}/>
            {/*Main Content */}

            <div className='flex-1 overflow-auto bg-gray-100'>
                <button
                    onClick={() => setIsSideBarOpen(!isSideBarOpen)}
                    className="md:hidden h-6 w-6 p-6 bg-gray-100"
                    aria-label="Toggle menu"
                >
                    <Bars3Icon className="h-8 w-8 text-gray-500" />
                </button>
                <main className='p-3 sm:p-4 md:p-5 w-full'>
                    <Header />

                    {children}
                </main>
            </div>

            {pathname !== '/checkout'&& <div className='w-full md:w-[25%] hidden md:block mt-6 md:mt-0 overflow-auto'>
                <RightSideBar />
            </div>}

        </div>
    )
}

export default Layout