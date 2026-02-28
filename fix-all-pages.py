import os
import re

# Adobe Fonts link
adobe_fonts = '<link rel="stylesheet" href="https://use.typekit.net/rhw2hbf.css">'

# Standard navigation
standard_nav = '''    <ul class="nav-links">
      <li><a href="masha.html">Masha</a></li>
      <li><a href="approach.html">Our Approach</a></li>
      <li><a href="works.html">Works</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>'''

html_files = [
    'index.html', 'about.html', 'approach.html', 
    'inner-garden.html', 'masha.html', 'works.html', 'contact.html'
]

for filename in html_files:
    if not os.path.exists(filename):
        continue
    
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Add Adobe Fonts if not present
    if 'use.typekit.net' not in content:
        content = content.replace(
            '<link href="https://fonts.googleapis.com',
            f'{adobe_fonts}\n  <link href="https://fonts.googleapis.com'
        )
    
    # Fix navigation - find and replace the nav-links ul
    nav_pattern = r'<ul class="nav-links">.*?</ul>'
    content = re.sub(nav_pattern, standard_nav, content, flags=re.DOTALL)
    
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ {filename} updated")

print("\n✓ All pages updated with Museo Sans + standard navigation")
