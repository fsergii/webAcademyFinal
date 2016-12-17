
/**
 * Created by IlyaLitvinov on 15.10.16.
 */
import "./techSpecs.styles.css";
class TechSpecsController {
    /** @ngInject */
    constructor($stateParams) {
        // console.log("home created!");s
        this.header = "Phones";

        // debugger;
    }

    parseParams (obj) {
    	this._obj = obj;
    	console.log(this._obj);
    	// JSON.parse('{"1": 1234}', (key,value) => {
    	// 	console.log(value)
    	// 	return value;
    	// })
    }
}

const TechSpecsComponent = {
    bindings: {
        "data": "="
    },
    template: `
    	<div>
    		Батарея: {{$ctrl.data.battery.type}}
    	</div>
    	<div>
    		Камера: {{$ctrl.data.camera.primary}}
    	</div>
    	<div>
    		Размер: {{$ctrl.data.display.screenSize}}
    	</div>
    	<div>
    		Разрешение: {{$ctrl.data.display.screenResolution}}
    	</div>
    	{{$ctrl.parseParams($ctrl.data)}}
    `,
    controller: TechSpecsController

};

export { TechSpecsComponent };