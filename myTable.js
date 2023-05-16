import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';
// define the component
export class CustomTable extends LitElement {
  
  static properties = {
    zeilen: {type: String},
    spalten: {type: String}, 
  };
  
  // return a promise for contract changes.
  static getMetaConfig() {
    return {
      controlName: 'Custom Table',
      fallbackDisableSubmit: false,
      version: '1.2',
      properties: {
        spalten: {
          type: 'string',
          title: 'Spalten',
          description: 'Anzahl an Spalten'
        },
        zeilen: {
          type: 'string',
          title: 'Zeilen',
          description: 'Anzahl an Zeilen'
        }
      }
    };
  }
  
  constructor() {
    super();
    this.zeilen = '10';
    this.spalten = '7';
  }

  render() {
    return html`<table> <table/>`;
  }
}

// registering the web component
const elementName = 'custom-table';
customElements.define(elementName, CustomTable);