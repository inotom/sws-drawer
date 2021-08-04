# sws-drawer

A web Components to add drawer element.


## Demo

[Demo](https://sandbox.serendip.ws/sws-drawer.html)


## Usage

Place `sws-drawer` `sws-drawer-toggle-button` `sws-drawer-close-button` custom element.

```html
<sws-drawer-toggle-button>
  Toggle Button
</sws-drawer-toggle-button>
<sws-drawer>
  <sws-drawer-close-button>
  Close Button
  </sws-drawer-close-button>
  <p>
    Content
  </p>
</sws-drawer>
<script type="module" src="sws-drawer.min.js" defer></script>
```

Set element's style by css custom properties.

```css
sws-drawer {
  --sws-drawer-position: fixed;
  --sws-drawer-top: 0;
  --sws-drawer-right: 0;
  --sws-drawer-bottom: 0;
  --sws-drawer-left: 0;
  --sws-drawer-z-index: 1000;
  --sws-drawer-width: 80%;
  --sws-drawer-main-left: calc(100% - var(--sws-drawer-width));
  --sws-drawer-main-overflow-x: visible;
  --sws-drawer-main-overflow-y: auto;
  --sws-drawer-box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
  --sws-drawer-color: currentColor;
  --sws-drawer-background: #fff;
  --sws-drawer-layer-color: currentColor;
  --sws-drawer-layer-background: rgba(0, 0, 0, 0.5);
  --sws-drawer-layer-backdrop-filter: blur(5px);
  --sws-drawer-animation-speed: 0.3s;
  --sws-drawer-translate: translate3d(100%, 0, 0);
}

sws-drawer-toggle-button {
  --sws-drawer-toggle-button-display: inline-block;
  --sws-drawer-toggle-button-appearance: none;
  --sws-drawer-toggle-padding: 0;
  --sws-drawer-toggle-color: currentColor;
  --sws-drawer-toggle-background: transparent;
  --sws-drawer-toggle-border: 0 none;
}

sws-drawer-close-button {
  --sws-drawer-close-button-display: inline-block;
  --sws-drawer-close-button-appearance: none;
  --sws-drawer-close-padding: 0;
  --sws-drawer-close-color: currentColor;
  --sws-drawer-close-background: transparent;
  --sws-drawer-close-border: 0 none;
}
```


## CSS custom properties

### sws-drawer

| css custom property name             | content                                 |  defaults                              |
|:-------------------------------------|:----------------------------------------|:---------------------------------------|
| `--sws-drawer-position`              | Position property                       | `fixed`                                |
| `--sws-drawer-top`                   | Position top property                   | `0`                                    |
| `--sws-drawer-right`                 | Position right property                 | `0`                                    |
| `--sws-drawer-bottom`                | Position bottom property                | `0`                                    |
| `--sws-drawer-left`                  | Position left property                  | `0`                                    |
| `--sws-drawer-z-index`               | Position z-index property               | `1000`                                 |
| `--sws-drawer-width`                 | Width property                          | `80%`                                  |
| `--sws-drawer-main-left`             | Content element position left property  | `calc(100% - var(--sws-drawer-width))` |
| `--sws-drawer-main-overflow-x`       | Content element overflow-x property     | `visible`                              |
| `--sws-drawer-main-overflow-y`       | Content element overflow-y property     | `auto`                                 |
| `--sws-drawer-box-shadow`            | Content element box-shadow  property    | `-2px 0 4px rgba(0, 0, 0, 0.2)`        |
| `--sws-drawer-color`                 | Content element color property          | `currentColor`                         |
| `--sws-drawer-background`            | Content element background property     | `#fff`                                 |
| `--sws-drawer-layer-color`           | Background layer color property         | `currentColor`                         |
| `--sws-drawer-layer-background`      | Background layer background property    | `rgba(0, 0, 0, 0.5)`                   |
| `--sws-drawer-layer-backdrop-filter` | Background layer blur size property     | `blur(5px)`                            |
| `--sws-drawer-animation-speed`       | Animation speed property                | `0.3s`                                 |
| `--sws-drawer-translate`             | Drawer initial translated property      | `translate3d(100%, 0, 0)`              |

### sws-drawer-toggle-button

| css custom property name                | content                            |  defaults      |
|:----------------------------------------|:-----------------------------------|:---------------|
| `--sws-drawer-toggle-button-display`    | Button element display property    | `inline-block` |
| `--sws-drawer-toggle-button-appearance` | Button element appearance property | `none`         |
| `--sws-drawer-toggle-padding`           | Button element padding property    | `0`            |
| `--sws-drawer-toggle-color`             | Button element color property      | `currentColor` |
| `--sws-drawer-toggle-background`        | Button element background property | `transparent`  |
| `--sws-drawer-toggle-border`            | Button element border property     | `0 none`       |

### sws-drawer-close-button

| css custom property name               | content                            |  defaults      |
|:---------------------------------------|:-----------------------------------|:---------------|
| `--sws-drawer-close-button-display`    | Button element display property    | `inline-block` |
| `--sws-drawer-close-button-appearance` | Button element appearance property | `none`         |
| `--sws-drawer-close-padding`           | Button element padding property    | `0`            |
| `--sws-drawer-close-color`             | Button element color property      | `currentColor` |
| `--sws-drawer-close-background`        | Button element background property | `transparent`  |
| `--sws-drawer-close-border`            | Button element border property     | `0 none`       |


## Options

```html
<sws-drawer-toggle-button
  status-key="is-sws-drawer-active"
  x-tabindex="0"
  group-keys="['is-sws-drawer-active', 'is-sws-drawer-active-other']"
>
  Toggle Button
</sws-drawer-toggle-button>

<sws-drawer
  status-key="is-sws-drawer-active"
>
  <sws-drawer-close-button
    status-key="is-sws-drawer-active"
    x-tabindex="0"
  >
  Close Button
  </sws-drawer-close-button>
  <p>
    Content
  </p>
</sws-drawer>
```

### sws-drawer

| option name  | content                                               | defaults               |
|:-------------|:------------------------------------------------------|:------------=----------|
| `status-key` | Change active status attribute name of root element.  | `is-sws-drawer-active` |

### sws-drawer-toggle-button

| option name  | content                                                                  | defaults               |
|:-------------|:-------------------------------------------------------------------------|:-----------------------|
| `status-key` | Change active status attribute name of root element.                     | `is-sws-drawer-active` |
| `x-tabindex` | Button element tabindex attribute value.                                 | `0`                    |
| `group-keys` | Array of `status-key` string. Limit the number of active Drawers to one. | `[]`                   |

### sws-drawer-close-button

| option name  | content                                               | defaults               |
|:-------------|:------------------------------------------------------|:-----------------------|
| `status-key` | Change active status attribute name of root element.  | `is-sws-drawer-active` |
| `x-tabindex` | Button element tabindex attribute value.              | `0`                    |


## License

MIT


## Author

inotom
