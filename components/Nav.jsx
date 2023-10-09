"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

const Nav = ({footerRef}) => {
  const [searchValue, setsearchValue] = useState("");
  const router = useRouter();

  const handleContactClick = () => {
    footerRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  const handleSearch = (searchValue) => {
    router.push(`/search?value=${searchValue}`);
  }

  return (
    <section className="w-full drop-shadow-md bg-white">
      <nav className="flex-between max-w-7xl mx-auto mb-16 py-2">
        <Link href="/">
          <div className="px-3 py-1 bg-black rounded-md text-white">
            <p className="font-signika text-3xl">4T</p>
          </div>
        </Link>

        <div className="relative mx-auto text-gray-500">
          <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-20 rounded-lg text-sm focus:outline-none"
            type="search" name="search" placeholder="Search" onChange={(e) => {setsearchValue(e.target.value)}} onKeyDown={(e) => {if (e.key === 'Enter') handleSearch && handleSearch(searchValue)}}/>
          <button type="submit" className="absolute right-0 top-0 h-10 w-10 flex flex-center" onClick={() => {handleSearch && handleSearch()}}>
            <Image 
              src="/assets/images/search.svg"
              alt="Search icon"
              width={20}
              height={20}
              className="object-contain"
            />
          </button>
        </div>

        <Link href="/category" className="nav_button">Category</Link>
        <Link href="/about" className="nav_button">About</Link>
        <button className="nav_button" onClick={() => {handleContactClick && handleContactClick()}}>Contact</button>
      </nav>
    </section>
  )
}

export default Nav