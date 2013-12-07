# {{tweet}} and {{follow}} [![NPM version](https://badge.fury.io/js/handlebars-helper-twitter.png)](http://badge.fury.io/js/handlebars-helper-twitter)

> Twitter handlebars helpers, for adding {{tweet}} and {{follow}} buttons to your web projects.

## Installation

Use [npm](npmjs.org) to install the package: `npm i handlebars-helper-twitter`.

## Register the helper

In your project's Gruntfile, to register the helper add `handlebars-helper-twitter` to the `helpers` property in the [Assemble](http://assemble.io) task or target options:

```javascript
grunt.initConfig({
  assemble: {
    options: {
      // the 'handlebars-helper-twitter' npm module must also be listed in
      // devDependencies for assemble to automatically resolve the helper
      helpers: ['handlebars-helper-twitter', 'foo/*.js']
    },
    files: {
      'dist/': ['src/templates/*.hbs']
    }
  }
});
```

## Usage

Now that the helper is registered, you may begin using it in your templates.

```html
{{tweet url="http://assemble.io" via="assemblejs" related="jonschlinkert:Assemble core team"}}
{{follow user="upstage" repo="upstage" type="star"}}
{{tweet user="upstage" repo="upstage" type="star"}}
```

## Options

The following hash options may be passed to the helper, in the form of `foo="value"`:

### Tweet button
    var url = options.hash.url || 'http://assemble.io';
    var via = options.hash.via || 'assemblejs';
    var related = options.hash.related || 'jonschlinkert:Assemble core team';

#### url
Type: `String`
Default: `http://assemble.io`

URL of the page to share.

#### via
Type: `String`
Default: `assemblejs`

Screen name of the user to attribute the Tweet to.

#### related
Type: `String`
Default: `jonschlinkert:Assemble core team`

Related accounts. Example:

```html
{{tweet url="http://assemble.io" via="assemblejs" related="jonschlinkert:Assemble core team"}}
```

### Follow button

#### user
Type: `String`
Default: `assemblejs`

The Twitter username. Example: `jonschlinkert`.

#### color
Type: `String`
Default: `#0069D6`

Hex value to use for the link color.

#### count
Type: `String`
Default: `true`

Whether or not to show the number of followers.


## Author

**Jon Schlinkert**

+ [github/Jon Schlinkert](http://github.com/Jon Schlinkert)
+ [twitter/Jon Schlinkert](http://twitter.com/Jon Schlinkert)

## License and Copyright

Licensed under the [MIT License](./LICENSE-MIT)
Copyright (c) Jon Schlinkert, contributors.