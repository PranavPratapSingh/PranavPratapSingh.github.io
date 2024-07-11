import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
	public top : string = "25%";
	public left : string = "48%";

	constructor(public router : Router,private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
		document.addEventListener('mousemove',(event : any)=>{
			this.top = event.pageY+'px';
			this.left = event.pageX+'px';
			this.changeDetectorRef.detectChanges();
		});
	}
}
