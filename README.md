# Manojkumar I. Gupta — Academic Website

A complete static academic website for GitHub Pages, rebuilt from the researcher's previous site and original experimental media. The submitted 2026 PhD thesis was used to verify the research descriptions and selected findings. **The full thesis PDF is deliberately not included.**

## 1. What is included

- `index.html` — full website, ready to serve from the repository root.
- `assets/css/styles.css` — all styling, including layouts for phones, tablets, laptops and desktop monitors.
- `assets/js/main.js` — accessible mobile navigation and single-video-at-a-time playback.
- `assets/images/` — existing researcher portrait, original existing graphical abstract, video posters derived from the supplied videos, two cropped research diagrams/figures from the researcher's thesis, favicon.
- `assets/media/` — **all five original MP4 videos, plus two original experimental research images, with exact filenames preserved.**
- `files/` — previously linked academic CV, EFDC2 abstract, FMFP 2025 abstract and PMRF symposium poster.
- `media-config.json` — machine-readable media inventory and mapping.
- `MEDIA_MAPPING.csv` — original filenames, corresponding website sections, media types and inclusion status.
- `README.md` — this file.

The website does not require React, Node.js, npm, a web host other than GitHub Pages, third-party scripts, API keys or paid dependencies.

## 2. Preview it on your computer

1. Extract `Manojkumar_Gupta_Academic_Website_Final.zip` to a normal folder.
2. Open the extracted `index.html` file in Chrome, Edge, Firefox or Safari.
3. Make sure the extracted folder still contains `assets/` and `files/` directly beside `index.html`. Do not move the HTML file away from these folders.
4. Press the video play buttons to review the five supplied research videos. Videos are not set to autoplay and use `preload="metadata"`.

If browser security settings block local video seeking, you can view it using a small local server. In a terminal opened inside the extracted folder, run `python -m http.server 8000`, then open `http://localhost:8000` in a browser. This is only for local preview; **GitHub Pages requires no Python server**.

## 3. Exactly how to replace your existing GitHub Pages site — recommended route

Repository: <https://github.com/ManojkumarGupta2312/manojkumargupta2312.github.io>

Current website: <https://manojkumargupta2312.github.io/>

**Do not upload the ZIP file itself as the website. Extract it and upload its contents.**

### Recommended: GitHub Desktop (easiest way to replace a complete site)

1. Sign into GitHub at `github.com`.
2. Open the existing repository at the link above. Optional but recommended: choose **Code → Download ZIP** and save a backup of your previous website.
3. Install and sign into **GitHub Desktop**: <https://desktop.github.com/>.
4. In GitHub Desktop, select **File → Clone repository → URL** and enter `https://github.com/ManojkumarGupta2312/manojkumargupta2312.github.io`. Choose a local destination and click **Clone**.
5. Open that cloned local repository in Windows File Explorer. You will see files such as the **old** `index.html`, `assets/` and `files/`.
6. Replace the previous site's `index.html`, `assets/` and `files/` with the new `index.html`, `assets/`, `files/`, `media-config.json`, `MEDIA_MAPPING.csv` and `README.md` from this package. In other words, copy **everything inside** the extracted package into the repository root. Allow replacement of files with matching names.
7. It is best to **delete obsolete old website assets** no longer used by the new page, particularly the previous `assets/images/theme-*.png` files. You can delete the old `assets/` and `files/` folders before copying the new ones **if you know they contain only files for the former website**. Do not accidentally remove unrelated repository content.
8. **Do not delete** `.git`, `CNAME` (if one exists for a custom domain), `.nojekyll` or necessary `.github/workflows` configuration without checking its purpose.
9. Open GitHub Desktop. Under **Changes**, you should see the new and modified HTML, CSS, assets and videos.
10. Enter a commit summary, for example `Redesign academic website with original research media`.
11. Click **Commit to main** (or the repository's existing default publishing branch), then click **Push origin**.
12. In the repository on github.com, go to **Settings → Pages**. If using branch-based deployment, confirm **Build and deployment → Deploy from a branch → main → /(root)**, then save if necessary. If your repository uses a working GitHub Actions publishing workflow, preserve the relevant configuration instead of switching it blindly.
13. Open <https://manojkumargupta2312.github.io/> after GitHub Pages has built the new version. In the browser, use **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac) to clear cached copies of old CSS and images.
14. Review the six research sections on both your phone and computer, and play each video.

**GitHub web browser alternative:** You can use **Add file → Upload files** at the repository root, but you must retain the `assets/css/`, `assets/js/`, `assets/images/`, `assets/media/` and `files/` folder hierarchy. Some browsers/upload interfaces handle folders differently. GitHub Desktop is more reliable for a site with nested directories and videos. Do not upload only `index.html`, and do not leave the ZIP file in the repository as your deployed website.

### Replace or keep old site files?

**Replace the old website, not alongside it.** The existing repo root should have **one active `index.html`**. Replace the old CSS, research section assets and site structure with the files in this package. Remove old orphaned theme illustrations if not referenced elsewhere. Preserve separate infrastructure or custom-domain files that you recognise as necessary.

## 4. Original experimental media mapping

All five uploaded videos and both vortex-ring images are **already included**; no video copying is required when using the full ZIP.

| Original filename | Website research section | Destination | Status |
|---|---|---|---|
| `Snapshots showing the propogation of the vortex ring.jpg` | 01. Vortex-ring generation | `assets/media/` | Included, JPEG |
| `Vortex ring PIV_analysed into the MAtalb PIVlab.mp4` | 01. Vortex-ring characterisation | `assets/media/` | Included, MP4 |
| `droplet laden vortex flow facility developed at IIT Delhi.png` | 02. Vortex–droplet interaction | `assets/media/` | Included, PNG |
| `Interaction of vortex ring with polydisperse droplets.mp4` | 02. Vortex–droplet interaction | `assets/media/` | Included, MP4 |
| `Matlab analysed movie of exp. clip of interaction of vortex ring with droplets.mp4` | 03. Droplet tracking | `assets/media/` | Included, MP4 |
| `Vortex ring frame voronoii analysis.mp4` | 04. Preferential concentration | `assets/media/` | Included, MP4 |
| `voronoii-analysis-in-the-vortex-frame-in-abl-like-tbl_ARNha4gT(1).mp4` | 06. Turbulent boundary layer | `assets/media/` | Included, MP4 |

The researcher's submitted thesis also supplied original analytical **Figure 5.8** (kinematic kernel) and **Figure 6.1** (wind-tunnel arrangement). Cropped versions were included as `assets/images/kinematic-kernel-thesis-fig-5-8.webp` and `assets/images/wind-tunnel-arrangement-thesis-fig-6-1.webp`. These are identified as thesis figures in the site; no thesis pages, full PDF, or unrelated stock visuals are distributed.

### Missing or unsuitable file

The uploaded file `TBL + Droplets Interaction(1).jpeg` is a **Windows File Explorer screenshot** showing the names of TBL assets; it is not a photograph of the wind-tunnel facility. It was intentionally **not** displayed as experimental evidence. A wind-tunnel arrangement illustration from the submitted thesis is included instead. If you have the actual original TBL facility photograph, it can be added later.

### How to add a replacement TBL facility photograph later

1. Copy the image into `assets/media/`, keeping its original filename.
2. In `index.html`, find the section `<article ... id="tbl" ...>` and the secondary image with `src="assets/images/wind-tunnel-arrangement-thesis-fig-6-1.webp"`.
3. Change this `src` to `assets/media/Your exact image filename.jpg` (or `.png` as appropriate), edit the `alt` description and the caption so they describe the actual photo.
4. Update `media-config.json` and `MEDIA_MAPPING.csv` to reflect the new image.
5. Commit and push the changes to GitHub.

## 5. Updating the scientific content later

- Research descriptions and numerical highlights are all in `index.html`, next to their corresponding research media.
- The homepage facts are in the `.insight-band` section.
- Publication links, PDFs, academic email and professional profile URLs are also in `index.html`.
- The styling is centralised in `assets/css/styles.css`. No build step is needed.
- Do **not** label an unpublished doctoral manuscript as a published journal article until it has been accepted/published.
- The number **273** is a relative, probability-weighted, geometric **near-contact encounter-kernel** enhancement under the adopted reference definitions. It does not represent directly observed collisions or coalescence. This qualification is deliberately visible on the website.
- The laboratory rough-wall TBL was designed to share **selected turbulence scales** with atmospheric boundary layers; it is not a thermodynamically complete cloud environment.
- Current wording states **PhD thesis submitted**, rather than PhD degree awarded. Update this only after a formal degree award.
- The APS 2026 contribution is labelled **scheduled for 24 November 2026**. After the presentation, update the status to **presented** if appropriate.

## 6. Tests actually performed on this package

- File audit: internal HTML `src`, `poster` and `href` paths checked against the included files.
- Browser-layout checks at 375, 768, 1366 and 1920 CSS pixels using headless Chromium and the actual page HTML/CSS, with user-supplied images injected into the test environment.
- On those four sizes, verified no document-level horizontal overflow; hero image alignment; six research cards; five video elements; all image assets load; no runtime JavaScript errors.
- Tested mobile navigation open, close and link selection.
- Used `ffprobe` to inspect all five supplied videos: all contain H.264 video.
- Confirmed the full thesis PDF is not packaged.
- Browser media *streaming from live GitHub Pages* was **not tested**, because this package has not been deployed. Playback should be checked once uploaded to the repository.
- Original external URLs from the earlier website have been preserved (e.g. Scholar, ORCID, LinkedIn, FE2B). Their continued availability depends on the external services.

## 7. Notes on size and GitHub hosting

The media-inclusive website is approximately 90 MB before ZIP compression. The largest single original video is approximately 34 MiB. That is below GitHub's 100 MB per-file hard limit, but a media-heavy site can consume substantial repository space and page bandwidth. Native player controls, poster images and metadata-only preloading keep the initial page more efficient.

If you later choose to host videos elsewhere, you can leave the names in `media-config.json` and adjust the HTML sources. **This supplied version already includes all five videos**, so no third-party hosting is required for initial deployment.

---

Prepared for direct deployment to the existing `manojkumargupta2312.github.io` repository. No repository files were changed by this package creation process.
