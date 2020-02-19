import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import ActionsTable from './ActionsTable';

import styles from "./dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const [isActionsExpanded, setActionsExpanded] = useState(false);

  const handleToggleActionsExpanded = () => {
    setActionsExpanded(!isActionsExpanded);
  };

  return (
    <GridContainer>
      {isActionsExpanded ? (
        <GridItem xs={12} sm={12} md={12}>
          <ActionsTable
            isExpanded={true}
            onToggleExpand={handleToggleActionsExpanded}
          />
        </GridItem>
      ) : (
        <GridItem xs={12} sm={12} md={12}>
          <ActionsTable
            isExpanded={isActionsExpanded}
            onToggleExpand={handleToggleActionsExpanded}
          />
        </GridItem>
      )}
    </GridContainer>
  );
}
