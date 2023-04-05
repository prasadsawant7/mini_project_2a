import { useEffect, useState } from "react";
import "./Blogs.css";
import axios from "axios";
import { BiSearch, BiX } from "react-icons/bi";
import { useRef } from "react";

export default function Blogs() {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch("http://127.0.0.1:8000/product");
  //       const body = await res.json();
  //       if (body.status === "ok") {
  //         setProducts(body.data);
  //       }
  //       // console.log(products);
  //     } catch (err) {
  //       console.log("Can't fetch from API");
  //     }
  //   })();
  // }, [products]);
  // return (
  //   <div className="blogs">
  //     <table id="products">
  //       <thead>
  //         <tr>
  //           <th>Name</th>
  //           <th>Qnt In Stock</th>
  //           <th>Qnt Sold</th>
  //           <th>Unit Price</th>
  //           <th>Revenue</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {products.map((product) => (
  //           <tr key={product.id}>
  //             <td>{product.name}</td>
  //             <td>{product.quantity_in_stock}</td>
  //             <td>{product.quantity_sold}</td>
  //             <td>{product.unit_price}</td>
  //             <td>{product.revenue}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // );
  // const [content, setContent] = useState(null);
  // const [blog, setBlog] = useState(null);
  // useEffect(() => {
  //   (async () => {
  //     const url = "http://127.0.0.1:8000/blog/1";
  //     const config = {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     };
  //     const response = await axios.get(url, config);
  //     setBlog(response.data.data.content);
  //   })();
  // }, []);
  // const putContent = async () => {
  //   const url = "http://127.0.0.1:8000/blog/1";
  //   const data = {
  //     title: "Hello, How Are you?",
  //     image: "default",
  //     tags: "How To,Ramfal",
  //     content: content,
  //   };
  //   const config = {
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   };
  //   try {
  //     const response = await axios.put(url, data, config);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  // const updateContent = (e) => {
  //   setContent(e.target.value);
  // };
  // return (
  //   <div className="blog">
  //     {/* <textarea
  //       name="Content"
  //       id=""
  //       cols="50"
  //       rows="10"
  //       onChange={updateContent}
  //     ></textarea>
  //     <button onClick={putContent}>Submit</button> */}
  //     <div className="content">{blog}</div>
  //   </div>
  // );
  const [search, setSearch] = useState("");
  const resetButtonRef = useRef(null);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    if (e.target.value === "") {
      resetButtonRef.current.style.display = "none";
    } else {
      resetButtonRef.current.style.display = "flex";
    }
  };

  const resetUpdate = () => {
    setSearch("");
    resetButtonRef.current.style.display = "none";
  };

  return (
    <div className="blogs">
      <div className="container">
        <div className="header">
          <div className="heading">Blogs</div>
          <div className="search">
            <div className="search-bar">
              <div className="col1">
                <BiSearch className="search-icons" />
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search blog here"
                  value={search}
                  onChange={updateSearch}
                />
              </div>
              <div className="col2" ref={resetButtonRef}>
                <BiX className="search-icons" onClick={resetUpdate} />
              </div>
            </div>
          </div>
          <div className="create-blog">
            <button className="create-blog-btn">Create Blog</button>
          </div>
        </div>
        <hr />
        <div className="listed-blogs">
          <div className="blog">blog 1</div>
          <div className="blog">blog 2</div>
          <div className="blog">blog 3</div>
          <div className="blog">blog 4</div>
          <div className="blog">blog 4</div>
          <div className="blog">blog 4</div>
        </div>
      </div>
    </div>
  );
}
