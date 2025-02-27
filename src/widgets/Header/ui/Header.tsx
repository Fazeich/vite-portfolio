import React, { useEffect, useRef, useState } from "react";
import { HeaderWrapper, NavLink } from "../lib/styles";
import { PAGES } from "@/lib/router";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_ROUTE, IS_MOBILE } from "@/lib/constants";

export const Header = () => {
  const navigate = useNavigate();
  const currentRoute = useLocation()?.pathname?.replace(BASE_ROUTE, "");

  const lastScrollPos = useRef(window.scrollY);
  const isCooldown = useRef(false);

  const [isVisibleHeader, setIsVisibleHeader] = useState<boolean>(true);

  const handleChangeHeaderVisibility = (currentScrollPos: number) => {
    setIsVisibleHeader(lastScrollPos.current > currentScrollPos);

    lastScrollPos.current = currentScrollPos;
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (!isCooldown.current) {
      requestAnimationFrame(() => {
        handleChangeHeaderVisibility(currentScrollPos);

        isCooldown.current = false;
      });

      isCooldown.current = true;
    }
  };

  useEffect(() => {
    if (!IS_MOBILE) {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [IS_MOBILE]);

  return (
    <HeaderWrapper isVisibleHeader={isVisibleHeader}>
      {PAGES.map((page) => (
        <NavLink
          key={page.id}
          text={page.name}
          onClick={() => navigate(`${BASE_ROUTE}${page.link}`)}
          size={24}
          active={Boolean(currentRoute === page.link)}
        />
      ))}
    </HeaderWrapper>
  );
};
