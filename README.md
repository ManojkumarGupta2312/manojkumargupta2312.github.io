# Manojkumar I. Gupta | Academic research portfolio

**A complete, ready-to-publish, static academic website** using only the supplied photographs, recordings, thesis-derived images and verified academic information. Compatible with the root of an existing GitHub Pages repository. No installation, framework, build or API key is required.

## What changed in this redesign

The layout has been reviewed in a rendered Chromium browser at 320, 375, 768, 1024, 1366 and 1920 pixels. The older very large media blocks have been replaced by compact, balanced **media-left / text-right research cards**, each with a media viewport of about **250 px high on a typical desktop**. Text is vertically centred alongside each image or video. On narrow phones, media appears above the explanation.

- A more distinctive but restrained homepage with a smaller professional portrait, warm academic typography and subtle graphic accents.
- A three-part **visual research index** linking directly to the experiments, droplet-response work and turbulent-boundary-layer research.
- Nine clear research cards with short, engaging science descriptions, bounded media, fine borders, subtle shadows and consistent captions.
- A **full-size image viewer** for still photographs and figures; native MP4 controls and fullscreen on videos. No forced autoplay and only one video can play at once.
- Academic background and practical research capabilities in tidy, scannable panels.
- Journal and APS DFD 2026 outputs in balanced cards, with the complete user-supplied APS abstract, affiliation and funding in an expandable detail.
- A compact conference list, three experience cards and a clear contact section for researchers, prospective supervisors and academic employers.
- The thesis PDF is **not included**. Nothing describes near-contact encounter kernels as directly measured coalescence rates.

## Use the website on your computer

1. Extract the ZIP archive.
2. Open the folder named `Manojkumar_Gupta_Academic_Website_Visual_Redesign_Final`.
3. Double-click `index.html` to open it in Chrome, Firefox or Edge. Research videos are local MP4s and work best in modern browsers.
4. For another way to preview, open this folder in VS Code and run a simple local server, or use `python -m http.server 8000` in a terminal and open `http://localhost:8000/`.

## Update the existing GitHub Pages website using GitHub Desktop (Windows)

**Do not delete the repository folder or the `.git` directory.** To avoid losing anything, overwrite the old website contents rather than deleting everything first.

1. Download the new ZIP and **Extract All** in Downloads.
2. Open the extracted website folder. Confirm **`index.html`, `assets`, `files`, `README.md`** are inside it.
3. Open **GitHub Desktop**, select repository **`manojkumargupta2312.github.io`** and choose **Repository → Show in Explorer**. This opens the local *repository root*.
4. Optional backup: copy the old repository folder to another location. Prior committed files can also be restored from Git history.
5. In the **extracted new website folder**, select everything inside (**Ctrl+A**, **Ctrl+C**). In the **local GitHub repository root**, paste (**Ctrl+V**), and choose **Replace the files in the destination** when Windows prompts. **Do not copy the outer ZIP or the outer folder** into the repository. The new `index.html` must sit directly in the repository root alongside `assets` and `files`.
6. **Do not remove** `.git`, `.github`, `CNAME`, `.nojekyll`, branch settings or other existing GitHub configuration. Unused older assets may be cleaned up separately, but leaving them initially is harmless.
7. Return to GitHub Desktop → **Changes**. A long list of modified and added files is normal. Enter message `Improve research portfolio layout` → click **Commit to main** → **Push origin**.
8. Check the repository's **Actions** page for a successful Pages deployment. If required, use **Settings → Pages** to confirm the correct publishing branch and `/(root)` folder. Do not change working configuration unnecessarily.
9. Open **https://manojkumargupta2312.github.io/**. After deployment, use **Ctrl + Shift + R**. Check the portrait, research videos, image expansion, APS abstract, CV and external links on desktop and phone.

You do **not** upload the ZIP itself to GitHub. Each included video file is smaller than GitHub's 100 MB individual-file limit. The package is larger because it contains multiple research recordings.

## Three simple media replacements (no coding required)

| What you want to change | Exact file to overwrite | Format |
|---|---|---|
| Profile portrait | `assets/images/profile-photo.jpg` | JPEG |
| TBL facility photograph | `assets/images/tbl-facility.jpg` | JPEG |
| TBL Voronoï animation | `assets/media/tbl-voronoi.mp4` | MP4 (H.264 recommended) |

Important details:
- Use **Windows Explorer → View → Show → File name extensions** to confirm `.jpg` and `.mp4`, not `.jpg.jpg` or `.mp4.mp4`.
- For photos, save/convert the new image to JPEG and rename it to the exact name above. Do not simply rename a PNG to `.jpg` without converting it.
- For MP4, convert to H.264 MP4 when necessary; overwriting the video is enough if it has the same filename.
- The TBL video **poster/thumbnail** can also be changed: `assets/images/tbl-video-poster.jpg`. If you replace the MP4 without updating this poster, visitors will see the older still image until they press Play.
- The 3 small featured topic thumbnails are `assets/images/teaser-facility.jpg`, `teaser-droplets.jpg` and `teaser-tbl.jpg`. The third thumbnail can be replaced separately if you change the TBL photograph.
- After swapping local files, commit and push as above. If the browser still shows the previous image, refresh without cache.

## Directory structure

```text
index.html                          Homepage and all website sections
assets/css/styles.css               Aesthetic styling and responsive layouts
assets/js/main.js                   Mobile menu, image viewer and video control
assets/images/                     Portrait, TBL photograph, posters, figure, small topic thumbnails
assets/media/                      Experimental images and all MP4 recordings
files/                              CV, conference abstracts and poster PDFs
media-config.json                   Original media names and research sequence
MEDIA_MAPPING.csv                   Exact media-to-section mapping
START_HERE_UPDATE_WEBSITE.txt       Short beginner-friendly instructions
QA_CHECKS.txt                       Verification notes
robots.txt                          Search indexing information
sitemap.xml                         Homepage entry for search crawlers
```

## Scientific and editorial guardrails

- Current academic status is **PhD thesis submitted (July 2026)**, not awarded a PhD degree.
- The thesis is *Clustering and Redistribution of Polydisperse Droplets in Vortical Flows*.
- A controlled vortex ring isolates coherent-vortex mechanisms; an ABL-like rough-wall TBL shares selected scales with the atmospheric boundary layer, but is not equivalent to a real cloud.
- RDF, radial relative velocity and kinematic near-contact kernels are used to assess encounter statistics; **physical collisions and coalescence were not directly resolved**.
- The website's acknowledgement of helping develop the apparatus and FE2B Lab capabilities reflects the author's first-hand account and does not claim sole responsibility for the laboratory.
- APS DFD 2026 abstract wording, author affiliations and funding are supplied by the author, not reconstructed from an external abstract page.

## Tests and limitations

The render tests use local files embedded directly in Chromium because this environment restricts local page navigation. They verify responsive layout and visible controls; **they do not constitute a test of the live GitHub Pages deployment**. Static checks validate local file references. MP4 codec checks confirm H.264. After publishing, test playback in the browser on the public site.
