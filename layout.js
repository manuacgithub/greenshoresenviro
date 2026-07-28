// Define the custom header element
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header id="navbar">
    <div class="container nav-inner">
      <a href="index.html" class="logo">
        <span class="logo-icon"><img src="./img/green-shores-logo-375.png" alt="green shores logo"></span>
        <span class="logo-text">Green Shores
          <!-- <span class="accent"> Consultancy</span> -->
        </span>
      </a>
      <nav>
        <ul class="nav-links" id="navLinks">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="/frequently-asked-questions.html">FAQ</a></li>
          <li><a href="/cpcb-epr-registration-services.html">EPR</a></li>
          <li><a href="/contact-us.html">Contact Us</a></li>
        </ul>
        <button class="hamburger" id="hamburger" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>
        `;
    }
}

// Define the custom footer element
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer id="footer">

    <!-- Main footer body -->
    <div class="footer-body">
      <div class="container footer-body-inner">

        <div class="footer-col-brand">
          <a href="#hero" class="logo">
            <span class="logo-icon">🌿</span>
            <span class="logo-text">Green Shores
              <!-- <span class="accent"> Consultancy</span> -->
            </span>
          </a>
          <p class="footer-tagline">The engineering bridge from<br/>pollution to compliance.</p>
          <p class="footer-address">📍 #6BBA, 2nd cross, Nisarga layout <br/>Jigani, Bangalore - 560105</p>
          <p class="footer-address">📍 #2352, 4th Cross, Malleshwara<br/>Ramanagara Town, Karnataka – 562159</p>
          <p class="footer-website">🌐 <a href="https://greenshoresenviro.com" target="_blank" rel="noopener">greenshoresenviro.com</a></p>
        </div>

        <div class="footer-col-nav">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/frequently-asked-questions.html">FAQ</a></li>
            <li><a href="/cpcb-epr-registration-services.html">EPR</a></li>
            <li><a href="/contact-us.html">Contact Us</a></li>
          </ul>
        </div>

        <div class="footer-col-nav">
          <h5>Our Services</h5>
          <ul>
            <li><a href="#services">KSPCB Consent</a></li>
            <li><a href="#services">STP &amp; ETP</a></li>
            <li><a href="#services">ZLD Solutions</a></li>
            <li><a href="#services">E-Waste Authorization</a></li>
            <li><a href="#services">Air Quality Monitoring</a></li>
            <li><a href="#services">Hazardous Waste Mgmt</a></li>
            <li><a href="#services">Biomedical Waste Auth</a></li>
            <li><a href="#services">Plastic Waste Auth</a></li>
          </ul>
        </div>

        <div class="footer-col-nav">
          <h5>Contact Us</h5>
          <ul class="footer-contact-list">
            <li>
              <span class="fc-icon">📞</span>
              <a href="tel:+918867261782">+91 88672 61782</a>
            </li>
            <li>
              <span class="fc-icon">✉️</span>
              <a href="mailto:contact@greenshoresenviro.com">contact@greenshoresenviro.com</a>
            </li>
            <li>
              <span class="fc-icon">🕐</span>
              <span>Mon–Sat: 9:00 AM – 6:00 PM IST</span>
            </li>
            <li>
              <span class="fc-icon">📍</span>
              <span>Serving all 30 districts of Karnataka</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bar">
      <div class="container footer-bar-inner">
        <p>© 2026 Green Shores Consultancy. All rights reserved. | <a href="https://greenshoresenviro.com" target="_blank" rel="noopener">greenshoresenviro.com</a> | Bangalore, Karnataka</p>
        <div class="footer-social">
          <a href="#" aria-label="LinkedIn">in</a>
          <a href="#" aria-label="Instagram">ig</a>
        </div>
      </div>
    </div>

  </footer>
        `;
    }
}

// Register the custom tags with the browser
customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);
