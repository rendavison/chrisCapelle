# Chris Capelle - Apple Expert Business Website

Professional website for Chris Capelle's Macintosh Computer & Apple Expert Consulting Business. Static site built with Jekyll, SCSS, HTML, and some minor JS.

Site is based on a single template (template.html) which branches into page-specific templates when need be (located in the layouts directory).

Mobile and open graph compatible.

Designed and developed by [Remy Davison](https://remydavison.com)

## Directories
* **includes** - partials for repeated elements (sidebar, navigation, footer)
* **layouts** - templates
* **sass** - all (S)CSS styling
* **assets** - images, javascript, and calls main stylesheet

## Editing Pages
All site pages are in the root directory. Site page content is written in markdown (except for index and contact page).

* index.html = home
* about.md = about page
* what-i-do.md = what i do
* rave-reviews.md = rave reviews
* vital-resources.md = vital resources
* contact-me.html = contact me

### Front Matter Options
Each page has options to include:
* **title** - page title in browser tab
* **heading** - heading at the top of the page
* **subheading** - optional subheading underneath heading
