export const cv = {
    Query : {
        cvs: (parent, args, { db }, info) => {
            return db.cv
        },
        getCv: (parent, { id }, { db }, info) => {
            return db.cv.find((cv) => cv.id === id)
        },
        CvSkills: (cv, args, { db }) => {
            const skills = []
            for (const element of db.cv_skill) {
                if (cv.id === element.idCv) {
                    skills.push(db.skill.find((skill: any) => skill.id === element.idSkill))
                }
            }
            return skills
        },
        CvUser: (cvs, args, { db }) => {
            const c = db.cv.find((cv: any) => cv.id === cvs.id)
            return db.user.find((user: any) => user.id === c.idUser)
        }},
    Mutation : {

        },
    Subscription :{

        }
}