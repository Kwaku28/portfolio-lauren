import video from "./assets/background-video.mp4";
// import { FaXTwitter } from "react-icons/fa";
// import { GrSend } from "react-icons/gr";
import "./App.css";

function App() {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  document.body.appendChild(c);
  var w = (c.width = window.innerWidth),
    h = (c.height = window.innerHeight),
    // Remove this line since ctx has already been declared
    minDist = 10,
    maxDist = 30,
    initialWidth = 10,
    maxLines = 100,
    initialLines = 4,
    speed = 5,
    lines = [],
    frame = 0,
    timeSinceLast = 0,
    dirs = [
      // straight x, y velocity
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
      // diagonals, 0.7 = sin(PI/4) = cos(PI/4)
      [0.7, 0.7],
      [0.7, -0.7],
      [-0.7, 0.7],
      [-0.7, -0.7],
    ],
    starter = {
      // starting parent line, just a pseudo line

      x: w / 2,
      y: h / 2,
      vx: 0,
      vy: 0,
      width: initialWidth,
    };

  function init() {
    lines.length = 0;

    for (var i = 0; i < initialLines; ++i) lines.push(new Line(starter));

    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, w, h);

    // if you want a cookie ;)
    // ctx.lineCap = 'round';
  }
  function getColor(x) {
    return "hsl( hue, 80%, 50% )".replace("hue", (x / w) * 360 + frame);
  }
  function anim() {
    window.requestAnimationFrame(anim);

    ++frame;

    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(0,0,0,.02)";
    ctx.fillRect(0, 0, w, h);
    ctx.shadowBlur = 0.5;

    for (var i = 0; i < lines.length; ++i)
      if (lines[i].step()) {
        // if true it's dead

        lines.splice(i, 1);
        --i;
      }

    // spawn new

    ++timeSinceLast;

    if (lines.length < maxLines && timeSinceLast > 10 && Math.random() < 0.5) {
      timeSinceLast = 0;

      lines.push(new Line(starter));

      // cover the middle;
      ctx.fillStyle = ctx.shadowColor = getColor(starter.x);
      ctx.beginPath();
      ctx.arc(starter.x, starter.y, initialWidth, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  class Line {
    constructor(parent) {
      this.x = parent.x | 0;
      this.y = parent.y | 0;
      this.width = parent.width / 1.25;

      do {
        var dir = dirs[(Math.random() * dirs.length) | 0];
        this.vx = dir[0];
        this.vy = dir[1];
      } while (
        (this.vx === -parent.vx && this.vy === -parent.vy) ||
        (this.vx === parent.vx && this.vy === parent.vy)
      );

      this.vx *= speed;
      this.vy *= speed;

      this.dist = Math.random() * (maxDist - minDist) + minDist;
    }
    step() {
      var dead = false;

      var prevX = this.x,
        prevY = this.y;

      this.x += this.vx;
      this.y += this.vy;

      --this.dist;

      // kill if out of screen
      if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) dead = true;

      // make children :D
      if (this.dist <= 0 && this.width > 1) {
        // keep yo self, sometimes
        this.dist = Math.random() * (maxDist - minDist) + minDist;

        // add 2 children
        if (lines.length < maxLines) lines.push(new Line(this));
        if (lines.length < maxLines && Math.random() < 0.5)
          lines.push(new Line(this));

        // kill the poor thing
        if (Math.random() < 0.2) dead = true;
      }

      ctx.strokeStyle = ctx.shadowColor = getColor(this.x);
      ctx.beginPath();
      ctx.lineWidth = this.width;
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(prevX, prevY);
      ctx.stroke();

      if (dead) return true;
    }
  }

  init();
  anim();

  window.addEventListener("resize", function () {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
    starter.x = w / 2;
    starter.y = h / 2;

    init();
  });

  return (
    <>
      <nav className="navbar">
        <div className="container" id="navbarNav">
          <div className="navbar-nav">
            <a className="nav-link" href="#">
              <ion-icon name="person-outline"></ion-icon>
              <br />
              ABOUT
            </a>
            <a className="nav-link" href="#">
              <ion-icon name="reader-outline"></ion-icon> <br />
              RESUME
            </a>
            <a className="nav-link" href="#">
              <ion-icon name="laptop-outline"></ion-icon> <br />
              PROJECTS
            </a>
            <a className="nav-link" href="#">
              <ion-icon name="send-sharp"></ion-icon> <br />
              CONTACT
            </a>
          </div>
        </div>
      </nav>
      <div className="profile">
        <video src={video} autoPlay loop muted />
        <div>
          <img
            src="/lauren.png"
            alt="logo"
            style={{ cursor: "pointer", width: "10rem", height: "10rem" }}
            className="logo"
          />
          <h1>Lawrence Amoafo</h1>
          <h2>
            <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=15&pause=500&color=ffba00&width=180&height=40&center=true&lines=Front-End+Developer;Back-End+Developer;Full-Stack+Developer;Freelancer" />
          </h2>
          <ul className="social">
            <li>
              <a
                href="https://github.com/Kwaku28"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-github"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lawrence-amoafo-appoh/"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/lawrence_amoafo"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="mailto:rekenburg777@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <ion-icon name="mail-outline"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-container">
        <h2>
          Certainly! Heres an edited summary for a Full Stack Web Developer,
          including two soft skills: Experienced Full Stack Web Developer with a
          strong foundation in JavaScript, Ruby on Rails, React, and frontend
          technologies. I possess not only technical proficiency but also
          exceptional soft skills, including effective communication and
          teamwork. My passion for creating dynamic and user-friendly web
          applications is complemented by my ability to collaborate seamlessly
          with cross-functional teams and clients, ensuring that project goals
          align with user needs. With expertise in HTML and CSS, I meticulously
          craft intuitive and visually appealing interfaces. My problem-solving
          mindset, coupled with my dedication to continuous learning, enables me
          to tackle complex challenges and deliver scalable web solutions that
          exceed expectations. I thrive in environments that demand adaptability
          and innovation, making me a valuable asset in the ever-evolving world
          of web development.
        </h2>
      </div>
    </>
  );
}

export default App;
