import React from "react";
import { Box, Link } from "@chakra-ui/react";
import Image from "next/image";

function Footer() {
  const CONTENT_APP_URL = process.env.NEXT_PUBLIC_CONTENT_APP_URL;

  return (
    <Box
      boxShadow="xs"
      bg="white"
      w="100%"
      p={4}
      color="black"
      h={20}
      display="flex"
      alignItems="center"
      justifyContent="center"
      zIndex="2"
      position="fixed"
      bottom={0}
    >
      <Link href="https://www.tekdi.net/" isExternal>
        DEVELOPED BY
      </Link>
      <Image
        src={`/tekdiLogo.png`}
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </Box>
  );
}

export default Footer;
