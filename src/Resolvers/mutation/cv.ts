export const cvMutation = {
    addCv: (parent, args, { db }, info) => {
        return db.cv
    },
    changeCv: (parent, { id }, { db }, info) => {
        return db.cv.find((cv) => cv.id === id)
    },
}