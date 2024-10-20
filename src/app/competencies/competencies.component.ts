import { Component } from '@angular/core';

@Component({
  selector: 'app-competencies',
  templateUrl: './competencies.component.html',
  styleUrl: './competencies.component.css'
})
export class CompetenciesComponent {
  activeIndex: number | null = null;

  toggleAnswer(index: number) {
    // If the same index is clicked, close it. Otherwise, open the new one and close the previous one.
    if (this.activeIndex === index) {
      this.activeIndex = null; // Close if clicked again
    } else {
      this.activeIndex = index; // Open the clicked one
    }
  }

  isAnswerVisible(index: number): boolean {
    return this.activeIndex === index;
  }

  isItemOpen(index: number): boolean {
    return this.activeIndex === index;
  }

}
