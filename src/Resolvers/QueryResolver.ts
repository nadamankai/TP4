export const Query = {

    cvs: (parent, args, { db }, info) => {
        return db.cv
    },
    getCv: (parent, { id }, { db }, info) => {
        return db.cv.find((cv) => cv.id === id)
    },
    users: (parent, args, { db }, info) => {
        return db.user
    },
    getUser: (parent, { id }, { db }, info) => {
        return db.user.find((user) => user.id === id)
    }
    ,
    skills: (parent, args, { db }, info) => {
        return db.skill
    },
    getSkill: (parent, { id }, { db }, info) => {
        return db.skill.find((skill) => skill.id === id)
    }
}