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
  --sws-drawer-visibility: hidden;
  --sws-drawer-opacity: 0;
  --sws-drawer-main-position: absolute;
  --sws-drawer-main-top: 0;
  --sws-drawer-main-bottom: 0;
  --sws-drawer-main-left: calc(100% - var(--sws-drawer-width));
  --sws-drawer-main-overflow-x: visible;
  --sws-drawer-main-overflow-y: auto;
  --sws-drawer-main-overscroll-behavior: contain;
  --sws-drawer-box-shadow: -2px 0 4px rgba(0, 0, 0, 0.2);
  --sws-drawer-color: currentColor;
  --sws-drawer-background: #fff;
  --sws-drawer-layer-color: currentColor;
  --sws-drawer-layer-background: rgba(0, 0, 0, 0.5);
  --sws-drawer-layer-backdrop-filter: blur(5px);
  --sws-drawer-animation-speed: 0.3s;
  --sws-drawer-translate: translate3d(100%, 0, 0);
  --sws-drawer-transition-hide: visibility 0s linear var(--sws-drawer-animation-speed),
    opacity 0s linear var(--sws-drawer-animation-speed);
  --sws-drawer-transition-show: visibility 0s, opacity 0s;
}

sws-drawer-toggle-button {
  --sws-drawer-toggle-button-display: inline-block;
  --sws-drawer-toggle-button-appearance: none;
  --sws-drawer-toggle-button-width: auto;
  --sws-drawer-toggle-button-margin: 0;
  --sws-drawer-toggle-button-padding: 0;
  --sws-drawer-toggle-button-color: currentColor;
  --sws-drawer-toggle-button-background: transparent;
  --sws-drawer-toggle-text-align: center;
  --sws-drawer-toggle-button-border: 0 none;
  --sws-drawer-toggle-button-font-size: inherit;
  --sws-drawer-toggle-button-font-family: inherit;
}

sws-drawer-close-button {
  --sws-drawer-close-button-display: inline-block;
  --sws-drawer-close-button-appearance: none;
  --sws-drawer-close-button-width: auto;
  --sws-drawer-close-button-margin: 0;
  --sws-drawer-close-button-padding: 0;
  --sws-drawer-close-button-color: currentColor;
  --sws-drawer-close-button-background: transparent;
  --sws-drawer-close-text-align: center;
  --sws-drawer-close-button-border: 0 none;
  --sws-drawer-close-button-font-size: inherit;
  --sws-drawer-close-button-font-family: inherit;
}
```


## CSS custom properties

### sws-drawer

| css custom property name                | content                                      |  defaults                              |
|:----------------------------------------|:---------------------------------------------|:---------------------------------------|
| `--sws-drawer-position`                 | Position property                            | `fixed`                                |
| `--sws-drawer-top`                      | Position top property                        | `0`                                    |
| `--sws-drawer-right`                    | Position right property                      | `0`                                    |
| `--sws-drawer-bottom`                   | Position bottom property                     | `0`                                    |
| `--sws-drawer-left`                     | Position left property                       | `0`                                    |
| `--sws-drawer-z-index`                  | Position z-index property                    | `1000`                                 |
| `--sws-drawer-width`                    | Width property                               | `80%`                                  |
| `--sws-drawer-visibility`               | Visibility property                          | `hidden`                               |
| `--sws-drawer-opacity`                  | Opacity property                             | `0`                                    |
| `--sws-drawer-position`                 | Position property                            | `absolute`                             |
| `--sws-drawer-main-top`                 | Content element position top property        | `0`                                    |
| `--sws-drawer-main-bottom`              | Content element position bottom property     | `0`                                    |
| `--sws-drawer-main-left`                | Content element position left property       | `calc(100% - var(--sws-drawer-width))` |
| `--sws-drawer-main-overflow-x`          | Content element overflow-x property          | `visible`                              |
| `--sws-drawer-main-overflow-y`          | Content element overflow-y property          | `auto`                                 |
| `--sws-drawer-main-overscroll-behavior` | Content element overscroll-behavior property | `contain`                              |
| `--sws-drawer-box-shadow`               | Content element box-shadow  property         | `-2px 0 4px rgba(0, 0, 0, 0.2)`        |
| `--sws-drawer-color`                    | Content element color property               | `currentColor`                         |
| `--sws-drawer-background`               | Content element background property          | `#fff`                                 |
| `--sws-drawer-layer-color`              | Background layer color property              | `currentColor`                         |
| `--sws-drawer-layer-background`         | Background layer background property         | `rgba(0, 0, 0, 0.5)`                   |
| `--sws-drawer-layer-backdrop-filter`    | Background layer blur size property          | `blur(5px)`                            |
| `--sws-drawer-animation-speed`          | Animation speed property                     | `0.3s`                                 |
| `--sws-drawer-translate`                | Drawer initial translated property           | `translate3d(100%, 0, 0)`              |
| `--sws-drawer-transition-hide`          | Hide transition property                     | `visibility 0s linear var(--sws-drawer-animation-speed), opacity 0s linear var(--sws-drawer-animation-speed)` |
| `--sws-drawer-transition-show`          | Show transition property                     | `visibility 0s, opacity 0s`            |

### sws-drawer-toggle-button

| css custom property name                 | content                                |  defaults      |
|:-----------------------------------------|:---------------------------------------|:---------------|
| `--sws-drawer-toggle-button-display`     | Button element display property        | `inline-block` |
| `--sws-drawer-toggle-button-appearance`  | Button element appearance property     | `none`         |
| `--sws-drawer-toggle-button-width`       | Button element width property          | `auto`         |
| `--sws-drawer-toggle-button-margin`      | Button element margin property         | `0`            |
| `--sws-drawer-toggle-button-padding`     | Button element padding property        | `0`            |
| `--sws-drawer-toggle-button-color`       | Button element color property          | `currentColor` |
| `--sws-drawer-toggle-button-background`  | Button element background property     | `transparent`  |
| `--sws-drawer-toggle-text-align`         | Button element text alignment property | `center`       |
| `--sws-drawer-toggle-button-border`      | Button element border property         | `0 none`       |
| `--sws-drawer-toggle-button-font-size`   | Button element font-size property      | `inherit`      |
| `--sws-drawer-toggle-button-font-family` | Button element font-family property    | `inherit`      |

### sws-drawer-close-button

| css custom property name                | content                                |  defaults      |
|:----------------------------------------|:---------------------------------------|:---------------|
| `--sws-drawer-close-button-display`     | Button element display property        | `inline-block` |
| `--sws-drawer-close-button-appearance`  | Button element appearance property     | `none`         |
| `--sws-drawer-close-button-width`       | Button element width property          | `auto`         |
| `--sws-drawer-close-button-margin`      | Button element margin property         | `0`            |
| `--sws-drawer-close-button-padding`     | Button element padding property        | `0`            |
| `--sws-drawer-close-button-color`       | Button element color property          | `currentColor` |
| `--sws-drawer-close-button-background`  | Button element background property     | `transparent`  |
| `--sws-drawer-close-text-align`         | Button element text alignment property | `center`       |
| `--sws-drawer-close-button-border`      | Button element border property         | `0 none`       |
| `--sws-drawer-close-button-font-size`   | Button element font-size property      | `inherit`      |
| `--sws-drawer-close-button-font-family` | Button element font-family property    | `inherit`      |


## Options

```html
<sws-drawer-toggle-button
  status-key="is-sws-drawer-active"
  body-top-key=""
  x-tabindex="0"
  group-keys="['is-sws-drawer-active', 'is-sws-drawer-active-other']"
>
  Toggle Button
</sws-drawer-toggle-button>

<sws-drawer
  status-key="is-sws-drawer-active"
  body-top-key=""
>
  <sws-drawer-close-button
    status-key="is-sws-drawer-active"
    body-top-key=""
    x-tabindex="0"
  >
  Close Button
  </sws-drawer-close-button>
  <p>
    Content
  </p>
</sws-drawer>
```

If the `body-top-key` property is not set, the position top of the body tag will not change.


### sws-drawer

| option name    | content                                                                                        | defaults               |
|:---------------|:-----------------------------------------------------------------------------------------------|:-----------------------|
| `status-key`   | Change active status attribute name of root element.                                           | `is-sws-drawer-active` |
| `body-top-key` | Change the position top of the body tag on browsers that do not support `overscroll-behavior`. | ``                     |

### sws-drawer-toggle-button

| option name    | content                                                                                        | defaults               |
|:---------------|:-----------------------------------------------------------------------------------------------|:-----------------------|
| `status-key`   | Change active status attribute name of root element.                                           | `is-sws-drawer-active` |
| `body-top-key` | Change the position top of the body tag on browsers that do not support `overscroll-behavior`. | ``                     |
| `x-tabindex`   | Button element tabindex attribute value.                                                       | `0`                    |
| `group-keys`   | Array of `status-key` string. Limit the number of active Drawers to one.                       | `[]`                   |

### sws-drawer-close-button

| option name    | content                                                                                        | defaults               |
|:---------------|:-----------------------------------------------------------------------------------------------|:-----------------------|
| `status-key`   | Change active status attribute name of root element.                                           | `is-sws-drawer-active` |
| `body-top-key` | Change the position top of the body tag on browsers that do not support `overscroll-behavior`. | ``                     |
| `x-tabindex`   | Button element tabindex attribute value.                                                       | `0`                    |


## License

MIT


## Author

inotom
