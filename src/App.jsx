import { NavLink, Routes, Route } from "react-router-dom";
import video from "./assets/background-video.mp4";
import Project from "./components/project";
import Contact from "./components/contact";
import About from "./components/about";
import Resume from "./components/resume";
import AnimateCursor from "./components/animatedCursor";
import { IconContext } from "react-icons";
import { RiTwitterXFill } from "react-icons/ri";
import "./styles/App.css";

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
      <AnimateCursor />
      <nav className="navbar">
        <div className="container" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-link">
              <NavLink to="/" className="nav-buttons">
                <ion-icon name="person-outline"></ion-icon>
                ABOUT
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/resume" className="nav-buttons">
                <ion-icon name="reader-outline"></ion-icon>
                RESUME
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/projects" className="nav-buttons">
                <ion-icon name="laptop-outline"></ion-icon>
                PROJECTS
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/contact" className="nav-buttons">
                <ion-icon name="send-sharp"></ion-icon>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="profile">
        <video src={video} autoPlay loop muted />
        <div className="profile-intro">
          <img src="/Image.jpeg" alt="logo" className="logo" />
          <div className="intro">
            <h1>Lawrence Amoafo</h1>
            <h2>
              <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=15&pause=500&color=ffba00&width=180&height=40&center=true&lines=Front-End+Developer;Back-End+Developer;Full-Stack+Developer;Freelancer" />
            </h2>
          </div>
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
              {/* <ion-icon name="logo-twitter"></ion-icon> */}
              <IconContext.Provider value={{ className: "react" }}>
                <a
                  href="https://twitter.com/lawrence_amoafo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <RiTwitterXFill />
                </a>
              </IconContext.Provider>
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
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
