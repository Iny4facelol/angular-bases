import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = "Ironman";
  public age: number = 40;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} is ${this.age} years old`;
  }

  changeHero(): void {
    this.name = "Spiderman";
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = "Ironman";
    this.age = 40;
  }


}
