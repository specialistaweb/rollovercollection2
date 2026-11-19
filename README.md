# rollovercollection2 – CIRCLE

TYPO3 circular rollover effects (seven styles, from tympanus.net) for the content elements
**textmedia, media, textpic and image**.
Requires [bootstrap_package](https://github.com/benjaminkott/bootstrap_package) (Bootstrap 5).

| | |
|---|---|
| TYPO3 | 13.4 LTS, 14.3 LTS |
| bootstrap_package | 16.x |
| PHP | 8.2+ |

The extension contains no PHP code and no database tables: it only adds Fluid partials,
TypoScript, page TSconfig and an SCSS theme on top of bootstrap_package.

## Layouts

Choose the layout in the content element, tab *Appearance > Layout*:
**CIRCLE: style#1** (2651) … **CIRCLE: style#7** (2657).

Fields used per image: title (inside the circle and, if enabled, below it), description, link.
The number of columns is the field *Number of columns* of the content element.
Content elements with any other layout are rendered by bootstrap_package as usual.

## Installation

Composer:

    composer require specialistaweb/rollovercollection2

Classic mode: upload the zip in *Admin Tools > Extensions*.

Then activate it for the site, in one of these two ways:

* **Site set (recommended):** *Site Management > Sites > edit site > Sets*, add
  **Rollovercollection 2 - CIRCLE**. It depends on the set "Bootstrap Package: Full Package".
* **TypoScript record:** add the static template **Rollovercollection 2 - CIRCLE** after the
  bootstrap_package TypoScript.

Finally flush all caches.

## Configuration

With the site set, every option is in *Site Management > Settings*, category
**Rollovercollection 2 - CIRCLE**. With a TypoScript record, the same options are constants
(Constant Editor, category *bootstrap package: rollovercollection2-circle*).

General options (`plugin.tx_rollovercollection2_rollovereffect2.*`):

| Option | Default | Meaning |
|---|---|---|
| `settings.titleRawdataOutput` | 0 | 1 = HTML typed in the image title is kept (cleaned by the TYPO3 HTML sanitizer), 0 = plain text |
| `settings.captionRawdataOutput` | 0 | same, for the image description |
| `settings.showMoreLink` | 1 | 1 = "more" link inside the circle, 0 = the whole circle is linked |
| `settings.imageMaxWidth` | 800 | styles #1 and #2: images wider than this are scaled down before delivery, 0 = original file |
| `view.scssPath` | `EXT:rollovercollection2/Resources/Public/Scss/Theme/` | folder containing `theme.scss` |

Style options: 51 SCSS variables `plugin.bootstrap_package.settings.scss.rollover2-*`.
They are handed to the SCSS parser of bootstrap_package, so
`plugin.bootstrap_package.settings.overrideParserVariables` must be enabled (default).

The label of the "more" button is `lib.rollovercollection2.label.readMore`.

`$rollover2-styleN-showcaption` (none/block) shows or hides the title below the circle of style N.

### Image size

Styles #1 and #2 scale the image with CSS (`background-size: 120% auto`): the extension sends
a file of at most `imageMaxWidth` pixels and the result looks the same.

Styles #3–#7 show the image **at its natural pixel size**, centered in the circle, so they still
get the original file: upload images about as large as the circle (`$rollover2-styleN-iconsize`,
140–280 px). To make them independent from the file size, add `background-size: cover;` to
`.ch-img` in your own SCSS; after that `imageMaxWidth` could safely be applied to every style
(change the condition in `Resources/Private/Partials/ContentElements/Media/Rendering/BackgroundUrl.html`).

## Upgrading from 8.x

Version 9 needs TYPO3 13.4+ and bootstrap_package 16. Sites on TYPO3 12 or on
bootstrap_package 15 or older stay on 8.0.x.

Changes that can be visible on an existing site:

* **Layout select fixed.** Version 8 also loaded a wrong TSconfig file that added the ten
  "OHE - style#…" entries of rollovercollection3 (values 2750–2759) to the layout select.
  Only the seven CIRCLE entries are added now.
* **Title below the circle ("showcaption") now works for every style.** Styles #2, #3, #4 and #7
  did not receive the layout number, so `$rollover2-style2/3/4/7-showcaption` had no effect and
  the title was always visible. To keep the same look, the default of these four variables is
  now `block`. Style #7 also read the variable of style #1; it now reads its own.
* **Styles #1 and #2 deliver images of at most 800 px** (`imageMaxWidth`, the circle looks the
  same). Version 8 delivered the original file. Set the option to 0 to get the old behaviour.
* **Plain text title and caption are HTML-escaped** (a title like `R&D` now produces valid HTML).
* The background image URL is now quoted in the `style` attribute.
* Partials were renamed: `Media/Rendering/layout2651` … `layout2657` → `Layout2651` … `Layout2657`,
  `chInfoContent` → `ChInfoContent`, `externalFigcaption` → `ExternalFigcaption`; new partials
  `Title` and `BackgroundUrl`. Adjust your own overrides if you have any.
* `$rollover2-style4-hoverlinkcolor` and `$rollover2-style6-hoverlinkcolor` had a trailing `;`
  in their default value; it was removed (the SCSS compiler already warned about it and the next
  scssphp version rejects it).
* `Resources/Public/JavaScript/modernizr.custom.79639.js` and `normalize.less` were never
  included and were removed.
* **"Raw" title and caption are sanitized.** Formatting tags and links are kept; script tags,
  event handler attributes and `javascript:` links are removed.
* Obsolete vendor prefixes (`-webkit-`, `-moz-`, `-o-`, `-ms-` duplicates of standard properties,
  Internet Explorer filters) were removed from the SCSS. The compiled CSS was compared rule by rule:
  every standard declaration is unchanged.
* The static template is now called "Rollovercollection 2 - …" (it was "CIRCLE") and the
  unused plugin "rollovereffect2" is no longer registered.
* Unused files removed: partials for TYPO3 7–11 and their `.OLD`/`.ORI` copies, copies of the
  bootstrap_package audio/video partials (the installed bootstrap_package version is used now),
  `ext_icon.gif`, `Configuration/ExtensionBuilder`.
* The unused constants `view.templateRootPath`, `view.partialRootPath`, `view.layoutRootPath`
  and `persistence.storagePid` were removed.

### Inactive CSS rules

These rules of version 8 had a selector that could never match (a dot is missing before
`gallery-item`), so browsers never applied them. They are commented out in `_common.scss`
(nothing changes on screen) and can be enabled by fixing the selector:

| Selector in 8.x | Meant for |
|---|---|
| `.gallery-row.rollover2 gallery-item.rollover2` in `@media (max-width: 1024px)` | 3 columns on tablets |
| `.gallery-row.rollover2 gallery-item.rollover2` in `@media (max-width: 720px)` | 2 columns on small tablets |

## License

GPL-2.0-or-later
