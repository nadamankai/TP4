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
        idUser: 1
    },
    {
        id: 2,
        name: "cv2",
        age: 31,
        job: "job2",
        idUser: 2
    }, {
        id: 3,
        name: "cv3",
        age: 32,
        job: "job3",
        idUser: 3
    }, {
        id: 4,
        name: "cv4",
        age: 33,
        job: "job4",
        idUser: 3
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
    cv_skill: [
        {
            id: 1,
            idCv: 1,
            idSkill: 1
        },
        {
            id: 2,
            idCv: 1,
            idSkill: 2
        },
        {
            id: 3,
            idCv: 2,
            idSkill: 1
        },
        {
            id: 4,
            idCv: 2,
            idSkill: 2
        },
        {
            id: 5,
            idCv: 3,
            idSkill: 1
        },
    ]
}