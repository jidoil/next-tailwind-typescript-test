import Head from "next/head";
import {getPost} from "../../lib/posts";

export async function getStaticProps() {
    console.log('[firstpost] get static props')
    const post = await getPost('first-post');
    return {
        props: { post },
    }
}

function FirstPost({ post }){
    console.log("First Post", post)
    return (
        <>
            <main>
                <h1>{post.title}</h1>
                  <article dangerouslySetInnerHTML={{__html: post.body}} />
            </main>
            </>
    )
}

export default FirstPost;