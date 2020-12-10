---
layout: template
title: Contact Me |
heading: Contact Me
subheading: <a href="/assets/Chris_Capelle.vcf">Download my vCard</a>
permalink: /contact-me
---
<form class="contact" id="contactForm">
  <h1 style="margin-bottom: 1rem;">Contact Me</h1>
  <label for="name" aria-label="name">Name</label><br />
  <input type="text" name="name" required><br />

  <label for="email">Email</label><br />
  <input type="text" name="email" required><br />

  <label for="subject">Subject</label><br />
  <input type="text" name="subject" required><br />

  <label for="message">Message</label><br />
  <textarea name="message" required></textarea><br />

  <input type="submit" value="Submit" method="post" action="/assets/php/sendemail.php"></input>
</form>
