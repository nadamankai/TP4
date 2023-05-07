import {GraphQLError} from "graphql/error";

export const cv = {
    Query: {
        cvs: (parent, args, {db}, info) => {
            return db.cv
        },
        getCv: (parent, {id}, {db}, info) => {
            const cv = db.cv.find((cv) => cv.id === id)
            if (!cv) {
                throw new GraphQLError(`CV with id '${id}' not found.`, {
                    extensions: {
                        http: {
                            status: 400,
                            headers: {
                                "x-custom-header": "some-value",
                            },
                        },
                    },
                })
            }
            return cv
        },
        CvSkills: (_, {id}, {db}) => {
            const cv = db.cv.find((cv) => cv.id === id)
            if (!cv) {
                throw new GraphQLError(`CV with id '${id}' not found.`, {
                    extensions: {
                        http: {
                            status: 400,
                            headers: {
                                "x-custom-header": "some-value",
                            },
                        },
                    },
                })
            }
            return cv.skills
        },
        CvUser: (_, {id}, {db}) => {
            const cv = db.cv.find((cv) => cv.id === id)
            if (!cv) {
                throw new GraphQLError(`CV with id '${id}' not found.`, {
                    extensions: {
                        http: {
                            status: 400,
                            headers: {
                                "x-custom-header": "some-value",
                            },
                        },
                    },
                })
            }
            return cv.user
        }
    },
    Mutation: {
        addCv: (cvs, {cv}, {db}) => {
            cv = {...cv, id: Math.floor(Math.random() * 100000000)}
            db.cv.push(cv)
            return cv
        },
        changeCv: (cvs, {id, cv}, {db}) => {
            const index = db.cv.findIndex((cv) => cv.id === id)
            if (!cv) {
                throw new GraphQLError(`CV with id '${id}' not found.`, {
                    extensions: {
                        http: {
                            status: 400,
                            headers: {
                                "x-custom-header": "some-value",
                            },
                        },
                    },
                })
            }
            cv = {...db.cv[index], ...cv}
            db.cv.splice(index, 1, cv);
            return cv
        },
        removeCv: (cvs, {id}, {db}) => {
            db.cv = db.cv.filter(item => item.id !== id);
            return 1
        }
    },
    Subscription : {
        onChange: {
            subscribe: () => {

            },
            resolve: () => {

            }
        }
    }
}