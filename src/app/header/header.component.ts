import { Component, OnInit } from '@angular/core';

// @Component デコレータがついたクラスがコンポーネントとして振る舞う
@Component({
  selector: 'app-header', // HTML上では <app-header> として扱うことができる
  templateUrl: './header.component.html', // このコンポーネントに関連するテンプレートの定義
  styleUrls: ['./header.component.css']   // このコンポーネントに関連するスタイルシートの定義
})
export class HeaderComponent implements OnInit {

  title = 'タイトル';

  buttons: string[] = [
    'button1',
    'button2',
    'button3'
  ];

  // 初期化処理
  constructor() { }

  // OnInit インターフェイスを実装すると ngOnInit が初期化時に実行される
  ngOnInit() {
  }

}
