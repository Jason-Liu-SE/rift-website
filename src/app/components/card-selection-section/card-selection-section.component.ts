import { Component, Input } from '@angular/core';
import { ICardSelection } from 'src/app/interfaces/card-selection.interface';

@Component({
    selector: 'app-card-selection-section',
    templateUrl: './card-selection-section.component.html',
    styleUrls: ['./card-selection-section.component.scss']
})
export class CardSelectionSectionComponent {
    @Input({ required: true }) public data!: ICardSelection[];
}
