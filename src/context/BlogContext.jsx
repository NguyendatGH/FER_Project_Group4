import React, { createContext, useReducer, useEffect } from "react";

export const BlogContext = createContext();

function blogReducer(state, action) {
  switch (action.type) {
    case "SET_BLOGS":
      return action.payload;
    case "ADD_BLOG":
      return [...state, action.payload];
    case "EDIT_BLOG":
      return state.map((blog) =>
        blog.id === action.payload.id ? { ...blog, ...action.payload } : blog
      );
    case "DELETE_BLOG":
      return state.filter((blog) => blog.id !== action.payload);
    default:
      return state;
  }
}

export const BlogProvider = ({ children }) => {
  const [blogs, dispatch] = useReducer(blogReducer, []);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_BLOGS", payload: data }));
  }, []);

  // Thêm blog
  const addBlog = async (blog) => {
    const res = await fetch("http://localhost:5000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    const newBlog = await res.json();
    dispatch({ type: "ADD_BLOG", payload: newBlog });
  };

  // Sửa blog
const editBlog = async (blog) => {
  try {
    const res = await fetch(`http://localhost:5000/blogs/${blog.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });
    
    if (!res.ok) {
      throw new Error('Failed to update blog');
    }
    
    const updatedBlog = await res.json();
    dispatch({ type: "EDIT_BLOG", payload: updatedBlog });
    return updatedBlog;
  } catch (error) {
    console.error("Error editing blog:", error);
    throw error; // Re-throw to handle in component
  }
};

  // Xóa blog
  const deleteBlog = async (id) => {
    await fetch(`http://localhost:5000/blogs/${id}`, {
      method: "DELETE" });
    dispatch({ type: "DELETE_BLOG", payload: id });
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, editBlog, deleteBlog }}>
      {children}
    </BlogContext.Provider>
  );
}; 