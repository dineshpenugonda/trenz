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
    this.http.get('http://localhost:8080/api/test?q='+this.textMessage).subscribe((res:Response) => this.parseResponse(res)); 
    //this.addSystemResponseMessage(this.textMessage);
  }
  parseResponse(res:Response){
    console.log(res.json())
    var v = res.json();
    this.addSystemResponseMessage(v["message"])
  }

  addSystemResponseMessage(msg){
    this.textMessage = "";
    this.messages1.unshift({"message" : msg, "label":"System"});
  }
}
