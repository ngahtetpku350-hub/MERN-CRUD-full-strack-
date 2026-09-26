import { Link } from "react-router-dom";
import { postList } from "../api/services/post";
import { useEffect, useState } from "react";

function Home() {
    const [post, setPosts] = useState([]);
    
      useEffect(() => {
        const fetchPosts = async () => {
          const getdata = await postList()
          console.log("API Response:", getdata);
          setPosts(getdata.data || [])
        };
        fetchPosts();
      }, [])
      useEffect(()=>{
        if (localStorage.removeItem("token")){
      toast.success("logout successfully")
      navigate('/')
    }
      })
    return (
        <div>
            <section className="border-b border-gray-200 bg-white">
                <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
                    <div className="max-w-3xl">
                        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
                            Welcome to MERN Blog
                        </p>

                        <h1 className="text-4xl font-bold tracking-tight text-gray-950 sm:text-6xl">
                            Discover ideas,
                            <br />
                            learn something new.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
                            Explore useful articles, tutorials and
                            ideas from our growing collection of posts.
                        </p>

                        <div className="mt-8 flex gap-3">
                            <Link
                                to="/posts"
                                className="rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
                            >
                                Explore Posts
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                            >
                                Create Account
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Header */}
      <div className="flex flex-col gap-6 border-b border-gray-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">Blog</p>

          <h1 className="mt-1 text-3xl font-bold tracking-tight text-gray-950">
            All Posts
          </h1>

          <p className="mt-2 text-gray-600">
            Explore all articles and tutorials.
          </p>
        </div>

        <Link
          to="/posts/create"
          className="inline-flex w-fit rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
        >
          Create Post
        </Link>
      </div>

      {/* Posts */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {post.map((post) => (
          <article
            key={post._id}
            className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                {post.category?.name}
              </span>

              <span className="text-xs text-gray-400">{post.date}</span>
            </div>

            <h2 className="mt-5 text-xl font-semibold text-gray-950">
              {post.title}
            </h2>

            <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">
              {post.description}
            </p>

            <Link
              to={`/posts/${post._id}`}
              className="mt-6 text-sm font-semibold text-black"
            >
              Read article →
            </Link>
          </article>
        ))}
      </div>
    </section>
        </div>
    );
}

export default Home;