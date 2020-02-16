import React from 'react';
import classNames from 'classnames';
import SearchIcon from '@material-ui/icons/Search';
import CustomInput from 'components/CustomInput/CustomInput';
import Button from 'components/CustomButtons/Button';

const Search = ({
  classes,
}) => (
  <div className={classes.searchWrapper}>
    <CustomInput
      formControlProps={{
        className: classNames(classes.margin, classes.search),
      }}
      inputProps={{
        placeholder: 'Search',
        inputProps: {
          'aria-label': 'Search'
        }
      }}
    />
    <Button color="white" aria-label="edit" justIcon round>
      <SearchIcon />
    </Button>
  </div>
);

export default Search;
