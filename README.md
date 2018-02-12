# SISTEM Website

---

![with-coffee](https://img.shields.io/badge/made%20with-%E2%98%95%EF%B8%8F%20coffee-yellow.svg)

This repository contains the SISTEM website The website was written to have a
similar feel to [TechWeek](https://techweek.dcu.ie)

## Requirements

* hugo
* node

## Deployment

To deploy to a server just run from the parent of of the folder you want to
deploy too.

_example written assuming folder deployed is `sistem/public`_

```
git clone https://github.com/redbrick/sistem
cd sistem-site
yarn
yarn build
```

---

## Development

### Local Development

Run `yarn build:dev` to start a webpack watcher and hugo server. Sistem will be
assisible from `localhost:1313`

### SCSS

All the css is compiled from scss in the `src/css` directory.
