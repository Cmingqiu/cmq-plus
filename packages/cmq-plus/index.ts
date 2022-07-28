// export * from '@cmq-plus/components';
import { App } from 'vue';

import Icon from '@cmq-plus/components/icon';
import Button from '@cmq-plus/components/button';

const components = [Icon, Button];

const install = (app: App) => {
  components.map((comp) => {
    app.component(comp.name, comp);
  });
};

export default { install };
