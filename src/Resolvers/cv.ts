import {GraphQLError} from "graphql/error";

export const cv = {
    Query: {
        cvs: (parent, args, {db,pubSub}, info) => {
            return db.cv
        },
        getCv: (parent, {id}, {db,pubSub}, info) => {
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
        CvSkills: (_, {id}, {db,pubSub}) => {
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
        CvUser: (_, {id}, {db,pubSub}) => {
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
        addCv: (cvs, {cv}, {db,pubSub}) => {
            cv = {...cv, id: Math.floor(Math.random() * 100000000)}
            db.cv.push(cv)
            pubSub.publish("cv",  cv );
            return cv
        },
        changeCv: (cvs, {id, cv}, {db,pubSub}) => {
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
            pubSub.publish("cv", cv);
            return cv
        },
        removeCv: (cvs, {id}, {db,pubSub}) => {
            db.cv = db.cv.filter(item => item.id !== id);
            pubSub.publish("cv", cv );

            return 1
        }
    },
    Subscription : {
        onChange: {
            subscribe: (_,args,{db,pubSub}) => {
              return  pubSub.subscribe("cv")
            },
            resolve: (payload) => {

                return payload;},


        }
    }
}