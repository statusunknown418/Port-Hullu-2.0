export const HSubDiv1 = ({ title, Icon }) => {
  return (
    <div className="flex flex-col items-center cursor-pointer group w-10 sm:w-20 ">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 transition-all text-sm font-normal tracking-wider">
        {title}
      </p>
    </div>
  );
};
