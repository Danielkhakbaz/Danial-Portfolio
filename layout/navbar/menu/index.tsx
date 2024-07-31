"use client";

import { ReactElement } from "react";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import {
  Link,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import {
  FaHome,
  FaLayerGroup,
  FaMoneyBillWave,
  FaCode,
  FaComments,
  FaBars,
} from "react-icons/fa";

const MotionComponent = dynamic(() => import("utils/motion"), {
  ssr: false,
});

type MenuItemsType = {
  href: string;
  label: string;
  mobileIcon: ReactElement;
};

export const menuItems: MenuItemsType[] = [
  {
    href: "/",
    label: "Home",
    mobileIcon: <FaHome style={{ fontSize: "15px" }} />,
  },
  {
    href: "/projects",
    label: "Projects",
    mobileIcon: <FaLayerGroup style={{ fontSize: "15px" }} />,
  },
  {
    href: "/experiences",
    label: "Experiences",
    mobileIcon: <FaMoneyBillWave style={{ fontSize: "15px" }} />,
  },
  {
    href: "/blog",
    label: "Blog",
    mobileIcon: <FaCode style={{ fontSize: "15px" }} />,
  },
  {
    href: "/guestbook",
    label: "Guestbook",
    mobileIcon: <FaComments style={{ fontSize: "15px" }} />,
  },
];

export const WebMenu = () => {
  const path = usePathname();

  return (
    <>
      {menuItems.map(({ href, label }) => {
        const isActive = path === href || path.startsWith(`${href}/`);

        return (
          <Link
            as={NextLink}
            key={label}
            href={href}
            display="flex"
            flexDirection="column"
            _hover={{ textDecoration: "none" }}
          >
            <Flex
              alignItems="center"
              transition="color 0.1s ease-in-out"
              _hover={{
                color: isActive ? "white" : "gray",
              }}
            >
              {label}
            </Flex>
            {isActive && (
              <MotionComponent
                tag="span"
                layoutId="active"
                style={{
                  width: "100%",
                  border: "0.1rem solid #28AABC",
                }}
              />
            )}
          </Link>
        );
      })}
    </>
  );
};

export const MobileMenu = () => {
  const path = usePathname();

  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<FaBars />}
        variant="outline"
      />
      <MenuList>
        {menuItems.map(({ href, label, mobileIcon }) => {
          const isActive = path === href || path.startsWith(`${href}/`);

          return (
            <MenuItem
              key={label}
              as={NextLink}
              href={href}
              icon={mobileIcon}
              backgroundColor="black.700"
              color={isActive ? "#28AABC" : "#FFF"}
              _hover={{
                color: "#28AABC",
              }}
            >
              {label}
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
