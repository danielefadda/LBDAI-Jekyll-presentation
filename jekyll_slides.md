---
marp: true
theme: master
header: 'Laboratory on Big Data and AI - Jekyll Slides'
paginate: true

---

<!-- _class: cover -->
<!-- _paginate: skip -->

<!--
Welcome to this comprehensive guide on Jekyll website implementation. Today we'll learn how to build a website for your Big Data project using Jekyll and GitHub Pages. This tutorial will take you through every step of the process, from initial setup to final deployment. By the end of this session, you'll have a fully functional, website that you can use to showcase your project work. 

Jekyll is a powerful static site generator that's perfect for academic projects, and when combined with GitHub Pages, it provides an hosting solution that's both free and reliable.
-->


<div>
  <h1>Jekyll Website Implementation Guide</h1>
  <h2>LBDAI</h2>
  <!-- <div class="subtitle">A subtitle</div> -->

  <div class="authors">
    <div class="author-name">Daniele Fadda</div>
    <div class="author-name">Eleonora Cappuccio</div>
  </div>

  <div class="university">
    <strong>University of Pisa</strong><br>
    Department of Computer Science<br>
    Course: Laboratory of Big Data and AI<br>
    Academic Year: 2025    
  </div>

</div>

<div>
</div>

---

<!--
Let's start by understanding what we'll accomplish in this course. We'll cover four main areas that are essential for creating your project website. First, we'll learn about template setup - this involves cloning and configuring the Jekyll template that's been specifically designed for your Big Data projects. Next, we'll dive into repository management, where you'll learn how to set up your GitHub repository and manage collaborators effectively. We'll also cover local development setup, which is optional but highly recommended for more efficient development. Finally, we'll explore GitHub Pages deployment, which allows you to automatically publish your website. Before we begin, make sure you have a GitHub account.
-->

# Getting Started with Jekyll Template

## What You'll Learn
- **Template Setup**: Clone and configure the Jekyll template
- **Repository Management**: Setup GitHub repository and collaborators
- **Local Development**: Optional local development environment
- **GitHub Pages**: Deploy your website automatically

## Prerequisites
- GitHub account

---

<!--
Now let's walk through the process of setting up your project template. This is the foundation of your website, so it's important to do this correctly. First, navigate to the template repository at this link.
You'll see a green "Use this template" button in the top right corner - click on it and select "Create a new repository". When naming your repository, it's crucial to follow the specific format: g0-2025-website, but replace g0 with your actual group number. For example, if you're group 3, your repository should be named g3-2025-website. Make sure to leave the visibility as Public - this is required for GitHub Pages to work properly. Once you click "Create repository", GitHub will create a copy of the template in your account. Let's also examine the repository structure you'll be working with. The docs folder contains everything you need: _config.yml for basic site settings, _data for configuration, _pages for your website pages, assets for images and resources, and _includes and _layouts for Jekyll components and HTML templates respectively.
-->

# Step 1: Setting Up the Project Template

## Using the Template Repository
1. **Navigate to**: `https://github.com/danielefadda/master-projects-template-2025`
2. **Click**: "Use this template" button (top right)
3. **Select**: "Create a new repository"
4. **Name format**: `g0-2025-website` (replace `g0` with your group number)
5. **Visibility**: Leave as Public
6. **Create**: Click "Create repository"

---

<!--
Now that you've created your repository, let's take a closer look at the structure of your project. This is important because it will help you understand where to place your files and how everything is organized. The main directory is called docs, which is where all your website files will live. Inside docs, you'll find several important folders and files. The _config.yml file contains your site's basic settings, such as the base URL and site title. The _data folder holds configuration files, like settings.yml, which contains visual configurations and content. The _pages folder is where you'll create your website pages, such as index.md for your homepage, project.md for your project description, team.md for team member information, and deliverables.md for your results and downloads. The assets folder is where you store images and other resources. The _includes folder contains reusable Jekyll components, like headers and footers, while the _layouts folder holds HTML layouts that define the structure of your pages. Understanding this structure is crucial for effectively managing your website content and ensuring everything is organized properly.
-->

# Understanding the Project Structure

## Repository Structure
```
project-template/docs/
├── _config.yml          # Basic site settings
├── _data/
│   └── settings.yml     # Visual config and content
├── _pages/              # Your website pages
├── assets/              # Images and resources
├── _includes/           # Jekyll components
└── _layouts/            # HTML layouts
```

---

<!--
Collaboration is a key aspect. Let's learn how to add team members to your repository. First, go to your repository and click on the "Settings" tab. Then, in the left sidebar, click on "Manage access". Here you'll see an "Invite a collaborator" button - click it and enter your team members' GitHub usernames or email addresses. It's important to note that you must always add two specific teachers as collaborators: danielefadda and Elecapp. These are our accounts and we will be able to monitor your progress and provide feedback.
-->

# Step 2: Collaborator Management

## Adding Team Members
1. **Repository Settings**: Go to your repository settings
2. **Manage Access**: Click "Manage access"
3. **Invite Collaborators**: Add team members by GitHub username or email
4. **Required Teachers**: Always add: `danielefadda` and `Elecapp`

## Collaboration Best Practices
- **Clear Communication**: Use GitHub issues for task tracking
- **Branch Protection**: Consider protecting main branch
- **Code Reviews**: Review each other's changes before merging

---

<!--
Local development setup is optional. With local development, you get immediate preview of changes without having to push to GitHub and wait for the site to rebuild. You can work offline and you can use your favorite IDE or editor with all its features.
However, there are some considerations: initial setup takes time, you need Ruby and its dependencies installed, and you'll need to maintain your local environment. Here's how to set it up: First, follow the official Jekyll installation guide for your operating system at jekyllrb.com/docs/installation. Then clone your repository locally, run "bundle install" to install dependencies, and finally run "bundle exec jekyll serve" to start the development server. Your site will be available at localhost:4000 followed by your repository name.
-->

# Step 3: Local Development Setup (Optional)

## Ruby and Jekyll Installation
1. **Install Ruby**: Follow [official Jekyll guide](https://jekyllrb.com/docs/installation/)
2. **Clone Repository**: `git clone [your-repo-url]`
3. **Install Dependencies**: `bundle install`
4. **Launch Server**: `bundle exec jekyll serve`
5. **Access Site**: `http://127.0.0.1:4000/[repo-name]`

## Benefits of Local Development
- **Faster Testing**: Immediate preview of changes
- **Offline Work**: No internet required for development
- **Advanced Editing**: Use your favorite IDE

---

<!--
You have three different methods for editing your website files, each with its own advantages. First, direct GitHub editing is the simplest approach - you can edit files directly in your browser without any setup. This is perfect for quick content changes and simple updates. Second, GitHub Codespaces provides a more advanced editor experience right in your browser. It offers syntax highlighting, code completion, and the ability to install extensions like Prettier for automatic code formatting. To access Codespaces, click the "Code" button in your repository and select "Create codespace on main". Third, local development gives you full control by allowing you to use any editor you prefer, like VS Code or PyCharm. You get advanced version control features and can work offline. Each method has its place in your development workflow, so choose the one that best fits your current needs and technical comfort level.
-->

# Step 4: Editing Files - Three Methods

<div class="columns-2">
<div>

## Method 1: Direct GitHub Editing
- **Simple Changes**: Edit files directly in browser
- **Quick Updates**: Perfect for content changes
- **No Setup**: No local installation required

## Method 2: GitHub Codespaces
- **Advanced Editor**: Full IDE in browser
- **Syntax Highlighting**: Better code editing experience
- **Extensions**: Install Prettier for code formatting

</div>
<div>

## Method 3: Local Development
- **Full Control**: Use any editor (VS Code, Sublime, etc.)
- **Git Integration**: Advanced version control
- **Offline Work**: No internet dependency

</div>
</div>

---

<!--
Now let's configure the most important file in your Jekyll setup: _config.yml. This file controls your site's basic settings and must be configured correctly for your website to work properly. The most critical setting is the baseurl, which must match your repository name exactly. For example, if your repository is named g3-2025-website, your baseurl should be "/g3-2025-website". The url should be your GitHub Pages domain, typically "https://username.github.io" where username is your GitHub username. You'll also want to customize your site's title, subtitle, and description - these appear on your website and in search engines. The github_repo section is used to create links in your footer. You should include links to both your project repository and your website repository. Pay attention to YAML formatting - indentation is crucial and must be consistent. After making changes to _config.yml, if you're running locally, you'll need to restart your Jekyll server to see the changes.
-->

# Step 5: Configuring _config.yml 

```yaml
# Repository settings
baseurl: "/g0-2025-website"  # Your repo name
url: "https://username.github.io"  # Your GitHub Pages URL

# Site information
title: "Your Project Title"
subtitle: "Project Subtitle"
description: "Brief project description"

# Repository links (footer)
github_repo:
  - name: "Group 0 - Website repository"
    url: "https://github.com/your-username/website-repo"
```

## Key Variables
- **baseurl**: Must match your repository name
- **url**: Your GitHub Pages domain
- **title/subtitle**: Displayed on your website
- **github_repo**: Links shown in footer

---

<!--
Let's now deploy your website using GitHub Pages. This is one of the most interesting parts because you'll see your website come alive on the internet! First, go to your repository settings and click on "Pages" in the left sidebar. Under "Source", select "Deploy from a branch", then choose "main" as your branch and "docs" as the folder. This tells GitHub Pages to build your site from the docs folder in your main branch. Click "Save" and GitHub will start building your site.
-->

# Step 6: GitHub Pages Deployment

## Publishing Your Website
1. **Repository Settings**: Go to Settings → Pages
2. **Source Branch**: Select `main` branch
3. **Root Directory**: Choose `docs` folder
4. **Automatic Deployment**: Site updates on every push

## Your Website URL
- **Format**: `https://username.github.io/repository-name/`
- **Example**: `https://johndoe.github.io/g0-2025-website/`

---

<!--
The build process usually takes some minutes for the first deployment. Your website will be available at the URL format https://username.github.io/repository-name/. For example, if your GitHub username is elecapp and your repository is g3-2025-website, your site will be at https://elecapp.github.io/g3-2025-website/. Once set up, every time you push changes to your main branch, GitHub Pages will automatically rebuild and update your site. This typically happens within minutes of your push. If you encounter any issues, you can check the Actions tab in your repository to see build logs and troubleshoot any problems.
-->

# Step 6: GitHub Pages Deployment Tips

## Deployment Tips
- **Build Time**: Allow 5-10 minutes for initial deployment
- **Updates**: Changes appear within minutes after push
- **Troubleshooting**: Check Actions tab for build errors

---

<!--
Now let's understand how to create and manage pages in your Jekyll website. Your website pages are stored in the _pages directory, and each Markdown file corresponds to a page on your final website. The template comes with four essential pages: index.md for your homepage, project.md for your project description, team.md for team member information, and deliverables.md for your results and downloads. You can also create additional custom pages like about.md for extra information about your project or methodology.
-->

# Step 7: Creating and Managing Pages

## Page Structure
```
docs/_pages/
├── index.md          # Homepage
├── project.md        # Project description
├── team.md           # Team members
├── deliverables.md   # Results and downloads
└── about.md          # Custom page (optional)
```

---

<!--
To create a new page, simply add a new .md file to the _pages directory. The filename will become the URL path - for example, if you create about.md, it will be accessible at your-site-url/about/. Each page must start with front matter, which is metadata enclosed in triple dashes. This includes the layout, title, subtitle, and other page-specific settings. The content is written in Markdown format, which is simple and easy to learn. Jekyll automatically processes these files and converts them to HTML for your website.
-->

# Step 7: Creating and Managing Pages

## Creating a New Page
1. **Create File**: Add `.md` file in `_pages/` directory
2. **Front Matter**: Add YAML header with metadata
3. **Content**: Write in Markdown format
4. **URL**: File name becomes page URL

---

<!--
Front matter is a crucial concept in Jekyll that you need to understand well. It's the metadata section at the beginning of each page file, enclosed in triple dashes. Think of it as the settings for each individual page. The layout determines which HTML template to use - "default" is the most common choice. The title and subtitle appear at the top of your page and in browser tabs. The header_type controls the visual style of your page header. The header_img allows you to specify a background image for your header. If you're using charts on your page, set "vega: true" to enable chart functionality. All these settings work together to create the look and feel of your individual pages.
-->

# Step 8: Front Matter Configuration

## Basic Front Matter
```yaml
---
layout: default
title: "Page Title"
subtitle: "Page Subtitle"
header_type: hero
header_img: assets/images/header.png
vega: true  # Enable charts
---
```

---

<!--
You have several options for header types, each creating a different visual impact. For example the "hero" type creates a full-width header with a background image, perfect for making a strong first impression. The "base" type is the standard header that works well for most content pages. The "splash" type creates a dramatic full-screen header that's perfect for landing pages or major section introductions. Choose the header type that best fits the content and purpose of each page.
-->

# Step 8: Front Matter Configuration

## Header Types
- **hero**: Full-width header with background image
- **base**: Standard header
- **post**: Blog-style header
- **image**: Image-focused header
- **splash**: Dramatic full-screen header

---

<!--
Let's learn about creating content with Markdown. Markdown is a lightweight markup language that's easy to learn and write. For headings, use hash symbols - one hash for the main heading, two for sub-headings, and so on. For emphasis, use double asterisks for bold text and single asterisks for italic text. Lists are simple: use dashes for bullet points and numbers for ordered lists. Links are created with square brackets for the text and parentheses for the URL. The template also includes some enhanced styling options. You can add {: .lead} after a paragraph to make it stand out as a highlighted paragraph. Similarly, {: .green} will make text appear in green color. These special classes help you create visually appealing content that draws attention to important information. Remember that Markdown is converted to HTML, so you can also use HTML tags directly when you need more complex formatting.
-->

# Step 9: Content Creation with Markdown

<div class="columns-2">
<div>

## Markdown Basics
```markdown
# Heading 1
## Heading 2

**Bold text**
*Italic text*

- Bullet list
- Another item

[Link text](https://example.com)
```

</div>
<div>

## Enhanced Styling
```markdown
This is a highlighted paragraph.
{: .lead}

This text appears in green.
{: .green}
```
</div>
</div>

---

<!--
Images are an important part of any website, and Jekyll makes it easy to manage them. All images should be stored in the assets/images/ directory to keep everything organized. You can add images using standard Markdown syntax with exclamation mark, square brackets for alt text, and parentheses for the image path. Alternatively, you can use HTML img tags for more control over styling.  Make sure your images are optimized for web use to ensure fast loading times.
-->

# Step 10: Adding Images

## Image Management
- **Location**: Store images in `assets/images/`
- **Markdown Syntax**: `![Alt text](assets/images/image.jpg)`
- **HTML Tag**: `<img src="assets/images/image.jpg" alt="Description">`

---

<!--
The template also includes a gallery feature for displaying multiple images in an attractive layout. To create a gallery, save your images in a subdirectory like assets/images/gallery_name/, then use the include statement shown on the slide. You'll need to configure the gallery in your _config.yml file by adding the directory path to the defaults section. This creates a responsive masonry-style gallery that looks professional and works well on all devices. The gallery automatically adjusts to different screen sizes and provides a clean, organized way to showcase multiple images related to your project.
-->

## Image Galleries
```markdown
<!-- Save images in assets/images/gallery_name/ -->
{% include_cached snippets/masonry.html internal="gallery_name" %}
```

## Gallery Configuration
```yaml
# In _config.yml
defaults:
  - scope:
      path: "assets/images/gallery_name"
    values:
      image_col: gallery_name
```

---

<!--
Video content can greatly enhance your project presentation, and Jekyll makes it easy to embed videos. The template includes built-in support for YouTube videos using a simple shortcode. Just use the include statement with the video ID from the YouTube URL and specify "youtube" as the provider. The template also supports other video platforms like Vimeo - simply change the provider name. The great thing about this video embedding system is that it's fully responsive, meaning the videos will automatically adjust to fit different screen sizes and devices. This ensures your content looks great whether someone is viewing it on a desktop computer, tablet, or smartphone.
-->

# Step 11: Embedding Videos

## YouTube Integration
```html
<!-- Video shortcode -->
{% include video id="VIDEO_ID" provider="youtube" %}
```

## Video Providers
- **YouTube**: Most common choice
- **Vimeo**: Professional videos
- **Dailymotion**: Alternative platform

---

<!--
Icons and visual elements can make your website more engaging and easier to navigate. The template includes Font Awesome, which provides thousands of high-quality icons. To use an icon, simply include the HTML code with the appropriate class name. For example, fa-solid fa-pen-nib creates a pen icon, fa-solid fa-code creates a code icon, and fa-solid fa-chart-bar creates a chart icon. You can find the complete library of available icons at fontawesome.com/search. Icons are particularly useful for highlighting different sections of your content, creating visual breaks in text, and making your navigation more intuitive. When using icons, remember to maintain consistency in style and don't overuse them - they should enhance your content, not distract from it.
-->

# Step 12: Adding Icons and Visual Elements

## Font Awesome Icons
```html
<i class="fa-solid fa-pen-nib"></i> Text with icon
<i class="fa-solid fa-code"></i> Code icon
<i class="fa-solid fa-chart-bar"></i> Chart icon
```

<div class="columns-2">
<div>

## Icon Resources
- **Font Awesome**: [fontawesome.com](https://fontawesome.com/search)
- **Variety**: Thousands of free icons
- **Categories**: Technical, social, business, etc.

</div>
<div>

## Usage Tips
- Use icons to enhance readability
- Maintain consistency in icon style
- Don't overuse - less is more

</div>
</div>

---

<!--
Modals are pop-up windows that display additional content without leaving the current page. They're perfect for showing detailed information, larger images, or technical content without cluttering your main page. The template uses Bootstrap's modal component, which provides a clean, responsive modal system. To create a modal, you need two parts: a trigger button and the modal structure itself. The trigger button has data-toggle and data-target attributes that specify which modal to open. The modal structure includes a header with a title and close button, a body for your content, and an optional footer. You can customize the modal size using classes like modal-xl for extra large, modal-lg for large, or modal-sm for small. The modal-dialog-centered class centers the modal vertically on the page.
-->

# Step 13: Creating Interactive Modals

<div class="columns-2">
<div>

```html
<!-- Trigger button -->
<button type="button" class="btn btn-primary" 
        data-toggle="modal" data-target="#myModal">
    Open Modal
</button>
```

</div>
<div>

```html

<!-- Modal structure -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog modal-xl modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal Title</h5>
        <button type="button" class="btn-close" 
                data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        Modal content goes here...
      </div>
    </div>
  </div>
</div>
```

</div>
</div>

---

<!--
Data visualization is a crucial part of many Big Data projects, and the template includes excellent support for interactive charts using Vega-Altair. This is a powerful combination that allows you to create professional, interactive visualizations directly in your website. The process involves several steps that we'll walk through together. First, you create your chart using Python and Altair, making sure to set the width property to 'container' for responsive design. Then you save the chart as a JSON file and place it in the assets/charts/ directory. In your page's front matter, you must include 'vega: true' to enable chart functionality. Finally, you embed the chart using the vegachart shortcode with the path to your JSON file.
-->

# Step 14: Adding Data Visualizations (1/3)

## Chart Integration (Vega-Altair)
1. **Create Chart**: Generate JSON with Python/Altair
2. **Save File**: Place in `assets/charts/`
3. **Enable Vega**: Add `vega: true` to front matter
4. **Embed Chart**: Use shortcode in page

---

<!--
Here's how to implement the chart creation process in Python. You'll use the Altair library, which is a powerful statistical visualization library for Python. In this example, we're creating a simple bar chart that encodes data from your dataset. The key point here is setting the width property to 'container' - this makes the chart responsive and ensures it adapts to different screen sizes. The height is set to a fixed value like 300 pixels, but you can adjust this based on your needs. Once you've created your chart, save it as a JSON file using the save method. Make sure to place this file in the assets/charts/ directory of your Jekyll site so it can be accessed by your website.
-->

# Step 14: Adding Data Visualizations (2/3)

## Chart Implementation
```python
# Python code to generate chart
import altair as alt

chart = alt.Chart(data).mark_bar().encode(
    x='column_a:N', 
    y='column_b:Q'
).properties(width='container', height=300)

chart.save('assets/charts/my_chart.json')
```

---

<!--
Finally, here's how to embed your chart in your Jekyll page. You'll use the vegachart shortcode with the schema-url parameter pointing to your JSON file. Notice that the path includes your repository name - make sure to replace 'repo-name' with your actual repository name. The div wrapper with height styling ensures the chart displays properly and maintains its proportions. The style attributes on the vegachart element make it fill the entire container. The resulting charts are fully interactive, responsive, and integrate seamlessly with your website's design. This is particularly useful for displaying research results, data analysis, and project outcomes in an engaging way.
-->

# Step 14: Adding Data Visualizations (3/3)

## Embedding Chart in Jekyll

```html
<!-- In your page -->
<div style="height: 400px">
  <vegachart schema-url="/repo-name/assets/charts/my_chart.json" 
            style="width: 100%; height: 100%"></vegachart>
</div>
```

---

<!--
Navigation is the backbone of any website, and customizing it properly is essential for user experience. The navigation menu is configured in the _config.yml file under the navbar section. The structure includes a brand section with your site title and logo, and a nav section with your menu items. Each menu item has a title and URL. You can create dropdown submenus using the 'child' property, which contains a list of sub-items. This is particularly useful for organizing related pages or sections. When configuring navigation, keep it logical and intuitive - group related pages together and use descriptive labels. Make sure to test your navigation on different screen sizes since the template is responsive and will adapt to mobile devices. Remember not to change style:dual and img parameters.
-->

# Step 15: Customizing Navigation

<div class="columns-2">
<div>

```yaml
# In _config.yml
navbar:
  style: dual
  brand:
    title: "Your Project Title"
    img: "./assets/images/logo.png"
    url: /
  nav:
    - title: Guide
      url: /guide.html
    - title: Project
      url: /project.html
   ...
```
</div>
<div>

```yml
    ...
 -  title: Team
    url: /team.html
    - title: Resources
    child:
    - title: Documentation
        url: /docs.html
    - title: Downloads
        url: /downloads.html
```
</div>
</div>

## Navigation Best Practices
- **Logical Structure**: Group related pages
- **Clear Labels**: Use descriptive titles
- **Mobile Responsive**: Test on different screen sizes

---

<!--
The visual appearance of your website can be customized extensively through theme selection and color customization. The template includes several pre-built themes that you can choose from. To change the theme, modify the 'skin' property in the chulapa-skin section of your _config.yml file. Some popular options include 'graymor' for a professional gray theme, 'minty' for a fresh green look, 'lux' for an elegant dark theme, 'journal' for a clean, readable style, and 'academia' for an academic appearance. Each theme has its own color scheme and typography that's been carefully designed to work well together. Choose a theme that matches your project's tone and audience expectations.
-->

# Step 16: Theme Customization

## Choosing a Theme
```yaml
# In _config.yml
chulapa-skin:
  skin: "graymor"  # or minty, lux, journal, etc.
```

## Available Themes
- **graymor**: Professional gray theme
- **minty**: Fresh green theme
- **lux**: Elegant dark theme
- ...

---

<!--
If you want to further customize the appearance beyond the pre-built themes, you can override specific color variables in the 'vars' section. For example, you can change the primary color to match your institution's branding or set a custom background color. The primary-color variable affects buttons, links, and other interactive elements, while body-bg controls the background color of your pages. This flexibility allows you to create a unique look while maintaining the professional quality of the template. Just make sure to choose colors that provide good contrast and readability for your users.
-->

# Step 16: Theme Customization

## Custom Colors
```yaml
chulapa-skin:
  vars:
    primary-color: "#ff0000"
    body-bg: "#fbf1ed"
```

---

<!--
Typography plays a crucial role in your website's appearance and readability. The template allows you to easily integrate custom fonts from Google Fonts. To add a custom font, first go to fonts.google.com and find a font you like. Copy the import URL and add it to the googlefonts section in your _config.yml file. Then, to apply the font site-wide, add the font-family name to the vars section under headings-font-family for headings or other typography variables. This example shows how to integrate the Lekton font, which is a nice monospace font that works well for technical content. Choose fonts that are readable and appropriate for your project's content and audience.
-->

# Step 17: Adding Custom Fonts

## Google Fonts Integration
```yaml
# In _config.yml
googlefonts:
  - url: "https://fonts.googleapis.com/css2?family=Lekton:ital,wght@0,400;0,700;1,400&display=swap"

chulapa-skin:
  vars:
    headings-font-family: "Lekton"
```

---

<!--
You can also create custom CSS classes for more targeted font usage. In the assets/css/custom.scss file, you can define classes like the example shown, which allows you to apply specific fonts to individual elements using HTML classes. This gives you fine-grained control over typography while maintaining the overall design consistency of your site. The custom-font class applies the regular weight, while custom-font-bold applies the bold weight. You can then use these classes in your HTML content to apply the custom font to specific paragraphs, headings, or other elements where you want the special typography to appear.
-->

# Step 17: Adding Custom Fonts locally

## Custom CSS Classes
```scss
// In assets/css/custom.scss
.custom-font {
  font-family: 'Lekton', monospace;
  font-weight: 400;
}

.custom-font-bold {
  font-family: 'Lekton', monospace;
  font-weight: 700;
}
```

---

<!--
Advanced layout techniques can help you create more visually interesting and effective page designs. The template includes several helpful features for this. The full-width-wrapper class allows you to create sections that span the entire width of the browser window, which is particularly effective for hero images or section dividers. This breaks out of the normal content container and can create dramatic visual impact. Use this technique sparingly for maximum effect - it works best for large images, section separators, or when you want to create a strong visual statement. The full-width-image class ensures that images within these sections display properly and maintain their aspect ratio.
-->

# Step 18: Advanced Layout Techniques

## Full-Width Sections
```html
<div class="full-width-wrapper">
  <img src="assets/images/wide-image.jpg" 
       alt="Full width image" 
       class="full-width-image">
</div>
```

---

<!--
Managing team member information is made easy with the template's built-in team management system. Team information is stored in the _data/members.yml file, which uses YAML format to define each team member's details. For each member, you can specify their name, and a personal page (or personal github account). Once you've added your team members to this file, the footer will automatically generate a team section that displays all members.
-->

# Step 19: Team Member Management

## Team Configuration
```yaml
# In _data/members.yml
- name: First Name Last Name
  github: https://kdd.isti.cnr.it/people/student-1
  role: student
```

---

<!--
Before delivering your website, it's important to go through a final checklist to ensure everything is working correctly. First, verify that your repository name follows the correct format and that the baseurl in your _config.yml matches exactly. Check that all your pages have proper front matter with the necessary metadata. Make sure your navigation is updated and functional, with all links working correctly. Verify that team information is complete and accurate in the members.yml file. Ensure all multimedia assets like images and videos are properly placed in the assets directory and display correctly. Finally, confirm that GitHub Pages deployment is successful by checking that your site is accessible at the expected URL.
-->


# Step 20: Final Checklist and Best Practices

## Pre-Launch Checklist
- ✅ **Repository Name**: Correct format (gX-2025-website)
- ✅ **Baseurl**: Matches repository name
- ✅ **Front Matter**: All pages have proper headers
- ✅ **Navigation**: Updated and functional
- ✅ **Team Info**: Complete member information
- ✅ **Multimedia**: Images and videos properly placed
- ✅ **GitHub Pages**: Deployment successful

---

# Step 20: Final Checklist and Best Practices

## Quality Assurance
- **Cross-browser Testing**: Chrome, Firefox, Safari
- **Mobile Responsive**: Test on different screen sizes
- **Load Speed**: Optimize images and assets
- **Accessibility**: Alt text for images, proper headings
- **SEO**: Meta descriptions, page titles

---

# Thank You!

## Questions?
- Review the guide documentation
- Check GitHub repository

<br>

**Let's start building!**