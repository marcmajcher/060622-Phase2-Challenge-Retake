import React from "react";

function NewPoemForm() {
  return (
    <form className="new-poem-form">
      <input placeholder="Title" />
      <input placeholder="Author" />
      <textarea placeholder="Write your masterpiece here..." rows={10} />
      <input type="submit" value="Share your masterpiece" />
    </form>
  );
}

export default NewPoemForm;
