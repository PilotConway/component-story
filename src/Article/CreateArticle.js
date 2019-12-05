import React from "react";
import PropTypes from "prop-types";

import { TextField, Box, Typography } from "@material-ui/core";

CreateArticle.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    content: PropTypes.string
  }),
  error: PropTypes.string,
  fieldErrors: PropTypes.object
};

CreateArticle.defaultProps = {
  onChange: () => {},
  value: { title: "", author: "", content: "" },
  error: null,
  fieldErrors: {}
};

export default function CreateArticle({ onChange, value, error, fieldErrors = {} }) {
  const changeArticle = field => event => {
    const newValue = event.target.value;
    onChange({ ...value, [field]: newValue });
  };
  return (
    <form>
      <Box display="flex" flexDirection="column">
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          label="Title"
          onChange={changeArticle("title")}
          value={value.title}
          error={!!fieldErrors.title}
          helperText={fieldErrors.title}
        />
        <TextField label="Author" onChange={changeArticle("author")} value={value.author} />
        <TextField
          label="Content"
          onChange={changeArticle("content")}
          value={value.content}
          rows={5}
        />
      </Box>
    </form>
  );
}
