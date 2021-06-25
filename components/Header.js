import Image from "next/image";
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { HSubDiv1 } from "./HSubDiv1";

export const Header = () => {
  return (
    <header className="flex">
      <div>
        <HSubDiv1 title="HOME" Icon={HomeIcon} />
        <HSubDiv1 title="HOME" Icon={CollectionIcon} />
        <HSubDiv1 title="HOME" Icon={BadgeCheckIcon} />
        <HSubDiv1 title="HOME" Icon={LightningBoltIcon} />
        <HSubDiv1 title="HOME" Icon={SearchIcon} />
        <HSubDiv1 title="HOME" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      />

      <div></div>
    </header>
  );
};
