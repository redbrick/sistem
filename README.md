# SISTEM Website

![with-coffee](https://img.shields.io/badge/made%20with-%E2%98%95%EF%B8%8F%20coffee-yellow.svg)
[![CircleCI](https://circleci.com/gh/redbrick/sistem.svg?style=svg)](https://circleci.com/gh/redbrick/sistem)
[![Github Issues](https://img.shields.io/github/issues-raw/badges/shields.svg)](https://github.com/redbrick/sistem/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/redbrick/sistem/blob/master/LICENSE.md)

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
cd sistem
yarn
yarn build
```

---

## Development

### Local Development

Run `yarn build:dev` to start a webpack watcher and hugo server. Sistem will be
accessible from `localhost:1313`

### SCSS

All the css is compiled from scss in the `src/css` directory.
