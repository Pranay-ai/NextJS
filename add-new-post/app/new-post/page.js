import { createPost } from "@/actions/server-actions";
import PostForm from "@/components/post-form";
 
export default function NewPostPage() {
  
  
 
  return <PostForm action={createPost} />;
}