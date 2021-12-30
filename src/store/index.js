import { createStore } from 'vuex';

import coachesModules from './modules/coaches/index.js';

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
});

export default store;
