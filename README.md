# Yewon Hwang — Research Website

Static website for GitHub Pages. No build step required.

Preview locally with `python3 -m http.server 8000`, then open http://localhost:8000.

- `index.html`: biography and contact information.
- `publications.html`: publications and topic filters.
- `experience.html`: About me, education, and skills.
- `style.css`, `script.js`: shared responsive styling and publication filters.

The design uses a centered circular portrait, blue-green banner, floating navigation, and a narrow reading column inspired by the user-provided Owlstown reference.
- `cv_2026_en.html`: editable English translation of the supplied Korean CV.
- `cv_2026_en.pdf`: downloadable English CV, printed from the HTML source.
- `publications.json`: reference metadata for the ten publications. Update the corresponding HTML entries when editing this reference file.

To regenerate the English PDF with Chrome:

```sh
google-chrome --headless --no-pdf-header-footer --print-to-pdf=cv_2026_en.pdf file://"$PWD"/cv_2026_en.html
```

The CV dates and award descriptions follow the supplied Korean CV; paper titles, authors, and equal-contribution markers were cross-checked against the supplied PDFs. The Korean patent title is translated into English. The site uses optional Google Fonts with local font fallbacks.
