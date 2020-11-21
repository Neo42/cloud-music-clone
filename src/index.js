import createHistory from 'history/createBrowserHistory';
import dva from 'dva';
import 'modern-css-reset/dist/reset.min.css';
import './index.css';

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 3. Model
app.model(require('./models/User').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
