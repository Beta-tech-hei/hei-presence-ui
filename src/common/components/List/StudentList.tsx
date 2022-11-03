import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./DataTable";

type UnitConversion = {
    fromUnit: string;
    toUnit: string;
    factor: number;
    statut: string;
};

const data: UnitConversion[] = [
    {
        fromUnit: "inches",
        toUnit: "millimetres (mm)",
        factor: 25.4,
        statut: "present"
    },
    {
        fromUnit: "feet",
        toUnit: "centimetres (cm)",
        factor: 30.48,
        statut: "present"
    },
    {
        fromUnit: "yards",
        toUnit: "metres (m)",
        factor: 0.91444,
        statut: "present"
    }
];

const columnHelper = createColumnHelper<UnitConversion>();

const columns = [
    columnHelper.accessor("fromUnit", {
        cell: (info) => info.getValue(),
        header: "Identifiant"
    }),
    columnHelper.accessor("toUnit", {
        cell: (info) => info.getValue(),
        header: "Nom"
    }),
    columnHelper.accessor("factor", {
        cell: (info) => info.getValue(),
        header: "Prénom(s)",
        meta: {
            isNumeric: true
        }
    }),
    columnHelper.accessor("statut", {
        cell: (info) => info.getValue(),
        header: "Statut"
    })
];

export const  StudentList = ()=> {
    return (
        <ChakraProvider>
            <DataTable columns={columns} data={data} />
        </ChakraProvider>
    );
}