import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CandidateService } from '../services/candidates.service';

@Component({
  selector: 'add-candidate',
  templateUrl: './add-candidate.component.html',
  styles: []
})
export class AddCandidateComponent {
  public form: FormGroup;
  private candidateService: CandidateService;

  constructor(private service: CandidateService, private _fb: FormBuilder) {
    this.candidateService = service;
    //TODO: Add validators
    this.form = this._fb.group({
      firstName: [null],
      lastName: [null],
      gender: [null],
      email: [null]
    });
  }

  public addCandidate() {
    //Validate here
    if (this.form.valid) {
      let candidate = this.form.getRawValue();
      //TODO: Map the DTO here
      this.candidateService.add(candidate);
    }
  }
}
