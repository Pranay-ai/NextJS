"use client";
import { useFormState } from "react-dom";
import FormSubmit from "./form-submit";
 
export default function PostForm({ action }) {
  const [state, formAction] = useFormState(action, {});
 
  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
 
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
      {state.errors && (state.errors.map((error) => <p className="text-md text-red-700" key={error}>{error}</p>))}
    </>
  );
}