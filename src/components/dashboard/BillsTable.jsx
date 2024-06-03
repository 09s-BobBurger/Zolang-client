import React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const BillsTable = ({ current }) => {

    const formatter = (value) => {
        // 내림 처리
        return `₩${value.toLocaleString().split(".")[0]}`;
    }

    return (
        <div className="bills-table">
            <TableContainer>
                <Table
                    sx={{ color: "#ffffff" }}
                    aria-label="simple table"
                >
                    <TableBody>
                        <TableRow>
                            <TableCell
                                component="th"
                                scope="row"
                                width="30%"
                                align="center"
                            >
                                CPU
                            </TableCell>
                            <TableCell align="center">
                                {current ? formatter(current.totalCpuCost) : '-'}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                Memory
                            </TableCell>
                            <TableCell align="center">
                                {current ? formatter(current.totalMemoryCost) : "-"}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                Pod
                            </TableCell>
                            <TableCell align="center">
                                {current ? formatter(current.totalPodCost) : '-'}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                Base
                            </TableCell>
                            <TableCell align="center">
                                {current ? formatter(current.totalCost - current.totalCpuCost - current.totalPodCost - current.totalMemoryCost) : '-'}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BillsTable;