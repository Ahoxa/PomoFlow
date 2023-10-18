import React, { useState } from "react";
import {
  HStack,
  Image,
  Button,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModaleOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return (
    <HStack
      h="7vh"
      w="100vw"
      p="20px"
      bgColor="rgb(255, 238, 238)"
      justifyContent="center"
    >
      <Box
        maxW="60vw"
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Image src="PomoFlow.svg" alt="Logo" h="5vh" display="block" />
        <Button
          onClick={handleModaleOpen}
          bgColor="rgb(243,244,127)"
          fontWeight="500"
        >
          How 2 Use
        </Button>
      </Box>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay bg="rgba(0,0,0,0.3)" />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>How to use PomoFlow</ModalHeader>
          <ModalBody>
            トマトの下にある三枚のカードをクリックすると、タイマーがスタートします。カードごとの時間や、休憩時間は変更できます。
            ！！開発者--あとから英語と日本語切り替えを実装する。
          </ModalBody>
        </ModalContent>
      </Modal>
    </HStack>
  );
};

export default Header;
