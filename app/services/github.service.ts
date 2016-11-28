import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_Id = '1c3a7db87cb0189e1e96';
    private client_secret = '6a906861d2f69ad7c9c1e6ead085fe8a28277294';
    
    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'pevargasg';
    }
    
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_Id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_Id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
}





