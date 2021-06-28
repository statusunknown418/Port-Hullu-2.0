import router, { useRouter } from "next/router";

const HSubDiv1 = ({ Icon, title, usefulClick }) => {
  return (
    <div
      onClick={
        usefulClick
          ? () => router.push(`/?genre=fetch${usefulClick[1]}`)
          : () => router.push(title === "home" ? `/` : title)
      }
      className="group flex flex-col items-center cursor-pointer w-12 sm:w-20 ">
      <Icon className="h-8 mb-1 hover:animate-bounce" />
      <h3 className="uppercase opacity-0 group-hover:opacity-100 transition-all text-sm font-light tracking-wider">
        {title}
      </h3>
    </div>
  );
};

export default HSubDiv1;
