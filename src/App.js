import "./App.css";
import PostCard from "./component/PostCard";

function App() {
  const posts = [
    {
      id: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ58RVMsPBe2V1ybMcZOMgu52jCsCNcVWXFpRGiQm363Q&s",
      title: "Post 1",
      description: "Car 1",
      likes: 10,
    },
    {
      id: 2,
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960",
      title: "Post 2",
      description: " Car 2",
      likes: 5,
    },
    {
      id: 3,
      image:
        "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/rolls_royce_phantom_top_10.jpg?itok=XjL9f1tx",
      title: "Post 3",
      description: "Car 3",
      likes: 3,
    },
    {
      id: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmH37Zzw95Uv2fqOvsCUSUuh9DTX3exldKXWgEYYoH5A&s",
      title: "Post 4",
      description: "Car 4",
      likes: 25,
    },
    {
      id: 5,
      image:
        "https://robbreport.com/wp-content/uploads/2022/11/11-w-Utopia_1.jpg?w=1000",
      title: "Post 5",
      description: "Car 5",
      likes: 175,
    },
    {
      id: 6,
      image:
        "https://imageio.forbes.com/specials-images/imageserve/5f962df3991e5636a2f68758/0x0.jpg?format=jpg&crop=812,457,x89,y103,safe&height=900&width=1600&fit=bounds",
      title: "vdf",
      description: "Car 6",
      likes: 50,
    },
    {
      id: 7,
      image:
        "https://img.etimg.com/thumb/width-1200,height-900,imgsize-33204,resizemode-75,msid-96191686/industry/auto/auto-news/super-luxury-cars-clock-50-growth-highest-ever-in-india.jpg",
      title: "Car 7",
      description: " the Car of 007",
      likes: 15,
    },
  ];
  const postList = posts.map((post) => {
    return (
      <PostCard
        title={<h5>{post.title}</h5>}
        description={post.description}
        image={post.image}
        likes={post.likes}
      />
    );
  });
  return (
    <div>
      <h1>PostaGram:</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>{postList}</div>
    </div>
  );
}

export default App;
