import React, { useState } from "react";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/redux.hooks";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import styles from "./Home.styles";
import clsx from "clsx";
import { searchCodeSaga } from "../../../redux/actions";
import CodeResults from "./CodeResults";
import { ApplicationState } from "../../../types/redux/application.state";

const Home = () => {
  const classes = styles();
  const dispatch = useReduxDispatch();
  const results = useReduxSelector((state) => state.codeSearchResults);
  const isReady = useReduxSelector(
    (state) => state.appState === ApplicationState.Available
  );

  const [snippet, setSnippet] = useState("");
  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSnippet(event.target.value);

  const handleSearch = () => {
    if (snippet.length !== 0) {
      dispatch(searchCodeSaga(snippet, page));
    }
  };

  const handlePreviousPage = () => {
    if (page > 1 && snippet.length !== 0) {
      dispatch(searchCodeSaga(snippet, page - 1));
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (results && results.total_count > 30 * page && snippet.length !== 0) {
      dispatch(searchCodeSaga(snippet, page + 1));
      setPage(page + 1);
    }
  };

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Typography variant="h6">Find similar snippets</Typography>
        <TextField
          id="search"
          label="Code snippet"
          variant="outlined"
          size="small"
          multiline
          value={snippet}
          className={classes.fullWidth}
          onChange={handleChange}
        />
        <Button
          color="primary"
          variant="outlined"
          className={clsx(classes.fullWidth, classes.button)}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Grid>

      <CodeResults
        isReady={isReady}
        results={results}
        onPreviousPage={handlePreviousPage}
        onNextPage={handleNextPage}
      />
    </>
  );
};

export default Home;
