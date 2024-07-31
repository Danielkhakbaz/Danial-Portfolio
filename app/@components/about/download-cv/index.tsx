import Link from "next/link";
import { Text, Button } from "@chakra-ui/react";
import { FaCircleArrowDown } from "react-icons/fa6";

const DownloadCV = async () => {
  return (
    <Link
      href="/pdf/Danial Khakbaz Resume 2024.pdf"
      target="_blank"
      locale={false}
    >
      <Button
        colorScheme="facebook"
        backgroundColor="#375695"
        color="white"
        display="flex"
        gap={2}
      >
        <Text>Download CV</Text>
        <FaCircleArrowDown />
      </Button>
    </Link>
  );
};

export default DownloadCV;
