import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getAccessToken(): string {
    const token: string = <string>localStorage.getItem('token');
    return token;
}

public setAccessToken(token: string): StorageService {
    localStorage.setItem('token', token);
    return this;
}

public getUserData(): any {
    const token: string = <string>localStorage.getItem('token');
    if (token) {
        const payload = this.payload(token);
        const userData = { 'id': payload.id, 'name': payload.name , 'email': payload.email };
        return userData;
    }
}

public payload(token): any {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
}

public clear(): any {
    localStorage.removeItem('token');
}

}
