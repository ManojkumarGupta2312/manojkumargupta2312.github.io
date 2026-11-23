# Manojkumar I. Gupta — Academic Research Portfolio

Complete static GitHub Pages website, redesigned from the user-provided November 2026 website bundle. No build step or subscription needed.

## What changed
- A visual **research portfolio**, rather than a thesis- or presentation-style website.
- The portrait sits at the top of the introductory hero. The name has no trailing period and stays on one line on supported screen widths.
- The research order is preserved: facility → fog visualisation → PIV → interaction → tracking → vortex Voronoï → near-contact kernel → TBL facility → TBL Voronoï.
- Each research item keeps original image/video on the **left (~67%)** and concise, vertically-centred commentary on the **right (~33%)**, then media-above-text on phones.
- The personally developed apparatus/laboratory capabilities are recognised without claiming sole credit for an entire institutional lab.
- Journal article, APS DFD 2026 and other conference records remain. The complete **user-supplied APS abstract and acknowledgements** are preserved in an expandable section for interested visitors.
- The site intentionally does not publish the PhD thesis PDF. The kinematic kernel is not called a measured physical coalescence rate.
- The TBL facility photograph and editable TBL video from the supplied ZIP are retained.

## Edit three media files (before uploading)
Do not edit HTML. In the extracted website directory, replace:

| Change | Replace exact file | Format |
|---|---|---|
| Your portrait | `assets/images/profile-photo.jpg` | JPEG |
| TBL facility photograph | `assets/images/tbl-facility.jpg` | JPEG |
| TBL Voronoï recording | `assets/media/tbl-voronoi.mp4` | MP4, H.264 video recommended |

Optional: replace `assets/images/tbl-video-poster.jpg` with a video still frame (same JPEG filename). If you change a video and keep the old poster, it may show a different example until playback begins. Use exact filenames; Windows may hide filename extensions by default (Explorer → View → Show → File name extensions).

The original user-supplied TBL recording remains separately archived under its original long filename for provenance. Only `tbl-voronoi.mp4` is linked from the website.

## Update the existing GitHub Pages repository using GitHub Desktop (Windows)

1. Download and **extract** the final ZIP. Open the extracted inner website folder; confirm `index.html`, `assets`, `files` are together.
2. In GitHub Desktop choose repository **manojkumargupta2312.github.io**. Select **Repository → Show in Explorer** to open the *local repository folder*.
3. **Recommended backup**: in GitHub Desktop check the current commit history or copy the old directory to another folder. Even if you did not make a backup, committed old versions are recoverable from Git history.
4. From the repository root, remove obsolete site content that the new bundle replaces: old `index.html`, `assets`, `files`, `media-config.json`, `MEDIA_MAPPING.csv`, `README.md`, `START_HERE_UPDATE_WEBSITE.txt` if present. **Never delete** `.git`, `.github`, `CNAME`, `.nojekyll`, other GitHub configuration, or custom-domain configuration.
5. **Copy the contents** of the extracted new website folder (not the outer folder, and not the ZIP) to that repository root. `index.html` must sit directly beside the `assets` and `files` folders.
6. If desired, replace the three media files described above inside that repository folder.
7. Return to GitHub Desktop → **Changes**. A long list of changed/deleted/added files is normal. Enter commit message `Redesign academic research portfolio`, click **Commit to main**, then **Push origin**.
8. Open `https://github.com/ManojkumarGupta2312/manojkumargupta2312.github.io/actions` and look for a successful Pages deploy. If Pages does not deploy, check **Settings → Pages** for `Deploy from a branch`, branch `main`, folder `/(root)` (unless a different working setup is already in place).
9. Open `https://manojkumargupta2312.github.io/` and use **Ctrl+Shift+R** once deployment finishes. Test the portrait, selected research videos, TBL media, CV, DOI and APS abstract expansion.

Never publish the ZIP itself as the website. For GitHub Desktop, GitHub's **100 MB per-file** limit is more relevant than the total ZIP size; individual source video files in this bundle are below that limit.

## Folder structure

```
index.html                       Website content
assets/css/styles.css            Styling and responsive layout
assets/js/main.js                Mobile menu and single-video playback
assets/images/                   Portrait, TBL photo, posters, research figures
assets/media/                    Original recordings and facility media
files/                           CV and public conference PDFs
media-config.json                Original media filenames and sections
MEDIA_MAPPING.csv                Media filenames and placements
START_HERE_UPDATE_WEBSITE.txt    Short Windows upload guide
```

## Modifying text
Use VS Code to edit `index.html`. Scientific content is written as short, editable passages. The full APS abstract is nested in an HTML `<details>` block and is hidden by default until a visitor clicks "Read conference abstract".

## Scientific notes
- Thesis: *Clustering and Redistribution of Polydisperse Droplets in Vortical Flows*, submitted July 2026. Do not imply an awarded degree until confirmed.
- Laboratory vortex rings are controlled analogues for studying coherent vortices, not full atmospheric cloud replicas.
- Pair statistics measure kinematic near-contact encounters, not directly observed hydrodynamic collision or coalescence efficiencies.
- The experiments and data description are grounded in the attached submitted thesis; the statement about helping build the apparatus is based on the author's own account.
