export default {
  setTabletLocations(state, payload) {
    const tabletLocations = payload;

    for (let i = 0; i < tabletLocations.length; i++) {
      for (let j = 0; j < tabletLocations[i].classrooms.length; j++) {
        const classroomName = tabletLocations[i].classrooms[j].name
          .replace(/Lecture room/gi, "")
          .trim();
        tabletLocations[i].classrooms[j].name = classroomName;
      }
      tabletLocations[i].classrooms.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { numeric: true })
      );
      tabletLocations[i].classrooms.unshift({ id: 0, name: "DIJELJENE SLIKE" });
    }

    state.tabletLocations = tabletLocations;
  },
};
