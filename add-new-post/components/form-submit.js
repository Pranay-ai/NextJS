"use client";
import { useFormStatus } from "react-dom";
export default function FormSubmit() {
    const { pending } = useFormStatus();
  return (
    <>
            <button type="reset">Reset</button>
            <button disabled={pending} >{pending ? "Creating Post":"Create Post"}</button>
    </>

  );
}