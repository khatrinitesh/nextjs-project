import React from "react";

const Footer = () => {
  return (
    <footer class="footer mt-auto py-3 bg-light">
      <div class="container">
        <span >&copy; Copyright { new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
