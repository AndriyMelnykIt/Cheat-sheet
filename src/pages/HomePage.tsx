import React from 'react';
import ModuleAccordion from '../components/ModuleAccordion/ModuleAccordion.js';

import { modules } from '../../mock_db.ts';

const HomePage = () => {
  return (
    <div>
      {modules.map(module => <ModuleAccordion key={module.id} module={module}/>)}
    </div>
  );
};

export default HomePage;
