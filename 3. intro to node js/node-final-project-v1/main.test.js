const { expect, describe, it } = require("@jest/globals");

import mapUsers from "./getter.js";
import { mapArticles } from "./getter.js";
import mergeData from "./main.js"

describe("mapUsers", () => {
    it("returns an object with key data containing user data and count is the length of user data", () => {
        let user1 = [
            {
                "id": 1,
                "username": "alvinarkansas",
                "password": "PhT1Oky01",
                "gender": "male"
            },
            {
                "id": 2,
                "username": "anisatahira",
                "password": "oYt2Thj9w",
                "gender": "female"
            }
        ]
        let user2 = [
            {
                "id": 1,
                "username": "imamassi",
                "password": "YhI6ErG71",
                "gender": "male"
            }
        ]
        let result1 = {
            data: [
                {
                    "id": 1,
                    "username": "alvinarkansas",
                    "password": "PhT1Oky01",
                    "gender": "male"
                },
                {
                    "id": 2,
                    "username": "anisatahira",
                    "password": "oYt2Thj9w",
                    "gender": "female"
                }
            ],
            count: 2
        }
        let result2 = {
            data: [
                {
                    "id": 1,
                    "username": "imamassi",
                    "password": "YhI6ErG71",
                    "gender": "male"
                }
            ],
            count: 1
        }
        expect(mapUsers(user1)).toEqual(result1);
        expect(mapUsers(user2)).toEqual(result2);
    });
});

describe("mapArticles", () => {
    it("returns an object with key data containing articles data and count is the length of articles data", () => {
        let articles1 = [
            {
                "id": 1,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 1
            },
            {
                "id": 2,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 2
            },
            {
                "id": 3,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 3
            },
            {
                "id": 4,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 4
            },
        ]
        let articles2 = [
            {
                "id": 1,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 6
            },
            {
                "id": 2,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 5
            },
        ]
        let result1 = {
            data: [
                {
                    "id": 1,
                    "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "userId": 1
                },
                {
                    "id": 2,
                    "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "userId": 2
                },
                {
                    "id": 3,
                    "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "userId": 3
                },
                {
                    "id": 4,
                    "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "userId": 4
                },
            ],
            count: 4
        }
        let result2 = {
            data: [
                {
                    "id": 1,
                    "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "userId": 6
                },
                {
                    "id": 2,
                    "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                    "userId": 5
                },
            ],
            count: 2
        }
        expect(mapArticles(articles1)).toEqual(result1);
        expect(mapArticles(articles2)).toEqual(result2);
    });
});

describe("mergeData", () => {
    it("returns an object with key data containing articles data and count is the length of articles data", () => {
        let user1 = [
            {
                "id": 1,
                "username": "alvinarkansas",
                "password": "PhT1Oky01",
                "gender": "male"
            },
            {
                "id": 2,
                "username": "anisatahira",
                "password": "oYt2Thj9w",
                "gender": "female"
            }
        ]
        let user2 = [
            {
                "id": 1,
                "username": "imamassi",
                "password": "YhI6ErG71",
                "gender": "male"
            }
        ]
        let articles1 = [
            {
                "id": 1,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 1
            },
            {
                "id": 2,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 2
            },
            {
                "id": 3,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 3
            },
            {
                "id": 4,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 4
            },
        ]
        let articles2 = [
            {
                "id": 1,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 6
            },
            {
                "id": 2,
                "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "userId": 5
            },
        ]
        let result1 = {
            projectName: 'FINALPROJECT_BATCH3',
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.jUpPwPQdui7EECeGc4-YgYW1p5e1Wl0AtiUNPkx7-DI',
            users: {
                data: [
                    {
                        "id": 1,
                        "username": "alvinarkansas",
                        "password": "PhT1Oky01",
                        "gender": "male"
                    },
                    {
                        "id": 2,
                        "username": "anisatahira",
                        "password": "oYt2Thj9w",
                        "gender": "female"
                    }
                ],
                count: 2
            },
            articles: {
                data: [
                    {
                        "id": 1,
                        "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "userId": 1
                    },
                    {
                        "id": 2,
                        "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "userId": 2
                    },
                    {
                        "id": 3,
                        "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "userId": 3
                    },
                    {
                        "id": 4,
                        "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "userId": 4
                    },
                ],
                count: 4
            }
        }
        let result2 = {
            projectName: 'FINALPROJECT_BATCH3',
            accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.jUpPwPQdui7EECeGc4-YgYW1p5e1Wl0AtiUNPkx7-DI',
            users: {
                data: [
                    {
                        "id": 1,
                        "username": "imamassi",
                        "password": "YhI6ErG71",
                        "gender": "male"
                    }
                ],
                count: 1
            },
            articles: {
                data: [
                    {
                        "id": 1,
                        "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "userId": 6
                    },
                    {
                        "id": 2,
                        "article": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "userId": 5
                    },
                ],
                count: 2
            }

        }
        expect(mergeData(user1, articles1)).toEqual(result1);
        expect(mergeData(user2, articles2)).toEqual(result2);
    });
});