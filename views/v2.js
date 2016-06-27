Q('View',{

    name:'home',
    backgroundColor:0xeeeeee,
    items:[

        {
            // 背景大图
            name:'mbg',
            xtype:'Image',
            auto:{w:'100w'},
            x:'0w',
            y:'0h',
            anchorX:0,
            anchorY:0,
            image:'mbg',
            listener:{
                down:function(){

                }
            }
        },

        {   
            // 右上角下拉菜单栏
            name:'meun1',
            // depth:200,
            xtype:'Container',
            depth:14,
            auto:{w:'100w'},
            x:'68w',
            // y:'30w',
            items:[
                {
                    xtype:'Image',
                    auto:{w:'30w'},
                    image:'meun1'
                },{
                    xtype:'Image',
                    auto:{w:'30w'},
                    image:'meun2'
                },{
                    xtype:'Image',
                    auto:{w:'30w'},
                    image:'meun3'
                },{
                    xtype:'Image',
                    auto:{w:'30w'},
                    image:'meun4'
                },{
                    xtype:'Image',
                    auto:{w:'30w'},
                    image:'meun5'
                }

            ]
        },

        {
            // 头部导航栏
            name:'head',
            xtype:'Image',
            depth:15,
            // anchorX:.5,
            // anchorY:.5,
            auto:{w:'100w'},
            image:'head',
            cover:{
                zou:true
            },
            listener:{
                down:function(){
                    // 通过判断当前鼠标点击的坐标确认触发哪个事件
                    if(Q.event.now.x>Q.app.width*.8){
                        Q.meun(this.zou=!this.zou);

                    }else if(Q.event.now.x<Q.app.width*.2){
                        // 获取当前显示的图像
                        var tex = new Q.class.RenderTexture(Q.app.renderer);

                        tex.resize(Q.app.width,Q.app.height);

                        tex.render(Q.app.atyView,false,true);

                        var meun= Q('meun');
                       
                       // 设置menu的纹理当前获取的图像，并设置为可见
                        meun.set({
                            texture:tex,
                            visible:true,
                            enabled:true
                        });
                        // 设置meun向右移动缩小
                        meun.animate({
                            to:{
                                scaleX: .9,
                                scaleY: .9,
                                x:Q.app.width*1.5,
                                y:Q.app.height*.95
                            },
                            time:300,
                            ease:Q.Tween.ease.Quartic.Out
                        });

                        Q('cont').set({
                            visible:false,
                            enabled:false
                        });

                        Q('ibg').set({
                            visible:false,
                            enabled:false
                        });

                        Q('head').set({
                            visible:false,
                            enabled:false
                        });
                    }

                    
                }
            }
        },

        {

            name:'meun',
            xtype:'Image',
            // image:'head',
            // width:'100w',
            // height:'100h',
            anchorX:1,
            anchorY:1,
            x:'100w',
            y:'100h',

            depth:100,
            visible:false,enabled:false,
            listener:{
                down:function(){
                    this.animate({
                        to:{
                            scaleX: 1,
                            scaleY: 1,
                            x:Q.app.width,
                            y:Q.app.height
                        },
                        time:600,
                        ease:Q.Tween.ease.Quartic.Out,
                        onComplete:function(){

                            Q('cont').set({
                                visible:true,
                                enabled:true
                            });

                            Q('ibg').set({
                                visible:true,
                                enabled:true
                            });

                            Q('head').set({
                                visible:true,
                                enabled:true
                            });

                            this.set({
                                visible:false,
                                enabled:false
                            });
                        }
                    });
                    return true;
                }
            }
        },

        {
            name:'cont',
            xtype:'Container',
            cover:{
                aty:null
            },
            items:[
                {
                    xtype:'Rect',
                    width:'100w',
                    height:'100h',
                    fillColor:0xf1f0f6,
                    name:'cbg'
                },
                {
                    name:'v1',

                    xtype:'Container',
                    // visible:false,enabled:false,
                    items:[
                        {
                            xtype:'Image',
                            auto:{w:'100w'},
                            image:'home1',
                            listener:{
                                down:function(){
                                    console.log(this.id,this.name);

                                    //Q.app.go('v1',null,Q.Transitions.small);
                                }
                            }
                        },
                        {
                            xtype:'Image',
                            auto:{w:'100w'},
                            image:'home2',
                            listener:{
                                down:function(){
                                    console.log(this.id,this.name);

                                    //Q.app.go('v1',null,Q.Transitions.small);
                                }
                            }
                        },
                        {
                            xtype:'Image',
                            auto:{w:'100w'},
                            image:'home3',
                            listener:{
                                down:function(){
                                    console.log(this.id,this.name);

                                    //Q.app.go('v1',null,Q.Transitions.small);
                                }
                            }
                        },
                        {
                            xtype:'Image',
                            auto:{w:'100w'},
                            image:'home4',
                            listener:{
                                down:function(){
                                    console.log(this.id,this.name);
                                    //Q.app.go('v1',null,Q.Transitions.small);
                                }
                            }
                        },
                        {
                            xtype:'Image',
                            auto:{w:'100w'},
                            image:'home5',
                            listener:{
                                down:function(){
                                    //Q.app.go('v1',null,Q.Transitions.small);
                                }
                            }
                        }
                        
                    ],
                    cover:{
                        vy:0,
                        mudi:0
                    },
                    listener:{
                        down:function(){
                            this.mudi = false;
                            console.log(this.minY)
                        },
                        move:function(){
                            // console.log(Q.event.delay.y)
                            Q.moveEventY(this );
                            
                        },
                        up:function(){
                            if(this.maxY < this.y){
                                this.mudi = this.maxY;
                            }else if(this.minY>this.y){
                                this.mudi = this.minY;
                            }else{
                                 this.mudi = this.y+Q.event.delay.y*5;
                                 if(this.mudi>this.maxY)this.mudi = this.maxY;
                                 if(this.mudi<this.minY)this.mudi = this.minY;
                            }
                        }
                    }
                },
                {
                    name:'v2',
                    xtype:'Container',
                    visible:false,enabled:false,
                    items:[
                        {
                            xtype:'Image',
                            auto:{w:'100w'},
                            image:'ui',
                            listener:{
                                down:function(){
                                }
                            }
                        }
                    ],
                    cover:{
                        vy:0,
                        mudi:0
                    },
                    listener:{
                        down:function(){
                            this.mudi = false;
                            console.log(this.height)
                        },
                        move:function() {
                            Q.moveEventY(this);
                        },
                        up:function(){
                            if(this.maxY < this.y){
                                this.mudi = this.maxY;
                            }else if(this.minY>this.y){
                                this.mudi = this.minY;
                            }else{
                                 this.mudi = this.y+Q.event.delay.y*5;
                                 if(this.mudi>this.maxY)this.mudi = this.maxY;
                                 if(this.mudi<this.minY)this.mudi = this.minY;
                            }
                        }
                    }
                },
                {   
                    name:'v3',
                    xtype:'Container',
                    width:'100w',
                    height:'100h',
                    fillColor:0xf1f0f6,
                    visible:false,enabled:false,
                    items:[
                        {
                            xtype:'Image',
                            auto:{w:'100w'},
                            image:'meiti',
                            listener:{
                                down:function(){
                                    console.log(this.id,this.name);
                                }
                            }
                        }
                    ],
                    cover:{
                        vy:0,
                        mudi:0,
                        
                    },
                    listener:{
                        down:function(){
                            console.log(this.height)
                            console.log(this.id,this.name);
                        },
                        move:function() {
                            Q.moveEventY(this);
                        },
                        up:function(){
                            console.log(this.maxY)
                            console.log(this.minY)
                            if(this.maxY < this.y){
                                this.mudi = this.maxY;
                            }else if(this.minY>this.y){
                                this.mudi = this.minY;
                            }else{
                                 this.mudi = this.y+Q.event.delay.y*5;
                                 if(this.mudi>this.maxY)this.mudi = this.maxY;
                                 if(this.mudi<this.minY)this.mudi = this.minY;
                            }
                        }
                    }
                },
                {
                    name:'v4',
                    xtype:'Container',
                    auto:{w:'100w'},
                    x:'0w',
                    y:'0h',
                    anchorX:0,
                    anchorY:0,

                    visible:false,enabled:true,
                    items:[
                        {
                            // 上方的点击选项
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon',
                            y:'40w',
                            x:'50w',
                            autoPosition:{
                                horizontal:{center:0}
                            },
                            depth:20,
                            anchorX:.5,
                            anchorY:.5,
                            name:'am',
                            cover:{
                                chu:true
                            },
                            listener:{
                                down:function(){
                                    Q.azou(this.chu=!this.chu);
                                },
                                
                            }
                        },
                        {
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon1',
                            name:'a1',
                            anchorX:.5,
                            anchorY:.5
                        },{
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon2',
                            name:'a2',
                            anchorX:.5,
                            anchorY:.5
                        },{
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon3',
                            name:'a3',
                            anchorX:.5,
                            anchorY:.5
                        },{
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon4',
                            name:'a4',
                            anchorX:.5,
                            anchorY:.5
                        },{
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon5',
                            name:'a5',
                            anchorX:.5,
                            anchorY:.5
                        },
                        {
                            // 下方的点击选项
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon',
                            y:'60w',
                            x:'50w',
                            autoPosition:{
                                horizontal:{center:0}
                            },
                            anchorX:.5,
                            anchorY:.5,
                            name:'bm',
                            depth:20,
                            cover:{
                                chu:true
                            },
                            listener:{
                                down:function(){
                                    Q.bzou(this.chu=!this.chu);
                                }
                            }
                        },
                        {
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon1',
                            name:'b1',
                            anchorX:.5,
                            anchorY:.5

                        },{
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon2',
                            name:'b2',
                            anchorX:.5,
                            anchorY:.5

                        },{
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon3',
                            name:'b3',
                            anchorX:.5,
                            anchorY:.5
                        },{
                            xtype:'Image',
                            auto:{w:'12w'},
                            image:'icon4',
                            name:'b4',
                            anchorX:.5,
                            anchorY:.5
                        },{
                            xtype:'Image',
                            auto:{w:'10w'},
                            image:'icon5',
                            name:'b5',
                            anchorX:.5,
                            anchorY:.5
                        }
                    ],
                    cover:{
                        vy:0,
                        mudi:0
                    },
                    listener:{
                        down:function(){
                            this.mudi = false;
                        },
                        move:function(){
                            // console.log(Q.event.delay.y)
                            this.y+=Q.event.delay.y;
                        },
                        up:function(){
                            if(this.maxY < this.y){
                                this.mudi = this.maxY;
                            }else if(this.minY>this.y){
                                this.mudi = this.minY;
                            }else{
                                 this.mudi = this.y+Q.event.delay.y*5;
                                 if(this.mudi>this.maxY)this.mudi = this.maxY;
                                 if(this.mudi<this.minY)this.mudi = this.minY;
                            }
                        }
                    }
                },
                {
                    name:'v5',
                    xtype:'Image',
                    visible:false,
                    enabled:false,
                    auto:{w:'100w'},
                    image:'layout',
                    cover:{
                        vy:0,
                        mudi:0
                    },
                    listener:{
                        down:function(){
                            this.mudi = false;
                        },
                        move:function(){
                            Q.moveEventY(this);
                        },
                        up:function(){
                            console.log(this.maxY)
                            if(this.maxY < this.y){
                                this.mudi = this.maxY;
                            }else if(this.minY>this.y){
                                this.mudi = this.minY;
                            }else{
                                 this.mudi = this.y+Q.event.delay.y*5;
                                 if(this.mudi>this.maxY)this.mudi = this.maxY;
                                 if(this.mudi<this.minY)this.mudi = this.minY;
                            }
                        }
                    }
                }



            ]
        },

        {
            name:'ibg',
            fillColor:0xeeeeee,
            lineWidth:Q.app.width*.002,
            lineColor:0xbbbbbb,
            xtype:'Rect',
            width:'100w',
            height:'13w',
            y:Q.app.height-Q.app.width*.13,
            listener:{
                down:function(){
                    
                }
            },
            items:[
                {

                    name:'i1',
                    xtype:'Image',
                    auto:{w:'13w'},
                    x:'6w',
                    image:'icon_home2',
                    cover:{
                        cona:'icon_home1',
                        conb:'icon_home2'
                    },
                    listener:{
                        down:function(){
       
                            var cont = Q('cont'),v = cont.getByName('v1');
                            if(cont.aty !== v){
                                Q.qie(cont.aty,v,this);
                            }

                                
                        }
                    }
                },
                {

                    name:'i2',
                    xtype:'Image',
                    auto:{w:'13w'},
                    x:'18w',
                    cover:{
                        cona:'icon_uikit1',
                        conb:'icon_uikit2'
                    },
                    image:'icon_uikit1',
                    listener:{
                        down:function(){
                            var cont = Q('cont'),v = cont.getByName('v2');
                            if(cont.aty !== v)Q.qie(cont.aty,v,this);
                        }
                    }
                },
                {

                    name:'i3',
                    xtype:'Image',
                    auto:{w:'13w'},
                    image:'icon_media1',
                    x:'36w',
                    cover:{
                        cona:'icon_media1',
                        conb:'icon_media2'
                    },
                    listener:{
                        down:function(){
                            var cont = Q('cont'),v = cont.getByName('v3');
                            if(cont.aty !== v)Q.qie(cont.aty,v,this);
                        }
                    }
                },
                {

                    name:'i4',
                    xtype:'Image',
                    auto:{w:'13w'},
                    image:'icon_animation1',
                    x:'54w',
                    cover:{
                        cona:'icon_animation1',
                        conb:'icon_animation2'
                    },
                    listener:{
                        down:function(){
                            var cont = Q('cont'),v = cont.getByName('v4');
                            if(cont.aty !== v)Q.qie(cont.aty,v,this);
                        }
                    }
                },
                {

                    name:'i5',
                    xtype:'Image',
                    auto:{w:'13w'},
                    cover:{
                        cona:'icon_layout1',
                        conb:'icon_layout2'
                    },
                    x:'72w',
                    image:'icon_layout1',
                    listener:{
                        down:function(){
                            var cont = Q('cont'),v = cont.getByName('v5');
                            if(cont.aty !== v)Q.qie(cont.aty,v,this);
                        }
                    }
                }

            ]
        }
    ],
    listener:{

        toggle:function(){

          
        },
            
        init:function(the){

            var v4 = Q('cont').getByName('v4');

            var a = v4.getByName('am'),obj;
            var b = v4.getByName('bm'),obj1;

            var jd = (180 - 20)/5 ;
            var r = Q.app.width*.38;
            var yp = Q.app.width*.12;
            var juli = Q.app.width*.15;
            var amub = [],bmub=[];
            for(var i=1;i<6;i++){
                obj = v4.getByName('a'+i);
                obj.x =a.x;//+ r*Math.cos((jd*(i-1)-155)*Q.CONST.PI18);
                obj.y =a.y;//+ r*Math.sin((jd*(i-1)-155)*Q.CONST.PI18)+yp;
                obj.visible = false;
                amub.push({
                    x:a.x + r*Math.cos((jd*(i-1)-155)*Q.CONST.PI18),
                    y:a.y + r*Math.sin((jd*(i-1)-155)*Q.CONST.PI18)+yp,
                    obj:obj
                });

                obj1 = v4.getByName('b'+i);

                obj1.x = b.x ;
                obj1.y = b.y+ (i-1)*juli;

                obj1.alpha = 0;
                bmub.push({
                    y:b.y+i*juli,
                    y1:obj1.y,
                    obj:obj1
                });

            }

            // 每一屏的垂直滑动
            Q.moveEventY = function (_this) {
                var thisY = -_this.y;
                var maxMoveY = _this.height - Q.app.height + Q.app.width * .26;
                 if (thisY > maxMoveY || _this.y > 0) {
                    
                    _this.y+=Q.event.delay.y * .1;
                 } else {
                    _this.y+=Q.event.delay.y;
                 }
             },
            
            // v4点击上方按钮出现的动画
            Q.azou= function(h){

                if(h){

                    amub.forEach(function(m,i){

                        
                        m.obj.animate({

                            to:{
                                x:a.x,
                                y:a.y,
                                rotation:0
                            },
                            time:1000,
                            ease:Q.Tween.ease.Quartic.Out,
                            onComplete:function(){{
                                m.obj.visible = false;
                            }}

                        });


                    });
                }else{
                    amub.forEach(function(m,i){
                        m.obj.visible = true;
                        m.obj.animate({

                            to:{
                                x:m.x,
                                y:m.y,
                                rotation:Q.CONST.PI2
                            },
                            time:1000,
                            ease:Q.Tween.ease.Quartic.Out

                        });


                    });
                }


            }
            // v4点击下方按钮出现的动画
            Q.bzou= function(h){
                var mm,time=100;

                if(h){

                    for(var ll=bmub.length-1;ll>=0;ll--){


                        mm = bmub[ll];

                        mm.obj.animate({

                            to:{
                                y:mm.y1,
                                alpha:0
                            },
                            time:600,
                            delay:(5-ll)*time,
                            ease:Q.Tween.ease.Quartic.Out,
                            onComplete:function(){{
                                mm.obj.visible = false;
                            }}

                        });


                    }

                }else{

                    bmub.forEach(function(m,i){

                        // console.log(mm.y,mm.y1);


                        m.obj.visible = true;
                        m.obj.animate({

                            to:{
                                y:m.y,
                                alpha:1
                            },
                            time:1000,
                            delay:i*time,
                            ease:Q.Tween.ease.Quartic.Out
                        });


                    });
                }


            }

            // 获取底下tab栏的第一个选项·
            var i1 = Q('ibg');
            Q.aty1 = i1.getByName('i1');
            // 调整获取底下tab栏中的个选项之间的水平距离
            Q.layout.horizontal(i1,i1,{
                left: Q.app.width*.05,
                right:Q.app.width*.05,
                top:Q.app.width*.01
            });

    // 设置每一屏的垂直距离可移动的距离
            // 获取cont的第一屏的内容
            var con = Q('cont');
            var home = con.getByName('v1');
             // 获取v1场景的位置和宽高
            var bound = home.getBounds();
            home.maxY = 0;//Q('head').height;
            home.minY =i1.y - bound.height-Q('head').height;
            
            home.width = '100w';
            home.height = bound.height;
            console.log(home.minY)

            var home2 = con.getByName('v2');
            var bound2 = home2.getBounds();
            home2.maxY = 0;//Q('head').height;
            home2.minY =i1.y - bound2.height-Q('head').height;

            var home3 = con.getByName('v3');
            var bound3 = home3.getBounds();
            home3.maxY = 0;//Q('head').height;
            home3.minY =i1.y - bound3.height-Q('head').height;

            // 设置第一屏中各个banner之间的垂直距离
            Q.layout.vertical(home,home,{
                space:0,
            });

            // 获取右上角的下拉菜单
            var meun1 = Q('meun1');
            Q.layout.vertical(meun1,meun1,{
                space:-1,
            });
            // 获取右上角下拉菜单的每个选项
            var edh = meun1.children;
            var eanima = [];

            meun1.y = Q('head').height-edh[0].height;
            // 设置右上角下拉菜单的每个选项的位置信息
            edh.forEach(function(m,i){
                eanima.push({
                    obj:m,
                    y:m.y,
                    y1:m.y+m.height
                });

                // m.y = edh[0].y-m.height;
                m.alpha = 0;
                m.visible = false;
                m.enabled = false;
            });

            Q.meun = function(h,cak){
                var m ,time = 40;
                if(h){
                    for(var l = eanima.length-1;l>-1;l--){
                        m = eanima[l];
                        m.obj.animate({
                            to:{
                                y:m.y,
                                alpha:0
                            },
                            time:120,
                            delay:(5-l)*time*1.6,
                            onComplete:l==0?function(){
                                m.obj.visible = false;
                                m.obj.enabled = false;
                                cak&&cak();
                            }:function(){
                                m.obj.enabled = false;
                                m.obj.visible = false;
                            }
                        });
                    }
                }else{
                    eanima.forEach(function(m,i){
                        m.obj.visible = true;
                        m.obj.enabled = true;
                        m.obj.animate({
                            to:{
                                y:m.y1,
                                alpha:1
                            },
                            time:50,
                            delay:i*time,
                            ease:Q.Tween.ease.Quartic.Out
                        });
                    });
                }
            }


           


            Q('cont').set({
                aty:home,
                y:Q('head').height
            });

            var layout = Q('cont').getByName('v5');


            

            Q.hua = home;

            var qing = false;

            Q.qie = function(a,b,c){

                if(qing)return;
                qing = true;

                Q.hua = b;
                /*if(b===home){
                    Q.hua = home;
                }else if(b===layout){
                    Q.hua = layout;
                }else if(b===home3){
                    Q.hua = home3;
                }*/

                b.x = Q.app.width;
                b.animate({
                    to:{
                        x:0
                    },
                    time:380,
                    ease:Q.Tween.ease.Quartic.Out
                });

                b.set({
                    enabled:true,
                    visible:true
                });

                a.set({
                    enabled:true,
                    visible:true
                });

                setTimeout(function(){
                    c.image = c.conb;
                        Q.aty1.image = Q.aty1.cona;
                    },100);

                a.animate({
                    to:{
                        x:-Q.app.width
                    },
                    time:500,
                    ease:Q.Tween.ease.Quartic.Out,
                    onComplete:function(){
                        
                        Q.aty1 = c;
                        a.x=0;
                        a.set({
                            enabled:false,
                            visible:false
                        });
                        qing = false;

                        Q('cont').aty = b;
                    }
                });
            }

            layout.maxY = 0;//Q('head').height;
            layout.minY =i1.y - layout.height-Q('head').height;


            var vy =0;
            this.run = function(){
                if(Q.hua.mudi===false)return;
                vy =(Q.hua.mudi -Q.hua.y)*.07*Q.event.rate;
                Q.hua.y += vy;
                if(Math.abs(vy)<1)vy=0;
               
            }

        }
    }
});


