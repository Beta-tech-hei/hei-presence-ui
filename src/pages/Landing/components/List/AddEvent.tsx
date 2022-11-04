import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input, Modal,
  ModalBody, ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay, Select, useDisclosure
} from "@chakra-ui/react";
import { Datapicker } from "../../../../common/components/DatePicker";

export const Addevent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  return (
    <>
      <Button onClick={onOpen}  bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>Ajout d' évènement</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajouter l' évènement</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nom de l'évènement</FormLabel>
              <Input ref={initialRef} placeholder='Le nom....' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input placeholder='Description...' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Lieu</FormLabel>
              <Input placeholder='Lieu' />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Date de l'évènement</FormLabel>
              <Datapicker/>
            </FormControl>
            
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Confirmer
            </Button>
            <Button onClick={onClose}>Annuler</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
