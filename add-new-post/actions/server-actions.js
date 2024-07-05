"use server";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";
import { uploadImageFirebase } from "@/lib/firebase-actions";
import { getImageUrl } from "@/lib/firebase-actions";
import {updatePostLikeStatus} from "@/lib/posts";
import { revalidatePath } from "next/cache";

export async function createPost(prevState, formData) {

    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

 
    let errors = [];
 
    if (!title || title.trim().length === 0) {
      errors.push("Title is required");
    }
    if (!content || content.trim().length === 0) {
      errors.push("Content is required");
    }
    if (!image) {
      errors.push("Image is required");
    }
    if (errors.length > 0) {
      return { errors };
    }
    
    const filename=`${title.trim()}-${Date.now()}`
    await uploadImageFirebase(image,filename)
    const imageUrl = await getImageUrl(filename)
    console.log(imageUrl)
 
    await storePost({
      imageUrl,
      title,
      content,
      userId: 1,
    });
    revalidatePath("/","layout")
    redirect("/feed");
  }


export async function likePost(postId){
    await updatePostLikeStatus(postId,2)
    revalidatePath("/",'layout')

}