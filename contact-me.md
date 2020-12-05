---
layout: template
title: Contact Me |
heading: Contact Me
subheading: <a href="assets/Chris_Capelle.vcf">Download my vCard</a>
---
<form class="contact" id="contactForm" action="https://formsubmit.co/chris@chriscapelle.com" method="POST">
  <label for="name" aria-label="name">Name</label><br />
  <input type="text" name="name" required><br />

  <label for="email">Email</label><br />
  <input type="text" name="email" required><br />

  <label for="subject">Subject</label><br />
  <input type="text" name="subject" required><br />

  <label for="message">Message</label><br />
  <textarea name="message" required></textarea><br />

  <input type="submit" value="Submit">
</form>
