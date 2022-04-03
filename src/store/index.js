import { createStore } from 'vuex';

import classroomsModule from './modules/classrooms/index.js';
import locationsModule from './modules/locations/index.js';

const store = createStore({
    modules: {
        classrooms: classroomsModule,
        locations: locationsModule
    }
});

export default store;