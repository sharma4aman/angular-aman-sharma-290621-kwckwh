import { Injectable } from '@angular/core';
export interface Candidate {
  id: Number;
  first_name: string;
  last_name?: string;
  email: string;
  gender: string;
}

@Injectable()
export class StudentService {
  private candidates: Candidate[] = [];

  public getAll(): Candidate[] {
    return this.candidates;
  }

  public add(candidate: Candidate): boolean {
    //Validate DTO here, if invalid return false;
    this.candidates.push(candidate);
    return true;
  }

  public setDefaultCandidates(candidates: Candidate[]) {
    this.candidates.concat(candidates);
  }
}
