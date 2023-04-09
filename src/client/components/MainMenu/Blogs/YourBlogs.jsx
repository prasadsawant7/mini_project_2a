import "./Blogs.css";
import AuthorProfileImage from "../../../../../public/assets/images/Weathers/Sunny.jpg";
import BlogCoverImage from "../../../../../public/assets/images/Weathers/Cold.jpg";
import { Link } from "react-router-dom";

export default function YourBlogs() {
  return (
    <div className="your-blogs">
      <div className="blog">
        <div className="author">
          <div className="author-profile-image">
            <img src={AuthorProfileImage} alt="Author Profile Image" />
          </div>
          <div className="author-details">
            <div className="author-name">Chintamani Joshi</div>
            <div className="published-date">Apr 16, 2023</div>
          </div>
        </div>
        <div className="content">
          <div className="blog-content">
            <div className="blog-title">
              How to grow mango trees in Winter and get better sweet fruit
            </div>
            <div className="blog-description">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                quod voluptate id ipsam, dolor veritatis velit saepe ut maxime
                molestias doloremque laboriosam minus maiores placeat, deleniti
                iure corrupti quam nulla ullam adipisci excepturi soluta enim!
                Officiis asperiores corporis totam. Dolores assumenda debitis
                quaerat autem, earum ratione commodi nesciunt officiis
                exercitationem! <Link to="#">read more ...</Link>
              </p>
            </div>
            <div className="blog-tags">
              <div className="tag">How To</div>
              <div className="tag">Mango</div>
              <div className="tag">Grow</div>
            </div>
          </div>
          <div className="blog-cover-image">
            <img src={BlogCoverImage} alt="Blog Cover Image" />
          </div>
        </div>
      </div>
    </div>
  );
}
