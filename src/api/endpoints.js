const endpoints = {
    posts:{
        list:"/posts",
        create:"/posts",
        // detail:(id) => `/detail/${id}`,
        // update:(id) => `/update/${id}`,
        // delete:(id) => `/delete/${id}`
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