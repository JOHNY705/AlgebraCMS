export default {
    async loadClassrooms(context) {

        //... koristiti AXIOS
        const response = await fetch('link za dohvaćanje učiona');
        const responseData = await response.json();

        if (!response.ok) {
            //...
        }

        const classrooms = [];

        for (const id in responseData) {
            const classroom = {
                id: id,
                classroomName: responseData[id].classroomName
            };
            classrooms.push(classroom);
        }

        context.commit('setClassrooms', classrooms);
    }
}