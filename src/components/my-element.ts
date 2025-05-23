import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { ElementVariantType, ElementColorTypeArray } from './my-elements.types';
import { ElementSizeEnum } from './my-elements.types';

@customElement('my-element')
export class MyElement extends LitElement {
  /**
   * Вариант кнопки (простой union тип)
   * @property {ElementVariantType} variant
   */
  @property({ type: String })
  variant: ElementVariantType = 'primary';

  /**
   * Размер элемента (используется enum)
   * @property {ElementSizeEnum} size
   */
  @property({ type: String }) size: ElementSizeEnum = ElementSizeEnum.Medium;

  /**
   * Цвет элемента (тип из массива as const)
   * @property {ElementColorType} color
   */
  @property({ type: String })
  color: ElementColorTypeArray = 'blue';

  /**
   * Список тегов (массив строк)
   * @property {string[]} tags
   */
  @property({ type: Array }) tags: string[] = [];

  /**
   * Конфигурация элемента (объект)
   * @property {object} config
   */
  @property({ type: Object }) config = {
    enabled: true,
    level: 1
  };

  protected render() {
    return html`
      <button part="button">
        ${this.variant}, ${this.size}, ${this.color}
      </button>
      <slot></slot>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}