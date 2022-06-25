/** @prettier */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

const DEFAULT_STATUS_KEY = 'is-sws-drawer-active';

const IS_SUPPORTS_OVERSCROLL_BEHAVIOR = (() => CSS.supports('overscroll-behavior', 'none'))();

const stopBodyScrolling = (e) => {
  e.preventDefault();
};

const fixBodyTop = (key: string): void => {
  if (IS_SUPPORTS_OVERSCROLL_BEHAVIOR) {
    return;
  }
  if (key === '') {
    return;
  }
  const top = `${window.pageYOffset}`;
  document.documentElement.setAttribute(key, top);
  document.body.style.top = -top + 'px';
};

const recoverBodyTop = (key: string): void => {
  if (IS_SUPPORTS_OVERSCROLL_BEHAVIOR) {
    return;
  }
  if (key === '') {
    return;
  }
  const top = document.documentElement.getAttribute(key) || '0';
  window.scrollTo(0, +top);
  document.body.style.top = 'initial';
  document.documentElement.setAttribute(key, '0');
};

@customElement('sws-drawer')
class SwsDrawer extends LitElement {
  static styles = css`
    :host {
      --sws-drawer-position: fixed;
      --sws-drawer-top: 0;
      --sws-drawer-right: 0;
      --sws-drawer-bottom: 0;
      --sws-drawer-left: 0;
      --sws-drawer-z-index: 1000;
      --sws-drawer-width: 80%;
      --sws-drawer-visibility: hidden;
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
    }

    .drawer {
      position: var(--sws-drawer-position);
      top: var(--sws-drawer-top);
      right: var(--sws-drawer-right);
      bottom: var(--sws-drawer-bottom);
      left: var(--sws-drawer-left);
      z-index: var(--sws-drawer-z-index);
      color: var(--sws-drawer-layer-color);
      visibility: var(--sws-drawer-visibility);
      transition: visibility 0s linear var(--sws-drawer-animation-speed);
    }

    .drawer[is-active='true'] {
      visibility: visible;
      opacity: 1;
      transition: visibility 0s;
    }

    .drawer__layer {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: var(--sws-drawer-layer-background);
      backdrop-filter: var(--sws-drawer-layer-backdrop-filter);
      opacity: 0;
      transition: opacity var(--sws-drawer-animation-speed);
    }

    .drawer[is-active='true'] .drawer__layer {
      opacity: 1;
      transition: opacity var(--sws-drawer-animation-speed);
    }

    .drawer__main {
      overflow-x: var(--sws-drawer-main-overflow-x);
      overflow-y: var(--sws-drawer-main-overflow-y);
      position: var(--sws-drawer-main-position);
      top: var(--sws-drawer-main-top);
      bottom: var(--sws-drawer-main-bottom);
      left: var(--sws-drawer-main-left);
      width: var(--sws-drawer-width);
      color: var(--sws-drawer-color);
      background: var(--sws-drawer-background);
      box-shadow: var(--sws-drawer-box-shadow);
      transform: var(--sws-drawer-translate);
      transition: transform var(--sws-drawer-animation-speed);
      overscroll-behavior: var(--sws-drawer-main-overscroll-behavior);
    }

    .drawer[is-active='true'] .drawer__main {
      transform: translate3d(0, 0, 0);
    }
  `;

  @property({ type: String, attribute: 'status-key' })
  statusKey = DEFAULT_STATUS_KEY;

  @property({ type: String, attribute: 'body-top-key' })
  bodyTopKey = '';

  private elDrawer: HTMLDivElement | null | undefined;
  private observer: MutationObserver;
  private isActive = false;

  constructor() {
    super();

    const elRoot = document.documentElement;

    this.observer = new MutationObserver((mutaions) => {
      const statusMutations = mutaions.filter((record) => record.attributeName === this.statusKey);
      if (statusMutations.length === 1) {
        const mutaion = statusMutations[0];
        this.isActive = mutaion.oldValue !== 'true';
        if (this.isActive) {
          this.elDrawer?.setAttribute('is-active', String(this.isActive));
          if (!IS_SUPPORTS_OVERSCROLL_BEHAVIOR) {
            document.body.addEventListener('touchmove', stopBodyScrolling);
          }
        } else {
          this.elDrawer?.removeAttribute('is-active');
          if (!IS_SUPPORTS_OVERSCROLL_BEHAVIOR) {
            document.body.removeEventListener('touchmove', stopBodyScrolling);
          }
        }
      }
    });
    this.observer.observe(elRoot, {
      attributes: true, // Monitoring attribute changes.
      attributeOldValue: true, // Store the attribute value before change in matation.oldValue.
      characterData: false, // Monitor changes in text nodes.
      characterDataOldValue: false, // Store the unchanged text in matation.oldValue.
      childList: false, // Monitor changes in child nodes.
      subtree: false, // Include descendant nodes in the monitoring target.
    });

    elRoot.addEventListener('keyup', this._escapeKeyUp.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.observer.disconnect();
    document.documentElement.removeEventListener('keyup', this._escapeKeyUp.bind(this));
  }

  render() {
    return html`
      <div class="drawer">
        <div
          class="drawer__layer"
          @click="${this._onClick}"
          @touchmove="${this._onTouchMove}"
        ></div>
        <div class="drawer__main">
          <slot />
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.elDrawer = this.shadowRoot?.querySelector<HTMLDivElement>('.drawer');
  }

  private _close(): void {
    const elRoot = document.documentElement;
    if (elRoot.hasAttribute(this.statusKey)) {
      elRoot.removeAttribute(this.statusKey);
      recoverBodyTop(this.bodyTopKey);
    }
  }

  private _onClick(e: MouseEvent): void {
    e.stopPropagation();
    this._close();
  }

  private _onTouchMove(e: TouchEvent): void {
    // To prevent scrolling of the <body> in iOS Safari.
    e.preventDefault();
  }

  private _escapeKeyUp(e: KeyboardEvent): void {
    const ESC_KEY = 27;
    if (e.keyCode === ESC_KEY) {
      this._close();
    }
  }
}

@customElement('sws-drawer-toggle-button')
class SwsDrawerToggleButton extends LitElement {
  static styles = css`
    :host {
      --sws-drawer-toggle-button-display: inline-block;
      --sws-drawer-toggle-button-appearance: none;
      --sws-drawer-toggle-button-width: auto;
      --sws-drawer-toggle-padding: 0;
      --sws-drawer-toggle-color: currentColor;
      --sws-drawer-toggle-background: transparent;
      --sws-drawer-toggle-text-align: center;
      --sws-drawer-toggle-border: 0 none;
    }

    .drawer-toggle-button {
      appearance: var(--sws-drawer-toggle-button-appearance);
      display: var(--sws-drawer-toggle-button-display);
      width: var(--sws-drawer-toggle-button-width);
      padding: var(--sws-drawer-toggle-button-padding);
      color: var(--sws-drawer-toggle-button-color);
      background: var(--sws-drawer-toggle-button-background);
      text-align: var(--sws-drawer-toggle-text-align);
      border: var(--sws-drawer-toggle-button-border);
    }
  `;

  @property({ type: String, attribute: 'status-key' })
  statusKey = DEFAULT_STATUS_KEY;

  @property({ type: String, attribute: 'body-top-key' })
  bodyTopKey = '';

  @property({ type: Number, attribute: 'x-tabindex' })
  xTabindex = 0;

  @property({ type: Array, attribute: 'group-keys' })
  groupKeys = [];

  private elDrawerToggleButton: HTMLButtonElement | null | undefined;

  constructor() {
    super();
  }

  render() {
    return html`
      <button class="drawer-toggle-button" @click="${this._onClick}" tabindex="${this.xTabindex}">
        <slot />
      </button>
    `;
  }

  firstUpdated() {
    this.elDrawerToggleButton =
      this.shadowRoot?.querySelector<HTMLButtonElement>('.drawer-toggle-button');
  }

  private _onClick(e: MouseEvent): void {
    const elRoot = document.documentElement;
    if (elRoot.hasAttribute(this.statusKey)) {
      elRoot.removeAttribute(this.statusKey);
      recoverBodyTop(this.bodyTopKey);
    } else {
      this.groupKeys
        .filter((key) => key !== this.statusKey)
        .forEach((key) => {
          elRoot.removeAttribute(key);
        });
      fixBodyTop(this.bodyTopKey);
      elRoot.setAttribute(this.statusKey, 'true');
    }
  }
}

@customElement('sws-drawer-close-button')
class SwsDrawerCloseButton extends LitElement {
  static styles = css`
    :host {
      --sws-drawer-close-button-display: inline-block;
      --sws-drawer-close-button-appearance: none;
      --sws-drawer-close-button-width: auto;
      --sws-drawer-close-padding: 0;
      --sws-drawer-close-color: currentColor;
      --sws-drawer-close-background: transparent;
      --sws-drawer-close-text-align: center;
      --sws-drawer-close-border: 0 none;
    }

    .drawer-close-button {
      appearance: var(--sws-drawer-close-button-appearance);
      display: var(--sws-drawer-close-button-display);
      width: var(--sws-drawer-close-button-width);
      padding: var(--sws-drawer-close-button-padding);
      color: var(--sws-drawer-close-button-color);
      background: var(--sws-drawer-close-button-background);
      text-align: var(--sws-drawer-close-text-align);
      border: var(--sws-drawer-close-button-border);
    }
  `;

  @property({ type: String, attribute: 'status-key' })
  statusKey = DEFAULT_STATUS_KEY;

  @property({ type: String, attribute: 'body-top-key' })
  bodyTopKey = '';

  @property({ type: Number, attribute: 'x-tabindex' })
  xTabindex = 0;

  private elDrawerCloseButton: HTMLButtonElement | null | undefined;

  constructor() {
    super();
  }

  render() {
    return html`
      <button class="drawer-close-button" @click="${this._onClick}" tabindex="${this.xTabindex}" />
        <slot />
      </button>
    `;
  }

  firstUpdated() {
    this.elDrawerCloseButton =
      this.shadowRoot?.querySelector<HTMLButtonElement>('.drawer-close-button');
  }

  private _onClick(e: MouseEvent): void {
    const elRoot = document.documentElement;
    if (elRoot.hasAttribute(this.statusKey)) {
      if (!IS_SUPPORTS_OVERSCROLL_BEHAVIOR) {
        recoverBodyTop(this.bodyTopKey);
      }
      elRoot.removeAttribute(this.statusKey);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sws-drawer': SwsDrawer;
    'sws-drawer-toggle-button': SwsDrawerToggleButton;
    'sws-drawer-close-button': SwsDrawerCloseButton;
  }
}
