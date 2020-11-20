import dva from 'dva';
import { persistEnhancer } from 'dva-model-persist';
import storage from 'dva-model-persist/lib/storage';

import 'modern-css-reset/dist/reset.min.css';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use({
  extraEnhancers: [
    persistEnhancer({
      key: 'model',
      storage,
    }),
  ],
});

// 3. Model
app.model(require('./models/Home').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
