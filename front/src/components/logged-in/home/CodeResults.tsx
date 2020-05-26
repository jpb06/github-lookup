import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Avatar,
  Grid,
  Button,
  Divider,
} from "@material-ui/core";
import styles from "./CodeResults.styles";
import GloballyBusy from "../../generic/globally-busy/GloballyBusy";
import { CodeSearchResult } from "../../../types/api/code.search.result";

interface CodeResultsProps {
  isReady: boolean;
  results: CodeSearchResult | null;
  onPreviousPage: () => void;
  onNextPage: () => void;
}

const CodeResults: React.FC<CodeResultsProps> = ({
  isReady,
  results,
  onPreviousPage,
  onNextPage,
}) => {
  const classes = styles();

  if (!isReady) return <GloballyBusy text="Searching ..." />;
  if (!results) return null;

  return (
    <>
      <Divider />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        {results.items.length > 0 && (
          <Typography align="left">
            <Button onClick={onPreviousPage}>Previous</Button>
            <Button onClick={onNextPage}>Next</Button>
          </Typography>
        )}
        <Typography align="right">{results.total_count} matches</Typography>
      </Grid>
      {results.total_count > 0 && (
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead className={classes.header}>
              <TableRow>
                <TableCell>Owner</TableCell>
                <TableCell>Repo</TableCell>
                <TableCell>Filename</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.items.map((el, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    <a
                      href={el.repository.owner.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Avatar
                        src={el.repository.owner.avatar_url}
                        alt={el.repository.owner.login}
                      />
                    </a>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <a
                      href={el.repository.html_url}
                      target="_blank"
                      className={classes.link}
                      rel="noopener noreferrer"
                    >
                      {el.repository.name}
                    </a>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    <a
                      href={el.html_url}
                      target="_blank"
                      className={classes.link}
                      rel="noopener noreferrer"
                    >
                      {el.name}
                    </a>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default CodeResults;
