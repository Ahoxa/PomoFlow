import React, {useRef} from "react";
import {
  Button,
  AlertDialog,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

const BackAlert = ({ isOpen, onClose, onConfirm }) => {
  const cancelRef = useRef();

  return (
    <AlertDialog
      isOpen={isOpen}
      onClose={onClose}
      motionPreset="slideInBottom"
      isCentered
      leastDestructiveRef={cancelRef}
    >
      <AlertDialogOverlay bg="rgba(0,0,0,0.3)" />
      <AlertDialogContent boxShadow="xl">
        <AlertDialogHeader >
          You are returning to the Home.
        </AlertDialogHeader>
        <AlertDialogCloseButton/>
        <AlertDialogBody >
          This timer will not be not saved. 
          Do you still want to go back to homepage?
        </AlertDialogBody>
        <AlertDialogFooter py={3} px={1}>
          <Button colorScheme="red" mr={3} onClick={onConfirm}>
            Yes
          </Button>
          <Button variant="ghost" mr={3} onClick={onClose}>
            No
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default BackAlert;
