import React, { useState, } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

import TaskItem from '../components/TaskItem'

const TaskScreen = props => {


    const loadOffers = async () => {
        //set isloading/isrefreshing here
        try {

        }

        catch{

        }
    }

    return (
        // <Text>hey</Text>
        <FlatList
            data={x}
            keyExtractor={item => Math.random().toString()}
            renderItem={({ item }) => (<TaskItem
                offerName={item.Offer.name}
                offerDescription={item.Offer.description}
                offerAmount={item.Offer.amount}
                image={item.Offer.icon}
            ></TaskItem>)}
        ></FlatList >
    )
}

export default TaskScreen

const taskData = {
    "6500": {
        "Offer": {
            "campaign_id": 6500,
            "store_id": null,
            "tracking_type": "CPA",
            "currency_name_singular": "Coin",
            "currency_name_plural": "Coins",
            "network_epc": "2.5979",
            "icon": "https://cdn.adgem.com/campaigns/6500/campaign-offerwall-creatives/icons/202004092211.jpg",
            "name": "Mobile Xpression",
            "tracking_url": "https://api.adgem.com/v1/click?all=1&appid=2015&cid=6500&playerid={playerid}",
            "instructions": "Sign up for Mobile Xpression with VALID personal information,Complete registration,Install software,Redeem your points! *New Users Only!",
            "disclaimer": null,
            "description": "Join MobileXpression today and earn a gift card after you’ve been an active member for only 1 week!",
            "short_description": "Complete Task to Earn!",
            "offer_sticker_text_1": null,
            "offer_sticker_text_2": null,
            "offer_sticker_text_3": null,
            "offer_sticker_color_1": "FFFFFF",
            "offer_sticker_color_2": "FFFFFF",
            "offer_sticker_color_3": "FFFFFF",
            "sort_order_setting": null,
            "category_1": "user_info_request",
            "category_2": null,
            "amount": 540,
            "payout_usd": "5.40000",
            "start_datetime": "2020-04-09 18:46:00",
            "end_datetime": "2030-11-14 04:59:00"
        },
        "Country": {
            "include": {
                "US": {
                    "id": 243,
                    "code": "US",
                    "name": "United States"
                }
            },
            "exclude": []
        },
        "State": {
            "include": [],
            "exclude": []
        },
        "City": {
            "include": [],
            "exclude": []
        },
        "Connection_Type": {
            "cellular": true,
            "wifi": true
        },
        "Device": {
            "include": [
                "iphone"
            ],
            "exclude": []
        },
        "OS": {
            "android": false,
            "ios": true,
            "web": false,
            "min_ios": null,
            "max_ios": null,
            "min_android": null,
            "max_android": null
        }
    },
    "6492": {
        "Offer": {
            "campaign_id": 6492,
            "store_id": null,
            "tracking_type": "CPA",
            "currency_name_singular": "Coin",
            "currency_name_plural": "Coins",
            "network_epc": "new",
            "icon": "https://cdn.adgem.com/campaigns/6492/campaign-offerwall-creatives/icons/202004092252.jpg",
            "name": "Mobile Xpression",
            "tracking_url": "https://api.adgem.com/v1/click?all=1&appid=2015&cid=6492&playerid={playerid}",
            "instructions": "Sign up for Mobile Xpression with VALID personal information,Complete registration,Install software,Redeem your points! *New Users Only!",
            "disclaimer": null,
            "description": "Join MobileXpression today and earn a gift card after you’ve been an active member for only 1 week!",
            "short_description": "Complete Task to Earn!",
            "offer_sticker_text_1": null,
            "offer_sticker_text_2": null,
            "offer_sticker_text_3": null,
            "offer_sticker_color_1": "FFFFFF",
            "offer_sticker_color_2": "FFFFFF",
            "offer_sticker_color_3": "FFFFFF",
            "sort_order_setting": null,
            "category_1": "user_info_request",
            "category_2": null,
            "amount": 600,
            "payout_usd": "6.00000",
            "start_datetime": "2020-04-09 18:22:00",
            "end_datetime": "2030-11-15 04:59:00"
        },
        "Country": {
            "include": {
                "GB": {
                    "id": 159,
                    "code": "GB",
                    "name": "United Kingdom"
                }
            },
            "exclude": []
        },
        "State": {
            "include": [],
            "exclude": []
        },
        "City": {
            "include": [],
            "exclude": []
        },
        "Connection_Type": {
            "cellular": true,
            "wifi": true
        },
        "Device": {
            "include": [
                "iphone"
            ],
            "exclude": []
        },
        "OS": {
            "android": false,
            "ios": true,
            "web": false,
            "min_ios": null,
            "max_ios": null,
            "min_android": null,
            "max_android": null
        }
    },
    // "3755": {
    //     "Offer": {
    //         "campaign_id": 3755,
    //         "store_id": "com.funplus.kingofavalon",
    //         "tracking_type": "CPE",
    //         "currency_name_singular": "Coin",
    //         "currency_name_plural": "Coins",
    //         "network_epc": "2.1493",
    //         "icon": "https://cdn.adgem.com/campaigns/3755/campaign-offerwall-creatives/icons/201906251958.png",
    //         "name": "King of Avalon: Dragon War",
    //         "tracking_url": "https://api.adgem.com/v1/click?all=1&appid=2015&cid=3755&playerid={playerid}",
    //         "instructions": "아발론의 왕 : 드래곤 전쟁,거점 레벨 13을 완료하고 포인트를 사용하십시오! *새로운 사용자 만!",
    //         "disclaimer": null,
    //         "description": "Excalibur를 들어 올려 왕이되는 탐구에서 용을 들고 군대를 건설하십시오.",
    //         "short_description": "레벨 13을 완료하십시오!",
    //         "offer_sticker_text_1": null,
    //         "offer_sticker_text_2": null,
    //         "offer_sticker_text_3": null,
    //         "offer_sticker_color_1": "FFFFFF",
    //         "offer_sticker_color_2": "FFFFFF",
    //         "offer_sticker_color_3": "FFFFFF",
    //         "sort_order_setting": null,
    //         "category_1": "app",
    //         "category_2": "free",
    //         "amount": 1350,
    //         "payout_usd": "13.50000",
    //         "start_datetime": "2019-06-25 15:23:00",
    //         "end_datetime": "2022-02-07 04:59:00"
    //     },
    //     "Country": {
    //         "include": {
    //             "KR": {
    //                 "id": 107,
    //                 "code": "KR",
    //                 "name": "Republic of Korea"
    //             }
    //         },
    //         "exclude": []
    //     },
    //     "State": {
    //         "include": [],
    //         "exclude": []
    //     },
    //     "City": {
    //         "include": [],
    //         "exclude": []
    //     },
    //     "Connection_Type": {
    //         "cellular": true,
    //         "wifi": true
    //     },
    //     "Device": {
    //         "include": [],
    //         "exclude": []
    //     },
    //     "OS": {
    //         "android": true,
    //         "ios": false,
    //         "web": false,
    //         "min_ios": null,
    //         "max_ios": null,
    //         "min_android": null,
    //         "max_android": null
    //     }
    // },
    // "6484": {
    //     "Offer": {
    //         "campaign_id": 6484,
    //         "store_id": null,
    //         "tracking_type": "CPA",
    //         "currency_name_singular": "Coin",
    //         "currency_name_plural": "Coins",
    //         "network_epc": "new",
    //         "icon": "https://cdn.adgem.com/campaigns/6484/campaign-offerwall-creatives/icons/202004092154.jpg",
    //         "name": "Mobile Xpression",
    //         "tracking_url": "https://api.adgem.com/v1/click?all=1&appid=2015&cid=6484&playerid={playerid}",
    //         "instructions": "Sign up for Mobile Xpression with VALID personal information,Complete registration,Install software,Redeem your points! *New Users Only!",
    //         "disclaimer": null,
    //         "description": "Join MobileXpression today and earn a gift card after you’ve been an active member for only 1 week!",
    //         "short_description": "Complete Task to Earn!",
    //         "offer_sticker_text_1": null,
    //         "offer_sticker_text_2": null,
    //         "offer_sticker_text_3": null,
    //         "offer_sticker_color_1": "FFFFFF",
    //         "offer_sticker_color_2": "FFFFFF",
    //         "offer_sticker_color_3": "FFFFFF",
    //         "sort_order_setting": null,
    //         "category_1": "user_info_request",
    //         "category_2": null,
    //         "amount": 540,
    //         "payout_usd": "5.40000",
    //         "start_datetime": "2020-04-09 17:13:00",
    //         "end_datetime": "2030-11-13 04:59:00"
    //     },
    //     "Country": {
    //         "include": {
    //             "CA": {
    //                 "id": 248,
    //                 "code": "CA",
    //                 "name": "Canada"
    //             }
    //         },
    //         "exclude": []
    //     },
    //     "State": {
    //         "include": [],
    //         "exclude": []
    //     },
    //     "City": {
    //         "include": [],
    //         "exclude": []
    //     },
    //     "Connection_Type": {
    //         "cellular": true,
    //         "wifi": true
    //     },
    //     "Device": {
    //         "include": [
    //             "iphone"
    //         ],
    //         "exclude": []
    //     },
    //     "OS": {
    //         "android": false,
    //         "ios": true,
    //         "web": false,
    //         "min_ios": null,
    //         "max_ios": null,
    //         "min_android": null,
    //         "max_android": null
    //     }
    // },
}

let x = Object.values(taskData)
let y = [1, 2, 3]
// console.log(new Map(Object.entries(taskData)))
// console.log(x.get("6500"))