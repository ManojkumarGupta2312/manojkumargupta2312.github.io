# FINAL academic research website — Manojkumar I. Gupta

This is a **complete GitHub Pages website**, not a mockup. It uses the original research media supplied by the author and keeps nine experiments in the requested order. The top-level `index.html` is the homepage. No build step, framework or paid service is needed.

## Visual and editorial refinement — 24 November 2026

- Kept the approved 71%/29% desktop research media-to-text proportions and 650 px maximum research-media height.
- Restyled the introduction with a clearly readable, typography-led hierarchy: name; serif research identity; two compact, scientifically grounded sections explaining the cloud droplet-growth bottleneck and the controlled-to-complex experimental approach. Bold and colour highlight physical ideas, not decoration.
- Replaced the previous dark question strip with a three-part, clickable explanation of the **physical questions**: where droplets gather, whether neighbouring droplets approach, and what persists in turbulent shear. The cards link directly to the corresponding original experimental recordings and analyses.
- Kept the full APS DFD 2026 author-supplied abstract and author/funding text, but the disclosure now appears as a small **Abstract +** link, aligned right, and opens the full text on demand.
- Preserved original experimental media, poster thumbnails, publications, conference documents and the user's newly supplied two-page CV unchanged.
- Retained a completely embedded CSS fallback (`<style id="site-style-failsafe">`) with an identical external CSS copy; sync both when editing design later.
- Refreshed desktop and mobile previews and performed responsive, missing-asset, CV-integrity and interaction checks.

## See the website correctly

1. Right-click the ZIP and choose **Extract All**.
2. Open the extracted folder; you must see `index.html`, `assets`, `files` and `PREVIEWS` **together**.
3. Double-click `index.html` to open it in your browser. Check the page against `PREVIEWS/WEBSITE_1366_HOMEPAGE.png` and `PREVIEWS/WEBSITE_375_HOMEPAGE.png`.
4. The stylesheet and JavaScript are **embedded in `index.html` as fallbacks**, so the layout still works without the external CSS/JS. The full media folders must be retained for images and videos.

## Replace three media files without editing HTML

| Item | Replace this precise file | Type |
|---|---|---|
| Profile portrait | `assets/images/profile-photo.jpg` | JPEG |
| TBL facility photo | `assets/images/tbl-facility.jpg` | JPEG |
| TBL Voronoï movie | `assets/media/tbl-voronoi.mp4` | MP4 with H.264 recommended |

Optional: update `assets/images/tbl-video-poster.jpg` to a still frame from the new TBL video. Make sure Windows Explorer shows filename extensions (View → Show → File name extensions). Do not create `profile-photo.jpg.jpg` accidentally.

## GitHub Desktop: replace the current website safely

1. Extract the new ZIP completely and confirm `index.html` opens with the correct design.
2. Open GitHub Desktop → select `manojkumargupta2312.github.io` → **Repository → Show in Explorer**.
3. Back up the old site if useful; previously committed versions can also be retrieved from Git history.
4. In that **repository root**, replace the old `index.html`, `assets`, `files` and obsolete site docs with the corresponding files from the new extracted folder. To avoid stale assets, remove old `assets` and `files` **before** copying the new ones.
5. Do **not** delete `.git`, `.github`, `CNAME`, `.nojekyll` or existing deployment configuration files.
6. Copy **all files and folders from inside** the newly extracted site directory to the repository root. Do not paste the ZIP or a second parent folder. `index.html` must sit at the repository root.
7. GitHub Desktop → write a Summary like `Publish final research portfolio` → **Commit to main** → **Push origin**.
8. Check GitHub Pages deployment in the repository **Actions** tab, then open `https://manojkumargupta2312.github.io/` and press Ctrl+Shift+R. If required, check **Settings → Pages**; for a normal user site select branch `main`, folder `/(root)`.
9. Check the mobile menu, the portrait, nine research rows, five videos, APS abstract disclosure, CV and external links.

## Changes in this revision (24 November 2026) — CV and media proportions

- Research images and videos are moderately smaller than the preceding 75%-media layout: about 71% of the usable media/text row on large desktop screens, with around 29% available for accompanying text; the exact rendered percentage depends on viewport and gap.
- Maximum image/video display height reduced from 700px to 650px; no distortion or cropping is introduced.
- Discovery thumbnails are slightly shorter to maintain balanced visual rhythm.
- The **Curriculum vitae** button now opens the user's newly supplied, 2-page PDF, copied exactly to `files/manojkumar-gupta-cv.pdf` (no edits to CV content).
- Embedded CSS fallback synchronized with the external `assets/css/styles.css`.
- Updated browser previews stored in `PREVIEWS/` and verified against this package.

## Changes in this revision (24 November 2026)

- Enlarged the experimental images and videos by increasing the maximum research content width and changing the desktop media/text ratio from approximately 69:31 to approximately 75:25, depending on viewport width. Both images and videos retain their natural proportions without cutting experimental labels or colour bars.
- Expanded the research explanation directly below the name into two clear paragraphs: (a) the warm-cloud growth bottleneck, turbulence, clustering and relative motion; and (b) the **simple-to-complex** experimental programme, moving from an isolated vortex ring to a droplet-laden turbulent boundary layer.
- Replaced the abbreviated scholar label with **Prime Minister’s Research Fellow (PMRF) at IIT Delhi**.
- Gave the introductory visual gallery more image height.
- Retained the full abstract and all previous nine experiments, publications, TBL facility photograph, recorded videos, academic links and original files.
- Kept the self-contained CSS failsafe synchronized with the standalone stylesheet so the page does not become unstyled if `assets/css/styles.css` is missing.

## Editorial approach

- Minimal, professional first impression designed for academic hiring and research collaborations.
- Genuine research media and three optional jump-to-research thumbnails, rather than stock images.
- Science remains accurate and curiosity-led. Near-contact kernels are *kinematic estimates*, not direct physical coalescence measurements. The rough-wall TBL is ABL-like but not an atmospheric duplicate.
- Personal contribution to apparatus/lab development is communicated in collaboration with Prof. Narsing Kumar Jha and the laboratory team.
- The complete APS DFD 2026 abstract, author affiliations, meeting dates and funding are available in a disclosure panel; concise summary text is shown by default.
- Video playback is user-controlled, with native controls and `preload=metadata`.
- Images of research figures are never cropped in the research rows; the enlarged viewer displays their full original aspect ratio.
- The full submitted thesis PDF is *not* included; research figure crops and already-public CV and abstracts are included.

## Editing later

To change scientific copy, edit `index.html` using VS Code. All active styling is in the `<style id="site-style-failsafe">` block inside `index.html`. A matching copy is also at `assets/css/styles.css`; if you change the design, update **both** copies to keep the failsafe in sync. JavaScript likewise has a matching copy at `assets/js/main.js`.

Original media filenames (including case, spaces and legacy misspellings) have been retained. `assets/media/tbl-voronoi.mp4` is an easy-to-replace working copy; the source recording remains separately in the media directory.
