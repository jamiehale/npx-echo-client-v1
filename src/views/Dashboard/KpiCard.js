import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardIcon from "../../components/Card/CardIcon";
import CardFooter from "../../components/Card/CardFooter";
import styles from "./dashboardStyle";

const useStyles = makeStyles(styles);

const KpiCard = ({
  colour,
  icon,
  title,
  value,
  lastUpdated,
}) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color={colour} stats icon>
        <CardIcon color={colour}>
          {icon}
        </CardIcon>
        <p className={classes.cardCategory}>{title}</p>
        <h3 className={classes.cardTitle}>{value}</h3>
      </CardHeader>
      <CardFooter stats>
        <div className={classes.stats}>
          <i className="material-icons">update</i> Last updated {lastUpdated}
        </div>
      </CardFooter>
    </Card>
  );
};

export default KpiCard;
