import { Form } from "react-router-dom";
import { RiImageLine } from "react-icons/ri";
import { BiX } from "react-icons/bi";
import { useState, useRef } from "react";
import ReactDOM from "react-dom/client";

export default function CreateBlog() {
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const [fileName, setFileName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const addedTagsRef = useRef();
  const fileInputRef = useRef();
  const previewImageRef = useRef();

  const fileHandler = (e) => {
    setFileName(e.target.value);

    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const addTagsHandler = () => {
    setTags((oldTags) => [...oldTags, tag]);
    const tagDiv = document.createElement("div");
    tagDiv.classList.add("tag");

    const tagNameDiv = document.createElement("div");
    tagNameDiv.classList.add("tag-name");
    tagNameDiv.innerText = tag;
    tagDiv.appendChild(tagNameDiv);

    const tagRemoveDiv = document.createElement("div");
    tagRemoveDiv.classList.add("tag-remove");
    ReactDOM.createRoot(tagRemoveDiv).render(<BiX />);
    tagRemoveDiv.addEventListener("click", (e) => {
      const index = tags.indexOf(tag);
      setTags((oldTags) => oldTags.filter((_, i) => i !== index));
      tagDiv.remove();
    });
    tagDiv.appendChild(tagRemoveDiv);

    addedTagsRef.current.appendChild(tagDiv);
    setTag("");
  };

  const updateTag = (e) => {
    setTag(e.target.value);
  };

  const resetAllFields = () => {
    setTag("");
    setTags([]);
    setFileName("");
    setImageUrl("");
    while (addedTagsRef.current.firstChild) {
      addedTagsRef.current.removeChild(addedTagsRef.current.firstChild);
    }
  };

  return (
    <div className="create-blog">
      <div className="heading">Create Blog</div>
      <Form>
        <div className="cover-image">
          <div className="col1">
            <div className="icon">
              {fileName ? (
                <img src={imageUrl} alt="Cover Image" ref={previewImageRef} />
              ) : (
                <RiImageLine />
              )}
            </div>
            <div className="instruction">
              {fileName ? (
                <div className="filename">
                  {fileName.substring(fileName.lastIndexOf("\\") + 1)}
                </div>
              ) : (
                <>
                  <div className="instruction-text">
                    Upload a picture to illustrate your challenge.
                  </div>
                  <div className="image-info">
                    PNG, JPG and JPEG (rec. 700x430px)
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="col2">
            <div className="image-input">
              <input
                type="file"
                name="cover-image"
                id="cover-image"
                ref={fileInputRef}
                onChange={fileHandler}
                value={fileName}
                hidden
              />
              <label htmlFor="cover-image">Browse</label>
            </div>
          </div>
        </div>
        <div className="title">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter the title"
            required
          />
        </div>
        <div className="content">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            placeholder="Enter the content"
            required
          ></textarea>
        </div>
        <div className="tags">
          <label htmlFor="tag-input">Tags</label>
          <div className="add-tag">
            <input type="text" name="tags" value={tags} />
            <input
              type="text"
              name="show-tags"
              id="show-tags"
              value={tag}
              onChange={updateTag}
              placeholder="Add tags"
            />
            <button type="button" id="add-tag" onClick={addTagsHandler}>
              Add
            </button>
          </div>
          <div className="added-tags" ref={addedTagsRef}></div>
        </div>
        <div className="action-btns">
          <button onClick={resetAllFields} type="reset" id="reset">
            Reset
          </button>
          <button type="submit" id="publish">
            Publish
          </button>
        </div>
      </Form>
    </div>
  );
}
