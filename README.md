# Angular2 Github Search Source


This repository holds the TypeScript source code of the Github search project,
In this project we use Github's API to retrive data from the json objects containig the information of the gitHub users.

#Conection and retriving using REST
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_Id = 'use the one github provided you';
    private client_secret = 'use the one github provided you';
    
    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'pevargasg';
    }
    
   
}

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 

# gitHubSearcher
