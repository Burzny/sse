import { Component, OnInit } from "@angular/core";
import { SseService } from "src/app/sse.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private sseService: SseService) {}
  ngOnInit() {
    this.sseService
      .getServerSentEvent("http://127.0.0.1:8000/sse")
      .subscribe(data => console.log(data));
  }
}