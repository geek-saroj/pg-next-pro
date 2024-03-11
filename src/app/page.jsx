import Link from "next/link";
import prisma from "../../lib/prisma";
import Post from "./components/Post";

async function getStaticProps() {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return feed;
}

export default async function Home() {
  const feed = await getStaticProps();
  // console.log({ feed });
  return (
    <div className="max-w-[1127px] 2xl:max-w-[1180px] mx-auto my-10 px-[30px] lg:px-[20px] md:px-0 ">
      <Link className="text-3xl font-bold mb-6 text-center text-red-500" href={"/add-post"}>Add post</Link>
      <h1 className="text-3xl font-bold mb-6 text-center">Feed</h1>
      {
        feed.map((post) => (
          <div key={post.id} className="bg-white shadow-lg text-center rounded-lg p-6 mb-6">
            <Post
              id={post.id}
              title={post.title}
              content={post.content}
              authorName={post.author.name}
            />
          </div>
        ))
      }
    </div>


  );
}
