import React, { useState } from 'react';
import "./Timeline.css";
import Sugesstions from "./Sugesstions";
import Post from './posts/Post';

function Timeline() {
    const [posts, setPosts] = useState([
      {
        user: "Albs1010",
        postImage: "https://media.licdn.com/dms/image/D4E03AQHODZFOU7cQUQ/profile-displayphoto-shrink_200_200/0/1672395050567?e=2147483647&v=beta&t=m3vlCltX3-UyqOTHbDdC9ojg0tQlSL-l3JtNvxJnhIk",
        likes: 2,
        timestamp: "2d",
      },
      {
        user: "johnnyyy_yao",
        postImage: "https://media.licdn.com/dms/image/D4E03AQGY1YGCwKb_OA/profile-displayphoto-shrink_200_200/0/1675044727472?e=2147483647&v=beta&t=RKXD4cQjXMPBFVJHX6y_kWEh9OR3C06nw3_qtOnoUdw",
        likes: 500,
        timestamp: "2d",
      },
      {
        user: "iam_kyra_wq",
        postImage: "https://media.licdn.com/dms/image/D4E03AQFkSd2Y_7039A/profile-displayphoto-shrink_800_800/0/1666055071959?e=2147483647&v=beta&t=vfx7ZuozfUrxkXiIuQbFCrC0jNPOfeYbfs-0Y9edT_4",
        likes: 12,
        timestamp: "2d",
      },
    ]);
  return (
    <div className='timeline'>
        <div className="timeline__left">
          <div className="timeline_posts">
            {posts.map(post => (
              <Post user={post.user} postImage={post.postImage} likes={post.likes} timestamp={post.timestamp}/>
            ))}
          </div>
        </div>
        <div className="timeline__right">
            <Sugesstions />
        </div>
    </div>
  )
}

export default Timeline