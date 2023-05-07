export const user = {
    users: (parent, args, { db }, info) => {
        return db.user
    },
    getUser: (parent, { id }, { db }, info) => {
        return db.user.find((user) => user.id === id)
    },
    cvs: (user, args, { db }) => db.cv.filter((cv: any) => cv.idUser === user.id)
}