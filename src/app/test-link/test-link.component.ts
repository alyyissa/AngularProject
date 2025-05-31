import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-test-link',
  imports: [],
  templateUrl: './test-link.component.html',
  styleUrl: './test-link.component.css'
})
export class TestLinkComponent implements OnInit{

  constructor(private route:ActivatedRoute){};

  id:any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log("hello from id: " +this.id)
  }


}
