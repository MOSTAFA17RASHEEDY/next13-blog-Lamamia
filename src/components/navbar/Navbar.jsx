'use client'
import Link from 'next/link';
import React from 'react'
import style from './page.module.css'
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
function Navbar() {

  const session = useSession()
  const router = useRouter()

    const links = [
        {
          id: 1,
          title: "Home",
          url: "/",
        },
        {
          id: 2,
          title: "Portfolio",
          url: "/portfolio",
        },
        {
          id: 3,
          title: "Blog",
          url: "/blog",
        },
        {
          id: 4,
          title: "About",
          url: "/about",
        },
        {
          id: 5,
          title: "Contact",
          url: "/contact",
        },
        {
          id: 6,
          title: "Dashboard",
          url: "/dashboard",
        },
      ];
  return (
    <div className={style.container}>
     <Link href={"/"} className={style.logo} >Lamamia</Link>
     <div className={style.links}>
       <DarkModeToggle/>
        {links.map((link)=>(
            <Link key={link.id} href={link.url} className={style.links}>
                {link.title}
            </Link>
        ))}
        {
          session.status === "authenticated" && (
            <button className={style.login}
            onClick={()=>{
              signOut()
            }} >logout</button>
          )
        }
        {
          session.status === 'unauthenticated' && (
            <button className={style.logout}
            onClick={()=>{
              router?.push("/dashboard/login")
            }} >LogIn</button>
          )
        }
     </div>
    </div>
  )
}

export default Navbar
