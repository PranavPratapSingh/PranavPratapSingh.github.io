import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
	public projectsData = data['Projects'];
	public darkTheme : boolean = true;

	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
		setInterval(() => {
			this.darkTheme = !this.darkTheme;
			this.changeDetectorRef.detectChanges();
		}, 7100);
	}
}
