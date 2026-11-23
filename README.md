# Manojkumar I. Gupta — Academic Research Portfolio

This is the corrected and complete static website. `index.html` is at the **root of the ZIP**. The screenshots in `PREVIEWS/` are generated from the **exact HTML and CSS** included here, not a different draft.

## Important: how to see the correct website

**Extract the ZIP before opening `index.html`.** If you open the HTML directly inside a ZIP archive, Windows may show a temporary copy of `index.html` without the `assets/` folder. In that case you will see an unstyled page, which does **not** match the preview. The archive is intentionally flat: `index.html` sits beside `assets`, `files` and `PREVIEWS`.

Use Chrome, Edge or Firefox to open the extracted `index.html`. If browser security restrictions prevent file-based video playback, the deployed site will use the native video players; alternatively run a local Python server (`python -m http.server 8000`) in this extracted folder and open `http://localhost:8000`.

## What this website includes

- Single-line name, photograph, affiliation and concise introduction.
- A visual research sequence containing nine original experiments/analyses (large media on the left and short, vertically centred text on the right on desktop).
- The user's role in developing the vortex-ring and droplet facility with Prof. Narsing Kumar Jha.
- Academic profile, selected research capabilities, journal publication, APS DFD conference talk and complete author-supplied abstract (expandable), other conference entries, teaching and contact details.
- Five playable MP4s with native controls and poster images; additional original video copies are retained for provenance.
- The latest user-supplied profile photograph and TBL facility photograph from the supplied website ZIP.
- No full doctoral thesis PDF or unrelated images.

## Change 3 media files

| Media | Replace path | Format |
|---|---|---|
| Portrait | `assets/images/profile-photo.jpg` | JPG |
| TBL facility | `assets/images/tbl-facility.jpg` | JPG |
| TBL Voronoï | `assets/media/tbl-voronoi.mp4` | MP4 (H.264 recommended) |

Optional: replace `assets/images/tbl-video-poster.jpg` with a still image from the new video.

Do not change the filenames in the table. They are already linked from the website, so you won't need to edit HTML.

## Replace GitHub Pages site using GitHub Desktop

1. Download this ZIP and choose **Extract All** in Windows Explorer.
2. Review the extracted `index.html`. Compare with screenshots in `PREVIEWS/`.
3. In GitHub Desktop select repository `manojkumargupta2312.github.io` → **Repository → Show in Explorer**.
4. For a backup, you may copy the current website repository folder; previous committed files are also in Git history.
5. Delete/replace the older site files (`index.html`, old `assets/`, old `files/`, old `README.md`, etc.). **Do not delete** `.git/`, `.github/`, `CNAME`, `.nojekyll` or other deployment configuration.
6. Copy **everything INSIDE the extracted ZIP folder** and paste into the **repository root**. `index.html` must not be inside another folder.
7. In GitHub Desktop enter the summary `Correct academic portfolio design` → **Commit to main** → **Push origin**.
8. Check the website at <https://manojkumargupta2312.github.io/> after GitHub Pages finishes deploying. Press **Ctrl+Shift+R** or open in a private browsing window.
9. Compare the live homepage with `PREVIEWS/WEBSITE_PREVIEW_DESKTOP.png` and test the videos and APS abstract disclosure.

If your repository has a custom GitHub Pages publishing workflow, preserve that configuration and publish to its active branch. Otherwise review **Settings → Pages** for branch `main`, directory `/(root)`.

## Quality checks

- All local media, stylesheets, scripts, documents and posters referenced in HTML exist within this archive.
- Mobile menu and APS abstract disclosure tested in Chromium.
- Layout checked at widths 320, 375, 414, 768, 1024, 1366 and 1920 CSS px using the HTML and CSS in this archive; no horizontal overflow or JavaScript errors were observed.
- `PREVIEWS/WEBSITE_PREVIEW_DESKTOP.png` and `PREVIEWS/WEBSITE_PREVIEW_MOBILE.png` show that exact design. Video poster images represent the videos when paused; tests did not require streaming all five MP4 files.
- Local HTTP navigation was blocked by the test environment, so final deployed video loading and GitHub Pages deployment should be checked after pushing. All file paths were separately validated.

## Research media mapping

See `MEDIA_MAPPING.csv`. Original file spellings, including uppercase/lowercase and spacing, are retained.
