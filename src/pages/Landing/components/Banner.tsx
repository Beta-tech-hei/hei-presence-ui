import React from "react";

import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Icon,
    IconButton,
    createIcon,
    IconProps,
    useColorModeValue, ButtonGroup, Wrap,
} from '@chakra-ui/react';

import {BsListCheck, MdBuild, MdCall} from "react-icons/all";
import {AddIcon} from "@chakra-ui/icons";
import {ItemCard} from "../../../common/components/Card";
import {Datapicker} from "../../../common/components/DatePicker";
import {Addevent} from "../../../common/components/presenceService/Addevent";

export const Banner = () => (
    <Box display={"flex"} flexDirection={"column"} m={"3"}>
        <Stack direction='row' spacing={2} m={"2"}>

        {/*Bouton pour les actions*/}
            <Addevent/>
        <ButtonGroup size='sm' isAttached variant='outline' colorScheme='red'>
            <IconButton aria-label={"Verifier l'absence "} icon={<BsListCheck/>} />
            <Button>Vérifier une appel</Button>
        </ButtonGroup>

    </Stack>
        <Stack>
            <ItemCard quantity={0} label={"en retard avec mot d'excuse"}/>
            <ItemCard quantity={1} label={"en retard"}/>
            <ItemCard quantity={2} label={"Absence"}/>
        </Stack>
    </Box>
  );

