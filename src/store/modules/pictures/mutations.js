export default {
    setPictures(state, payload) {
        state.pictures = payload;
    },
    removePicture(state, payload) {
        const pictures = [];
        for (var i = 0; i < payload.pictures.length; i++) {
            if (payload.pictures[i].id !== payload.pictureID) {
                pictures.push(payload.pictures[i])
            }
        }
        state.pictures = pictures;
    }
}