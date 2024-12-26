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
  <nav>
    <a href="index.html">Home</a>
    <a href="features.html">Features</a>
    <a href="pro.html">Pro Version</a>
    <a href="contact.html">Contact</a>
  </nav>
`;

document.getElementById("footer").innerHTML = `
  <footer>
    <p>&copy; 2024 DeskThing. All Rights Reserved.</p>
  </footer>
`;
