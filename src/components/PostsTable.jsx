import React, { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "./../modules/materialUI-module";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  tableContainer: {
    marginBottom: 50,
    maxWidth: "95vw",
  },
  tableHeader: {
    backgroundColor: "#ed7520",
    boxShadow: "0px 15px 20px 0px rgba(0,0,0,0.2)",
  },
  row: {
    cursor: "pointer",
  },
  tableHeaderCell: {
    borderBottom: "none",
  },
});
export default function PostsTable({ posts }) {
  const classes = useStyles();

  let history = useHistory();

  let maxWidthShowBody = 600;

  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setwindowWidth(window.innerWidth);
  }
  function handleRedirect(postId) {
    history.push(`postDetail/${postId}`);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="ba-postsTable">
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell align="center" className={classes.tableHeaderCell}>
                PostId
              </TableCell>
              <TableCell align="center" className={classes.tableHeaderCell}>
                Title
              </TableCell>
              <TableCell
                align="center"
                className={classes.tableHeaderCell}
                style={{
                  display: windowWidth < maxWidthShowBody ? "none" : "block",
                }}
              >
                Body
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.map((row) => (
              <TableRow
                hover
                key={row.id}
                className={classes.row}
                onClick={() => handleRedirect(row.id)}
              >
                {Object.keys(row).map((key) => (
                  <TableCell
                    align="center"
                    key={row.id + key}
                    style={{
                      display:
                        windowWidth < maxWidthShowBody && key === "body"
                          ? "none"
                          : "",
                    }}
                  >
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
