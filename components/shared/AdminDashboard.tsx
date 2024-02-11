"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const AdminDashboard = () => {
  const pathname = usePathname();

  const navItems = [
    { title: 'Recent Activity', url: '/adminactivity', img: '/assets/bell.png' },
    { title: 'Users', url: '/adminusers', img: '/assets/users.png' },
    { title: 'Categories', url: '/admincategories', img: '/assets/categories.png' },
    { title: 'Products', url: '/adminproducts', img: '/assets/products.png' },
    { title: 'Orders', url: '/adminorders', img: '/assets/orders.png' },
    { title: 'Announcements', url: '/adminannoucements', img: '/assets/speaker.png' },
    { title: 'Layout', url: '/adminlayout', img: '/assets/layout.png' },
  ];

  return (
    <div className="hidden w-full border-r bg-gray-100/40 lg:block">
      <div className="w-[17rem] fixed flex h-full max-h-screen flex-col gap-2">
        <div className="relative flex h-[60px] items-center border-b px-6">
          <div className="flex items-center gap-2 font-semibold">
            <Image 
              src={"/assets/dash.png"}
              alt={"dashboard icon"}
              width={24}
              height={24}
            />
            <span className="text-heading4-bold">Dashboard</span>
          </div>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.url}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 ${pathname === item.url ? "bg-gray-300 text-gray-900" : ""} hover:bg-gray-100`}
                href={item.url}
              >
                <Image 
                  src={item.img}
                  alt={`${item.title} icon`}
                  width={24}
                  height={24}
                />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
