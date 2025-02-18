import React, { useEffect, useRef, useState } from "react";
import { HeaderWrapper, NavLink } from "../lib/styles";
import { PAGES } from "@/lib/router";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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

  const handleScroll = (e: Event) => {
    const currentScrollPos = window.scrollY;

    if (!isCooldown.current) {
      setTimeout(() => {
        handleChangeHeaderVisibility(currentScrollPos);

        isCooldown.current = false;
      }, 150);

      isCooldown.current = true;
    }
  };

  useEffect(() => {
    if (!IS_MOBILE) {
      document.addEventListener("scroll", handleScroll);

      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

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
