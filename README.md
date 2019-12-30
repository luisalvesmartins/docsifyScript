# Docsify Script Plugin

Loads the Javascript file into the current markdown file.

The usage is as simple as:

```
<!-- SCRIPT(url) -->
```

the url can be local or remote:
```
<!-- SCRIPT(lib/mylib.js) -->

or

<!-- SCRIPT(http://myaddress/mylib.js) -->
```

## How to install

In the Docsify index.html include DocsifyPhaser plugin by adding the script reference:

```html
<!-- DocsifyScript plugin -->
<script src="docsifyScript.js"></script>
```

You can add as many script blocks as you wish