import React, { useState } from "react";
import styled from 'styled-components';
import WarningIcon from '@material-ui/icons/Warning';
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import ActionsTable from './ActionsTable';
import KpiCard from './KpiCard';
import SystemHealthPieCard from './SystemHealthPieCard';

const ReponsibleSystemsIcon = () => (
  <i className="fas fa-project-diagram"></i>
);

const ReportsCompletedIcon = () => (
  <i className="fas fa-user-check"></i>
);

const DashboardSectionTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 300;
`;

const Dashboard = () => {
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
        <>
          <GridItem xs={12}>
            <DashboardSectionTitle>To Do</DashboardSectionTitle>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <ActionsTable
              isExpanded={isActionsExpanded}
              onToggleExpand={handleToggleActionsExpanded}
            />
          </GridItem>
          <GridItem xs={12}>
            <DashboardSectionTitle>KPIs</DashboardSectionTitle>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <KpiCard
              colour="info"
              icon={<ReponsibleSystemsIcon />}
              title="Reponsible Systems"
              value={5}
              lastUpdated="yesterday"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <KpiCard
              colour="warning"
              icon={<WarningIcon />}
              title="Upcoming health reports"
              value={5}
              lastUpdated="yesterday"
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <KpiCard
              colour="success"
              icon={<ReportsCompletedIcon />}
              title="Reports completed"
              value={5}
              lastUpdated="yesterday"
            />
          </GridItem>
          <GridItem xs={12}>
            <DashboardSectionTitle>Task Overview</DashboardSectionTitle>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <SystemHealthPieCard />
          </GridItem>
        </>
      )}
    </GridContainer>
  );
};

export default Dashboard;
