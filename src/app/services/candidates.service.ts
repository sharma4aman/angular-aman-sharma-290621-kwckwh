import { Injectable } from '@angular/core';
// import { CANDIDATES } from '../resources/mock-candidates.constant';

export interface Candidate {
  id: Number;
  first_name: string;
  last_name?: string;
  email: string;
  gender: string;
}

@Injectable()
export class CandidateService {
  CANDIDATES: Candidate[] = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      gender: 'Male',
      email: 'john.doe@email.com'
    }
  ];
  private candidates: Candidate[] = this.CANDIDATES;

  public getAll(): Candidate[] {
    return this.candidates;
  }

  public add(candidate: Candidate): boolean {
    //Validate DTO here, if invalid return false;
    this.candidates.push(candidate);
    return true;
  }

  public setDefaultCandidates(candidates: Candidate[]) {
    //At Bootstrapping
    this.candidates.concat(candidates);
  }
}
