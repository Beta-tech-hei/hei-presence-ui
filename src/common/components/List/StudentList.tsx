import * as React from "react";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";
import '../assets/box.css'

type Student = {
    Referant: string;
    Nom: string;
    prenom: string;
    statut: string;
};

const data: Student[] = [
    {
        Referant: "STD23001",
        Nom: "RAKOTONAHARY",
        prenom:"Nomena",
        statut: "present"
    },
    {
        Referant: "STD23006",
        Nom: "RAKOTONDRABE",
        prenom:"éric",
        statut: "absent"
    },
    {
        Referant: "STD23005",
        Nom: "RAKOTONAHARY",
        prenom:"Mino",
        statut: "présente"
    },
    {
        Referant: "STD23002",
        Nom: "RAKOTONOMENJANAHARY",
        prenom:"Alain",
        statut: "present"
    },
    {
        Referant: "STD23012",
        Nom: "RABE",
        prenom:"Jean Luc",
        statut: "present"
    },
    {
        Referant: "STD23026",
        Nom: "RAKOTOFIRINGA",
        prenom:"Naly",
        statut: "absent"
    },
    {
        Referant: "STD23023",
        Nom: "RAKOTONAHARY",
        prenom:"Fanatenana",
        statut: "present"
    },
    {
        Referant: "STD23001",
        Nom: "RAKOTONAHARY",
        prenom:"Nomena",
        statut: "present"
    },
    {
        Referant: "STD23001",
        Nom: "RAKOTONAHARY",
        prenom:"Nomena",
        statut: "present"
    },
    {
        Referant: "STD23001",
        Nom: "RAKOTONAHARY",
        prenom:"Nomena",
        statut: "present"
    },
    {
        Referant: "STD23001",
        Nom: "RAKOTONAHARY",
        prenom:"Nomena",
        statut: "present"
    },
    {
        Referant: "STD23001",
        Nom: "RAKOTONAHARY",
        prenom:"Nomena",
        statut: "present"
    },
    {
        Referant: "STD23001",
        Nom: "RAKOTONAHARY",
        prenom:"Nomena",
        statut: "present"
    },
    {
        Referant: "STD23001",
        Nom: "RAKOTONAHARY",
        prenom:"Nomena",
        statut: "present"
    },
    {
        Referant: "STD23001",
        Nom: "RAKOTONAHARY",
        prenom:"Nomena",
        statut: "present"
    },
    
];

const columnHelper = createColumnHelper<Student>();

const columns = [
    columnHelper.accessor("Referant", {
        cell: (info) => info.getValue(),
        header: "Identifiant"
    }),
    columnHelper.accessor("Nom", {
        cell: (info) => info.getValue(),
        header: "Nom"
    }),
    columnHelper.accessor("prenom", {
        cell: (info) => info.getValue(),
        header: "Prénom(s)",
    }),
    columnHelper.accessor("statut", {
        cell: (info) => info.getValue(),
        header: "Statut"
    })
];

export const  StudentList = ()=> {
    return (
        <ChakraProvider>
            <Box className="boxStyle">
                <DataTable columns={columns} data={data} />
            </Box>
        </ChakraProvider>
    );
}