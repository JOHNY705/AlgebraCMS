import { createStore } from 'vuex';

import classroomsModule from './modules/classrooms/index.js';

const store = createStore({
    modules: {
        classrooms: classroomsModule
    }
});

export default store;