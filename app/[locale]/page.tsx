import IndexClient from "./IndexClient";
import getAllBlog from "./actions/getAllBlog";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const currentUser = await getCurrentUser();
  const blogs = await getAllBlog({smalled: true});
  return (
      <IndexClient blogs={blogs} currentUser={currentUser}/>
  )
}
