import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.scss' ]
})
export class CardComponent implements OnInit {
	// userId: string;
	// id: string;
	// title: string;
	// body: string;

	@Input() post;

	constructor() {}

	ngOnInit() {}
}
