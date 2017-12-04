/*
Reducers are piece of code to persist data in store.

*/

//as if this data/sate is coming from store

export default function () {
    return [
        {
            id: 1,
            first: "Murthy",
            last: "Sriram",
            age: 48,
            description: ".Net 4.5, MVC 6, React with Redux",
            thumbnail: "http://imgur.com/KU3b5Wn.jpg"
        },
        {
            id: 2,
            first: "Dhulipala",
            last: "Sri",
            age: 50,
            description: "C,C++,Java,J2EE,Spring Rest Services",
            thumbnail: "http://imgur.com/5fn3jRe.jpg"
        },
        {
            id: 3,
            first: "Kavitha",
            last: "Dhulipala",
            age: 40,
            description: "Softskills, Communication skills, Managerial skills",
            thumbnail: "http://imgur.com/Ob5S.jpg"
        }
    ]
}