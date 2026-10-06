const endpoints = {
    posts:{
        list:"/posts",
        create:"/posts",
        detail:(id) => `/posts/${id}`,
        // update:(id) => `/update/${id}`,
        delete:(id) => `/posts/${id}`
    },
    users:{
        create:"/auth/register",
        login:"/auth/login"
    },
    category:{
        create:"/categories",
        list:"/categories",
        delete:(id) => `/categories/${id}`
    }
}

export default endpoints;