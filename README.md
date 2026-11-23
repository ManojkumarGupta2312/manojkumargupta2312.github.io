# Manojkumar I. Gupta — revised academic website

This is a complete, framework-free static website prepared for the GitHub Pages repository:

`https://github.com/ManojkumarGupta2312/manojkumargupta2312.github.io`

**This ZIP contains the website files, not a parent folder that should be deployed.** Upload the **contents** of the extracted website folder into the root of your repository.

## 1. Three files you can replace later — no HTML editing

| What you want to update | Open this folder | Replace this exact file |
|---|---|---|
| Your photograph | `assets/images/` | `profile-photo.jpg` |
| TBL facility photograph/figure | `assets/images/` | `tbl-facility.jpg` |
| TBL Voronoï video | `assets/media/` | `tbl-voronoi.mp4` |

**How to replace a photo:** Open the new photo in Windows **Paint** → **File → Save as → JPEG picture** → give it the exact name `profile-photo.jpg` or `tbl-facility.jpg` → save it into the matching folder → click **Replace the file in the destination**. A clear portrait-oriented picture works best for the profile; the TBL image can be any aspect ratio. The site will fit it without cropping research diagrams, legends or axis labels.

**How to replace the TBL video:** Your new video needs to be MP4 (preferably H.264/AAC for broad browser support). Rename it exactly `tbl-voronoi.mp4`, copy it into `assets/media`, and approve **Replace**. Do not merely change the extension of a non-MP4 video; export it to MP4 first. The site keeps a poster in `assets/images/tbl-video-poster.jpg`. If desired, replace that JPEG with a suitable still frame from the new video.

**After replacing any file:** Commit and push using GitHub Desktop as in section 3 below. If the previous image still appears online, press **Ctrl + Shift + R** to bypass the browser cache.

The original experiment videos remain in `assets/media` under their *exact original filenames*. The easy-to-replace `tbl-voronoi.mp4` is an additional working copy of the supplied TBL recording, so its original filename remains preserved for provenance.

## 2. Preview on Windows

1. Right-click the ZIP and select **Extract All**.
2. Open the extracted folder and double-click `index.html`.
3. Test navigation and each video. Some file-based browser restrictions may limit playback; you can preview via a local web server or after deployment.

## 3. Update your existing GitHub Pages website

**Method: GitHub Desktop (recommended, because video files exceed the GitHub browser's comfortable upload limits).**

1. Make a backup of your old site: visit the repository, click **Code → Download ZIP** and save that backup separately.
2. Open **GitHub Desktop** and sign in.
3. Select **File → Clone repository** and choose `ManojkumarGupta2312/manojkumargupta2312.github.io`. If already cloned, choose it from the repository list instead.
4. In GitHub Desktop click **Repository → Show in Explorer**. This opens the local website repository folder.
5. In that folder, delete the old website's `index.html`, `assets` and `files` if present. You may replace old `README.md` and `MEDIA_MAPPING.csv` too.
6. **Do not delete** `.git`, `.github`, `CNAME` or `.nojekyll` (if present), or any unrelated custom-domain/deployment files you still use.
7. Open the **new extracted website folder**. Press **Ctrl + A** to select *everything inside it*, **Ctrl + C**, then paste into the GitHub repository folder using **Ctrl + V**. Do not paste the ZIP as a file, or add an extra nested folder around `index.html`.
8. In GitHub Desktop, write a summary such as `Revise academic research website`, then click **Commit to main** (or your currently configured publishing branch), followed by **Push origin**.
9. Open **Repository → View on GitHub → Settings → Pages**; verify the selected publishing branch and root directory match the place you pushed the files.
10. Open `https://manojkumargupta2312.github.io/` and refresh when deployment finishes. Check the portrait, the research media, the conference section and the mobile layout.

**Important:** Files inside a repository are public. Do not upload the full PhD thesis, private data, or materials you do not wish to publish. The full thesis PDF is **not included** in this bundle.

## 4. Research media order and labels

See `MEDIA_MAPPING.csv`. The nine visible research entries appear in this order:

1. Vortex-ring experimental facility photograph
2. Fog-seeded propagation images
3. Vortex PIV characterisation video
4. Water-droplet interaction video
5. MATLAB Lagrangian tracking movie
6. Vortex-frame Voronoï movie
7. Kinematic kernel figure (thesis Figure 5.8)
8. TBL facility arrangement (thesis Figure 6.1; replace with an actual photo when available)
9. TBL Voronoï video

Research content follows the submitted thesis *Clustering and Redistribution of Polydisperse Droplets in Vortical Flows* (July 2026). Claims about near-contact kernels explicitly distinguish kinematic estimates from physically observed droplet collisions and coalescence. The TBL is described as an atmospheric-boundary-layer-*like* laboratory flow, not a complete atmospheric simulation.

## 5. APS DFD 2026 presentation (updated with supplied abstract)

- Conference: 79th Annual Meeting of the APS Division of Fluid Dynamics, **22–24 November 2026** (three-day meeting).
- Venue: **Orange County Convention Center, Orlando, Florida, USA** (confirmed on APS official conference website).
- Talk title: *Vortex-ring-induced clustering and collision enhancement of polydisperse droplets*.
- Presentation: **24 November 2026 (scheduled)**, session *Particle-Laden Flows: Collision and Aggregation*. The exact talk clock time was not established; no time is invented.
- The **complete abstract provided directly by the author**, including the event-based dynamic collision-count sentence, has been copied to `index.html` without editing its scientific claims.
- The **full author affiliations and funding acknowledgement** supplied by the author appear below the abstract.
- Official meeting programme: https://dfd-meeting.aps.org/schedule/
- **As of 23 November 2026**, the talk date is in the future. Once the talk has actually been delivered, update `(scheduled)` in `index.html` to `(presented)` or remove the parenthesis.

## 6. Contents

- `index.html` — complete page with responsive media-led research sequence
- `assets/css/styles.css` — presentation rules and breakpoints
- `assets/js/main.js` — navigation and video playback behaviour
- `assets/images/` — portrait, relevant still images, user-replaceable TBL photo, and thesis figure crops
- `assets/media/` — provided original experimental image/video files plus easy-to-replace TBL video alias
- `files/` — original CV and existing conference poster/abstract PDFs
- `media-config.json` and `MEDIA_MAPPING.csv` — provenance and exact file mapping

## 7. Design and verification

- One-line `Manojkumar I. Gupta` (without a period after the surname) in the hero on typical screens.
- No numerical highlight cards, oversized labels or decorative statistics.
- Research rows use wide media (~68%) and vertically centred technical text (~32%).
- Native video controls, metadata-only preload, no automatic video playback.
- Research figures are displayed with `object-fit: contain`; axes and colour bars are not deliberately cropped.
- The design uses dark navy, neutral tones and readable contrast without colour-dependent meaning.
- Review and responsive test results appear in the delivery message; test again after deployment with your replacement media.
