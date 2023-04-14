import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { logo } from "../../images/images";
import { api } from "../../link/API";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const CustomerDis = () => {
  // sets location and navigation
  let navigate = useNavigate();
  const [datii, setData] = useState([]);

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  // const [isTab, setIsTab] = useState(false);
  // const [isempty, setIsEmpty] = useState(false);

  const getUser = useCallback(async () => {
    setIsAuthenticating(true);
    try {
      await fetch(`${api}/customers`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
        })
        .then(function (jsonData) {
          setData(jsonData);
          setIsAuthenticating(false);
          // if (jsonData === "Email in use by another user...") {

          //   return setIsEmpty(true);
          // } else if(jsonData !== "Email in use by another user..."){

          //   return setIsTab(true);
          // }
        });
    } catch (err) {
      console.error(err.message);
    }
  }, [setData]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getUser();
  }, [getUser]);
  const refresh = () => {
    return navigate("/");
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - datii.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // if (!isTab && !isempty && isAuthenticating)
  if (isAuthenticating) {
    // Result when user is still being authenticated
    return (
      <div className="center centerFlex1">
        <div style={{ display: "inline-block" }} className="loaderBig"></div>
      </div>
    );
  }
  // else if (!isTab && isempty && !isAuthenticating) {
  //   return (
  //     <>
  //       <div className="fixed-top bg-white bottomShadow">
  //         <div className="centerMarg center stuff limiter" onClick={refresh}>
  //           <img src={logo} alt="smartsheLogo" width="80px" />
  //           <h3 className="brown inlineBlock">SmartSHE</h3>
  //         </div>
  //       </div>

  //     <div className="center centerFlex1">
  //       <div
  //         className="atGrab1"
  //       >No Clients Yet</div>
  //     </div>
  //     </>
  //   );
  // }
  // else if (isTab && !isempty && !isAuthenticating)
  else {
    return (
      <>
        <div className="fixedct-top bg-white bottomShadow">
          <div className="centerMarg center stuff limiter" onClick={refresh}>
            <img src={logo} alt="smartsheLogo" width="80px" />
            <h3 className="brown inlineBlock">SmartSHE</h3>
          </div>
        </div>

        <TableContainer className={"pushDownMain"} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>S/N</StyledTableCell>
                <StyledTableCell>Company Name</StyledTableCell>
                <StyledTableCell align="right">ID</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right">CAC Reg</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Time(UTC)</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? datii.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : datii
              ).map((row, i) => {
                return (
                  <>
                    <StyledTableRow
                      key={row.client_name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {/* {Number(i) + Number(1)} */}
                        {row.row_number}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {row.client_name}
                      </StyledTableCell>
                      {/* <StyledTableCell align="right">{row.client_name}</StyledTableCell> */}
                      <StyledTableCell align="right">
                        {row.client_id}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.client_email}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.client_phoneno}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.client_reg}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {moment(row.c_date).format("MMMM Do YYYY")}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row.c_time}
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={8}
                  count={datii.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </>
    );
  }
};

export default CustomerDis;
