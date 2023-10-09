"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const PostCard = ({ id, title, createAt, tags}) => {
  const router = useRouter();

  const handlePostClick = () => {
    router.push(`/post/${id}`);
  };

  const handleTagClick = (tag, e) => {
    e.stopPropagation();
    router.push(`/tags/${tag}`);
  };

  const thumbnail = 'https://raw.githubusercontent.com/ttt-tin/blogposts/main/images/' + id + '.jpg'
  return (
    <div
      className="flex-start flex-row rounded-md border border-1 pr-5 cursor-pointer h-32 w-[44rem] box-border"
      onClick={() => {handlePostClick && handlePostClick()}}
    >
      <div className="h-full w-1/5 relative mr-5">
        <Image
          src={thumbnail}
          alt="Post thumbnail"
          fill
          object-fit="cover"
          className="rounded-l-md"
        />
      </div>
      <div className="flex flex-col items-start justify-between h-full w-4/5">
        <div>
          <p className="text-xl font-roboto font-bold mt-2">{title}</p>
          <p className="text-sm italic font-roboto mb-2 ml-1"> published on {createAt}</p>
        </div>
        <div className="">
          {tags.map((tag) => (
            <p key={tag} className="inline-block mr-1 p-1 rounded-lg font-inter text-sm cursor-pointer text-gray-700 border border-white hover:bg-slate-50 hover:border-slate-200" onClick={(e) => {handleTagClick && handleTagClick(tag, e)}}>#{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
