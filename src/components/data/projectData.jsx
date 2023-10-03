import image1 from "../../assets/first-project.jpg";
import image2 from "../../assets/second-project.jpg";
import image3 from "../../assets/third-project.jpg";
import image4 from "../../assets/fourth-project.jpg";
import image5 from "../../assets/splash.jpg";
import image6 from "../../assets/sixth-project.jpg";

const projectData = [
  {
    id: 1,
    title: "Grow Rich",
    description: "This is a Budgeting App",
    image_url: `${image5}`,
    url: "https://grow-rich.onrender.com/",
    source: "https://github.com/Kwaku28/Grow-Rich",
  },
  {
    id: 2,
    title: "Space traveler's hub",
    description: "Book rockets and join missions",
    image_url: `${image4}`,
    url: "https://space-travelers-hub-sum7.onrender.com/",
    source: "https://github.com/Kwaku28/Space-Travelers-Hub",
  },
  {
    id: 3,
    title: "Bookstore",
    description: "Keep track of your reading progress",
    image_url: `${image3}`,
    url: "https://bookstore-7igy.onrender.com/",
    source: "https://github.com/Kwaku28/Bookstore",
  },
  {
    id: 4,
    title: "Leaderboard",
    description: "Keep track of your scores",
    image_url: `${image2}`,
    url: "https://kwaku28.github.io/leaderboard/dist/",
    source: "https://github.com/Kwaku28/leaderboard",
  },
  {
    id: 5,
    title: "Architectural Summit",
    description: "A sample website of a summit",
    image_url: `${image1}`,
    url: "https://kwaku28.github.io/architectural-summit/",
    source: "https://github.com/Kwaku28/architectural-summit",
  },
  {
    id: 6,
    title: "Resort Booking",
    description: "Book a resort for your next vacation",
    image_url: `${image6}`,
    url: "https://resort-app-frontend.onrender.com",
    source: "https://github.com/Leeoasis/resort-booking-frontend-app",
  },
];

export default projectData;
