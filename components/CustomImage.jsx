import Image from "next/image"

const CustomImage = ({ src, alt, priority }) => {
  const prty = priority ? true : false
  
    return (
        <div className="w-full h-full">
            <Image 
                className="rounded-lg mx-auto my-3"
                src={src}
                alt={alt}
                width={650}
                height={500}
                priority={prty}
            />
        </div>
  )
}

export default CustomImage