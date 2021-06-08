import { LitElement, html, css } from 'lit-element';  

class ToDoInput extends LitElement {    
	
	/*
	static get properties() {
                return {
                        tarea: {type: String}
                };
        }*/

	
	/*static get styles()
        {
                return css `

                         div{
				float:left;
                         }
                `;
        }*/



        constructor() {
                // Always calls super() first.
                super();
                this.tarea='';
		this.prioridad=1;
        }
	
	// Properties code up here	   
	render() {

	return html`
		<div>
			<input type="text" value="${this.tarea}" @input="${this.updateTarea}" placeholder="Ingrese una tarea"/>

			<select @change="${this.updatePrioridad}">
				<option value='1'>1</option>
				<option value='2'>2</option>
				<option value='3'>3</option>
			</select>

			<input type="button" value='Agregar' @click="${this.agregarTarea}" />
		</div>
		`;
	}

	updateTarea(e)
	{
		this.tarea=e.target.value;
	}

	updatePrioridad(e)
	{
		this.prioridad=e.target.value;
	}

	agregarTarea()
	{
		this.dispatchEvent(new CustomEvent('agregar-tarea',{detail:{'texto':this.tarea,'prioridad':this.prioridad}}));		
	}

}

customElements.define('to-do-input', ToDoInput)
