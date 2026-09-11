# Yewon Hwang — Research Website

Static website for GitHub Pages. No build step required.

## Directory structure

```text
index.html                Home and contact information
publications.html         Publications and topic filters
experience.html           About me, education, and skills
publications/             All ten publication PDFs
cv/                       English CV PDF and editable HTML source
assets/css/               Shared stylesheet
assets/js/                Publication filtering script
assets/images/            Portrait and favicon
data/publications.json    Publication reference metadata
```

## Local preview

Run `python3 -m http.server 8000` from the repository root, then open http://localhost:8000.

## Updating content

Update the relevant HTML page directly. Publication metadata in `data/publications.json` is a reference, not a runtime data source; keep it consistent with the publication entries in `publications.html` and `cv/cv_2026_en.html`. Its file paths are relative to the repository root.

Edit `cv/cv_2026_en.html` to change the English CV, then regenerate its PDF from the repository root:

```sh
google-chrome --headless --no-pdf-header-footer --print-to-pdf=cv/cv_2026_en.pdf file://"$PWD"/cv/cv_2026_en.html
```

The site uses optional Google Fonts with local font fallbacks. The design follows the user-provided Owlstown reference, with a centered portrait, blue-green banner, floating navigation, and narrow reading column.
