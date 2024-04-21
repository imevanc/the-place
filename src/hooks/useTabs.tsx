import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type Tabs = {
  home: boolean;
  about: boolean;
  explore: boolean;
};

export const useTabs = (): Tabs => {
  const [tabs, setTabs] = useState<Tabs>({
    home: true,
    about: false,
    explore: false,
  });
  const pathname = usePathname();

  useEffect((): void => {
    switch (pathname) {
      case "/":
        setTabs({
          home: true,
          about: false,
          explore: false,
        });
        break;
      case "/about":
        setTabs({
          home: false,
          about: true,
          explore: false,
        });
        break;
      case "/explore":
        setTabs({
          home: false,
          about: false,
          explore: true,
        });
        break;
      default:
        setTabs({
          home: false,
          about: false,
          explore: false,
        });
        break;
    }
  }, [pathname]);
  return tabs;
};
