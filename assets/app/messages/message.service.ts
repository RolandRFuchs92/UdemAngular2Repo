import { Message } from "./message.model";
import {Http , Response, Headers } from "@angular/http";
import {EventEmitter, Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {ErrorService} from "../errors/error.service";

@Injectable()

export class MessageService{
  private messages: Message[] =[];
  messageIsEdit = new EventEmitter<Message>();

  constructor(private http: Http, private errorService: ErrorService){}

  addMessage(message: Message){
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    //sets up an observable <= DOES NOT SEND REQUEST( line below)
    return this.http.post('https://angular2-deployment-rf.herokuapp.com/message' + token, body, {headers: headers})
      .map((response: Response) => {
        const result = response.json();
        const message = new  Message(
              result.obj.content,
              result.obj.user.firstName,
              result.obj._id,
              result.obj.user._id
        );
        this.messages.push(message);
        return message;
      })
      .catch((error: Response) => {
      this.errorService.handleError(error.json());
      return Observable.throw(error.json());
    });
      //this .json Method dumps out the headers and shit i dont need and only keeps the json object data.

  }

  editMessage(message:Message){
    this.messageIsEdit.emit(message);
  }

  getMessages(){
    return this.http.get('https://angular2-deployment-rf.herokuapp.com/message')
      .map((response: Response) => {
        const messages = response.json().obj;
        let transformedMessages: Message[]=[];

        for (let message of messages) {
          transformedMessages.push(new Message(
                message.content,
                message.user.firstName,
                message._id,
                message.user._id)
          );
        }
        console.log(transformedMessages);
        this.messages = transformedMessages;
        return transformedMessages;
      })
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  updatedMessage(message: Message){
    const body = JSON.stringify(message);
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    //sets up an observable <= DOES NOT SEND REQUEST( line below)
    return this.http.patch('https://angular2-deployment-rf.herokuapp.com/' + message.messageId + token, body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }

  deleteMessage(message: Message){
    this.messages.splice(this.messages.indexOf(message),1);
    const token = localStorage.getItem('token')
      ? '?token=' + localStorage.getItem('token')
      : '';
    return this.http.delete('https://angular2-deployment-rf.herokuapp.com/message/' + message.messageId + token)
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error.json());
      });
  }
}
