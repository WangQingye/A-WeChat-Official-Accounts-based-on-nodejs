/**
 * Created by Administrator on 2016/12/21.
 */
'use strict'

var Koa = require('koa');
var wechat = require('./wechat/g');
var wechat = require('./libs/util');
var path = require('path');
var wechat_file = path.join(__dirname,'./config/wechat.txt');

var config = {

    wechat : {

        appID:'wxbd94506ad527ea2b',
        appSecret:'0e03ad93c859b837ac8059e07ee0130c',
        token:'wqy',
        getAccessToken:function(){
            return util.readFileAsync(wechat_file)
        },
        saveAccessToken:function(data){

            data = JSON.stringify(data);

            return util.writeFileAsync(wechat_file,data);
        }

    }


};

var app = new Koa();

app.use(wechat(config.wechat));

app.listen(1234);

console.log('Listening:1234');