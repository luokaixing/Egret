//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 入口
var Main = (function (_super) {
    __extends(Main, _super);
    // 构造器
    function Main() {
        var _this = _super.call(this) || this;
        _this.successRes = false;
        _this.language = 'zh';
        _this.fontFamily = 'Brandon Text, -apple-system, Noto Sans, Helvetica Neue, Helvetica, Nimbus Sans L, Arial, Liberation Sans, PingFang SC, Hiragino Sans GB, Noto Sans CJK SC, Source Han Sans SC, Source Han Sans CN, Microsoft YaHei, Wenquanyi Micro Hei, WenQuanYi Zen Hei, ST Heiti, SimHei, WenQuanYi Zen Hei Sharp, sans-serif';
        _this.score = {
            yellow: 0,
            white: 0,
            black: 0
        };
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    // 添加舞台
    Main.prototype.onAddToStage = function (event) {
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    // 开始
    Main.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene(this.score, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    // 加载资源
    Main.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig('resource/default.res.json', 'resource/')];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup('preload', 0, loadingView)];
                    case 2:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function (score, that) {
        //let test = document.getElementById('test');
        //test.style.color = 'white';
        document.getElementById('mask').style.display = 'none';
        // 背景
        var sky = this.createBitmapByName('bg_jpg');
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        sky.width = 4002;
        sky.height = stageH;
        sky.x = stageW - sky.width;
        sky.y = 0;
        this.addChild(sky);
        egret.Tween.get(sky, { loop: true }).to({ x: 0 }, 30000);
        // 第一屏
        // 底层遮罩
        var mask = new egret.Shape();
        mask.graphics.beginFill(0x000000);
        mask.graphics.drawRect(0, 0, 1334, 750);
        mask.alpha = 0.4;
        this.addChild(mask);
        // 文字信息
        var title;
        function selectLanguage() {
            if (!showActive) {
                //this.addChild(select_active);
                this.addChild(cnText);
                this.addChild(enText);
                this.addChild(krText);
            }
            else {
                //this.removeChild(select_active);
                this.removeChild(cnText);
                this.removeChild(enText);
                this.removeChild(krText);
            }
            showActive = !showActive;
        }
        // 下拉列表
        // 边框
        /*let select_active = this.createBitmapByName('select_active_png');
        select_active.x = 1228;
        select_active.y = 80;*/
        var fontFamily = this.fontFamily;
        // 选择框文字
        var selectText = new egret.TextField();
        selectText.text = '语言';
        selectText.fontFamily = fontFamily;
        selectText.x = 1126;
        selectText.y = 35;
        selectText.width = 160;
        selectText.height = 48;
        selectText.textColor = 0xffffff;
        selectText.size = 24;
        selectText.textAlign = egret.HorizontalAlign.CENTER;
        selectText.verticalAlign = egret.VerticalAlign.MIDDLE;
        selectText.border = true;
        selectText.borderColor = 0xffffff;
        this.addChild(selectText);
        selectText.touchEnabled = true;
        selectText.addEventListener(egret.TouchEvent.TOUCH_TAP, selectLanguage, this);
        if (window.localStorage.getItem('language')) {
            this.language = window.localStorage.getItem('language');
            switch (this.language) {
                case 'zh':
                    selectText.text = '语言';
                    break;
                case 'kr':
                    selectText.text = '언어';
                    break;
                default:
                    selectText.text = 'Language';
                    break;
            }
        }
        else {
            var lan = navigator.language.toLowerCase();
            if (lan.indexOf('zh') >= 0) {
                this.language = 'zh';
                selectText.text = '语言';
            }
            else if (lan.indexOf('kr') >= 0) {
                selectText.text = '언어';
                this.language = 'kr';
            }
            else {
                this.language = 'en';
                selectText.text = 'Language';
            }
        }
        resetTitle(this);
        // 文字
        var cnText = new egret.TextField();
        cnText.text = '中文';
        cnText.fontFamily = fontFamily;
        cnText.x = 1126;
        cnText.y = 93;
        cnText.width = 160;
        cnText.height = 48;
        cnText.textColor = 0xffffff;
        cnText.size = 24;
        cnText.textAlign = egret.HorizontalAlign.CENTER;
        cnText.verticalAlign = egret.VerticalAlign.MIDDLE;
        cnText.border = true;
        cnText.borderColor = 0xffffff;
        cnText.touchEnabled = true;
        cnText.addEventListener(egret.TouchEvent.TOUCH_TAP, changeCnLanguage, this);
        var krText = new egret.TextField();
        krText.text = '한국어';
        krText.fontFamily = fontFamily;
        krText.x = 1126;
        krText.y = 141;
        krText.width = 160;
        krText.height = 48;
        krText.textColor = 0xffffff;
        krText.size = 24;
        krText.textAlign = egret.HorizontalAlign.CENTER;
        krText.verticalAlign = egret.VerticalAlign.MIDDLE;
        krText.border = true;
        krText.borderColor = 0xffffff;
        krText.touchEnabled = true;
        krText.addEventListener(egret.TouchEvent.TOUCH_TAP, changeKrLanguage, this);
        var enText = new egret.TextField();
        enText.text = 'English';
        enText.fontFamily = fontFamily;
        enText.x = 1126;
        enText.y = 189;
        enText.width = 160;
        enText.height = 48;
        enText.textColor = 0xffffff;
        enText.size = 24;
        enText.textAlign = egret.HorizontalAlign.CENTER;
        enText.verticalAlign = egret.VerticalAlign.MIDDLE;
        enText.border = true;
        enText.borderColor = 0xffffff;
        enText.touchEnabled = true;
        enText.addEventListener(egret.TouchEvent.TOUCH_TAP, changeEnLanguage, this);
        var showActive = false;
        function changeCnLanguage() {
            this.language = 'zh';
            selectText.text = '中文';
            resetTitle(this);
            changeLanguage(this);
        }
        function changeKrLanguage() {
            this.language = 'kr';
            selectText.text = '한국어';
            resetTitle(this);
            changeLanguage(this);
        }
        function changeEnLanguage() {
            this.language = 'en';
            selectText.text = 'English';
            resetTitle(this);
            changeLanguage(this);
        }
        function resetTitle(that) {
            if (typeof title === 'object') {
                that.removeChild(title);
            }
            title = that.createBitmapByName('title_png');
            switch (that.language) {
                case 'zh':
                    title = that.createBitmapByName('title_png');
                    break;
                case 'kr':
                    title = that.createBitmapByName('title_kr_png');
                    break;
                case 'en':
                    title = that.createBitmapByName('title_en_png');
                    break;
            }
            title.x = 1334 / 2 - title.width / 2;
            title.y = 750 / 2 - title.height / 2 + 40;
            title.touchEnabled = true;
            title.addEventListener(egret.TouchEvent.TOUCH_TAP, ruleBegin, this);
            that.addChild(title);
        }
        function changeLanguage(that) {
            window.localStorage.setItem('language', that.language);
            //that.removeChild(select_active);
            that.removeChild(cnText);
            that.removeChild(enText);
            that.removeChild(krText);
            showActive = !showActive;
        }
        var rule;
        // 第二屏开始
        function ruleBegin() {
            var soundClick = RES.getRes('click_mp3');
            var channel = soundClick.play(0, 1);
            if (showActive) {
                that.removeChild(cnText);
                that.removeChild(enText);
                that.removeChild(krText);
            }
            // 删除第一屏元素
            that.removeChild(title);
            //that.removeChild(select);
            that.removeChild(selectText);
            // 规则
            switch (that.language) {
                case 'en':
                    rule = that.createBitmapByName('rule_en_png');
                    break;
                case 'kr':
                    rule = that.createBitmapByName('rule_kr_png');
                    break;
                default:
                    rule = that.createBitmapByName('rule_png');
            }
            that.addChild(rule);
            rule.x = 0;
            rule.y = 0;
            rule.width *= 1;
            rule.height *= 1;
            rule.x = 1334 / 2 - rule.width / 2;
            rule.y = 750 / 2 - rule.height / 2;
            // 点击进入第三屏
            rule.touchEnabled = true;
            rule.addEventListener(egret.TouchEvent.TOUCH_TAP, gameBegin, that);
        }
        // 第三屏开始
        function gameBegin() {
            var _this = this;
            var soundClick = RES.getRes('click_mp3');
            that.removeChild(mask);
            that.removeChild(rule);
            // 右上角圆点
            var yellowIcon = that.createBitmapByName('yellow_round_png');
            var blackIcon = that.createBitmapByName('black_round_png');
            var whiteIcon = that.createBitmapByName('white_round_png');
            that.addChild(yellowIcon);
            that.addChild(blackIcon);
            that.addChild(whiteIcon);
            yellowIcon.x = 1064;
            blackIcon.x = 1156;
            whiteIcon.x = 1250;
            blackIcon.y = whiteIcon.y = yellowIcon.y = 47;
            // 右上角计数器
            var whiteLabel = new egret.TextField();
            var blackLabel = new egret.TextField();
            var yellowLabel = new egret.TextField();
            whiteLabel.text = score.yellow + '/5';
            whiteLabel.fontFamily = fontFamily;
            blackLabel.text = score.yellow + '/5';
            blackLabel.fontFamily = fontFamily;
            yellowLabel.text = score.yellow + '/5';
            yellowLabel.fontFamily = fontFamily;
            that.addChild(yellowLabel);
            that.addChild(whiteLabel);
            that.addChild(blackLabel);
            yellowLabel.x = 1094;
            blackLabel.x = 1186;
            whiteLabel.x = 1280;
            yellowLabel.y = whiteLabel.y = blackLabel.y = 44;
            yellowLabel.size = whiteLabel.size = blackLabel.size = 30;
            // 右上角红绿灯
            var redLight = that.createBitmapByName('red_light_png');
            that.addChild(redLight);
            redLight.x = 1334 - redLight.width + 14;
            redLight.y = 115;
            // 汽车元素
            var Car = (function (_super) {
                __extends(Car, _super);
                function Car() {
                    var _this = _super.call(this) || this;
                    _this.rand = Math.random();
                    var color = ['yellow', 'white', 'black'];
                    var chooseColor = color[Math.floor(Math.random() * 3)];
                    _this.color = chooseColor;
                    _this.redirect = !!Math.floor(Math.random() * 2);
                    _this.touched = false;
                    _this.begin = Math.floor(Math.random() * 15 * 1000);
                    _this.speed = Math.floor(Math.random() * 2000 + 2000);
                    return _this;
                }
                // 汽车点击事件
                Car.prototype.onTouch = function (evt) {
                    // 只允许点击一次
                    if (!this.touched && !that.successRes) {
                        var soundClick = RES.getRes('click_mp3');
                        var channel = soundClick.play(0, 1);
                        that.showAdd(evt.stageX, evt.stageY, this.color);
                        this.touched = true;
                        score[this.color]++;
                        yellowLabel.text = score.yellow + '/5';
                        whiteLabel.text = score.white + '/5';
                        blackLabel.text = score.black + '/5';
                        var res = [score.yellow, score.black, score.white].sort(function (a, b) {
                            return b - a;
                        })[0];
                        if (res >= 5)
                            success();
                    }
                };
                // 汽车驾驶事件
                Car.prototype.emit = function (car) {
                    var _this = this;
                    // 点击事件
                    car.touchEnabled = true;
                    car.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
                    // 近大远小
                    var sca = this.rand - 0.7 * (this.rand - 1);
                    car.width *= sca;
                    car.height *= sca;
                    // 方向
                    if (this.redirect)
                        car.scaleX = -1;
                    // 位置 570 ~ 370
                    car.x = this.redirect ? 0 : 1334;
                    car.y = this.rand * 200 + 370;
                    // 开始时间
                    setTimeout(function () {
                        var tw = egret.Tween.get(car);
                        // 速度
                        tw.to({ x: _this.redirect ? 2000 : -800 }, _this.speed);
                    }, this.begin);
                };
                return Car;
            }(egret.Sprite));
            // 初始化屏幕上的汽车
            var cars = [];
            var tmpCars = [];
            var carsNumber = 40;
            // 添加
            for (var i = 0; i < carsNumber; i++) {
                var car = new Car();
                cars.push(car);
            }
            // 对汽车进行排序，排序后可以排列层次
            cars.sort(function (x, y) {
                return x.rand - y.rand;
            });
            // 时间进场
            var timeValue = 15;
            var time = new egret.TextField();
            time.text = timeValue.toString();
            time.fontFamily = fontFamily;
            time.x = 1075;
            time.y = 140;
            time.size = 60;
            time.textColor = 0x468229;
            time.width = 70;
            time.textAlign = egret.HorizontalAlign.CENTER;
            that.addChild(time);
            var yellow_light, green_light, red_light;
            // 红灯进场
            red_light = that.createBitmapByName('red_out_light_png');
            that.addChild(red_light);
            red_light.x = 1334 - red_light.width - 20;
            red_light.y = 115;
            // 黄灯进场
            setTimeout(function () {
                that.removeChild(red_light);
                yellow_light = that.createBitmapByName('yellow_out_light_png');
                that.addChild(yellow_light);
                yellow_light.x = 1334 - yellow_light.width - 20;
                yellow_light.y = 180;
            }, 1000);
            // 绿灯进场 游戏开始
            setTimeout(function () {
                that.removeChild(yellow_light);
                green_light = that.createBitmapByName('green_out_light_png');
                that.addChild(green_light);
                green_light.x = 1334 - green_light.width - 20;
                green_light.y = 240;
                // 汽车开始
                for (var i in cars) {
                    // 对汽车颜色进行区分
                    var tmpCar = that.createBitmapByName(cars[i].color + '_png');
                    that.addChild(tmpCar);
                    // 开始
                    cars[i].emit(tmpCar, cars[i].begin, cars[i].rand);
                    tmpCars.push(tmpCar);
                }
                that.timeReduce = setInterval(function () {
                    timeValue--;
                    time.text = timeValue.toString();
                    if (timeValue <= 0) {
                        clearInterval(that.timeReduce);
                    }
                }, 1000);
            }, 2000);
            switch (that.language) {
                case 'en':
                    this.fail = that.createBitmapByName('game_over_en_png');
                    break;
                case 'kr':
                    this.fail = that.createBitmapByName('game_over_kr_png');
                    break;
                default:
                    this.fail = that.createBitmapByName('game_over_png');
            }
            this.fail.x = 1334 / 2 - this.fail.width / 2;
            this.fail.y = 750 / 2 - this.fail.height / 2;
            this.fail.touchEnabled = true;
            this.fail.addEventListener(egret.TouchEvent.TOUCH_TAP, restart, this);
            // 游戏结束
            that.end = setTimeout(function () {
                // 计算最高值
                var result = [score.yellow, score.black, score.white].sort(function (a, b) {
                    return b - a;
                })[0];
                // 若失败
                if (result < 5) {
                    _this.addChild(mask);
                    _this.addChild(_this.fail);
                    for (var i = 0; i < carsNumber; i++) {
                        cars[i].touched = true;
                    }
                }
            }, timeValue * 1000 + 2000);
            function restart() {
                that.successRes = false;
                clearTimeout(that.end);
                that.restart = true;
                that.removeChild(mask);
                if (that.success) {
                    that.removeChild(that.success);
                }
                if (this.fail) {
                    that.removeChild(this.fail);
                }
                that.removeChild(green_light);
                clearInterval(that.timeReduce);
                score = {
                    yellow: 0,
                    white: 0,
                    black: 0
                };
                yellowLabel.text = score.yellow + '/5';
                whiteLabel.text = score.white + '/5';
                blackLabel.text = score.black + '/5';
                timeValue = 15;
                time.text = timeValue.toString();
                // 删除
                for (var i = 0; i < carsNumber; i++) {
                    that.removeChild(tmpCars[i]);
                }
                tmpCars = [];
                // 初始化屏幕上的汽车
                cars = [];
                // 添加
                for (var i = 0; i < carsNumber; i++) {
                    var car = new Car();
                    cars.push(car);
                }
                // 对汽车进行排序，排序后可以排列层次
                cars.sort(function (x, y) {
                    return x.rand - y.rand;
                });
                // 红灯进场
                that.addChild(red_light);
                // 黄灯进场
                setTimeout(function () {
                    that.removeChild(red_light);
                    that.addChild(yellow_light);
                }, 1000);
                // 绿灯进场 游戏开始
                setTimeout(function () {
                    that.removeChild(yellow_light);
                    that.addChild(green_light);
                    // 汽车开始
                    for (var i in cars) {
                        // 对汽车颜色进行区分
                        var tmpCar = that.createBitmapByName(cars[i].color + '_png');
                        that.addChild(tmpCar);
                        // 开始
                        cars[i].emit(tmpCar, cars[i].begin, cars[i].rand);
                        tmpCars.push(tmpCar);
                    }
                    that.timeReduce = setInterval(function () {
                        timeValue--;
                        time.text = timeValue.toString();
                        if (timeValue <= 0) {
                            clearInterval(that.timeReduce);
                        }
                    }, 1000);
                }, 2000);
                that.end = setTimeout(function () {
                    var result = [score.yellow, score.black, score.white].sort(function (a, b) {
                        return b - a;
                    })[0];
                    if (result < 5) {
                        // if (result < 5 && !this.successRes) {
                        for (var i = 0; i < carsNumber; i++) {
                            cars[i].touched = true;
                        }
                        that.addChild(mask);
                        that.addChild(that.fail);
                    }
                }, timeValue * 1000 + 2000);
            }
            function success() {
                that.successRes = true;
                clearTimeout(that.timeReduce);
                clearTimeout(that.end);
                var userId = window.localStorage.getItem('userId') ||
                    Math.floor(Math.random() * 1000 * 1000 * 1000);
                window.localStorage.setItem('userId', '' + userId);
                var request = new egret.HttpRequest();
                request.responseType = egret.HttpResponseType.TEXT;
                request.open('https://www.beautywelltraveled.com/interface/poster.php?language=' +
                    that.language +
                    '&userId=' +
                    userId, egret.HttpMethod.GET);
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                request.send();
                request.addEventListener(egret.Event.COMPLETE, onGetComplete, this);
                // var mask: egret.Shape = new egret.Shape();
                // mask.graphics.beginFill(0x000000);
                // mask.graphics.drawRect(0, 0, 1334, 750);
                // mask.alpha = 0.4;
                that.addChild(mask);
                switch (that.language) {
                    case 'en':
                        that.success = that.createBitmapByName('success_en_png');
                        break;
                    case 'kr':
                        that.success = that.createBitmapByName('success_kr_png');
                        break;
                    default:
                        that.success = that.createBitmapByName('success_png');
                }
                that.addChild(that.success);
                that.success.x = 1334 / 2 - that.success.width / 2;
                that.success.y = 750 / 2 - that.success.height / 2;
                that.success.touchEnabled = true;
                that.success.addEventListener(egret.TouchEvent.TOUCH_BEGIN, successTouchBegin, this);
                that.success.addEventListener(egret.TouchEvent.TOUCH_END, successTouchEnd, this);
                var successDistanceBegin, successDistanceEnd;
                function successTouchBegin(e) {
                    successDistanceBegin = e.localX;
                }
                function successTouchEnd(e) {
                    successDistanceEnd = e.localX;
                    if (successDistanceBegin - successDistanceEnd > 50) {
                        shopIN();
                    }
                    else if (successDistanceBegin - successDistanceEnd < -50) {
                    }
                    else {
                        if (e.stageX >= 580 &&
                            e.stageX <= 750 &&
                            e.stageY >= 450 &&
                            e.stageY <= 510)
                            restart();
                        if (e.stageX >= 460 &&
                            e.stageX <= 880 &&
                            e.stageY >= 375 &&
                            e.stageY <= 435)
                            resultIN();
                    }
                }
                var resultPic, shop, shopListContainer = new egret.Sprite();
                function resultIN() {
                    that.removeChild(that.success);
                    resultPic;
                    switch (that.language) {
                        case 'en':
                            resultPic = that.createBitmapByName('result_en_png');
                            break;
                        case 'kr':
                            resultPic = that.createBitmapByName('result_kr_png');
                            break;
                        default:
                            resultPic = that.createBitmapByName('result_png');
                    }
                    that.addChild(resultPic);
                    resultPic.x = 1334 / 2 - resultPic.width / 2;
                    resultPic.y = 750 / 2 - resultPic.height / 2;
                    resultPic.touchEnabled = true;
                    resultPic.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin, this);
                    resultPic.addEventListener(egret.TouchEvent.TOUCH_END, touchEnd, this);
                    var distanceBegin, distanceEnd;
                    function touchBegin(e) {
                        distanceBegin = e.localX;
                    }
                    function touchEnd(e) {
                        distanceEnd = e.localX;
                        if (distanceBegin - distanceEnd > 50) {
                            // shopIN();
                        }
                        else if (distanceBegin - distanceEnd < -50) {
                        }
                        else {
                            if (e.stageX >= 220 &&
                                e.stageX <= 640 &&
                                e.stageY >= 540 &&
                                e.stageY <= 600)
                                planIN(that);
                            if (e.stageX >= 700 &&
                                e.stageX <= 1110 &&
                                e.stageY >= 540 &&
                                e.stageY <= 600)
                                window.location.href = '/';
                        }
                    }
                    shop = that.createBitmapByName('shop_png');
                    switch (that.language) {
                        case 'en':
                            shop = that.createBitmapByName('shop_en_png');
                            break;
                        case 'kr':
                            shop = that.createBitmapByName('shop_kr_png');
                            break;
                        default:
                            shop = that.createBitmapByName('shop_png');
                    }
                    that.addChild(shop);
                    shop.x = 1334 + 1334 / 2 - shop.width / 2;
                    shop.y = 750 / 2 - shop.height / 2;
                    /*免税店列表开始*/
                    shopListContainer.mask = new egret.Rectangle(0, 0, 950, 350);
                    that.addChild(shopListContainer);
                    shopListContainer.width = 950;
                    shopListContainer.height = 350;
                    shopListContainer.x = 1334 + 1334 / 2 - shopListContainer.width / 2;
                    shopListContainer.y = 280;
                    var shopList = that.createBitmapByName('shop_list_png');
                    switch (that.language) {
                        case 'en':
                            shopList = that.createBitmapByName('shop_list_en_png');
                            break;
                        case 'kr':
                            shopList = that.createBitmapByName('shop_list_kr_png');
                            break;
                        default:
                            shopList = that.createBitmapByName('shop_list_png');
                    }
                    shopListContainer.addChild(shopList);
                    shopList.width = 950;
                    shopList.height = 550;
                    shopList.x = 0;
                    shopList.y = 0;
                    // shopListContainer.touchEnabled = true;
                    // shopListContainer.addEventListener(
                    //   egret.TouchEvent.TOUCH_BEGIN,
                    //   touchBeginShopListContainer,
                    //   this
                    // );
                    // shopListContainer.addEventListener(
                    //   egret.TouchEvent.TOUCH_END,
                    //   touchEndShopListContainer,
                    //   this
                    // );
                    // let distanceBeginShopY, distanceEndShopY;
                    // function touchBeginShopListContainer(e) {
                    //   distanceBeginShopY = e.localY;
                    //   console.log(e.localY);
                    // }
                    // function touchEndShopListContainer(e, t) {
                    //   distanceEndShopY = e.localY;
                    //   console.log(e.localY);
                    //   if (distanceBeginShopY - distanceEndShopY > 50 && shopList.y == 0) {
                    //     // shopList.y = -250;
                    //     var twShopList = egret.Tween.get(shopList);
                    //     twShopList.to({ y: -250 }, 200);
                    //     //上滑
                    //   } else if (distanceBeginShopY - distanceEndShopY < -50 && shopList.y < 0) {
                    //     //下滑
                    //     var twShopList = egret.Tween.get(shopList);
                    //     twShopList.to({ y: 0 }, 200);
                    //   }
                    // }
                    /*免税店列表结束*/
                    shop.touchEnabled = true;
                    shop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, touchBegin1, this);
                    shop.addEventListener(egret.TouchEvent.TOUCH_END, touchEnd1, this, 222);
                    var distanceBeginShopX, distanceEndShopX, distanceBeginShopY, distanceEndShopY;
                    function touchBegin1(e) {
                        distanceBeginShopX = e.localX;
                        distanceBeginShopY = e.localY;
                    }
                    function touchEnd1(e, t) {
                        distanceEndShopX = e.localX;
                        distanceEndShopY = e.localY;
                        var distanceX = distanceEndShopX - distanceBeginShopX;
                        var distanceY = distanceEndShopY - distanceBeginShopY;
                        var diffXY = Math.abs(distanceX) - Math.abs(distanceY); //X轴方向移动距离减去Y轴方向移动距离
                        var diffYX = Math.abs(distanceY) - Math.abs(distanceX); //Y轴方向移动距离减去X轴方向移动距离
                        var distanceThreshold = 50;
                        // 计算XY轴四向距离，下滑及右滑为负数，上滑及左滑为正数
                        if (distanceX > distanceThreshold &&
                            diffXY > distanceThreshold * 1) {
                            console.log('→');
                            //右滑
                            // resultIN1();
                        }
                        else if (distanceX < 0 &&
                            Math.abs(distanceX) > distanceThreshold &&
                            diffXY > distanceThreshold * 1) {
                            console.log('←');
                            //左滑
                        }
                        else if (distanceY > distanceThreshold &&
                            diffYX > distanceThreshold * 1) {
                            console.log('↓');
                            var twShopList = egret.Tween.get(shopList);
                            twShopList.to({ y: 0 }, 200);
                            //下滑
                        }
                        else if (distanceY < 0 &&
                            Math.abs(distanceY) > distanceThreshold &&
                            diffYX > distanceThreshold * 1) {
                            console.log('↑');
                            //上滑
                            var twShopList = egret.Tween.get(shopList);
                            twShopList.to({ y: -200 }, 200);
                        }
                    }
                }
                function shopIN() {
                    var twShop = egret.Tween.get(shop);
                    var twShopListContainer = egret.Tween.get(shopListContainer);
                    var twRes = egret.Tween.get(resultPic);
                    twShop.to({ x: shop.x - 1334 }, 300);
                    twShopListContainer.to({ x: shopListContainer.x - 1334 }, 300);
                    twRes.to({ x: resultPic.x - 1334 }, 300);
                }
                function resultIN1() {
                    var twShop = egret.Tween.get(shop);
                    var twShopListContainer = egret.Tween.get(shopListContainer);
                    var twRes = egret.Tween.get(resultPic);
                    twShop.to({ x: shop.x + 1334 }, 300);
                    twShopListContainer.to({ x: shopListContainer.x + 1334 }, 300);
                    twRes.to({ x: resultPic.x + 1334 }, 300);
                }
                function planIN(that) {
                    document.getElementById('ticket').style.display = 'flex';
                    document.getElementById('music-controller').style.filter = 'blur(20px)';
                    document.getElementById('egret-player').style.filter = 'blur(20px)';
                    var warpper = document.getElementById('warpper');
                    var container = document.getElementById('container');
                    var scroll = document.getElementById('scroll');
                    console.log(window.orientation);
                    window.onorientationchange = function () {
                        console.log('inner');
                        console.log(window.orientation);
                        console.log(document.documentElement.clientWidth);
                        switch (window.orientation) {
                            case 0:
                            case 180:
                                scroll.style.width = '';
                                scroll.style.height = '';
                                warpper.style.left = '100%';
                                container.style.height = warpper.clientWidth + 'px';
                                container.style.width = warpper.clientHeight + 'px';
                                warpper.style.width =
                                    document.documentElement.clientWidth + 'px';
                                setTimeout(function () {
                                    scroll.scrollTo(10000, 0);
                                }, 100);
                                break;
                            default:
                                scroll.style.width = '100%';
                                scroll.style.height = '100%';
                                warpper.style.left = '';
                                warpper.style.width =
                                    document.documentElement.clientHeight + 'px';
                                container.style.width =
                                    document.documentElement.clientWidth + 'px';
                                container.style.height = warpper.clientHeight + 'px';
                                break;
                        }
                    };
                    var msg = document.getElementById('ticket_msg'), swipeMsg = document.getElementById('swipe_msg');
                    var text, swipeText;
                    switch (that.language) {
                        case 'en':
                            text =
                                'Long-press to save the boarding pass to view redemption code and go to a participating store to redeem.';
                            swipeText = 'Scroll down to view available redemption stores';
                            (document.querySelector('#shop-img')).src = "./resource/assets/shop_result_en.png";
                            // size = 20;
                            break;
                        case 'kr':
                            text =
                                '<br/>보상 코드를 확인하고 길게 눌러 탑승권을 저장하세요. 참여 매장에 방문해 보상을 받으세요.';
                            swipeText = '아래로 슬라이드하여 교환 매장 확인';
                            (document.querySelector('#shop-img')).src = "./resource/assets/shop_result_kr.png";
                            break;
                        default:
                            text =
                                '长按保存登机牌，获取兑换码，前往芭比波朗指定门店领取礼遇。';
                            swipeText = '下滑查看兑换门店';
                            (document.querySelector('#shop-img')).src = "./resource/assets/shop_result_zh.png";
                    }
                    msg.innerHTML = text;
                    msg.style.fontSize = '12px';
                    swipeMsg.innerHTML = swipeText;
                    swipeMsg.style.fontSize = '12px';
                    container.style.height = document.documentElement.clientHeight + 'px';
                    switch (window.orientation) {
                        case 0:
                        case 180:
                            scroll.style.width = '';
                            scroll.style.height = '';
                            warpper.style.left = '100%';
                            container.style.width = '900px';
                            setTimeout(function () {
                                container.style.width = warpper.clientHeight + 'px';
                            }, 500);
                            warpper.style.width = container.style.height =
                                document.documentElement.clientHeight + 'px';
                            scroll.scrollTo(warpper.clientWidth + 1000, 0);
                            break;
                        default:
                            scroll.style.width = '100%';
                            scroll.style.height = '100%';
                            warpper.style.left = '';
                            warpper.style.width = container.style.width =
                                document.documentElement.clientWidth + 'px';
                            container.style.height = warpper.clientHeight + 'px';
                            break;
                    }
                }
                function onGetComplete(event) {
                    var request = event.currentTarget;
                    var res = JSON.parse(request.response);
                    var img = document.getElementById('ticket_img');
                    img.setAttribute('src', res.img_path);
                }
            }
        }
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    Main.prototype.showAdd = function (x, y, color) {
        var _this = this;
        var addNumber;
        // 弹出文字
        // shop = this.createBitmapByName('shop_en_png');
        switch (color) {
            case 'black':
                addNumber = this.createBitmapByName('p1_g_png');
                break;
            case 'white':
                addNumber = this.createBitmapByName('p1_b_png');
                break;
            default:
                addNumber = this.createBitmapByName('p1_y_png');
                break;
        }
        addNumber.alpha = 0;
        addNumber.x = x;
        addNumber.y = y - 100;
        this.addChild(addNumber);
        var moveNUmber = egret.Tween.get(addNumber);
        moveNUmber
            .to({ y: y - 150, alpha: 1 }, 500)
            .to({}, 500)
            .to({ y: y - 200, alpha: 0 }, 500);
        setTimeout(function () {
            _this.removeChild(addNumber);
        }, 2000);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
