import { Component, OnInit, OnChanges } from "@angular/core";
import { trigger, state, style, animate, transition } from "@angular/animations";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { AuthHelperService } from '../auth-helper.service';

@Component({
	selector: "app-mainpage",
	templateUrl: "./mainpage.component.html",
	styleUrls: ["./mainpage.component.css"],
	animations: [
		// the fade-in/fade-out animation.
		// the trigger name does not matter, but it must match the name used in the [@...] attribute in the template.
		trigger("simpleFadeAnimation", [
			// the "in" style determines how the element looks when it is visible.
			// the style name "in" must match the value of the [@simpleFadeAnimation]="'in'" attribute in the template
			state("in", style({ opacity: 1 })),

			// fade in when created. this could also be written as transition('void => *')
			transition(":enter", [
				// the styles start from this point when the element appears
				style({ opacity: 0 }),
				// and animate toward the "in" state above
				animate(600)
			]),

			// fade out when destroyed. this could also be written as transition('void => *')
			transition(
				":leave",
				// fading out uses a different syntax, with the "style" being passed into animate()
				animate(600, style({ opacity: 0 }))
			)
		]),

		// the animation for the message
		trigger("messageAnimation", [
			// this defines the "resting" styles for the "visible" state
			// (i.e., what styles the message element has when visible)
			state(
				"visible",
				style({
					opacity: 0.9,
					display: "block"
				})
			),

			// this defines the "resting" styles for the "hidden" state.
			// (i.e., what styles the message element has when hidden)
			state(
				"hidden",
				style({
					opacity: 0,
					display: "none"
				})
			),

			// transition from "hidden" to "visible" states using an animation
			transition("hidden => visible", animate("300ms ease-in")),

			// transition from "visible" to "hidden" similarly
			transition('visible => hidden', animate('300ms ease-out'))
		]),
	]
})
export class MainpageComponent implements OnInit {

	faArrowRight = faArrowRight;
	houseName: string;
	visible: boolean = false;

	getHouseName() {
		let name = localStorage.getItem("houseName");
		this.houseName = name;
		console.log(this.houseName)
	}

	removeName() {
		localStorage.removeItem("houseName")
	}

	showHide() {
		if (localStorage.length === 0) {
			this.visible = false;
		} else {
			this.visible = true
		}
	}

	lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

	propertyText = `Here you need to specify the era when your building was built and the country where it is located. Also give your building a name.`;
	floorText = `Ground floor is the flooring of the house. In more modern houses, floors are usually covered with laminate. It is common to have different materials across the house, such as laminate, tiles and so on. Usual uValue of flooring is around 0.13 in domestic buildings.`;
	wallText = `Outer walls are the outside walls of the house. The outer walls can be made out of for example; wood, bricks, concrete or even plastic in some old houses. Usual uValue of outer walls is 0.18 in domestic buildings.`;
	roofText = `The house roofs can be made out of for example; different kinds of tiles, asphalt shingles, metal, aluminum, rubber slate. The usual uValue of roofs is 0.13 in domestic buildings.`;
	doorsText = `The house doors can be made out of for example; wood, fiberglass, vinyl and aluminum. The usual uValue of a glazed door is 1.4 in domestic buildings.`;
	windowsText = `The house windows can be either single or double glazed windows. The materials of windows can also vary, they can be for example; glass, fiberglass, aluminum and vinyl. The usual uValue of single glazed window is from 4 to 5, and double glazing about 1.2`;
	othersText = `Here you need to specify the heating cost of your house and if it has a central heating/hot water pipe `; 

	// tooltip text
	groundTip = "The Ground Floor";
	wallTip = "The Outer Wall";
	roofTip = "The Roof";
	doorTip = "The Doors";
	windowTip = "The Windows";

	properties: object[] = [
		{
			"property": "property", "title": "location & era", "sub": "Property Information", "desc": this.propertyText, "type": "property", "id": "property-id"
		},
		{
			"property": "ground", "title": "ground", "sub": "Floors Information", "desc": this.floorText, "type": "ground", "id": "floor-id", "imgSrc": "../../assets/img/structure/ex01.jpg", "tooltip": this.groundTip
		},
		{
			"property": "bridge", "title": "bridge", "sub": "Bridge Values", "desc": this.lorem, "type": "bridge", "id": "bridge-id", "imgSrc": "", "tooltip": this.lorem
		},
		{
			"property": "outerwall", "title": "outerwall", "sub": "Outer Walls Information", "desc": this.wallText, "type": "outerwall", "id": "outerwall-id", "imgSrc": "../../assets/img/structure/ex01.jpg", "tooltip": this.wallTip
		},
		{
			"property": "roof", "title": "roof", "sub": "Roofs Information", "desc": this.roofText, "type": "roof", "id": "roof-id", "imgSrc": "../../assets/img/structure/ex01.jpg", "tooltip": this.roofTip		
		},
		{
			"property": "door", "title": "door", "sub": "Doors Information", "desc": this.doorsText, "type": "door", "id": "doors-id", "imgSrc": "../../assets/img/structure/ex04.jpg", "tooltip": this.doorTip
		},
		{
			"property": "window", "title": "window", "sub": "Window Information", "desc": this.windowsText, "type": "window", "id": "windows-id", "imgSrc": "../../assets/img/structure/ex05.jpg", "tooltip": this.windowTip
		},
		{
			"property": "others", "title": "others", "sub": "Other Information", "desc": this.othersText, "type": "others", "id": "others-id"
		},
		{"property": "results", "title": "", "sub": "", "desc": "", "type": "results", "id": "results-id"}
	]

	//breadcrumb required 2 Inputs, id for referring the div "height" (from top and next div top?)
	//phase for used to name the breadcrumb and referring the li to assign/remove active class
	ids = ["property-id", "floor-id", 'bridge-id', "outerwall-id", "roof-id", "doors-id", "windows-id", "others-id", "results-id"];
	phases = ["property", "floor", 'bridge', "outerwall", "roof", "doors", "windows", "others", "results"];

	constructor(
		public auth: AuthHelperService
	){
	}

	ngOnInit() {
    window.scrollTo(0, 0);
    this.checkScreen();
		this.getHouseName();
		this.showHide();
		window.addEventListener("load", e => {
			this.checkScreen();
			// this.resultControl(e);
		});
		window.addEventListener("mousemove", e => {
			this.checkScreen();
		});
		window.addEventListener('scroll', e => {
			// this.resultControl(e);
		});
		window.addEventListener("resize", e => {
			this.checkScreen();
		});
	}

	resultControl(e:any): void {
		//To show result div which including result component
		//scroll event is used, but for the platform supports
		//and other event oriented, then must be other control
		let result = this.phases[this.phases.length-1]
		let resultBefore = this.phases[this.phases.length-2]

		let resultDiv : HTMLElement = (<HTMLElement> document.getElementById(result));
		let resultBeforeDiv : HTMLElement = (<HTMLElement> document.getElementById(resultBefore));

		let resultTop = resultDiv.offsetTop;
		let resultBeforeTop = resultBeforeDiv.offsetTop;

		let height = document.body.scrollHeight;
		let current = window.pageYOffset;

		console.log("result Top", resultTop)
		console.log("result before Top", resultBeforeTop)
		console.log("page height", height, "current",current)
		console.log(e)
	}

	checkScreen(): void {
		let smallScreenId = "screen_sm";
		let maxWidth = 770;
		if (window.innerWidth <= maxWidth) {
			if (document.getElementById(smallScreenId)) {
				if (document.getElementById(smallScreenId).classList.contains("col-sm-2")) {
					document.getElementById(smallScreenId).classList.remove("col-sm-2");
					document.getElementById(smallScreenId).classList.add("col");
				}
			}
		}
		else {
			if (document.getElementById(smallScreenId)) {
				if (document.getElementById(smallScreenId).classList.contains("col")) {
					document.getElementById(smallScreenId).classList.remove("col");
					document.getElementById(smallScreenId).classList.add("col-sm-2");
				}
			}

		}
	}

};