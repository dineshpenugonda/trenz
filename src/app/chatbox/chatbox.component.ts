import { Component, OnInit } from '@angular/core';
import { HttpModule, Response, Http } from '@angular/http';


@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  title='have fun!!!';
  messages1 = [{"label" : "You", "message" : "test"}];
  textMessage = "";
  constructor(private http: Http) { }
  ngOnInit() {
    this.addSystemResponseMessage('test');
  }

  onSendMessage(){
    if(this.textMessage == "") return
    this.messages1.unshift({"message" : this.textMessage, "label":"You"});
    console.log(this.textMessage);
    //this.http.get("http://jsonplaceholder.typicode.com/users")
    //    .subscribe(this.parseResponse)
    
    this.addSystemResponseMessage(this.textMessage);
  }
  parseResponse(res:Response){
    console.log(res.json())
    this.addSystemResponseMessage(res.toString())
  }

  addSystemResponseMessage(msg){
    this.textMessage = "";
    this.messages1.unshift({"message" : msg, "label":"System"});
  }

}
