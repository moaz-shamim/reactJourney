import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    console.log(userData);

    console.log(slug);

    const isAuthor = post && userData ? post.userId === userData.$id : false;
    console.log(isAuthor);

    useEffect(() => {

        if (slug) {
            appwriteService.getPost(slug)
            .then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");

    }, [slug, navigate]);

    const deletePost = () => {

        appwriteService.deletePost(post.$id).then((status) => {

         console.log(post.$id); 

            if (status) {
                console.log(status);
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }

        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
                                    Edit
                                </Button>
                            </Link>

                            <Button className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out" onClick={deletePost}>
                                Delete
                            </Button>

                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}