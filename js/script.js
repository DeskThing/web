// Scroll-triggered animations using AOS (Animate on Scroll)
AOS.init({
  offset: 200,
  delay: 0,
  duration: 600,
  easing: 'ease-out-cubic',
  once: true
});

// Navbar and Footer insertion
document.getElementById("navbar").innerHTML = `
<style>
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: rgb(250, 250, 250) url(http://lorempixel.com/1920/1080/nature/);
    font-family: Lato, Helvetica, Arial, sans-serif;
  }

  a {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  /* Navbar styles */
  #navbar {
    background: white;
    color: rgb(13, 26, 38);
    position: fixed;
    top: 0;
    height: 60px;
    line-height: 60px;
    width: 100vw;
    z-index: 10;
  }

  .nav-wrapper {
    margin: auto;
    text-align: center;
    width: 70%;
  }

  @media (max-width: 768px) {
    .nav-wrapper {
      width: 90%;
    }
  }

  .logo {
    float: left;
    margin-left: 28px;
    font-size: 1.5em;
    height: 60px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  #navbar ul {
    display: inline-block;
    float: right;
    list-style: none;
    margin-top: -2px;
    text-align: right;
    transition: transform 0.5s ease-out;
  }

  @media (max-width: 640px) {
    #navbar ul {
      display: none;
    }
  }

  #navbar li {
    display: inline-block;
  }

  #navbar li a {
    color: rgb(13, 26, 38);
    display: block;
    font-size: 0.7em;
    height: 50px;
    letter-spacing: 1px;
    margin: 0 20px;
    padding: 0 4px;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    transition: all 0.5s ease;
  }

  #navbar li a:hover {
    color: rgb(28, 121, 184);
    transition: all 1s ease;
  }

  /* Responsive Menu Styles */
  @media (max-width: 640px) {
    .menuIcon {
      cursor: pointer;
      display: block;
      position: fixed;
      right: 15px;
      top: 20px;
      height: 23px;
      width: 27px;
      z-index: 12;
    }

    .icon-bars {
      background: rgb(13, 26, 38);
      position: absolute;
      left: 1px;
      top: 45%;
      height: 2px;
      width: 20px;
      transition: 0.4s;
    }

    .icon-bars::before,
    .icon-bars::after {
      background: rgb(13, 26, 38);
      content: '';
      position: absolute;
      height: 2px;
      width: 20px;
    }

    .icon-bars::before {
      top: -8px;
    }

    .icon-bars::after {
      bottom: -8px;
    }

    .menuIcon.toggle .icon-bars {
      transform: rotate(135deg);
    }

    .overlay-menu {
      background: lightblue;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(-100%);
      width: 100vw;
      height: 100vh;
      transition: transform 0.2s ease-out;
    }
  }
</style>

<!-- Navbar -->
<nav id="navbar">
  <div class="nav-wrapper">
    <div class="logo"><a href="#home">DeskThing</a></div>
    <ul id="menu">
      <li><a href="">Home</a></li>
      <li><a href="">DeskThing</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Pro</a></li>
    </ul>
  </div>
</nav>

<!-- Menu Icon -->
<div class="menuIcon">
  <span class="icon icon-bars"></span>
</div>

<!-- Overlay Menu -->
<div class="overlay-menu">
  <ul id="menu">
    <li><a href="">Home</a></li>
    <li><a href="">DeskThing</a></li>
    <li><a href="">About</a></li>
    <li><a href="">Pro</a></li>
  </ul>
</div>
`;

document.getElementById("footer").innerHTML = `
  <footer>
    <p>&copy; 2024 DeskThing. All Rights Reserved.</p>
  </footer>
`;

// Menu toggle functionality
const menuIcon = document.querySelector('.menuIcon');
const overlayMenu = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
  if (overlayMenu.style.transform !== 'translateX(0%)') {
    overlayMenu.style.transform = 'translateX(0%)';
  } else {
    overlayMenu.style.transform = 'translateX(-100%)';
  }
  menuIcon.classList.toggle('toggle');
});
