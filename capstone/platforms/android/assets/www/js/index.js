/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        // Lock Orientation to portrait
        window.screen.lockOrientation('portrait');



        function JSONtoString(object) {
            var results = [];
            for (var property in object) {
                var value = object[property];
                if (value)
                    results.push(property.toString() + ': ' + value);
            }

            return '{' + results.join(', ') + '}';
        }

        // check permission
        function hasReadPermission() {
          window.plugins.sim.hasReadPermission(successCallback, errorCallback);
        }

        // request permission
        function requestReadPermission() {
          // no callbacks required as this opens a popup which returns async
          window.plugins.sim.requestReadPermission();
        }


        function successCallback(result) {
          console.log("success Callback : " + result);
        }

        function errorCallback(error) {
          console.log("error Callback : " + result);
        }

        /*
                FCMPlugin.getToken(
                    function(token){
                        console.log("Device Token : " + token);
                    },
                    function(err){
                        console.log('error retrieving token: ' + err);
                        return err;
                    }
                );
         */


        requestReadPermission();
        hasReadPermission(successCallback, errorCallback);
        window.plugins.sim.getSimInfo(
            function success(result){
                var phoneNumber = "";

                if(result['phoneNumber']==null) phoneNumber = '+821030985066';
                else phoneNumber = result['phoneNumber'];


                FCMPlugin.getToken(
                    function(token){ //success callback
						var sendToken;

						console.log(token + " HERE CHECK THE CONSOLE");
						if(token[0] == "{"){
							console.log('work1');
							var totoken = JSON.parse(token);
							if (totoken['token']) sendToken = totoken['token'];
						}else{
							console.log('work2');
							sendToken = token;
						}


                        phoneNumber = phoneNumber.replace("+82","0");


                        $.ajax({
                            //url:"http://seongjo03.gonetis.com/capstone/login.php",
                            url:"http://192.168.1.2/capstone/login.php",
                            data: {PHONE : phoneNumber,
                                    TOKEN : sendToken},
                            dataType: "text",
                            success: function(success){
                                console.log(success);
                                if(success == "success"){
									var source1 = "";
									var source2 = "";

									$.ajax({
										//url:"http://seongjo03.gonetis.com/capstone/buildings.php",
                                        url:"http://192.168.1.2/capstone/buildings.php",
										success: function(json){
											var data = JSON.parse(json);

                                                                        for(var i in data.B_ALIAS){

                                                                            if (i == 0) {
                                                                                source1 = source1
                                                                                    + "<li data-target='#myCarousel' data-slide-to='" + i + "' class='active'></li>\n";

                                                                                source2 = source2
                                                                                    +"<div class='item active' onclick='javascript:buildingInfo(\"" + data.B_ID[i] + "\", \"" + data.B_ALIAS[i] + "\")' style='height: 100%;'>"
                                                                                    +"<table style='height:25%; margin-left:3%;'>"
                                                                                    +"<tr style='vertical-align:top;'>"
                                                                                    +"<td>"
                                                                                    +"<p style='font-size:17pt'>" + data.B_ALIAS[i] + "</p>"
                                                                                    +"<p style='font-size:10pt; text-align:left;'>" + data.B_ADDRESS[i] + "</p>"
                                                                                    +"</td>"
                                                                                    +"</tr>"
                                                                                    +"</table>"
                                                                                    //+"<center><img src='http://seongjo03.gonetis.com/capstone/buildingIMG/" + data.B_ALIAS[i] + ".png' alt='" + data.B_ALIAS[i] + "' style='position:relative; height:45%;'></center>"
                                                                                    +"<center><img src='http://192.168.1.2/capstone/buildingIMG/" + data.B_ALIAS[i] + ".png' alt='" + data.B_ALIAS[i] + "' style='position:relative; height:45%;'></center>"
                                                                                    +"</div>";

                                                                            }else{
                                                                                source1 = source1
                                                                                    +"<li data-target='#myCarousel' data-slide-to='" + i + "'></li>\n";

                                                                                source2 = source2
                                                                                    +"<div class='item' onclick='javascript:buildingInfo(\"" + data.B_ID[i] + "\", \"" + data.B_ALIAS[i] + "\")' style='height: 100%;'>"
                                                                                    +"<table style='height:25%; margin-left:3%;'>"
                                                                                    +"<tr style='vertical-align:top;'>"
                                                                                    +"<td>"
                                                                                    +"<p style='font-size:17pt'>" + data.B_ALIAS[i] + "</p>"
                                                                                    +"<p style='font-size:10pt; text-align:left;'>" + data.B_ADDRESS[i] + "</p>"
                                                                                    +"</td>"
                                                                                    +"</tr>"
                                                                                    +"</table>"
                                                                                    //+"<center><img src='http://seongjo03.gonetis.com/capstone/buildingIMG/" + data.B_ALIAS[i] + ".png' alt='" + data.B_ALIAS[i] + "' style='position:relative; height:45%;'></center>"
                                                                                    +"<center><img src='http://192.168.1.2/capstone/buildingIMG/" + data.B_ALIAS[i] + ".png' alt='" + data.B_ALIAS[i] + "' style='position:relative; height:45%;'></center>"
                                                                                    +"</div>";
                                                                            }
                                                                        }

                                                                        element = document.getElementById('carousel-indicators');
                                                                        var searchThis = element.innerHTML;

										},
										error: function failCallBk(XMKHttpRequest, textStatus, errorThrown){
											alert(XMKHttpRequest.status + " " + XMKHttpRequest.statusText + " " + errorThrown + "\n" +"An error occured while processing your request. Please try again.");
										}
									}).done(function() {
										$('#carousel-indicators').html(source1);
										$('#carousel-inner').html(source2);


										// tester
										$.mobile.changePage( "#bcpage",
											{ transition: "slide",
											changeHash: false,
											reverse : false }
										);

									});
								}

							},
								error: function failCallBk(XMKHttpRequest, textStatus, errorThrown){
									console.log(XMKHttpRequest.status + " " + XMKHttpRequest.statusText + " " + errorThrown + "\n" +"An error occured while processing your request. Please try again.");
								}
						});
					},
                    function(err){ // error callback
                        console.log('error retrieving token: ' + err);
                    }
                );


            }
            ,function error(error){
                console.log("error : " + error);
                return error;
            }
        );

        app.receivedEvent('deviceready');
        var fbLoginSuccess = function (userData) {
            console.log("UserInfo: ", JSONtoString(userData));
            //alert(userData);
        }

        facebookConnectPlugin.login(["public_profile"], fbLoginSuccess,
            function loginError (error) {
                console.error(error)
                alert(error);
            }
        );
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();