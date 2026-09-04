ID ILLUSTRATES — GITHUB WEBSITE FILES

Upload the CONTENTS of this folder to your GitHub repository. Keep index.html at the top level.

EASY IMAGE UPDATES
------------------
The images you uploaded are now normal files in the repo instead of being buried inside index.html.

assets/images/
  hero-koncept.png            Homepage hero image
  commission-shanae-a4.png    Shanae A4 commission
  commission-hannah-a5.png    Hannah A5 commission
  commission-amy-tom.png      Amy & Tom commission
  workshops.png                Workshop image/collage

To replace one without editing HTML:
1. Prepare the new image.
2. Give it EXACTLY the same filename as the image you want to replace.
3. In GitHub, open assets/images/.
4. Delete/replace the old file and upload the new one with the same filename.
5. Commit the change. GitHub Pages will redeploy automatically.

FORM GUIDE IMAGES
-----------------
assets/form-guides/
  paper-sizes-guide.png
  portrait-landscape-guide.png
  reference-photo-guide.png

Replace these in the same way while keeping the filename.

CLIENT LOGOS
------------
assets/logos/
  allpress-espresso.svg
  koncept-coffee.svg
  atelier-three.svg

The white SVG backgrounds have been removed from these three files.
The other logos in the banner still use the same source URLs already in the website. The banner now uses transparent containers + CSS blending so their white image backgrounds visually disappear against the site.

If you later get official transparent PNG/SVG files for Starbucks, Levi's, Landor, Metro or Beyond Nine, upload them into assets/logos/ and change that logo's img src in index.html to the new local filename.

IMPORTANT
---------
Do not rename index.html or commission-form.html.
Do not delete the assets folder.
The contact/commission form submission setup has not been changed.

MOBILE UPDATE
-------------
This version includes:
- working mobile drop-down navigation
- tighter mobile spacing and typography
- larger touch targets
- mobile-friendly form fields
- improved mobile carousel sizing
- subtle borders and shadows around portfolio thumbnails
