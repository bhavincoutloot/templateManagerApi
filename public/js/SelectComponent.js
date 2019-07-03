var selectableComponents = {

		"Product Condition" : [ 
            {
                "componentId" : "C1",
                "key" : "condition",
                "componentDetails" : {
                    "header" : "Select Product Condition",
                    "subHeader" : "",
                    "dataUrl" : "",
                    "data" : [
                        {
                            "displayTitle" : "New with tag",
                            "displayIcon" : "",
                            "displaySubTitle" : "Products that have not been used & are with tags or labels attached|Usually sold at 40%-50% off the MRP",
                            "displayId" : "Brand New - With tag"
                        },
                        {
                            "displayTitle" : "New without tag",
                            "displayIcon" : "",
                            "displaySubTitle" : "Products that have not been used & are without tags or labels attached|Usually sold at 50%-60% off the MRP",
                            "displayId" : "New without tag"
                        },
                       {
                            "displayTitle" : "Hardly Used",
                            "displayIcon" : "",
                            "displaySubTitle" : "Products that have been barely used once or twice.|Usually sold at 60%-70% off the MRP",
                            "displayId" : "Hardly Used"
                        },
                       {
                            "displayTitle" : "Gently Used",
                            "displayIcon" : "",
                            "displaySubTitle" : "Products that have been used 5 to 10 times.|Usually sold at 70%-80% off the MRP",
                            "displayId" : "Hardly Used"
                        }
                    ],
                    "searchUrl" : ""
                }
            }
        ],

        "Color" : [
            {
                "componentId" : "C11", 
                "key" : "color", 
                "componentDetails" : {
                    "header" : "Select Color", 
                    "subHeader" : "", 
                    "dataUrl" : "http://206.189.133.158:4000/sell/getDataLists/fashion-color/", 
                    "data" : [

                    ], 
                    "searchUrl" : ""
                }, 
                "index" : 0, 
                "page_index" : 4
            }
        ],

        "Original / First/Second Copy" : [
            {
                "componentId" : "C6", 
                "compulsory" : 1, 
                "key" : "original", 
                "componentDetails" : {
                    "header" : "Is the product you're selling an ORGINAL Branded product OR First/Second Copy?", 
                    "subHeader" : "Please read our Prohibited Items Policy", 
                    "data" : [
                        {
                            "displayTitle" : "It's an Original Branded Product", 
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "yes"
                        }, 
                        {
                            "displayTitle" : "It's a First/Second Copy", 
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "no"
                        }
                    ]
                }, 
                "index" : 0, 
                "page_index" : 5
            }
        ],

        "Device Condition" : [
            {
                "componentId" : "C1", 
                "key" : "condition", 
                "componentDetails" : {
                    "header" : "Select Device Condition", 
                    "subHeader" : "", 
                    "dataUrl" : "", 
                    "data" : [
                        {
                            "displayId" : "Unboxed", 
                            "displayTitle" : "Unboxed.", 
                            "displaySubTitle" : "Product has never been used & comes with a box. Product comes with Manufacturer warranty.|Usually sold at 40-50% off the MRP.", 
                            "displayIcon" : ""
                        }, 
                        {
                            "displayId" : "Refurbished", 
                            "displayTitle" : "Refurbished.", 
                            "displaySubTitle" : "Product has been rigourously checked, tested & recondtioned. It is in perfect working condition and under warranty.|Usually sold at 30% to 40% off the MRP.", 
                            "displayIcon" : ""
                        }, 
                        {
                            "displayId" : "Hardly Used", 
                            "displayTitle" : "Hardly Used.", 
                            "displaySubTitle" : "Product has been used for less than an years and has some signs of wear and tear. Product is not under warranty.|Usually sold at 60% to 70% off the MRP.", 
                            "displayIcon" : ""
                        }, 
                        {
                            "displayId" : "Gently Used", 
                            "displayTitle" : "Gently Used.", 
                            "displaySubTitle" : "Product has been used for over an year and has some signs of wear and tear. Product is not under warranty.|Usually sold at 70% to 80% off the MRP.", 
                            "displayIcon" : ""
                        }
                    ], 
                    "searchUrl" : ""
                }, 
                "index" : 0, 
                "page_index" : 3
            }
        ],

        "Available with Device" : [
            {
                "componentId" : "C2", 
                "key" : "available-with-device", 
                "componentDetails" : {
                    "header" : "Select If Available", 
                    "subHeader" : "", 
                    "dataUrl" : "", 
                    "data" : [
                        {
                            "displayId" : "Charging Adapter", 
                            "displayTitle" : "Charging Adapter", 
                            "displaySubTitle" : "You will send the adapter along with the device", 
                            "displayIcon" : "https://cdn1.coutloot.com/chatImages/1559988868597.png"
                        }, 
                        {
                            "displayId" : "Charging Cable", 
                            "displayTitle" : "Charging Cable", 
                            "displaySubTitle" : "You will send the cable along with the device", 
                            "displayIcon" : "https://cdn1.coutloot.com/chatImages/1559988941272.png"
                        }, 
                        {
                            "displayId" : "Earplugs", 
                            "displayTitle" : "Earplugs", 
                            "displaySubTitle" : "You will send the ear-plugs along with the device", 
                            "displayIcon" : "https://cdn1.coutloot.com/chatImages/1559988919658.png"
                        }, 
                        {
                            "displayId" : "Bill", 
                            "displayTitle" : "Bill", 
                            "displaySubTitle" : "You will send the bill along with the device", 
                            "displayIcon" : "https://cdn1.coutloot.com/chatImages/1559989755144.png"
                        }, 
                        {
                            "displayId" : "Box", 
                            "displayTitle" : "Box", 
                            "displaySubTitle" : "You will send the box along with the device", 
                            "displayIcon" : "https://cdn1.coutloot.com/chatImages/1559989720957.png"
                        }, 
                        {
                            "displayId" : "None.", 
                            "displayTitle" : "None Of Above", 
                            "displaySubTitle" : "Only Device Available", 
                            "displayIcon" : ""
                        }
                    ], 
                    "searchUrl" : ""
                }, 
                "index" : 0, 
                "page_index" : 4
            }
        ], 

        "Phone switch on/off, Screen scratched/cracked" : [
            {
                "componentId" : "C6", 
                "compulsory" : 1, 
                "key" : "working", 
                "componentDetails" : {
                    "header" : "Does your phone switch on ?", 
                    "subHeader" : "", 
                    "data" : [
                        {
                            "displayId" : "Yes", 
                            "displayTitle" : "Yes", 
                            "displaySubTitle" : "null", 
                            "displayIcon" : "null"
                        }, 
                        {
                            "displayId" : "No", 
                            "displayTitle" : "No", 
                            "displaySubTitle" : "null", 
                            "displayIcon" : "null"
                        }
                    ]
                }, 
                "index" : 0, 
                "page_index" : 5
            }, 
            {
                "componentId" : "C6", 
                "compulsory" : 1, 
                "key" : "screen-scartched", 
                "componentDetails" : {
                    "header" : "Is the screen scratched or cracked?", 
                    "subHeader" : "", 
                    "data" : [
                        {
                            "displayId" : "Yes", 
                            "displayTitle" : "Yes", 
                            "displaySubTitle" : "null", 
                            "displayIcon" : "null"
                        }, 
                        {
                            "displayId" : "Yes", 
                            "displayTitle" : "No", 
                            "displaySubTitle" : "null", 
                            "displayIcon" : "null"
                        }
                    ]
                }, 
                "index" : 1, 
                "page_index" : 5
            }, 
            {
                "componentId" : "C5", 
                "key" : "issues", 
                "componentDetails" : {
                    "header" : "Does your phone switch on ?", 
                    "subHeader" : "", 
                    "dataUrl" : "", 
                    "searchUrl" : "", 
                    "data" : [
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Front camera faulty or not working", 
                            "displayTitle" : "Front camera faulty or not working"
                        }, 
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Back camera faulty or not working", 
                            "displayTitle" : "Back camera faulty or not working"
                        }, 
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Volume Button Defect", 
                            "displayTitle" : "Volume Button Defect"
                        }, 
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Battery faulty or not working", 
                            "displayTitle" : "Battery faulty or not working"
                        }, 
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Speaker not working or faulty", 
                            "displayTitle" : "Speaker not working or faulty"
                        }, 
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Finger touch sensor faulty or not working", 
                            "displayTitle" : "Finger touch sensor faulty or not working"
                        }, 
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Power button faulty or not working", 
                            "displayTitle" : "Power button faulty or not working"
                        }, 
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Charging port faulty or not working", 
                            "displayTitle" : "Charging port faulty or not working"
                        }, 
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Wi-Fi not working or faulty", 
                            "displayTitle" : "Wi-Fi not working or faulty"
                        }, 
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Face Sensor faulty or not working", 
                            "displayTitle" : "Face Sensor faulty or not working"
                        }, 
                        {
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "Other", 
                            "displayTitle" : "Other"
                        }
                    ]
                }, 
                "index" : 2, 
                "page_index" : 5
            }
        ], 


         "Bill and Warranty" : [
            {
                "componentId" : "C9", 
                "key" : "bill-and-warranty", 
                "componentDetails" : {
                    "header" : "Select Bill & Details", 
                    "subHeader" : "", 
                    "dataUrl" : "", 
                    "data" : [

                    ], 
                    "searchUrl" : ""
                }, 
                "index" : 0, 
                "page_index" : 6
            }
        ],

        "Mobile Brand" : [
            {
                "componentId" : "C1", 
                "key" : "brand", 
                "componentDetails" : {
                    "header" : "Select Mobile Brand", 
                    "subHeader" : "", 
                    "dataUrl" : "http://206.189.133.158:4000/sell/getDataLists/mobile_brand/", 
                    "data" : [

                    ], 
                    "searchUrl" : "http://206.189.133.158:4000/sell/searchData/mobile_brand"
                }, 
                "index" : 0, 
                "page_index" : 0
            }
        ], 

         "Mobile Model/Device" : [
            {
                "componentId" : "C1", 
                "key" : "model", 
                "componentDetails" : {
                    "header" : "Select Model / Device", 
                    "subHeader" : "", 
                    "dataUrl" : "http://206.189.133.158:4000/sell/getDataLists/mobile_phone/", 
                    "data" : [

                    ], 
                    "searchUrl" : "http://206.189.133.158:4000/sell/searchData/mobile_phone"
                }, 
                "index" : 0, 
                "page_index" : 1
            }
        ], 


         "Original Branded Product, Description" : [
            {
                "componentId" : "C6", 
                "compulsory" : 1, 
                "key" : "original", 
                "componentDetails" : {
                    "header" : "Is the product you're selling an ORGINAL Branded product OR First/Second Copy?", 
                    "subHeader" : "Please read our Prohibited Items Policy", 
                    "data" : [
                        {
                            "displayTitle" : "It's an Original Branded Product", 
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "yes"
                        }, 
                        {
                            "displayTitle" : "It's a First/Second Copy", 
                            "displaySubTitle" : "", 
                            "displayIcon" : "", 
                            "displayId" : "no"
                        }
                    ]
                }, 
                "index" : 0, 
                "page_index" : 2
            }, 
            {
                "componentId" : "C10", 
                "compulsory" : 1, 
                "key" : "condition", 
                "componentDetails" : {
                    "header" : "Enter Description.", 
                    "subHeader" : "Important Information", 
                    "data" : [

                    ], 
                    "type" : "text", 
                    "limit" : 50
                }, 
                "index" : 1, 
                "page_index" : 2 
            }
        ],

        "Description" : [
            {
                "componentId" : "C10", 
                "compulsory" : 1, 
                "key" : "condition", 
                "componentDetails" : {
                    "header" : "Enter Description.", 
                    "subHeader" : "Important Information", 
                    "data" : [

                    ], 
                    "type" : "text", 
                    "limit" : 50
                }, 
                "index" : 1, 
                "page_index" : 2 
            }

		],


		 "Device Color" : [
            {
                "componentId" : "C1", 
                "key" : "mobile_color", 
                "componentDetails" : {
                    "header" : "Select Device Color", 
                    "subHeader" : "", 
                    "dataUrl" : "http://206.189.133.158:4000/sell/getDataLists/mobile_color/", 
                    "data" : [

                    ], 
                    "searchUrl" : ""
                }, 
                "index" : 0, 
                "page_index" : 2
            }
        ],


        "Smartwatch Brand" : [
            {
                "componentId" : "C1", 
                "key" : "brand", 
                "componentDetails" : {
                    "header" : "Select Smartwatch Brand", 
                    "subHeader" : "", 
                    "dataUrl" : "http://206.189.133.158:4000/sell/getDataLists/smartwatch_brand/", 
                    "data" : [

                    ], 
                    "searchUrl" : "http://206.189.133.158:4000/sell/searchData/smartwatch_brand"
                }, 
                "index" : 0, 
                "page_index" : 0
            }
        ], 


         "Smartwatch Model" : [
            {
                "componentId" : "C1", 
                "key" : "model", 
                "componentDetails" : {
                    "header" : "Select Model", 
                    "subHeader" : "", 
                    "dataUrl" : "http://206.189.133.158:4000/sell/getDataLists/smartwatch/", 
                    "data" : [

                    ], 
                    "searchUrl" : "http://206.189.133.158:4000/sell/searchData/smartwatch"
                }, 
                "index" : 0, 
                "page_index" : 1
            }
        ], 




};