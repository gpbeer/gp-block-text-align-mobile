# GP Block Text Align Mobile

WordPress mobile text align control for any Gutengerg block.

![Alt Text](https://github.com/german-pichardo/gp-block-text-align-mobile/raw/main/wp-assets/screenshot.gif)

## Requirements

* PHP 7.2 or higher
* Wordpress version 5 or higher
* Composer [Composer](https://getcomposer.org/doc/00-intro.md#downloading-the-composer-executable).
* NodeJs with npm [Node.js](https://nodejs.org/).

## Development

All the required npm and composer packages will be automatically installed after the command :

* `npm install`

## PHP Code quality

* `composer lint` to run coding standards checks.

### Front Installation

To add the necessary packages run `npm install`. Here are the other list of npm scripts for testing.

* `npm run build` : Transform your code to minified version optimized for production with best performance.
* `npm run check-engines` : Check npm compatibility.
* `npm run check-licenses` : Validate that all dependencies of a project are compatible with the project’s own license.
* `npm run lint:css` : Enforce coding standards for CSS files.
* `npm run lint:css-fix` : Automatically fix several lint-css errors.
* `npm run lint:js` : Enforce coding standards for Javascript files.
* `npm run lint:js-fix` : Automatically fix several lint-js errors.
* `npm run lint:pkg-json` : Lint for packaje.json.
* `npm run format:js` : Prettier js files.
* `npm run makepot` : Generate language translations for PHP and JS files.
* `npm run start` : Start compiling javascript and stylesheets according to the configurations. Automatically rebuild if you make changes to the code and you will see errors on console, if there are any.

### Install package using **`COMPOSER`**

Add to your `composer.json`

```json-doc
"repositories": [
   ...
    {
      "type": "vcs",
      "url": "https://github.com/german-pichardo/gp-block-text-align-mobile.git"
    }
],
```

Install directly using the command line

```bash
composer require gp/gp-block-text-align-mobile
```

### Development wordpress coding helper

<https://make.wordpress.org/core/handbook/best-practices/coding-standards/>

## Add Additional blocks to use custom padding

```JavaScript
/**
 * Add custom restricted blocks
 *
 * @param {Array} blocks Available blocks.
 *
 * @return {Array} Filtered blocks array.
 */
function filterRestrictedBlocks( blocks ) {
	const restrictedBlocks = [ 'my/my-block-1', 'my/my-block-2' ];

	blocks = [ ...blocks, ...addBlocks ];

	return blocks;
}
wp.hooks.addFilter(
	'gp-block-text-align-mobile.restricted-blocks',
	'my/block-text-align-mobile',
	filterRestrictedBlocks
);
```
