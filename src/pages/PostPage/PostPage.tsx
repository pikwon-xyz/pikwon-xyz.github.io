import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import "./PostPage.css";

interface Post {
  id: number;
  options: { text: string }[];
}

const PostPage: React.FC = () => {
  // const baseUrl = "http://localhost:3000";
  const baseUrl = "https://pikwon-nextjs.vercel.app"
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const handleDownloadImage = () => {
    const imgElement = imgRef.current;
    console.log(imgElement);

    if (!imgElement) return;

    // Convert SVG to image using html2canvas
    html2canvas(imgElement as unknown as HTMLElement, {
      // Cast to HTMLElement
      backgroundColor: null, // Transparent background
      scale: 2, // Scale factor (optional)
    }).then((canvas) => {
      // Convert canvas to image data URL
      const imageDataURL = canvas.toDataURL("image/png");
      console.log(imageDataURL);

      // Create a link element
      const link = document.createElement("a");
      link.href = imageDataURL;
      link.download = "svg_image.png"; // Filename

      // Append link to body and trigger click event to download the image
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  useEffect(() => {
    fetch(
      `${baseUrl}/api/trpc/post.getPublic?batch=1&input={"0": {"json": {"id": "${id}"}}}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const post = data[0].result.data.json;
        if (post) {
          setPost(post);
        }
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  useEffect(() => {
    if (post?.id) {
      handleDownloadImage();
    }
  }, [post]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 100,
        alignItems: "center",
      }}
    >
      {post ? (
        <div ref={imgRef} className="post-container">
          <div className="half black">
            <div className="text">{post.options[0].text}</div>
          </div>
          <div className="half white">
            <div className="text">{post.options[1].text}</div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostPage;
