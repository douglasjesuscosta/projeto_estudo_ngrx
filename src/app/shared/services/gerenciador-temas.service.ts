import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GerenciadorTemaService {
  private temaEscuroEstaConfigurado = false;

  private readonly TEMA_ESCURO = 'escuro';
  private readonly TEMA_PADRAO = 'padrao';

  public alternarTemaEscuro() {
    if (this.temaEscuroEstaConfigurado) {
      this.configurarTemaPadrao();
    } else {
      this.configurarTemaEscuro();
    }
  }

  private configurarTemaPadrao() {
    this.removeStyle(this.TEMA_ESCURO);
    document.body.classList.remove(this.TEMA_ESCURO);
    this.temaEscuroEstaConfigurado = false;

    const href = `${this.TEMA_PADRAO}.css`;
    this.getLinkElementForKey(this.TEMA_PADRAO).setAttribute('href', href);
    document.body.classList.add(this.TEMA_PADRAO);
  }

  private configurarTemaEscuro() {
    this.removeStyle(this.TEMA_PADRAO);
    document.body.classList.remove(this.TEMA_PADRAO);

    const href = `${this.TEMA_ESCURO}.css`;
    this.getLinkElementForKey(this.TEMA_ESCURO).setAttribute('href', href);
    document.body.classList.add(this.TEMA_ESCURO);
    this.temaEscuroEstaConfigurado = true;
  }

  private removeStyle(key: string) {
    const existingLinkElement = this.getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }

  private getLinkElementForKey(key: string) {
    return this.getExistingLinkElementByKey(key) || this.createLinkElementWithKey(key);
  }

  private getExistingLinkElementByKey(key: string) {
    return document.head.querySelector(`link[rel="stylesheet"].${this.getClassNameForKey(key)}`);
  }

  private createLinkElementWithKey(key: string) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(this.getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
  }

  private getClassNameForKey(key: string) {
    return `style-manager-${key}`;
  }

  public temaEscuroConfigurado(): boolean {
    return this.temaEscuroEstaConfigurado;
  }
}
