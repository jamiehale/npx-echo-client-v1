import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import GeneralInfoPage from './GeneralInfoPage';
import HealthIndicatorsPage from './HealthIndicatorsPage';

const defaultReport = {
  facility: 'a',
  system: '12345',
  description: 'A system in the plant.',
  frequency: 'quarterly',
  systemEngineer: 'HALE, Jamie',
  backupSystemEngineer: 'SIMPSON, Homer',
  approver: 'BURNS, Montgomery',
};


const SystemHealthReportFlow = () => {
  const history = useHistory();
  const [report, setReport] = useState(defaultReport);

  const handleSubmitGeneralInfo = (report) => {
    setReport(report);
    history.push('/admin/reports/new/system-health-report/health-indicators')
  };

  const handleSubmitHealthIndicators = (report) => {
    setReport(report);
    history.push('/admin/reports');
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <Switch>
      <Route exact path="/admin/reports/new/system-health-report">
        <GeneralInfoPage
          report={report}
          onSubmit={handleSubmitGeneralInfo}
          onCancel={handleCancel}
        />
      </Route>
      <Route path="/admin/reports/new/system-health-report/health-indicators">
        <HealthIndicatorsPage
          report={report}
          onSubmit={handleSubmitHealthIndicators}
          onCancel={handleCancel}
        />
      </Route>
    </Switch>
  );
};

export default SystemHealthReportFlow;
