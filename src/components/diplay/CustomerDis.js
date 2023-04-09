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
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

  // if (!isTab && !isempty && isAuthenticating) 
  if (isAuthenticating) 
  {
    // Result when user is still being authenticated
    return (
      <div className="center centerFlex1">
        <div
          style={{ display: "inline-block" }}
          className="loaderBig"
        ></div>
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
  else  
  {
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
                <StyledTableCell>Company Name</StyledTableCell>
                <StyledTableCell align="right">ID</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Phone</StyledTableCell>
                <StyledTableCell align="right">CAC Reg</StyledTableCell>
                <StyledTableCell align="right">Date</StyledTableCell>
                <StyledTableCell align="right">Time</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {datii.map((row) => {
                return (
                  <>
                    <StyledTableRow
                      key={row.client_name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
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
            </TableBody>
          </Table>
        </TableContainer>
      </>
    );
  }
};

export default CustomerDis;
