"use client"

import Link from "next/link"
import Image from "next/image"

const Footer = ({footerRef}) => {
  return (
    <footer ref={footerRef} className="w-full bg-slate-100">
        <section className="flex-between max-w-7xl mx-auto mt-10 sm:px-16 px-6">
            <div>
                <p>&copy; 2023 4TBlog. All rights reserved.</p>
            </div>
            <div>
                <p className="font-bold text-lg font-opensans mt-2">Contact</p>
                <div className="flex items-center">
                    <Link href="https://github.com/ttt-tin" className="my-3 mx-2">
                        <Image 
                            src="/assets/images/github.svg"
                            alt="Github icon"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/trongtin-tran1703/" className="my-3 mx-2">
                        <Image 
                            src="/assets/images/linkedin.svg"
                            alt="Linkedin icon"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                    <Link href="https://www.facebook.com/tin.tranthanh1703/" className="my-3 mx-2">
                        <Image 
                            src="/assets/images/facebook.svg"
                            alt="Facebbok icon"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </Link>
                </div>
                <p className="font-bold text-lg font-opensans">Email</p>
                <p className="text-sm font-opensans mb-2">trongtin.tran1703@gmail.com</p>
            </div>
        </section>
    </footer>
  )
}

export default Footer