export default {
    setLocations(state, payload) {

        const locations = payload;

        for (let i = 0; i < locations.length; i++) {
            for (let j = 0; j < locations[i].classrooms.length; j++) {
                const classroomName = locations[i].classrooms[j].name.replace(/Lecture room/ig, "").trim();
                locations[i].classrooms[j].name = classroomName;
            }
            locations[i].classrooms.sort((a, b) => a.name.localeCompare(b.name, undefined, {numeric: true}));
            locations[i].classrooms.unshift({ id: 0, name: "DIJELJENE SLIKE" });
        }

        state.locations = locations;
    }
}