import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      classrooms: [
        {
          id: '1',
          classroomName: 'Ada Lovelace',
        },
        {
          id: '2',
          classroomName: 'Eduard S. Penkala',
        },
        {
          id: '3',
          classroomName: 'Exhibition hall',
        },
        {
          id: '4',
          classroomName: 'Faust Vrančić',
        },
        {
          id: '5',
          classroomName: 'Galileo Galilei',
        },
        {
          id: '6',
          classroomName: 'Ivan Lupis',
        },
        {
          id: '7',
          classroomName: 'Ivan Picelj',
        },
        {
          id: '8',
          classroomName: 'Ivan Vučetić',
        },
        {
          id: '9',
          classroomName: 'Nikola Tesla',
        },
        {
          id: '10',
          classroomName: 'Ruđer Bošković',
        },
        {
          id: '11',
          classroomName: 'Steve Jobs',
        },
        {
          id: '12',
          classroomName: 'Slavko Krajcar',
        },
        {
          id: '13',
          classroomName: 'A4',
        },
        {
          id: '14',
          classroomName: 'A5',
        },
        {
          id: '15',
          classroomName: 'A6',
        },
        {
          id: '16',
          classroomName: 'A/V Production Studio',
        },
        {
          id: '17',
          classroomName: 'Art Studio',
        },
        {
          id: '18',
          classroomName: 'B2',
        },
        {
          id: '19',
          classroomName: 'C1',
        },
        {
          id: '20',
          classroomName: 'C2',
        },
        {
          id: '21',
          classroomName: 'C3',
        },
        {
          id: '22',
          classroomName: 'C5',
        },
        {
          id: '23',
          classroomName: 'C6',
        },
        {
          id: '24',
          classroomName: 'C10',
        },
        {
          id: '25',
          classroomName: 'D1',
        },
        {
          id: '26',
          classroomName: 'D2',
        },
        {
          id: '27',
          classroomName: 'D3',
        },
        {
          id: '28',
          classroomName: 'D5',
        },
        {
          id: '29',
          classroomName: 'D6',
        },
        {
          id: '30',
          classroomName: 'D7',
        },
        {
          id: '31',
          classroomName: 'D8',
        },
        {
          id: '32',
          classroomName: 'D9',
        },
        {
          id: '33',
          classroomName: 'D10',
        },
        {
          id: '34',
          classroomName: 'D11',
        },
        {
          id: '35',
          classroomName: 'D12',
        },
        {
          id: '36',
          classroomName: 'On Air Studio',
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
