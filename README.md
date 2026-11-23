# Academic research portfolio — Manojkumar I. Gupta

This is a complete, framework-free static website for the GitHub Pages repository `ManojkumarGupta2312/manojkumargupta2312.github.io`.

## What is new in this version (24 November 2026)

- **Scientific introduction:** Uses the question **“What controls droplet encounters?”** instead of the inaccurate-sounding **“A cloud-scale question.”** Describes warm-cloud microphysics as a motivation, and distinguishes it from the controlled laboratory experiments.
- **Less repetition:** Removed the separate three-image “See the physics before reading about it” gallery. The introductory three-question roadmap links directly to the original research displays.
- **Correct description of the experimental contribution:** States that the **custom vortex-ring–droplet experimental facility**, rather than the entire laboratory, was developed in collaboration with Prof. Narsing Kumar Jha and the laboratory team.
- **Clear research navigation:** The three experiment chapters have larger titles, bordered shaded banners, visible section numbers and consistent typography.
- **Videos reduced by 20%:** The four vortex-ring recordings (PIV characterisation, vortex–droplet interaction, Lagrangian tracking and vortex-frame Voronoï) display at **80% of their previous desktop width**; the source MP4s are unchanged, with full aspect ratios and resolution retained. On narrow smartphones, video frames use full width for scientific legibility. The separate TBL Voronoï recording stays at its previous size.
- **APS DFD 2026:** The **Abstract +** disclosure appears *directly below* the presentation details. Clicking it reveals the author's complete submitted abstract, affiliations and acknowledgement.
- **Broader scientific positioning:** Research spans cloud-microphysics-relevant droplets, controlled vortical flows, particle-laden turbulence, and an approximately 1 m thick ABL-like turbulent boundary layer. The “Beyond the vortex ring” heading was broadened to reflect this scope.
- **Both email addresses:** Institutional email `amz218301@am.iitd.ac.in` and research email `mgresearch12@gmail.com` are separately displayed as clickable contact links.
- **No styling mismatch:** The same CSS is present both in `assets/css/styles.css` and inside `index.html` as a failsafe, so a missing CSS asset does not produce an unstyled page.

## Preview accurately

1. Download the ZIP and choose **Extract All**. Do not try to open `index.html` while it is still inside the compressed ZIP.
2. Open the extracted folder. You must see `index.html`, `assets`, `files` and `PREVIEWS` in the **same folder**.
3. Double-click `index.html` to open it in the browser. Compare it with `PREVIEWS/WEBSITE_1366_HOMEPAGE.png` or `PREVIEWS/WEBSITE_375_HOMEPAGE.png`.
4. Check the research sections, APS abstract disclosure and both contact emails.

## Update the live GitHub Pages website (Windows)

1. Open **GitHub Desktop**, select the repository `manojkumargupta2312.github.io`, then click **Repository → Show in Explorer**.
2. In this *repository folder*, **preserve** `.git`, `.github`, `CNAME` and `.nojekyll` if present, as well as any site-related GitHub configuration.
3. Replace the old website's `index.html`, `assets/`, `files/` and website documentation with **all the contents of the new extracted website folder**. Do not copy the ZIP itself or create an extra nested website folder: `index.html` belongs directly in the repository root.
4. Return to GitHub Desktop, type a summary such as **Update research portfolio and contact details**, then click **Commit to main → Push origin**.
5. After GitHub Pages deployment completes (check the **Actions** tab if needed), open `https://manojkumargupta2312.github.io/` and press **Ctrl + Shift + R**.

Previously committed site versions are recoverable through Git history even if you have no local backup.

## Changing the portrait and TBL media later

Simply replace the file with the **exact filename** shown below (no HTML changes needed):

| Item | Path | Format |
|---|---|---|
| Profile portrait | `assets/images/profile-photo.jpg` | JPEG |
| TBL facility photo | `assets/images/tbl-facility.jpg` | JPEG |
| TBL Voronoï recording | `assets/media/tbl-voronoi.mp4` | MP4, H.264 recommended |
| Optional TBL video still | `assets/images/tbl-video-poster.jpg` | JPEG |

Existing original videos and the user's newest two-page CV are included. The original experimental-media filenames are documented in `MEDIA_MAPPING.csv` and `media-config.json`. No full thesis PDF is distributed.

## Scientific qualifications

The site describes the contribution of finite droplet inertia, gravity and vortical structures to transport and preferential concentration. Collision-relevant kinematic near-contact encounter kernels **are not** direct measurements of physical collisions or coalescence efficiencies. Laboratory ABL-like turbulence provides selected flow similarity, **not complete atmospheric equivalence**.
