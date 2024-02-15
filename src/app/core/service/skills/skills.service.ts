import { Injectable } from '@angular/core';
import { Skill } from '../../interfaces/skill';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  private url: string = 'http://localhost:8085/ms-profissional/v1/habilidades'

  constructor(private http: HttpClient) { }

  public getSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url);
  }

  public getIdByName(skills: string[]): Observable<number[]> {
    return this.http.get<Skill[]>(this.url)
    .pipe(
      map(allSkills => {
        const skillIds: number[] = [];
        allSkills.forEach(skill => {
          if (skills.includes(skill.habilidade)){
            skillIds.push(skill.id)
          }
        });
        return skillIds;
      })
    );
  }
}
