const mapUsers = (users) => {
    return {
        data: users,
        count: users.length,
    };
};

export const mapArticles = (articles) => {
    return {
        data: articles,
        count: articles.length,
    };
};

export default mapUsers;
