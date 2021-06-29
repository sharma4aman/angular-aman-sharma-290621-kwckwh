import { Component, OnDestroy, OnInit } from '@angular/core';

import { CandidateService } from '../services/candidates.service';
import { Candidate } from '../services/candidates.service';

@Component({
  selector: 'list-candidate',
  templateUrl: './list-candidate.component.html',
  styles: []
})
export class ListCandidateComponent implements OnInit {
  private candidateService: CandidateService;
  public candidates: Candidate[];

  constructor(private service: CandidateService) {
    this.candidateService = service;
  }

  public ngOnInit() {
    this.candidates = this.candidateService.getAll();
  }
}
