import { html,LitElement} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class MyElement extends LitElement{
    static properties = {
        who: {
            type: String
        }
    };

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

const customElement = "my-table-v1";
customElements.define(customElement, MyElement);