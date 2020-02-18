import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
    minWidth: '300px',
  },
}));

const GeneralInfoPage = ({
  report,
  onSubmit,
  onCancel,
}) => {
  const classes = useStyles();
  const [facility, setFacility] = useState(report.facility);
  const [system, setSystem] = useState(report.system);
  const [description, setDescription] = useState(report.description);
  const [frequency, setFrequency] = useState(report.frequency);
  const [systemEngineer, setSystemEngineer] = useState(report.systemEngineer);
  const [backupSystemEngineer, setBackupSystemEngineer] = useState(report.backupSystemEngineer);
  const [approver, setApprover] = useState(report.approver);

  useEffect(() => {
    setDescription(`This is the description for USI = ${system}.`);
  }, [system]);

  const handleChangeFacility = (e) => {
    setFacility(e.target.value);
  };

  const handleChangeSystem = (e) => {
    setSystem(e.target.value);
  };

  const handleChangeFrequency = (e) => {
    setFrequency(e.target.value);
  };

  const handleChangeSystemEngineer = (e) => {
    setSystemEngineer(e.target.value);
  };

  const handleChangeBackupSystemEngineer = (e) => {
    setBackupSystemEngineer(e.target.value);
  };

  const handleChangeApprover = (e) => {
    setApprover(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...report,
      facility,
      system,
      frequency,
      systemEngineer,
      backupSystemEngineer,
      approver,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Facility</FormLabel>
              <RadioGroup aria-label="facility" name="facility" value={facility} onChange={handleChangeFacility}>
                <FormControlLabel value="a" control={<Radio />} label="Bruce A" />
                <FormControlLabel value="b" control={<Radio />} label="Bruce B" />
              </RadioGroup>
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <FormControl className={classes.formControl}>
              <TextField label="System (USI)" value={system} onChange={handleChangeSystem} />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <FormControl className={classes.formControl}>
              <TextField label="Description" multiline rows="4" value={description} disabled />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <FormControl className={classes.formControl}>
              <FormLabel>Frequency</FormLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={frequency}
                onChange={handleChangeFrequency}
              >
                <MenuItem value="annually">Annually</MenuItem>
                <MenuItem value="quarterly">Quarterly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
              </Select>
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <FormControl className={classes.formControl}>
              <TextField label="System Engineer" value={systemEngineer} onChange={handleChangeSystemEngineer} />
            </FormControl>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <FormControl className={classes.formControl}>
              <TextField label="Backup System Engineer" value={backupSystemEngineer} onChange={handleChangeBackupSystemEngineer} />
            </FormControl>
          </GridItem>
          <GridItem xs={12}>
            <FormControl className={classes.formControl}>
              <TextField label="Approver" value={approver} onChange={handleChangeApprover} />
            </FormControl>
          </GridItem>
          <GridItem xs={12}>
            <Button onClick={onCancel}>Cancel</Button>
            <Button variant="contained" color="primary" type="submit">Next</Button>
          </GridItem>
        </GridContainer>
      </form>
    </div>
  );
};

export default GeneralInfoPage;
