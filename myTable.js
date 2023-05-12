import { html, LitElement, css } from 'lit';

export class MyElement extends LitElement{
    static properties = {
        who: {
            type: String
        }
    }

    static getMetaConfig() {
        return {
          controlName: 'Hello World',
          fallbackDisableSubmit: false,
          version: '1.2',
          properties: {
            who: {
              type: 'string',
              title: 'Who',
              description: 'Who to say hello to'
            }
          }
        };
      }
    
    constructor(){
        super();
    }
    
    render(){
        return html`<p> Hello <p/>`;
    }

}

const customElement = "myTable";
customElements.define(customElement, MyElement);