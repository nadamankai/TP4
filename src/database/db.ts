export const db =
{
    user: [
        {
            id: 1,
            name: "john",
            email: "john@example.com",
            role: "USER"
        },
        {
            id: 2,
            name: "pierre",
            email: "pierre@example.com",
            role: "USER"
        },
        {
            id: 3,
            name: "ahmed",
            email: "ahmed@email",
            role: "USER"
        }
    ],
    cv: [{
        id: 1,
        name: "cv1",
        age: 30,
        job: "job1",
        user: {
            id: 1,
            name: "john",
            email: "john@example.com",
            role: "USER"
        },
        skills: [{
            id: 1,
            designation: "d1"
        }],
    },
        {
            id: 2,
            name: "cv2",
            age: 31,
            job: "job2",
            user: {
                id: 2,
                name: "pierre",
                email: "pierre@example.com",
                role: "USER"
            },
            skills: [
                {
                    id: 2,
                    designation: "d2"
                }],
        }, {
            id: 3,
            name: "cv3",
            age: 32,
            job: "job3",
            user: {
                id: 2,
                name: "pierre",
                email: "pierre@example.com",
                role: "USER"
            },
            skills: [{
                id: 1,
                designation: "d1"
            },],
        }, {
            id: 4,
            name: "cv4",
            age: 33,
            job: "job4",
            skills: [{
                id: 1,
                designation: "d1"
            },
                {
                    id: 2,
                    designation: "d2"
                }],
            user: {
                id: 3,
                name: "ahmed",
                email: "ahmed@email",
                role: "USER"
            },
        }],
    skill: [
        {
            id: 1,
            designation: "d1"
        },
        {
            id: 2,
            designation: "d2"
        }
    ],
}