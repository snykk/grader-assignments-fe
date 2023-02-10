import mapUsers, { mapArticles } from "./getter.js";
import dotenv from "dotenv";
dotenv.config();

function mergeData(usersData, articlesData) {
    var userMapping = mapUsers(usersData);
    var articlesMapping = mapArticles(articlesData);

    return {
        projectName: process.env.PROJECT_NAME,
        accessToken: process.env.ACCESS_TOKEN,
        users: userMapping,
        articles: articlesMapping,
    };
}

const users = [
    {
        id: 1,
        username: "isrotrip",
        password: "PhT1Oky01",
        gender: "male",
    },
    {
        id: 2,
        username: "dmtrxw",
        password: "oYt2Thj9w",
        gender: "male",
    },
    {
        id: 3,
        username: "afifahrahmak",
        password: "YhI6ErG71",
        gender: "female",
    },
    {
        id: 4,
        username: "ijtj",
        password: "cok1BgS77",
        gender: "male",
    },
    {
        id: 5,
        username: "arnoltherigan",
        password: "Ko4Rn0lD",
        gender: "male",
    },
];

const articles = [
    {
        id: 1,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 1,
    },
    {
        id: 2,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 2,
    },
    {
        id: 3,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 3,
    },
    {
        id: 4,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 4,
    },
    {
        id: 5,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 1,
    },
    {
        id: 6,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 2,
    },
    {
        id: 7,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 3,
    },
    {
        id: 8,
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userId: 5,
    },
];

console.log(mergeData(users, articles));

export default mergeData;
