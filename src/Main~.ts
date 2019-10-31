// //////////////////////////////////////////////////////////////////////////////////////
// //
// //  Copyright (c) 2014-present, Egret Technology.
// //  All rights reserved.
// //  Redistribution and use in source and binary forms, with or without
// //  modification, are permitted provided that the following conditions are met:
// //
// //     * Redistributions of source code must retain the above copyright
// //       notice, this list of conditions and the following disclaimer.
// //     * Redistributions in binary form must reproduce the above copyright
// //       notice, this list of conditions and the following disclaimer in the
// //       documentation and/or other materials provided with the distribution.
// //     * Neither the name of the Egret nor the
// //       names of its contributors may be used to endorse or promote products
// //       derived from this software without specific prior written permission.
// //
// //  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
// //  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
// //  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// //  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
// //  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// //  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
// //  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
// //  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
// //  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// //  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// //
// //////////////////////////////////////////////////////////////////////////////////////

// // 入口
// class Main extends egret.DisplayObjectContainer {
//   score: object = {
//     yellow: 0,
//     white: 0,
//     black: 0
//   };
//   title;
//   rule;
//   mask: egret.Shape;
//   selectText: egret.TextField;
//   select;

//   // 构造器
//   public constructor() {
//     super();

//     this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
//   }

//   // 添加舞台
//   private onAddToStage(event: egret.Event) {
//     this.runGame().catch(e => {
//       console.log(e);
//     });
//   }

//   // 开始
//   private async runGame() {
//     await this.loadResource();
//     this.createGameScene(this.score);
//   }
//   // 加载资源
//   private async loadResource() {
//     try {
//       const loadingView = new LoadingUI();
//       this.stage.addChild(loadingView);
//       await RES.loadConfig('resource/default.res.json', 'resource/');
//       await RES.loadGroup('preload', 0, loadingView);
//       this.stage.removeChild(loadingView);
//     } catch (e) {
//       console.error(e);
//     }
//   }

//   /**
//    * 创建游戏场景
//    * Create a game scene
//    */
//   private createGameScene(score) {
//     // 背景
//     let sky = this.createBitmapByName('bg_jpg');
//     this.addChild(sky);
//     let stageW = this.stage.stageWidth;
//     let stageH = this.stage.stageHeight;
//     sky.width = stageW;
//     sky.height = stageH;

//     // 第一屏
//     // 底层遮罩
//     this.mask = new egret.Shape();
//     this.mask.graphics.beginFill(0x000000);
//     this.mask.graphics.drawRect(0, 0, 1334, 750);
//     this.mask.alpha = 0.4;
//     this.addChild(this.mask);

//     // 文字信息
//     this.title = this.createBitmapByName('title_png');
//     this.addChild(this.title);
//     this.title.x = 1334 / 2 - this.title.width / 2;
//     this.title.y = 750 / 2 - this.title.height / 2 + 40;
//     this.title.touchEnabled = true;
//     this.title.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.gameStart,
//       this
//     );
//     // 音乐
//     let music = this.createBitmapByName('music_png');
//     this.addChild(music);
//     music.x = 40;
//     music.y = 30;

//     // - 语言
//     // 边框
//     this.select = this.createBitmapByName('select_png');
//     this.addChild(this.select);
//     this.select.x = 1228;
//     this.select.y = 40;

//     // 文字
//     this.selectText = new egret.TextField();
//     this.selectText.text = 'CN';
//     this.selectText.x = 1243;
//     this.selectText.y = 50;
//     this.selectText.width = 120;
//     this.selectText.height = 32;
//     this.selectText.textColor = 0xffffff;
//     this.selectText.size = 16;
//     this.addChild(this.selectText);

//     // 下拉列表
//     // 暂无

//     // 第二屏开始
//     // function ruleBegin() {
//     //   // 删除第一屏元素
//     //   this.removeChild(this.title);
//     //   this.removeChild(select);
//     //   this.removeChild(selectText);

//     //   // 规则
//     //   this.rule = this.createBitmapByName('this.rule_png');
//     //   this.addChild(this.rule);
//     //   this.rule.x = 0;
//     //   this.rule.y = 0;
//     //   this.rule.x = 1334 / 2 - this.rule.width / 2;
//     //   this.rule.y = 750 / 2 - this.rule.height / 2;

//     //   console.log(this.rule);

//     //   // 点击进入第三屏
//     //   this.rule.touchEnabled = true;
//     //   this.rule.addEventListener(egret.TouchEvent.TOUCH_TAP, gameBegin, this);
//     // }

//     // 第三屏开始
//     function gameBegin() {
//       this.removeChild(this.mask);
//       this.removeChild(this.rule);

//       // 右上角红绿灯
//       let redLight = this.createBitmapByName('red_light_png');
//       this.addChild(redLight);
//       redLight.x = 1334 - redLight.width + 14;
//       redLight.y = 115;

//       // 汽车元素
//       class Car extends egret.Sprite {
//         public constructor() {
//           super();

//           this.rand = Math.random();
//           let color = ['yellow', 'white', 'black'];
//           let chooseColor = color[Math.floor(Math.random() * 3)];
//           this.color = chooseColor;
//           this.redirect = !!Math.floor(Math.random() * 2);
//           this.touched = false;
//           this.begin = Math.floor(Math.random() * 15 * 1000);
//           this.speed = Math.floor(Math.random() * 2000 + 2000);
//         }

//         speed: number;
//         color: string;
//         rand: number;
//         redirect: boolean;
//         touched: boolean;
//         begin: number;

//         // 汽车点击事件
//         public onTouch(evt: egret.TouchEvent) {
//           // 只允许点击一次
//           if (!this.touched) {
//             this.touched = true;
//             score[this.color]++;
//             yellowLabel.text = score.yellow + '/5';
//             whiteLabel.text = score.white + '/5';
//             blackLabel.text = score.black + '/5';
//           }
//         }

//         // 汽车驾驶事件
//         public emit(car) {
//           // 点击事件
//           car.touchEnabled = true;
//           car.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);

//           // 近大远小
//           let sca = this.rand - 0.7 * (this.rand - 1);
//           car.width *= sca;
//           car.height *= sca;

//           // 方向
//           if (this.redirect) car.scaleX = -1;

//           // 位置 570 ~ 370
//           car.x = this.redirect ? 0 : 1334;
//           car.y = this.rand * 200 + 370;

//           // 开始时间
//           setTimeout(() => {
//             var tw = egret.Tween.get(car);
//             // 速度
//             tw.to({ x: this.redirect ? 2000 : -800 }, this.speed);
//           }, this.begin);
//         }
//       }

//       // 初始化屏幕上的汽车
//       var cars = [];

//       // 添加
//       for (let i = 0; i < 20; i++) {
//         let car: Car = new Car();
//         cars.push(car);
//       }

//       // 对汽车进行排序，排序后可以排列层次
//       cars.sort(function(x, y) {
//         return x.rand - y.rand;
//       });

//       // 时间进场
//       var timeValue = 2;
//       var time: egret.TextField = new egret.TextField();
//       time.text = timeValue.toString();
//       time.x = 1075;
//       time.y = 140;
//       time.size = 60;
//       time.textColor = 0x468229;
//       time.width = 70;
//       time.textAlign = egret.HorizontalAlign.CENTER;

//       this.addChild(time);

//       let yellow_light, green_light, red_light;

//       // 红灯进场
//       red_light = this.createBitmapByName('red_out_light_png');
//       this.addChild(red_light);
//       red_light.x = 1334 - red_light.width - 20;
//       red_light.y = 115;

//       // 黄灯进场
//       setTimeout(() => {
//         this.removeChild(red_light);
//         yellow_light = this.createBitmapByName('yellow_out_light_png');
//         this.addChild(yellow_light);
//         yellow_light.x = 1334 - yellow_light.width - 20;
//         yellow_light.y = 180;
//       }, 1000);

//       // 绿灯进场 游戏开始
//       setTimeout(() => {
//         this.removeChild(yellow_light);
//         green_light = this.createBitmapByName('green_out_light_png');
//         this.addChild(green_light);
//         green_light.x = 1334 - green_light.width - 20;
//         green_light.y = 240;

//         // 汽车开始
//         for (let i in cars) {
//           // 对汽车颜色进行区分
//           let tmpCar = this.createBitmapByName(cars[i].color + '_png');
//           this.addChild(tmpCar);
//           // 开始
//           cars[i].emit(tmpCar, cars[i].begin, cars[i].rand);
//         }

//         let timeReduce = setInterval(() => {
//           timeValue--;
//           time.text = timeValue.toString();

//           if (timeValue <= 0) {
//             clearInterval(timeReduce);
//           }
//         }, 1000);
//       }, 2000);

//       setTimeout(() => {
//         let result = [score.yellow, score.black, score.white].sort((a, b) => {
//           return b - a;
//         })[0];

//         if (result < 5) {
//           this.addChild(this.mask);
//           this.fail = this.createBitmapByName('game_over_png');
//           this.addChild(this.fail);

//           this.fail.x = 1334 / 2 - this.fail.width / 2;
//           this.fail.y = 750 / 2 - this.fail.height / 2;

//           this.fail.touchEnabled = true;
//           this.fail.addEventListener(
//             egret.TouchEvent.TOUCH_TAP,
//             gameBegin,
//             this
//           );
//         }
//       }, timeValue * 1000 + 2000);
//     }
//   }

//   private gameStart() {
//     this.removeChild(this.title);
//     console.log(1);
//     // 规则
//     this.rule = this.createBitmapByName('rule_png');
//     this.addChild(this.rule);
//     this.rule.x = 0;
//     this.rule.y = 0;
//     this.rule.x = 1334 / 2 - this.rule.width / 2;
//     this.rule.y = 750 / 2 - this.rule.height / 2;

//     // 点击进入第三屏
//     this.rule.touchEnabled = true;
//     this.rule.addEventListener(
//       egret.TouchEvent.TOUCH_TAP,
//       this.gameBegin,
//       this
//     );
//   }

//   private gameBegin() {
//     this.removeChild(this.mask);
//     this.removeChild(this.rule);
//     this.removeChild(this.select);
//     this.removeChild(this.selectText);

//     // 右上角圆点
//     let yellowIcon = this.createBitmapByName('yellow_round_png');
//     let blackIcon = this.createBitmapByName('black_round_png');
//     let whiteIcon = this.createBitmapByName('white_round_png');
//     this.addChild(yellowIcon);
//     this.addChild(blackIcon);
//     this.addChild(whiteIcon);
//     yellowIcon.x = 1064;
//     blackIcon.x = 1156;
//     whiteIcon.x = 1250;
//     blackIcon.y = whiteIcon.y = yellowIcon.y = 47;

//     // 右上角计数器
//     var whiteLabel: egret.TextField = new egret.TextField();
//     var blackLabel: egret.TextField = new egret.TextField();
//     var yellowLabel: egret.TextField = new egret.TextField();
//     whiteLabel.text = this.score.yellow + '/5';
//     blackLabel.text = score.yellow + '/5';
//     yellowLabel.text = score.yellow + '/5';
//     this.addChild(yellowLabel);
//     this.addChild(whiteLabel);
//     this.addChild(blackLabel);
//     yellowLabel.x = 1094;
//     blackLabel.x = 1186;
//     whiteLabel.x = 1280;

//     yellowLabel.y = whiteLabel.y = blackLabel.y = 44;
//     yellowLabel.size = whiteLabel.size = blackLabel.size = 30;
//   }

//   /**
//    * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
//    * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
//    */
//   private createBitmapByName(name: string) {
//     let result = new egret.Bitmap();
//     let texture: egret.Texture = RES.getRes(name);
//     result.texture = texture;
//     return result;
//   }

//   /**
//    * 描述文件加载成功，开始播放动画
//    * Description file loading is successful, start to play the animation
//    */
//   private startAnimation(result: string[]) {
//     // let car = this._car;
//     // let runCar = () => {
//     //   //   console.log(car);
//     //   //   let moveCar = egret.Tween.get(car);
//     //   //   moveCar.to({ x: 1000 }, 2000);
//     // };
//     // runCar();
//   }
// }
