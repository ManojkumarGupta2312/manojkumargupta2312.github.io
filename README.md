# Manojkumar I. Gupta — Final Academic Research Website

A complete, static GitHub Pages website, prepared on **24 November 2026**. This edition retains the supplied academic records and original research media while refining visual hierarchy, typography, colour, spacing, research storytelling and responsiveness.

## What this version changes

- **Editorial introduction**: The first screen introduces the research identity and scientific question; an illustrated-by-typography three-part narrative immediately below explains the cloud-growth challenge, the experimentally controlled vortex-ring approach, and the extension to a turbulent boundary layer.
- **Professional visual language**: Restrained navy with copper, teal and blue accents; serif display typography balanced with readable sans-serif body text; consistent cards, quiet shadows and white space where needed.
- **Research gallery**: Nine research items in the established scientific order. Original experiments and plots are shown on the left, short descriptions on the right at desktop widths. On phones, media moves above the description.
- **Original ratios preserved**: Every research image and video is uniformly scaled, without stretching or cropping. Wider or taller sources may therefore occupy different amounts of the media panel. Still figures can be opened at full size; videos have native controls.
- **Academic records**: The verified journal article, APS DFD 2026 presentation and author-provided abstract, conference PDFs, academic CV, teaching and experimental experience, contact details and professional profile links remain.
- **Accurate scope**: PhD **thesis submitted** in July 2026 (no assertion of awarded degree); wind-tunnel/atmospheric-boundary-layer **similarity, not equivalence**; near-contact encounter kernels **not direct physical coalescence measurements**.

The supplied PhD thesis PDF **is not** part of this site.

## GitHub Desktop: update your existing website (Windows)

**The ZIP is the website package, not a file to upload as-is. Do not delete your repository.**

1. Download `Manojkumar_Gupta_Academic_Website_Refined_Final.zip`, right-click it and choose **Extract All**.
2. Open the extracted folder until you see `index.html`, `assets`, and `files`. These must be together at the same level.
3. In **GitHub Desktop**, select the repository `manojkumargupta2312.github.io` and click **Repository → Show in Explorer**.
4. In Windows Explorer, copy **everything inside** the extracted folder and paste it **inside the open repository folder**, replacing same-named files when asked.
5. **Keep** `.git`, `.github`, `CNAME`, `.nojekyll` and any other working GitHub configuration files. You don't need to delete older, unrelated files to publish this version.
6. In the **repository folder** (not the extracted folder), double-click `index.html` and make sure the card colours, photograph, research images and short introduction display correctly.
7. Back in GitHub Desktop, enter a commit message such as `Final academic portfolio visual refinement`, click **Commit to main**, then **Push origin**.
8. Once GitHub Pages publishes, open <https://manojkumargupta2312.github.io/> and press **Ctrl + Shift + R**. Check the CSS, photographs, video playback, CV and conference abstract.

If the public site is unstyled, inspect <https://manojkumargupta2312.github.io/assets/css/styles.css>. The CSS file must contain the complete design (starting with the `Research portfolio` comment), not only its last section. The repository root should contain `index.html`, and CSS must be at `assets/css/styles.css`.

## Replace three media files later — no HTML edits

| Media | Relative path | Required format |
|---|---|---|
| Profile photograph | `assets/images/profile-photo.jpg` | True JPEG |
| Turbulent-boundary-layer facility photograph | `assets/images/tbl-facility.jpg` | True JPEG |
| TBL Voronoï video | `assets/media/tbl-voronoi.mp4` | MP4 (H.264 recommended) |

Overwrite the relevant file with one that has the **exact name and extension**. To update the TBL video preview image too, replace `assets/images/tbl-video-poster.jpg` with a matching JPEG frame. In Windows Explorer, enable **View → Show → File name extensions** to avoid accidental names such as `profile-photo.jpg.jpg`.

The website automatically adjusts research media to the source's aspect ratio. Don't set a fixed height or `object-fit: cover` for research media.

## File structure

```text
index.html                          Entire website
assets/css/styles.css               Complete responsive CSS design
assets/js/main.js                   Mobile navigation, research image viewer, video handling
assets/images/                     Portrait, TBL facility, poster frames and illustrative research previews
assets/media/                      Uploaded experimental photographs and videos
files/                              CV, conference abstracts and posters
MEDIA_MAPPING.csv                   Media-by-section source filename mapping
MEDIA_ASPECT_RATIOS.csv             Media dimensions and ratios
media-config.json                   Media configuration
QA_CHECKS.txt                       Static and responsive test results
START_HERE_UPDATE_WEBSITE.txt       Quick Windows publishing guide
robots.txt, sitemap.xml             Search indexing configuration
```

## Research media and performance

The package includes the original research media, including large videos, so the ZIP is comparatively large. None of the included videos individually exceeds GitHub's 100 MB file upload limit. The page uses native video controls with metadata preloading and prevents multiple videos playing at once. Files should be placed in the repository exactly as in this package; GitHub Pages needs their capitalization and spaces preserved.

## Verification and limitations

The HTML, CSS and JavaScript have been checked for complete local paths, and responsive renders have been tested using Chromium at 320, 375, 768, 1024, 1366 and 1920 pixels. The website’s interactive navigation and image viewer were also tested. Because this environment restricts navigating a local HTTP address in its browser, the rendering test embedded the local CSS, JS and thumbnail images and used the original video sizing metadata. **Public GitHub Pages deployment and streaming of hosted MP4s must still be verified after pushing.**

The site's written content and claims remain grounded in the supplied research materials and the user-provided academic record. No stock or invented experimental imagery is used.
