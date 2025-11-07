import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { SignupDto } from './signup-dto';
import { Observable } from 'rxjs';
import { SignupResultDto } from './signup-result-dto';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private http = inject(HttpClient);

  postSignup(dto: SignupDto): Observable<SignupResultDto> {
    return this.http.post<SignupResultDto>('/api/signup', dto);
  }
}
