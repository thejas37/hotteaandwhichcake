(function(){
    var script = {
 "mouseWheelEnabled": true,
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.54,
  "pitch": -2.31
 },
 "id": "panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 4.74,
  "pitch": 0
 },
 "id": "camera_F7B1C637_F8B9_7D76_41B2_90EE01A9B3FD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 170.73,
   "backwardYaw": 32.36,
   "distance": 1,
   "panorama": "this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 67.09,
   "backwardYaw": -103.74,
   "distance": 1,
   "panorama": "this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -19.39,
   "backwardYaw": 143.07,
   "distance": 1,
   "panorama": "this.panorama_B064A1EB_BA51_779B_41D4_951DE00139AE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 11.15,
   "backwardYaw": 122.21,
   "distance": 1,
   "panorama": "this.panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "INFOLADIES",
 "id": "panorama_B010B873_BA51_948B_41E1_3614142DA15C",
 "thumbnailUrl": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_9A12C59D_BAD2_9FBF_41D9_5C7F81EEC83B",
  "this.overlay_9A41C050_BAD1_7485_41D6_5C8DE1A4B26E",
  "this.overlay_9BA65290_BAD1_9585_41E2_8604C0E65BEE",
  "this.overlay_9B4AA460_BAD1_BC85_41C7_BD4B3F668BDD",
  "this.overlay_9B964236_BAD6_B48C_41DB_706AFE094FAF",
  "this.overlay_98F76956_BAD7_948C_41A0_03475E3A42D0"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -18.98,
   "backwardYaw": -165.98,
   "distance": 1,
   "panorama": "this.panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 126.69,
   "backwardYaw": 18.15,
   "distance": 1,
   "panorama": "this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -170.51,
   "backwardYaw": -22,
   "distance": 1,
   "panorama": "this.panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "COMICS2",
 "id": "panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E",
 "thumbnailUrl": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_A85946E9_BA56_9D87_41A2_16F338D1D502",
  "this.overlay_90BCBA9E_BAFE_95BC_41E2_70C72C8987D1",
  "this.overlay_9038B81E_BAFE_94BC_41E4_2FA19DF6399D",
  "this.overlay_90655901_BAF1_7487_41D0_AB120580EBE5",
  "this.overlay_91FFCA19_BAF1_B487_4183_A5E00F972A95"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -10.39,
  "pitch": 0.37
 },
 "id": "panorama_B010D9D6_BA53_778D_41D1_CC951B567394_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "DAY_ENTRANCE",
 "id": "panorama_B017933A_BA57_7485_41E0_E1DED9EB5755",
 "thumbnailUrl": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_B42FE66D_BA76_9C9F_41D5_7F9C4151522C"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 139.98,
   "backwardYaw": 35.79,
   "distance": 1,
   "panorama": "this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 143.07,
   "backwardYaw": -19.39,
   "distance": 1,
   "panorama": "this.panorama_B010B873_BA51_948B_41E1_3614142DA15C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 84.05,
   "backwardYaw": -67.02,
   "distance": 1,
   "panorama": "this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 23.3,
   "backwardYaw": -158.17,
   "distance": 1,
   "panorama": "this.panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "WHISPERNETWORKS",
 "id": "panorama_B064A1EB_BA51_779B_41D4_951DE00139AE",
 "thumbnailUrl": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_981155BE_BAD2_BFFD_41E2_46BEDA163E9A",
  "this.overlay_9854C01E_BAD2_94BD_41E6_61C60F140D65",
  "this.overlay_99A9B022_BAD2_F485_41A7_0FCF58BC8961",
  "this.overlay_995D75A2_BAD2_9F85_41CD_CADFCD07E21B",
  "this.overlay_9ED3F5BC_BAD2_BFFC_41E3_2E36228E4A26",
  "this.overlay_98AE58BB_BAD2_9584_41A4_9481B98C981A"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 7.33,
  "pitch": 0
 },
 "id": "camera_E8B3C4E4_F8B9_7D0A_41E5_DBFD72307475",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -161.85,
  "pitch": 0
 },
 "id": "camera_E97915D6_F8B9_7F36_41C0_F8C1E87F893A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.71,
  "pitch": -43.76
 },
 "id": "panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_B017933A_BA57_7485_41E0_E1DED9EB5755",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B0653106_BA56_948D_41E2_181F272DC24C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_B0653106_BA56_948D_41E2_181F272DC24C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_B01036B7_BA56_BD8B_41E1_D765D537912D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B010B873_BA51_948B_41E1_3614142DA15C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_B010B873_BA51_948B_41E1_3614142DA15C",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_B064A1EB_BA51_779B_41D4_951DE00139AE",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B010D9D6_BA53_778D_41D1_CC951B567394_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_B010D9D6_BA53_778D_41D1_CC951B567394",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B064C2E2_BA53_9585_4199_6381D586F934_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_B064C2E2_BA53_9585_4199_6381D586F934",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_B0105DFB_BA53_AF7B_41E5_26336013789F",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "class": "Video360PlayListItem",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 27, 0)",
   "media": "this.media_FF2305A6_BA52_9F8C_41E4_D077AB1228D1",
   "camera": "this.media_FF2305A6_BA52_9F8C_41E4_D077AB1228D1_camera",
   "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 27, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 27)"
  }
 ],
 "id": "mainPlayList"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 87.2,
   "backwardYaw": -167.42,
   "distance": 1,
   "panorama": "this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -108.76,
   "backwardYaw": 73,
   "distance": 1,
   "panorama": "this.panorama_B064C2E2_BA53_9585_4199_6381D586F934"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "POSTERWALL",
 "id": "panorama_B010D9D6_BA53_778D_41D1_CC951B567394",
 "thumbnailUrl": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8ABCF657_BAF2_BC8B_41A8_E6B0708F4239",
  "this.overlay_8A965BBA_BAF2_AB85_41E2_2A362AB1C7BD"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.19,
  "pitch": 0
 },
 "id": "camera_E94DA404_F8B9_7D0A_41E7_34452221ABC4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -98.12,
  "pitch": -14.83
 },
 "id": "panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -101.82,
   "backwardYaw": 153.37,
   "distance": 1,
   "panorama": "this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -4.84,
   "backwardYaw": 152.82,
   "distance": 1,
   "panorama": "this.panorama_B01036B7_BA56_BD8B_41E1_D765D537912D"
  }
 ],
 "hfovMin": "120%",
 "hfov": 360,
 "partial": false,
 "id": "panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3",
 "thumbnailUrl": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_t.jpg",
 "label": "DOOR",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B5EBE549_BA72_BC87_41DB_FBB751C15F39",
  "this.overlay_9CED2362_BAF2_9485_41E2_88CE0F04E8EB"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E87B2363_F8B9_7B0E_4193_0CDCEFB7DA13, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E87B2363_F8B9_7B0E_4193_0CDCEFB7DA13, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_AB513B07_BAEC_BB40_41D1_F92460345D3D",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E87B2363_F8B9_7B0E_4193_0CDCEFB7DA13"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -144.21,
  "pitch": 0
 },
 "id": "camera_E8A504EB_F8B9_7D1E_41E0_DF3181A5E5DB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 73,
   "backwardYaw": -108.76,
   "distance": 1,
   "panorama": "this.panorama_B010D9D6_BA53_778D_41D1_CC951B567394"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "WITCHCAKE",
 "id": "panorama_B064C2E2_BA53_9585_4199_6381D586F934",
 "thumbnailUrl": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8BC6D2A3_BAEE_958B_41E1_54F59F2090B8",
  "this.overlay_8B2C26A3_BAEE_9D84_41E1_6F94DCC6D896"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -144.58,
   "backwardYaw": 87.61,
   "distance": 1,
   "panorama": "this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -103.74,
   "backwardYaw": 67.09,
   "distance": 1,
   "panorama": "this.panorama_B010B873_BA51_948B_41E1_3614142DA15C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -47.12,
   "backwardYaw": 55.29,
   "distance": 1,
   "panorama": "this.panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -67.02,
   "backwardYaw": 84.05,
   "distance": 1,
   "panorama": "this.panorama_B064A1EB_BA51_779B_41D4_951DE00139AE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 31.81,
   "backwardYaw": 130.44,
   "distance": 1,
   "panorama": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 73.68,
   "backwardYaw": -165.11,
   "distance": 1,
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "LEFTSIDE",
 "id": "panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D",
 "thumbnailUrl": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_A45B2391_BADE_9B87_41CB_742929F75622",
  "this.overlay_A58B3DFB_BADE_EF7B_41E5_141FA847EAC8",
  "this.overlay_A51B10A0_BADE_9584_41BD_2209265C9CB7",
  "this.overlay_A7003C59_BADE_AC87_41DD_AC462E744789",
  "this.overlay_A4A82540_BAD1_7C85_41D3_ED195B87D0E2",
  "this.overlay_A4ECFABD_BAD2_95FF_41D4_259B87F7B724",
  "this.overlay_E4761265_EA1C_9D9C_41DA_76F1AB89D0D5"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.27,
  "pitch": 0
 },
 "id": "camera_F7A0546F_F8B9_7D16_41ED_C9895B5FBF6A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E862B374_F8B9_7B0A_41EA_57A5D704550F, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E862B374_F8B9_7B0A_41EA_57A5D704550F, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_AA2F6DA1_BAEC_BF40_41C6_744C749AD03E",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E862B374_F8B9_7B0A_41EA_57A5D704550F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.39,
  "pitch": 0
 },
 "id": "camera_E928E3E0_F8B9_7B0A_41C4_E013541B1AB5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.89,
  "pitch": 0
 },
 "id": "camera_E95DD3FE_F8B9_7AF6_41D1_56EA2E067A78",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -168.85,
  "pitch": 0
 },
 "id": "camera_E9D743CC_F8B9_7B1B_41E4_20A094349E74",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -64.64,
  "pitch": 0
 },
 "id": "camera_E9932591_F8B9_7F0A_41D7_07699FD6CD69",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -59.63,
   "backwardYaw": 57.35,
   "distance": 1,
   "panorama": "this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -39.71,
   "backwardYaw": 62.56,
   "distance": 1,
   "panorama": "this.panorama_B0653106_BA56_948D_41E2_181F272DC24C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 3.53,
   "backwardYaw": 86.1,
   "distance": 1,
   "panorama": "this.panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 44.37,
   "backwardYaw": 94.75,
   "distance": 1,
   "panorama": "this.panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 164.49,
   "backwardYaw": 61.4,
   "distance": 1,
   "panorama": "this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -98.75,
   "backwardYaw": 82.33,
   "distance": 1,
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -157.76,
   "backwardYaw": -1.27,
   "distance": 1,
   "panorama": "this.panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "MIDDLE1",
 "id": "panorama_B0647904_BA53_F48D_41DC_A474908390AB",
 "thumbnailUrl": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8C6EE68B_BAD3_FD84_41C7_D73D00C270E1",
  "this.overlay_8C4ABF04_BAD3_EC8D_41DE_D690A4B70AF5",
  "this.overlay_8D903AC9_BAD3_9587_41C3_C424C50E165E",
  "this.overlay_8DEDE718_BAD3_BC85_41E1_BFDD7E707E46",
  "this.overlay_82126FF0_BAD3_6B85_41C5_EB3E10852014",
  "this.overlay_809C2052_BAD2_F485_41D8_55B7206BBF65",
  "this.overlay_81918AA1_BAD2_9584_41BD_987D9D42C714"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 24.71,
  "pitch": 0
 },
 "id": "camera_EABC240A_F8B9_7D1F_41CB_4EA2920059C8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -40.02,
  "pitch": 0
 },
 "id": "camera_E85E6555_F8B9_7F0A_41DF_C20A3F6BD022",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -5.73,
   "backwardYaw": -167.16,
   "distance": 1,
   "panorama": "this.panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 62.56,
   "backwardYaw": -39.71,
   "distance": 1,
   "panorama": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -5.04,
   "backwardYaw": -172.67,
   "distance": 1,
   "panorama": "this.panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "BAKERY_START",
 "id": "panorama_B0653106_BA56_948D_41E2_181F272DC24C",
 "thumbnailUrl": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_AE490A27_BA51_948B_41C6_B9B095E256E4",
  "this.overlay_AE4B4CA3_BA52_AD84_41D5_128509C8C1F2",
  "this.overlay_AE126BD7_BA53_EB8B_41E2_647FC2B51350",
  "this.overlay_AEA6F84B_BA53_B484_41BD_C4DB20AC2944",
  "this.overlay_A9FEF6C7_BA53_7D8C_41D2_53C0D0620D46",
  "this.overlay_AEEB7C67_BA52_EC8B_41CF_642032902103"
 ]
},
{
 "class": "Video",
 "label": "0423 (4)",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_AE0C398E_BB17_E7D0_41DC_D690F8D5424C_t.jpg",
 "width": 1280,
 "loop": false,
 "id": "video_AE0C398E_BB17_E7D0_41DC_D690F8D5424C",
 "height": 720,
 "video": {
  "width": 1280,
  "class": "VideoResource",
  "height": 720,
  "mp4Url": "media/video_AE0C398E_BB17_E7D0_41DC_D690F8D5424C.mp4"
 }
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_E40E8557_EA1B_A7BC_41E7_3D8ACC2BA5CE.mp3",
  "oggUrl": "media/audio_E40E8557_EA1B_A7BC_41E7_3D8ACC2BA5CE.ogg"
 },
 "autoplay": true,
 "id": "audio_E40E8557_EA1B_A7BC_41E7_3D8ACC2BA5CE",
 "data": {
  "label": "WhatsApp Audio 2026-04-24 at 14.16.05.mpeg"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -117.44,
  "pitch": 0
 },
 "id": "camera_F7ECB48E_F8B9_7D16_41DE_E39BD24426E1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -142.63,
  "pitch": 0
 },
 "id": "camera_F654F450_F8B9_7D0A_41E4_993B458240D6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -156.7,
  "pitch": 0
 },
 "id": "camera_E93963D9_F8B9_7B3A_41E3_58A9E521852E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.84,
  "pitch": 0
 },
 "id": "camera_F74E24D8_F8B9_7D3A_41D8_110B36F71044",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 53.72,
  "pitch": -55.37
 },
 "id": "panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.73,
  "pitch": 0
 },
 "id": "camera_F735A4AC_F8B9_7D1A_41E4_FB7FABBFCC99",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -9.27,
  "pitch": 0
 },
 "id": "camera_E86E754A_F8B9_7F1E_41BF_7C9DFF57A962",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -27.51,
  "pitch": 0
 },
 "id": "camera_E8E8B503_F8B9_7F0E_41EE_B8394D9F2FDA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "NIGHT_ENTRANCE",
 "id": "panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5",
 "thumbnailUrl": "media/panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_t.jpg",
 "partial": false,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 120.37,
  "pitch": 0
 },
 "id": "camera_E9E433C5_F8B9_7B15_41BB_2F804C143E4F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "WOMENBERAYED_GREENSCREEN",
 "id": "panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175",
 "thumbnailUrl": "media/panorama_B01024B5_BA51_9D8F_41E2_2BE98FBDC175_t.jpg",
 "partial": false,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 178.25,
  "pitch": 0
 },
 "id": "camera_EABBB5EF_F8B9_7F16_41D1_1C46DB057C91",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.02,
  "pitch": 0
 },
 "id": "camera_E90625D0_F8B9_7F0A_41D2_0DA5017E3015",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "id": "panorama_B067B62B_BA52_BC9B_41C3_B3CB5AB6DDC5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -111.45,
  "pitch": -11.15
 },
 "id": "panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.88,
  "pitch": 0
 },
 "id": "camera_E8CAD510_F8B9_7F0A_41E8_85624BE24D75",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 122.21,
   "backwardYaw": 11.15,
   "distance": 1,
   "panorama": "this.panorama_B010B873_BA51_948B_41E1_3614142DA15C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 55.29,
   "backwardYaw": -47.12,
   "distance": 1,
   "panorama": "this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -158.17,
   "backwardYaw": 23.3,
   "distance": 1,
   "panorama": "this.panorama_B064A1EB_BA51_779B_41D4_951DE00139AE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "METOO",
 "id": "panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A",
 "thumbnailUrl": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_9E069DCB_BAEE_AF9B_41CC_65C7AFAD6274",
  "this.overlay_9E4D4052_BAEE_9484_41A2_49B6BB2C600E",
  "this.overlay_9F646BD5_BAEF_AB8F_41E4_FE2C94FE54C2",
  "this.overlay_9CFB6099_BAEF_9584_4191_319FDBB3A2A5",
  "this.overlay_993B728E_BAEF_F59D_41E5_D2CF9E91C7B5",
  "this.overlay_9EEE4275_BAEF_948F_41D3_C1CBDFA32483"
 ]
},
{
 "class": "VideoPlayer",
 "viewerArea": "this.MainViewer",
 "id": "MainViewerVideoPlayer",
 "displayPlaybackBar": true
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.52,
  "pitch": -12.13
 },
 "id": "panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -141.19,
  "pitch": 0
 },
 "id": "camera_E927D5C4_F8B9_7F0A_41EA_BEB795D21B24",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -167.16,
   "backwardYaw": -5.73,
   "distance": 1,
   "panorama": "this.panorama_B0653106_BA56_948D_41E2_181F272DC24C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 86.1,
   "backwardYaw": 3.53,
   "distance": 1,
   "panorama": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -1.75,
   "backwardYaw": -160.64,
   "distance": 1,
   "panorama": "this.panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 155.91,
   "backwardYaw": 53.5,
   "distance": 1,
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "BAKERY_MIDDLE",
 "id": "panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55",
 "thumbnailUrl": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_AC17D5F8_BAAF_BF85_41C5_8CD384DA1AE7",
  "this.overlay_AC6DE26F_BAAF_949C_41D5_35049F4F8F29",
  "this.overlay_ADFF4A79_BAAF_7487_41B1_E281C6DBE46E",
  "this.overlay_A2C2441F_BAAE_BCBC_41D6_DB22A043F864",
  "this.overlay_AF51B8A6_BAAE_958C_41E2_183CB31E6D1C",
  "this.overlay_AC96E80B_BAAE_F49B_41D1_8FB7CC8D13D6"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -122.65,
  "pitch": 0
 },
 "id": "camera_F7F92487_F8B9_7D16_41D5_8B9773DB5808",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 18.6,
  "pitch": 0
 },
 "id": "camera_F75F54D2_F8B9_7D0E_41B0_727817E323C5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.98,
  "pitch": 0
 },
 "id": "camera_E9F4E3BF_F8B9_7B76_41E9_87C973EE457F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -49.56,
  "pitch": 0
 },
 "id": "camera_E96DE3F8_F8B9_7AFA_41C0_FEADAF611987",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.17,
  "pitch": -18.16
 },
 "id": "panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 87.61,
   "backwardYaw": -144.58,
   "distance": 1,
   "panorama": "this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 32.36,
   "backwardYaw": 170.73,
   "distance": 1,
   "panorama": "this.panorama_B010B873_BA51_948B_41E1_3614142DA15C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 35.79,
   "backwardYaw": 139.98,
   "distance": 1,
   "panorama": "this.panorama_B064A1EB_BA51_779B_41D4_951DE00139AE"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "TAMUBAKERY",
 "id": "panorama_B01126A3_BA51_BD8B_41E1_340C936B682D",
 "thumbnailUrl": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_A493AD71_BAD2_EC87_41CC_18D742EAD3D0",
  "this.overlay_A45D6ABC_BAD2_95FD_41C6_02A5C591D244",
  "this.overlay_A61EE080_BAD1_9584_418E_A14B13FD4348",
  "this.overlay_AFE3D160_BB14_A7C0_41E5_3CB56CD68040"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -11.37,
  "pitch": -9.75
 },
 "id": "panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -24.09,
  "pitch": 0
 },
 "id": "camera_E841556E_F8B9_7F16_41D4_97A7FD47A10B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "mp3Url": "media/audio_FA6F9951_EA25_AFB4_41A8_ECD8625266D5.mp3",
  "oggUrl": "media/audio_FA6F9951_EA25_AFB4_41A8_ECD8625266D5.ogg"
 },
 "autoplay": true,
 "id": "audio_FA6F9951_EA25_AFB4_41A8_ECD8625266D5",
 "data": {
  "label": "MayongAudio"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 167.95,
  "pitch": 0
 },
 "id": "camera_F640945C_F8B9_7D3A_41E3_F95872ACE121",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -126.5,
  "pitch": 0
 },
 "id": "camera_F783D481_F8B9_7D0A_41D4_E01B2713D8C2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.33,
  "pitch": -43.78
 },
 "id": "panorama_B064C2E2_BA53_9585_4199_6381D586F934_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.18,
  "pitch": 0
 },
 "id": "camera_E82D451D_F8B9_7F3A_41EC_2EED5A328D30",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 160.61,
  "pitch": 0
 },
 "id": "camera_E89434F1_F8B9_7D0A_41DD_008FEAD7919E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.8,
  "pitch": 0
 },
 "id": "camera_E99343AE_F8B9_7B16_41E5_B8039526D5E2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.95,
  "pitch": -8.21
 },
 "id": "panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.7,
  "pitch": -13.86
 },
 "id": "panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E87A4362_F8B9_7B0E_41D1_BFC1C5101A66, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E87A4362_F8B9_7B0E_41D1_BFC1C5101A66, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_AE0C398E_BB17_E7D0_41DC_D690F8D5424C",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E87A4362_F8B9_7B0E_41D1_BFC1C5101A66"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -34.32,
  "pitch": 0
 },
 "id": "camera_E8517562_F8B9_7F0E_41E3_A6CF5EFE0281",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 119.22,
  "pitch": 0
 },
 "id": "camera_F70A84BF_F8B9_7D76_41D8_7537AE0CF121",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.37,
  "pitch": 0
 },
 "id": "camera_E9B0957A_F8B9_7FFE_41D6_F3CC073AC64A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.53,
  "pitch": 0
 },
 "id": "camera_E937D5BD_F8B9_7F7A_41C7_98D892E3FA8E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMin": 60,
 "label": "finalfinalPERFORMANCE",
 "id": "media_FF2305A6_BA52_9F8C_41E4_D077AB1228D1",
 "thumbnailUrl": "media/media_FF2305A6_BA52_9F8C_41E4_D077AB1228D1_t.jpg",
 "hfov": 360,
 "partial": false,
 "loop": false,
 "pitch": 0,
 "hfovMax": 140,
 "class": "Video360",
 "vfov": 180,
 "video": [
  {
   "width": 3840,
   "class": "Video360Resource",
   "framerate": 100,
   "url": "media/media_FF2305A6_BA52_9F8C_41E4_D077AB1228D1.mp4",
   "bitrate": 55296,
   "posterURL": "media/media_FF2305A6_BA52_9F8C_41E4_D077AB1228D1_poster.jpg",
   "type": "video/mp4",
   "height": 1920
  },
  {
   "width": 3168,
   "class": "Video360Resource",
   "framerate": 50,
   "url": "media/media_FF2305A6_BA52_9F8C_41E4_D077AB1228D1_ios.mp4",
   "bitrate": 18817,
   "posterURL": "media/media_FF2305A6_BA52_9F8C_41E4_D077AB1228D1_poster.jpg",
   "type": "video/mp4",
   "height": 1584
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.86,
  "pitch": -1.09
 },
 "id": "panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E8794363_F8B9_7B0E_41D9_F8F6CF6B27AA, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E8794363_F8B9_7B0E_41D9_F8F6CF6B27AA, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_AB375C3A_BAEC_BD40_41E2_A31F0FCF257C",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E8794363_F8B9_7B0E_41D9_F8F6CF6B27AA"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.92,
  "pitch": 0
 },
 "id": "camera_EAAC1411_F8B9_7D0A_41CE_5EBECBED856E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -3.47,
   "backwardYaw": -106.9,
   "distance": 1,
   "panorama": "this.panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 85.08,
   "backwardYaw": -49.73,
   "distance": 1,
   "panorama": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 29.14,
   "backwardYaw": -60.78,
   "distance": 1,
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "ROMANI_WOMEN",
 "id": "panorama_B0105DFB_BA53_AF7B_41E5_26336013789F",
 "thumbnailUrl": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_89650166_BAD2_B48D_41CC_D6BAD7E25E48",
  "this.overlay_894BBAF9_BAD2_B587_41E6_671B13EF42A3",
  "this.overlay_8EAFBAA3_BAD2_958B_41D7_10292157BD6D",
  "this.overlay_8EC12549_BAD2_9C84_41B9_0E7FCB249387",
  "this.overlay_AB2E1147_BAEB_A7CF_41E0_3DF75996F4D7"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 174.96,
  "pitch": 0
 },
 "id": "camera_E95935E2_F8B9_7F0E_41DE_F1BF2B4B7628",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 94.17,
  "pitch": 0
 },
 "id": "camera_F6616443_F8B9_7D0E_41EE_6E7F4ADAA70D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.66,
  "pitch": 0
 },
 "id": "camera_E9C555B6_F8B9_7F77_41D5_C2CC51B1BF7B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.11,
  "pitch": -11.5
 },
 "id": "panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 152.82,
   "backwardYaw": -4.84,
   "distance": 1,
   "panorama": "this.panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "GROUP_PHOTO",
 "id": "panorama_B01036B7_BA56_BD8B_41E1_D765D537912D",
 "thumbnailUrl": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_9CD6F7D4_BAF6_9B8D_41CC_04776A63E6F3"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 100.28,
  "pitch": 0
 },
 "id": "camera_F667A43C_F8B9_7D7A_41DB_10A0D16D9880",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.69,
  "pitch": -19.83
 },
 "id": "panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 50.65,
  "pitch": 0
 },
 "id": "camera_E81D5523_F8B9_7F0E_41E4_44FC60905CE6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -79.72,
   "backwardYaw": -129.35,
   "distance": 1,
   "panorama": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -161.4,
   "backwardYaw": -173.65,
   "distance": 1,
   "panorama": "this.panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "VOODOO",
 "id": "panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224",
 "thumbnailUrl": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_A1D0A9FE_BAB3_777D_41D9_C6CD46C790DF",
  "this.overlay_A067B411_BAB3_9C84_41DE_4526C2F4CD27",
  "this.overlay_843FB8D0_BAB1_7584_41C5_E18B0F44E7BE"
 ]
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -172.67,
   "backwardYaw": -5.04,
   "distance": 1,
   "panorama": "this.panorama_B0653106_BA56_948D_41E2_181F272DC24C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 94.75,
   "backwardYaw": 44.37,
   "distance": 1,
   "panorama": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -160.64,
   "backwardYaw": -1.75,
   "distance": 1,
   "panorama": "this.panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "BAKERY_EDGE",
 "id": "panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA",
 "thumbnailUrl": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_AB41A174_BA5E_948D_41D3_B582B71DE068",
  "this.overlay_A8239859_BA5F_9484_41DE_B2328F74D94D",
  "this.overlay_A82370E8_BA53_9585_41E5_421BFC71FE1C",
  "this.overlay_A8DA0E98_BA52_AD85_41D2_4FC8E5242F4D",
  "this.overlay_A8C9AE01_BA57_AC87_41DA_39F4C63CBBCE",
  "this.overlay_AFA4E865_BAB1_948F_41D4_BF13AB5A6765"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 130.27,
  "pitch": 0
 },
 "id": "camera_F71944B8_F8B9_7D7A_41BD_87A652546ED7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -27.18,
  "pitch": 0
 },
 "id": "camera_F76F84CC_F8B9_7D1A_41DD_E57BCB250CC7",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 130.44,
   "backwardYaw": 31.81,
   "distance": 1,
   "panorama": "this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 38.81,
   "backwardYaw": -155.29,
   "distance": 1,
   "panorama": "this.panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -49.73,
   "backwardYaw": 85.08,
   "distance": 1,
   "panorama": "this.panorama_B0105DFB_BA53_AF7B_41E5_26336013789F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -129.35,
   "backwardYaw": -79.72,
   "distance": 1,
   "panorama": "this.panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 90.63,
   "backwardYaw": -85.83,
   "distance": 1,
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "MIDDLE3",
 "id": "panorama_B06436FA_BA53_9D84_41D0_6759705A45D4",
 "thumbnailUrl": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_8E5DDA68_BAD7_B484_41D2_0C6F873C39D3",
  "this.overlay_8FAB185B_BAD7_94BB_41B4_9240E368D75D",
  "this.overlay_8EE13ACF_BAD7_F59C_41C8_467EC6E3CA69",
  "this.overlay_8E15AF7F_BAD7_AB7B_41E7_409727092DCE",
  "this.overlay_8E7BC030_BAD7_9485_41E5_7A45A598E956"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -78.09,
  "pitch": -34.92
 },
 "id": "panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.67,
  "pitch": 0
 },
 "id": "camera_F7C1E4A6_F8B9_7D16_41EF_0399C10D2DA5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 21.83,
  "pitch": 0
 },
 "id": "camera_E8F9E4FD_F8B9_7EF5_41E6_DBB7E4034815",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Video",
 "label": "VIDEO women and food",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_AB375C3A_BAEC_BD40_41E2_A31F0FCF257C_t.jpg",
 "width": 848,
 "loop": false,
 "id": "video_AB375C3A_BAEC_BD40_41E2_A31F0FCF257C",
 "height": 478,
 "video": {
  "width": 848,
  "class": "VideoResource",
  "height": 478,
  "mp4Url": "media/video_AB375C3A_BAEC_BD40_41E2_A31F0FCF257C.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 12.58,
  "pitch": 0
 },
 "id": "camera_E9E4F5A9_F8B9_7F1D_41E8_948951D81388",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.38,
  "pitch": -12.82
 },
 "id": "panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -12.05,
   "backwardYaw": -175.26,
   "distance": 1,
   "panorama": "this.panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 98.12,
   "backwardYaw": -15.48,
   "distance": 1,
   "panorama": "this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -22,
   "backwardYaw": -170.51,
   "distance": 1,
   "panorama": "this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "COMICS1",
 "id": "panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1",
 "thumbnailUrl": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_ABDE1085_BA51_758F_41DB_FF4516DC950B",
  "this.overlay_92C5FCBC_BAF2_ADFD_41C1_B6B7C66C07C3",
  "this.overlay_9237A270_BAF1_7485_41DD_5905EC111559",
  "this.overlay_92081F33_BAF1_6C8B_41E1_D118148C290B",
  "this.overlay_92A10C75_BAF1_EC8C_4196_20BAD5D55F5B"
 ]
},
{
 "class": "PanoramaPlayer",
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -53.31,
  "pitch": 0
 },
 "id": "camera_E83D6517_F8B9_7F36_41EB_8EADE8E17412",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.64,
  "pitch": 0
 },
 "id": "camera_EAAAB5F5_F8B9_7F0A_41B4_CE782C99FCE9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 164.52,
  "pitch": 0
 },
 "id": "camera_F7AA563D_F8B9_7D7A_41C2_C0BF355DC9E5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.73,
  "pitch": -13.28
 },
 "id": "panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.02,
  "pitch": -6.48
 },
 "id": "panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "VideoPlayListItem",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_E85D837D_F8B9_7BFA_41C1_434F887C566E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_E85D837D_F8B9_7BFA_41C1_434F887C566E, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_AB655BE4_BAFD_5AC0_41E0_BCA8650A6A9A",
   "player": "this.MainViewerVideoPlayer"
  }
 ],
 "id": "playList_E85D837D_F8B9_7BFA_41C1_434F887C566E"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 76.26,
  "pitch": 0
 },
 "id": "camera_EA9AA5FB_F8B9_7EFE_41B7_F96EB6045901",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 161.02,
  "pitch": 0
 },
 "id": "camera_F64BC456_F8B9_7D36_41E8_008BEB1C703A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 19.36,
  "pitch": 0
 },
 "id": "camera_F78CD47B_F8B9_7DFE_41E5_6BEBD22D4EB6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -57.79,
  "pitch": 0
 },
 "id": "camera_F7B78630_F8B9_7D0A_41E4_83B4EF53118D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -173.65,
   "backwardYaw": -161.4,
   "distance": 1,
   "panorama": "this.panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "WOMEN_BETRAYED",
 "id": "panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC",
 "thumbnailUrl": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_A7D5FB39_BAD2_9487_41D6_5183BAB9168F",
  "this.overlay_A71F25D3_BAD2_FF8B_41E2_4AB5F0C49222",
  "this.overlay_A8C78EE5_BB14_BAC0_41D8_25149253EC7B"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 22.24,
  "pitch": 0
 },
 "id": "camera_F7B79463_F8B9_7D0E_41CC_5DB984AD0A72",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -94.92,
  "pitch": 1.72
 },
 "id": "panorama_B010B873_BA51_948B_41E1_3614142DA15C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -83.27,
  "pitch": -33.02
 },
 "id": "panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -107,
  "pitch": 0
 },
 "id": "camera_E9D545B0_F8B9_7F0A_41DB_CECA17AD22F1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -150.86,
  "pitch": 0
 },
 "id": "camera_E9F235A2_F8B9_7F0F_41D7_605869B3D1CB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.25,
  "pitch": 0
 },
 "id": "camera_F7D7649A_F8B9_7D3E_41D1_983504697191",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -106.32,
  "pitch": 0
 },
 "id": "camera_E982659C_F8B9_7F3A_41BC_3253EA011E4C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -89.53,
  "pitch": -39.6
 },
 "id": "panorama_B0653106_BA56_948D_41E2_181F272DC24C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 47.53,
   "backwardYaw": 149.34,
   "distance": 1,
   "panorama": "this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -106.9,
   "backwardYaw": -3.47,
   "distance": 1,
   "panorama": "this.panorama_B0105DFB_BA53_AF7B_41E5_26336013789F"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -155.29,
   "backwardYaw": 38.81,
   "distance": 1,
   "panorama": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 145.68,
   "backwardYaw": -25.77,
   "distance": 1,
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "RIGHTSIDE",
 "id": "panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8",
 "thumbnailUrl": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_88B00543_BAEE_9C8B_41B9_32FD435C6C7A",
  "this.overlay_8889289E_BAEE_95BD_41AF_6D31D6515F46",
  "this.overlay_885B3F75_BAD1_6C8C_41D4_33915F79727F",
  "this.overlay_8974E2CE_BAD1_B59D_41E0_5CDB4F8F4C6B",
  "this.overlay_8E4BB8C2_BAD1_F585_41E0_A4D1E526C9B9",
  "this.overlay_FA1CFB2F_EA25_A3EB_41D8_B85472C92647"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -26.63,
  "pitch": 0
 },
 "id": "camera_F77A44C5_F8B9_7D0A_41E0_49E38CC6A726",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 175.16,
  "pitch": 0
 },
 "id": "camera_F65DC449_F8B9_7D1A_41EB_C85077131BFD",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0653106_BA56_948D_41E2_181F272DC24C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 152.49,
   "backwardYaw": 37.37,
   "distance": 1,
   "panorama": "this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -165.98,
   "backwardYaw": -18.98,
   "distance": 1,
   "panorama": "this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -175.26,
   "backwardYaw": -12.05,
   "distance": 1,
   "panorama": "this.panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -1.27,
   "backwardYaw": -157.76,
   "distance": 1,
   "panorama": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "COMICS3",
 "id": "panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109",
 "thumbnailUrl": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_A8413842_BA53_9485_41DE_27056382CC92",
  "this.overlay_911A3804_BAF3_748D_41C9_BE807257EC52",
  "this.overlay_94EA0C10_BAF1_AC84_41DA_00837E6EE27B",
  "this.overlay_953F3904_BAF1_F48D_41C3_B7EF20E051BC",
  "this.overlay_8A18807C_BAF1_957D_41D1_2D374D225CDE",
  "this.overlay_8B5B8E98_BAF1_6D85_41B3_11386C1952B8",
  "this.overlay_A321ABA9_BB14_BB43_41D0_9F6CB3C6FBB7"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 71.24,
  "pitch": 0
 },
 "id": "camera_F7AD5469_F8B9_7D1A_41A3_F83F942A1142",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -95.95,
  "pitch": 0
 },
 "id": "camera_E97B53F1_F8B9_7B0A_41D4_F23C6D5BDC53",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Video",
 "label": "FINALPERFORMANCE 180VID",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_AB655BE4_BAFD_5AC0_41E0_BCA8650A6A9A_t.jpg",
 "width": 1920,
 "loop": false,
 "id": "video_AB655BE4_BAFD_5AC0_41E0_BCA8650A6A9A",
 "height": 1080,
 "video": {
  "width": 1920,
  "class": "VideoResource",
  "height": 1080,
  "mp4Url": "media/video_AB655BE4_BAFD_5AC0_41E0_BCA8650A6A9A.mp4"
 }
},
{
 "class": "RotationalCamera",
 "automaticZoomSpeed": 10,
 "manualZoomSpeed": 1,
 "automaticRotationSpeed": 10,
 "id": "media_FF2305A6_BA52_9F8C_41E4_D077AB1228D1_camera",
 "manualRotationSpeed": 1800,
 "initialPosition": {
  "hfov": 120,
  "class": "RotationalCameraPosition",
  "yaw": 0,
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 6.35,
  "pitch": 0
 },
 "id": "camera_E80FE532_F8B9_7F0E_41D0_9D7881033B18",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Video",
 "label": "The Women Betrayed _ a documentary film by Sehjo Singh on Witch Hunting",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_AB513B07_BAEC_BB40_41D1_F92460345D3D_t.jpg",
 "width": 478,
 "loop": false,
 "id": "video_AB513B07_BAEC_BB40_41D1_F92460345D3D",
 "height": 360,
 "video": {
  "width": 478,
  "class": "VideoResource",
  "height": 360,
  "mp4Url": "media/video_AB513B07_BAEC_BB40_41D1_F92460345D3D.mp4"
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -25.77,
   "backwardYaw": 145.68,
   "distance": 1,
   "panorama": "this.panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 53.5,
   "backwardYaw": 155.91,
   "distance": 1,
   "panorama": "this.panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -85.83,
   "backwardYaw": 90.63,
   "distance": 1,
   "panorama": "this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.33,
   "backwardYaw": -98.75,
   "distance": 1,
   "panorama": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 25.02,
   "backwardYaw": 115.36,
   "distance": 1,
   "panorama": "this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -165.11,
   "backwardYaw": 73.68,
   "distance": 1,
   "panorama": "this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -60.78,
   "backwardYaw": 29.14,
   "distance": 1,
   "panorama": "this.panorama_B0105DFB_BA53_AF7B_41E5_26336013789F"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "MIDDLE2",
 "id": "panorama_B0136010_BA53_F485_41E6_E0082A05BA2A",
 "thumbnailUrl": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_A2F391BE_BAB6_B7FD_41E2_0347A6735E27",
  "this.overlay_A26E20A7_BAB6_958B_41A8_6B5B59B8206E",
  "this.overlay_AD59AA3F_BAB6_F4FB_41C3_B1DF8C419C69",
  "this.overlay_A2BCB6F7_BAB6_BD8B_41D2_F1ECB6CBE2BE",
  "this.overlay_A3A35832_BAB7_7485_41C7_4871BCEE57AC",
  "this.overlay_ADD833D1_BAB7_BB84_41E6_F92D3B1F718E",
  "this.overlay_A0A77500_BAB3_FC85_41E0_0749927C9B1B",
  "this.overlay_A39415E2_BAB3_BF85_41CD_72BB3E1E77F3"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 97.59,
  "pitch": -19.77
 },
 "id": "panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 35.42,
  "pitch": 0
 },
 "id": "camera_E87FF53E_F8B9_7F77_41EC_DA1E46833E56",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "Video",
 "label": "romani woman",
 "scaleMode": "fit_inside",
 "thumbnailUrl": "media/video_AA2F6DA1_BAEC_BF40_41C6_744C749AD03E_t.jpg",
 "width": 848,
 "loop": false,
 "id": "video_AA2F6DA1_BAEC_BF40_41C6_744C749AD03E",
 "height": 478,
 "video": {
  "width": 848,
  "class": "VideoResource",
  "height": 478,
  "mp4Url": "media/video_AA2F6DA1_BAEC_BF40_41C6_744C749AD03E.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 158,
  "pitch": 0
 },
 "id": "camera_E96965DD_F8B9_7F3A_41EA_5AFF9A1C0AF5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.51,
  "pitch": 0
 },
 "id": "camera_E8DA950A_F8B9_7F1E_41ED_6C5220705380",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 154.23,
  "pitch": 0
 },
 "id": "camera_E91625CA_F8B9_7F1E_41E5_AB62DC5BFAD5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -118.6,
  "pitch": 0
 },
 "id": "camera_F7CDE4A0_F8B9_7D0A_41E8_A21067AFDAE2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 73.1,
  "pitch": 0
 },
 "id": "camera_F72654B2_F8B9_7D0E_41D0_49E356D1D1D5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -135.63,
  "pitch": 0
 },
 "id": "camera_E94875E8_F8B9_7F1A_41E8_724E8834A942",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.49,
  "pitch": 0
 },
 "id": "camera_F7A40644_F8B9_7D0A_41E0_D0183961E166",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.29,
  "pitch": 0
 },
 "id": "camera_F74074DF_F8B9_7D36_41EA_5818D15F2510",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -36.93,
  "pitch": 0
 },
 "id": "camera_EA8AB601_F8B9_7D0A_41E4_32F1438C6E7E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -93.9,
  "pitch": 0
 },
 "id": "camera_F7E32494_F8B9_7D0A_41D0_4A162B2DC7AF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -81.98,
  "pitch": -16.43
 },
 "id": "panorama_B0647904_BA53_F48D_41DC_A474908390AB_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.25,
  "pitch": 0
 },
 "id": "camera_E9A31586_F8B9_7F16_41ED_664721F1C418",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -112.91,
  "pitch": 0
 },
 "id": "camera_E918F3E6_F8B9_7B16_41DB_A1BF4827C98E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.47,
  "pitch": 0
 },
 "id": "camera_F799C474_F8B9_7D0B_41AF_DB5463E2BB2F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -117.54,
  "pitch": -7.03
 },
 "id": "panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -132.47,
  "pitch": 0
 },
 "id": "camera_E98213B8_F8B9_7B7B_41EA_4CAE0E153B0B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 37.37,
   "backwardYaw": 152.49,
   "distance": 1,
   "panorama": "this.panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 61.4,
   "backwardYaw": 164.49,
   "distance": 1,
   "panorama": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -15.48,
   "backwardYaw": 98.12,
   "distance": 1,
   "panorama": "this.panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 18.15,
   "backwardYaw": 126.69,
   "distance": 1,
   "panorama": "this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 153.37,
   "backwardYaw": -101.82,
   "distance": 1,
   "panorama": "this.panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "CURATORIAL_NOTE",
 "id": "panorama_B067F8A0_BA52_9584_4189_33F67C0FF296",
 "thumbnailUrl": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_B5B663F4_BA51_9B8D_41C2_DABCBA82EE94",
  "this.overlay_9C07AC54_BAF6_EC8D_41E2_D1C46036B2D9",
  "this.overlay_9C71F31A_BAF6_9485_41E1_2265F1699FE1",
  "this.overlay_9DA3B9B5_BAF6_B78F_41E6_460DDB9B5D58",
  "this.overlay_9D7614FF_BAF1_9D7B_41D2_BFB5275CDC1E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 132.88,
  "pitch": 0
 },
 "id": "camera_E9C6A3D2_F8B9_7B0E_41E8_A58E5CEDFCEB",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -124.71,
  "pitch": 0
 },
 "id": "camera_E90B63EB_F8B9_7B1E_41E2_643DE776236F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B0653106_BA56_948D_41E2_181F272DC24C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -167.42,
   "backwardYaw": 87.2,
   "distance": 1,
   "panorama": "this.panorama_B010D9D6_BA53_778D_41D1_CC951B567394"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 149.34,
   "backwardYaw": 47.53,
   "distance": 1,
   "panorama": "this.panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 115.36,
   "backwardYaw": 25.02,
   "distance": 1,
   "panorama": "this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 57.35,
   "backwardYaw": -59.63,
   "distance": 1,
   "panorama": "this.panorama_B0647904_BA53_F48D_41DC_A474908390AB"
  }
 ],
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/f/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/u/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/r/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/b/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/d/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 10,
      "tags": "ondemand",
      "colCount": 10,
      "width": 5120,
      "height": 5120
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_0/l/4/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "PALIMPSEST",
 "id": "panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4",
 "thumbnailUrl": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_t.jpg",
 "pitch": 0,
 "overlays": [
  "this.overlay_948D01A4_BAF1_B78D_41D7_98627DEB4A50",
  "this.overlay_94C53798_BAF1_BB85_41E4_022AFEC9FA60",
  "this.overlay_9426C6CF_BAF1_9D9B_41E4_75B15D1D89DD",
  "this.overlay_94698743_BAF1_FC8B_41E1_00C3D621BDB3",
  "this.overlay_957A6429_BAF1_7C84_41D6_CABEA336DC8D"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 112.98,
  "pitch": 0
 },
 "id": "camera_E88794F8_F8B9_7EFA_41E2_FF82128FB4C2",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96,
    "yawDelta": 323
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96,
    "yawDelta": 18.5
   }
  ]
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "width": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "minWidth": 100,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "height": "100.025%",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "class": "ViewerArea",
 "toolTipShadowOpacity": 1,
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "shadow": false,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "minHeight": 50,
 "progressOpacity": 1,
 "paddingRight": 0,
 "firstTransitionDuration": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarHeadShadowVerticalLength": 0,
 "vrPointerColor": "#FFFFFF",
 "bottom": -0.2,
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A, this.camera_F7B78630_F8B9_7D0A_41E4_83B4EF53118D); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.26,
   "image": "this.AnimatedImageResource_E877D369_F8B9_7B1A_41CD_DEA90AD47125",
   "pitch": -31.21,
   "yaw": 11.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A12C59D_BAD2_9FBF_41D9_5C7F81EEC83B",
 "maps": [
  {
   "hfov": 15.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 11.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -31.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B064A1EB_BA51_779B_41D4_951DE00139AE, this.camera_EA8AB601_F8B9_7D0A_41E4_32F1438C6E7E); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.5,
   "image": "this.AnimatedImageResource_E8744369_F8B9_7B1A_41AE_70237A0360CF",
   "pitch": -40.82,
   "yaw": -19.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9A41C050_BAD1_7485_41D6_5C8DE1A4B26E",
 "maps": [
  {
   "hfov": 13.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -19.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -40.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D, this.camera_EAAAB5F5_F8B9_7F0A_41B4_CE782C99FCE9); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.57,
   "image": "this.AnimatedImageResource_E876B369_F8B9_7B1A_41D5_CB4F1BE3A728",
   "pitch": -40.48,
   "yaw": 170.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9BA65290_BAD1_9585_41E2_8604C0E65BEE",
 "maps": [
  {
   "hfov": 13.57,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 170.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -40.48
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D, this.camera_EA9AA5FB_F8B9_7EFE_41B7_F96EB6045901); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.12,
   "image": "this.AnimatedImageResource_E8777369_F8B9_7B1A_41DE_80CCB5A7CFE1",
   "pitch": -25.38,
   "yaw": 67.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B4AA460_BAD1_BC85_41C7_BD4B3F668BDD",
 "maps": [
  {
   "hfov": 16.12,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 67.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.89,
   "image": "this.AnimatedImageResource_E877C36A_F8B9_7B1E_41E2_2609B082E737",
   "pitch": -18.86,
   "yaw": 89.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9B964236_BAD6_B48C_41DB_706AFE094FAF",
 "maps": [
  {
   "hfov": 16.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 89.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.08,
   "image": "this.AnimatedImageResource_E874436A_F8B9_7B1E_41E6_99BB1E2EE59F",
   "pitch": -16.8,
   "yaw": 46.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98F76956_BAD7_948C_41A0_03475E3A42D0",
 "maps": [
  {
   "hfov": 17.08,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 46.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109, this.camera_E90625D0_F8B9_7F0A_41D2_0DA5017E3015); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.02,
   "image": "this.AnimatedImageResource_E86D336C_F8B9_7B1A_41D6_331D8469D257",
   "pitch": -32.65,
   "yaw": -18.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A85946E9_BA56_9D87_41A2_16F338D1D502",
 "maps": [
  {
   "hfov": 15.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -18.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1, this.camera_E96965DD_F8B9_7F3A_41EA_5AFF9A1C0AF5); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.62,
   "image": "this.AnimatedImageResource_E86C736C_F8B9_7B1A_41E1_D6245752BA7C",
   "pitch": -40.27,
   "yaw": -170.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_90BCBA9E_BAFE_95BC_41E2_70C72C8987D1",
 "maps": [
  {
   "hfov": 13.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -170.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -40.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.94,
   "image": "this.AnimatedImageResource_E86CE36C_F8B9_7B1A_419B_28B9DF99019B",
   "pitch": -18.31,
   "yaw": -1.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9038B81E_BAFE_94BC_41E4_2FA19DF6399D",
 "maps": [
  {
   "hfov": 16.94,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.31
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296, this.camera_E97915D6_F8B9_7F36_41C0_F8C1E87F893A); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.56,
   "image": "this.AnimatedImageResource_E86D436C_F8B9_7B1A_41C9_F5633399F2DB",
   "pitch": -29.29,
   "yaw": 126.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_90655901_BAF1_7487_41D0_AB120580EBE5",
 "maps": [
  {
   "hfov": 15.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 126.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -29.29
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.07,
   "image": "this.AnimatedImageResource_E86D236C_F8B9_7B1A_41ED_347DB1F20436",
   "pitch": -16.94,
   "yaw": 94.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_91FFCA19_BAF1_B487_4183_A5E00F972A95",
 "maps": [
  {
   "hfov": 17.07,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.32,
   "image": "this.AnimatedImageResource_E807E35E_F8B9_7B36_41E7_CB76A1B7FB83",
   "pitch": -9.32,
   "yaw": -89.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B42FE66D_BA76_9C9F_41D5_7F9C4151522C",
 "maps": [
  {
   "hfov": 20.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -89.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -9.32
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A, this.camera_E8F9E4FD_F8B9_7EF5_41E6_DBB7E4034815); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.03,
   "image": "this.AnimatedImageResource_E874236A_F8B9_7B1E_41DD_E6273F5A9870",
   "pitch": -55.78,
   "yaw": 23.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_981155BE_BAD2_BFFD_41E2_46BEDA163E9A",
 "maps": [
  {
   "hfov": 10.03,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 23.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -55.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D, this.camera_E8A504EB_F8B9_7D1E_41E0_DF3181A5E5DB); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.23,
   "image": "this.AnimatedImageResource_E874836A_F8B9_7B1E_41D4_A675F6EAFA00",
   "pitch": -24.55,
   "yaw": 139.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9854C01E_BAD2_94BD_41E6_61C60F140D65",
 "maps": [
  {
   "hfov": 16.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 139.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -24.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010B873_BA51_948B_41E1_3614142DA15C, this.camera_E89434F1_F8B9_7D0A_41DD_008FEAD7919E); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.81,
   "image": "this.AnimatedImageResource_E875636A_F8B9_7B1E_41DA_215BFF978AD0",
   "pitch": -44.12,
   "yaw": 143.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_99A9B022_BAD2_F485_41A7_0FCF58BC8961",
 "maps": [
  {
   "hfov": 12.81,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 143.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -44.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D, this.camera_E88794F8_F8B9_7EFA_41E2_FF82128FB4C2); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.86,
   "image": "this.AnimatedImageResource_E875336A_F8B9_7B1E_41D0_C93328F7D4FA",
   "pitch": -27.3,
   "yaw": 84.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_995D75A2_BAD2_9F85_41CD_CADFCD07E21B",
 "maps": [
  {
   "hfov": 15.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 84.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.83,
   "image": "this.AnimatedImageResource_E875836A_F8B9_7B1E_41E9_33F9C3967026",
   "pitch": -19.41,
   "yaw": 64.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9ED3F5BC_BAD2_BFFC_41E3_2E36228E4A26",
 "maps": [
  {
   "hfov": 16.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 64.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.87,
   "image": "this.AnimatedImageResource_E872736A_F8B9_7B1E_41DF_3E4F39864FAE",
   "pitch": -19.06,
   "yaw": 30.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_98AE58BB_BAD2_9584_41A4_9481B98C981A",
 "maps": [
  {
   "hfov": 16.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 30.85,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.06
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B064C2E2_BA53_9585_4199_6381D586F934, this.camera_E9D545B0_F8B9_7F0A_41DB_CECA17AD22F1); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.67,
   "image": "this.AnimatedImageResource_E866D373_F8B9_7B0E_41D3_8A964ED0C2E4",
   "pitch": -60.93,
   "yaw": -108.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8ABCF657_BAF2_BC8B_41A8_E6B0708F4239",
 "maps": [
  {
   "hfov": 8.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -108.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -60.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4, this.camera_E9E4F5A9_F8B9_7F1D_41E8_948951D81388); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.1,
   "image": "this.AnimatedImageResource_E866B373_F8B9_7B0E_41EC_128196FDA3E0",
   "pitch": -25.58,
   "yaw": 87.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8A965BBA_BAF2_AB85_41E2_2A362AB1C7BD",
 "maps": [
  {
   "hfov": 16.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296, this.camera_F77A44C5_F8B9_7D0A_41E0_49E38CC6A726); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.42,
   "image": "this.AnimatedImageResource_E870B36B_F8B9_7B1E_41D0_E7E4E51BFFF1",
   "pitch": -23.04,
   "yaw": -101.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B5EBE549_BA72_BC87_41DB_FBB751C15F39",
 "maps": [
  {
   "hfov": 16.42,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -101.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -23.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B01036B7_BA56_BD8B_41E1_D765D537912D, this.camera_F76F84CC_F8B9_7D1A_41DD_E57BCB250CC7); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_1_HS_1_0.png",
      "class": "ImageResourceLevel",
      "width": 360,
      "height": 337
     }
    ]
   },
   "pitch": -8.67,
   "yaw": -4.84
  }
 ],
 "id": "overlay_9CED2362_BAF2_9485_41E2_88CE0F04E8EB",
 "maps": [
  {
   "hfov": 8.28,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -4.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -8.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010D9D6_BA53_778D_41D1_CC951B567394, this.camera_F7AD5469_F8B9_7D1A_41A3_F83F942A1142); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.98,
   "image": "this.AnimatedImageResource_E8671373_F8B9_7B0E_41E6_A0F732C739EA",
   "pitch": -55.99,
   "yaw": 73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8BC6D2A3_BAEE_958B_41E1_54F59F2090B8",
 "maps": [
  {
   "hfov": 9.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -55.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.88,
   "image": "this.AnimatedImageResource_E8679373_F8B9_7B0E_41E9_E22DF38B135D",
   "pitch": -18.93,
   "yaw": 88.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8B2C26A3_BAEE_9D84_41E1_6F94DCC6D896",
 "maps": [
  {
   "hfov": 16.88,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 88.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A, this.camera_E95DD3FE_F8B9_7AF6_41D1_56EA2E067A78); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.87,
   "image": "this.AnimatedImageResource_E8796368_F8B9_7B1A_41D7_D16325DD4164",
   "pitch": -33.55,
   "yaw": 73.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A45B2391_BADE_9B87_41CB_742929F75622",
 "maps": [
  {
   "hfov": 14.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4, this.camera_E96DE3F8_F8B9_7AFA_41C0_FEADAF611987); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.64,
   "image": "this.AnimatedImageResource_E879E369_F8B9_7B1A_41E4_2A71CB86F47F",
   "pitch": -21.19,
   "yaw": 31.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A58B3DFB_BADE_EF7B_41E5_141FA847EAC8",
 "maps": [
  {
   "hfov": 16.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 31.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A, this.camera_E90B63EB_F8B9_7B1E_41E2_643DE776236F); this.mainPlayList.set('selectedIndex', 12)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.99,
   "image": "this.AnimatedImageResource_E879B369_F8B9_7B1A_41E0_CEEFEBB88FCD",
   "pitch": -32.86,
   "yaw": -47.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A51B10A0_BADE_9584_41BD_2209265C9CB7",
 "maps": [
  {
   "hfov": 14.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -47.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010B873_BA51_948B_41E1_3614142DA15C, this.camera_E918F3E6_F8B9_7B16_41DB_A1BF4827C98E); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.99,
   "image": "this.AnimatedImageResource_E8761369_F8B9_7B1A_41E9_9495DA546BD3",
   "pitch": -32.86,
   "yaw": -103.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A7003C59_BADE_AC87_41DD_AC462E744789",
 "maps": [
  {
   "hfov": 14.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -103.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D, this.camera_E928E3E0_F8B9_7B0A_41C4_E013541B1AB5); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.99,
   "image": "this.AnimatedImageResource_E876F369_F8B9_7B1A_41EA_098D4B3C1C70",
   "pitch": -26.34,
   "yaw": -144.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4A82540_BAD1_7C85_41D3_ED195B87D0E2",
 "maps": [
  {
   "hfov": 15.99,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -144.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -26.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B064A1EB_BA51_779B_41D4_951DE00139AE, this.camera_E97B53F1_F8B9_7B0A_41D4_F23C6D5BDC53); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.8,
   "image": "this.AnimatedImageResource_E8774369_F8B9_7B1A_41ED_0C85470F42F0",
   "pitch": -27.71,
   "yaw": -67.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A4ECFABD_BAD2_95FF_41D4_259B87F7B724",
 "maps": [
  {
   "hfov": 15.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -67.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.71
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 9, this.audio_E40E8557_EA1B_A7BC_41E7_3D8ACC2BA5CE)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.16,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 447,
      "height": 443
     }
    ]
   },
   "pitch": -38.21,
   "yaw": -78.65
  }
 ],
 "id": "overlay_E4761265_EA1C_9D9C_41DA_76F1AB89D0D5",
 "maps": [
  {
   "hfov": 8.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -78.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 15
     }
    ]
   },
   "pitch": -38.21
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55, this.camera_F7E32494_F8B9_7D0A_41D0_4A162B2DC7AF); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.49,
   "image": "this.AnimatedImageResource_E85C1377_F8B9_7BF6_41B7_5C8F714521E3",
   "pitch": -40.89,
   "yaw": 3.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8C6EE68B_BAD3_FD84_41C7_D73D00C270E1",
 "maps": [
  {
   "hfov": 13.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 3.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -40.89
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0653106_BA56_948D_41E2_181F272DC24C, this.camera_F7ECB48E_F8B9_7D16_41DE_E39BD24426E1); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.29,
   "image": "this.AnimatedImageResource_E85CC377_F8B9_7BF6_41E2_53277F981674",
   "pitch": -36.77,
   "yaw": -39.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8C4ABF04_BAD3_EC8D_41DE_D690A4B70AF5",
 "maps": [
  {
   "hfov": 14.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -39.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -36.77
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA, this.camera_F7D7649A_F8B9_7D3E_41D1_983504697191); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.47,
   "image": "this.AnimatedImageResource_E85CA377_F8B9_7BF6_41C4_D2CC9A632315",
   "pitch": -29.91,
   "yaw": 44.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8D903AC9_BAD3_9587_41C3_C424C50E165E",
 "maps": [
  {
   "hfov": 15.47,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 44.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -29.91
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109, this.camera_F735A4AC_F8B9_7D1A_41E4_FB7FABBFCC99); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.25,
   "image": "this.AnimatedImageResource_E85D7377_F8B9_7BF6_41DA_96DCE03C602A",
   "pitch": -31.28,
   "yaw": -157.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8DEDE718_BAD3_BC85_41E1_BFDD7E707E46",
 "maps": [
  {
   "hfov": 15.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -157.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -31.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A, this.camera_F7C1E4A6_F8B9_7D16_41EF_0399C10D2DA5); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.58,
   "image": "this.AnimatedImageResource_E85DE377_F8B9_7BF6_41DC_2CE28677CECF",
   "pitch": -21.67,
   "yaw": -98.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_82126FF0_BAD3_6B85_41C5_EB3E10852014",
 "maps": [
  {
   "hfov": 16.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4, this.camera_F7F92487_F8B9_7D16_41D5_8B9773DB5808); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.66,
   "image": "this.AnimatedImageResource_E85DA37B_F8B9_7BFD_41CA_83B7F982ED80",
   "pitch": -20.99,
   "yaw": -59.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_809C2052_BAD2_F485_41D8_55B7206BBF65",
 "maps": [
  {
   "hfov": 16.66,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -59.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296, this.camera_F7CDE4A0_F8B9_7D0A_41E8_A21067AFDAE2); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.25,
   "image": "this.AnimatedImageResource_E85C937B_F8B9_7BFD_41DD_BEB9B8DB7A0C",
   "pitch": -14.81,
   "yaw": 164.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_81918AA1_BAD2_9584_41BD_987D9D42C714",
 "maps": [
  {
   "hfov": 17.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -14.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55, this.camera_F74E24D8_F8B9_7D3A_41D8_110B36F71044); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.31,
   "image": "this.AnimatedImageResource_E8039360_F8B9_7B0A_41E2_24E4EEB6CAAB",
   "pitch": -41.78,
   "yaw": -5.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE490A27_BA51_948B_41C6_B9B095E256E4",
 "maps": [
  {
   "hfov": 13.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -41.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA, this.camera_E8B3C4E4_F8B9_7D0A_41E5_DBFD72307475); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.31,
   "image": "this.AnimatedImageResource_E8007360_F8B9_7B0A_41D1_DBD4F20C77C6",
   "pitch": -23.94,
   "yaw": -5.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE4B4CA3_BA52_AD84_41D5_128509C8C1F2",
 "maps": [
  {
   "hfov": 16.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -5.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -23.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0647904_BA53_F48D_41DC_A474908390AB, this.camera_F74074DF_F8B9_7D36_41EA_5818D15F2510); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.9,
   "image": "this.AnimatedImageResource_E8002360_F8B9_7B0A_41E9_33B530EE4F00",
   "pitch": -27.03,
   "yaw": 62.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AE126BD7_BA53_EB8B_41E2_647FC2B51350",
 "maps": [
  {
   "hfov": 15.9,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 62.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.03
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.86,
   "image": "this.AnimatedImageResource_E800A360_F8B9_7B0A_41ED_B4D287D7B71D",
   "pitch": -19.13,
   "yaw": 133.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AEA6F84B_BA53_B484_41BD_C4DB20AC2944",
 "maps": [
  {
   "hfov": 16.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 133.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.13
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.21,
   "image": "this.AnimatedImageResource_E8010361_F8B9_7B0A_41E6_F51E403862E3",
   "pitch": -15.36,
   "yaw": 92.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A9FEF6C7_BA53_7D8C_41D2_53C0D0620D46",
 "maps": [
  {
   "hfov": 17.21,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.5,
   "image": "this.AnimatedImageResource_E801D361_F8B9_7B0A_41E1_C778FFC13C19",
   "pitch": -11.24,
   "yaw": 75.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AEEB7C67_BA52_EC8B_41CF_642032902103",
 "maps": [
  {
   "hfov": 17.5,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -11.24
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B064A1EB_BA51_779B_41D4_951DE00139AE, this.camera_E93963D9_F8B9_7B3A_41E3_58A9E521852E); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.82,
   "image": "this.AnimatedImageResource_E872F36A_F8B9_7B1E_41DE_F1BAEF02E08B",
   "pitch": -60.38,
   "yaw": -158.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E069DCB_BAEE_AF9B_41CC_65C7AFAD6274",
 "maps": [
  {
   "hfov": 8.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -158.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -60.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D, this.camera_E9C6A3D2_F8B9_7B0E_41E8_A58E5CEDFCEB); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.64,
   "image": "this.AnimatedImageResource_E873436A_F8B9_7B1E_41D0_25C31A1906D5",
   "pitch": -28.81,
   "yaw": 55.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9E4D4052_BAEE_9484_41A2_49B6BB2C600E",
 "maps": [
  {
   "hfov": 15.64,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 55.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -28.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010B873_BA51_948B_41E1_3614142DA15C, this.camera_E9D743CC_F8B9_7B1B_41E4_20A094349E74); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.62,
   "image": "this.AnimatedImageResource_E873136A_F8B9_7B1E_41DC_D13545CBB82C",
   "pitch": -34.99,
   "yaw": 122.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9F646BD5_BAEF_AB8F_41E4_FE2C94FE54C2",
 "maps": [
  {
   "hfov": 14.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 122.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.59,
   "image": "this.AnimatedImageResource_E873F36B_F8B9_7B1E_41DF_AB845EF08A7B",
   "pitch": -21.6,
   "yaw": 104.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9CFB6099_BAEF_9584_4191_319FDBB3A2A5",
 "maps": [
  {
   "hfov": 16.59,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.6
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.3,
   "image": "this.AnimatedImageResource_E870436B_F8B9_7B1E_41CC_0AB4EC65DC00",
   "pitch": -24.01,
   "yaw": -22.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_993B728E_BAEF_F59D_41E5_D2CF9E91C7B5",
 "maps": [
  {
   "hfov": 16.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -24.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.71,
   "image": "this.AnimatedImageResource_E870336B_F8B9_7B1E_41DC_6775AA7C315F",
   "pitch": -20.57,
   "yaw": 20.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9EEE4275_BAEF_948F_41D3_C1CBDFA32483",
 "maps": [
  {
   "hfov": 16.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA, this.camera_F78CD47B_F8B9_7DFE_41E5_6BEBD22D4EB6); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.77,
   "image": "this.AnimatedImageResource_E87E4361_F8B9_7B0A_41E9_E7D29525E4EE",
   "pitch": -39.52,
   "yaw": -1.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC17D5F8_BAAF_BF85_41C5_8CD384DA1AE7",
 "maps": [
  {
   "hfov": 13.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -39.52
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0653106_BA56_948D_41E2_181F272DC24C, this.camera_F7A0546F_F8B9_7D16_41ED_C9895B5FBF6A); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.89,
   "image": "this.AnimatedImageResource_E87E1361_F8B9_7B0A_41DE_9F7D5CCB40BE",
   "pitch": -60.11,
   "yaw": -167.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC6DE26F_BAAF_949C_41D5_35049F4F8F29",
 "maps": [
  {
   "hfov": 8.89,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -60.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0647904_BA53_F48D_41DC_A474908390AB, this.camera_F799C474_F8B9_7D0B_41AF_DB5463E2BB2F); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.02,
   "image": "this.AnimatedImageResource_E87EE361_F8B9_7B0A_41DB_03BED6D592FC",
   "pitch": -32.65,
   "yaw": 86.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADFF4A79_BAAF_7487_41B1_E281C6DBE46E",
 "maps": [
  {
   "hfov": 15.02,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.65
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.14,
   "image": "this.AnimatedImageResource_E87EB361_F8B9_7B0A_41E4_4FB21891B046",
   "pitch": -16.18,
   "yaw": 109.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A2C2441F_BAAE_BCBC_41D6_DB22A043F864",
 "maps": [
  {
   "hfov": 17.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 109.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.31,
   "image": "this.AnimatedImageResource_E801A361_F8B9_7B0A_41C2_F4D77E9E953A",
   "pitch": -14.12,
   "yaw": 91.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AF51B8A6_BAAE_958C_41E2_183CB31E6D1C",
 "maps": [
  {
   "hfov": 17.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -14.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A, this.camera_F783D481_F8B9_7D0A_41D4_E01B2713D8C2); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.26,
   "image": "this.AnimatedImageResource_E87E7361_F8B9_7B0A_41C7_6B1D3A2630B9",
   "pitch": -19.54,
   "yaw": 155.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AC96E80B_BAAE_F49B_41D1_8FB7CC8D13D6",
 "maps": [
  {
   "hfov": 15.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 155.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.54
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010B873_BA51_948B_41E1_3614142DA15C, this.camera_E86E754A_F8B9_7F1E_41BF_7C9DFF57A962); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.48,
   "image": "this.AnimatedImageResource_E87B3363_F8B9_7B0E_41EC_757F0559FC06",
   "pitch": -45.18,
   "yaw": 32.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A493AD71_BAD2_EC87_41CC_18D742EAD3D0",
 "maps": [
  {
   "hfov": 15.48,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -45.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B064A1EB_BA51_779B_41D4_951DE00139AE, this.camera_E85E6555_F8B9_7F0A_41DF_C20A3F6BD022); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.92,
   "image": "this.AnimatedImageResource_E87B9363_F8B9_7B0E_41D7_FD19BE014F7B",
   "pitch": -24.93,
   "yaw": 35.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A45D6ABC_BAD2_95FD_41C6_02A5C591D244",
 "maps": [
  {
   "hfov": 19.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 35.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -24.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D, this.camera_E87FF53E_F8B9_7F77_41EC_DA1E46833E56); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.71,
   "image": "this.AnimatedImageResource_E8781363_F8B9_7B0E_41E3_D5DD89BD4304",
   "pitch": -19.44,
   "yaw": 87.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A61EE080_BAD1_9584_418E_A14B13FD4348",
 "maps": [
  {
   "hfov": 20.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 87.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.44
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_E8794363_F8B9_7B0E_41D9_F8F6CF6B27AA, 0, this.panorama_B01126A3_BA51_BD8B_41E1_340C936B682D); this.MainViewerVideoPlayer.play()"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.06,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_1_HS_3_0.png",
      "class": "ImageResourceLevel",
      "width": 443,
      "height": 443
     }
    ]
   },
   "pitch": -12.27,
   "yaw": -143.42
  }
 ],
 "id": "overlay_AFE3D160_BB14_A7C0_41E5_3CB56CD68040",
 "maps": [
  {
   "hfov": 10.06,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -143.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 15
     }
    ]
   },
   "pitch": -12.27
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4, this.camera_F71944B8_F8B9_7D7A_41BD_87A652546ED7); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.3,
   "image": "this.AnimatedImageResource_E864A374_F8B9_7B0A_41CF_3A987807686F",
   "pitch": -31.01,
   "yaw": 85.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_89650166_BAD2_B48D_41CC_D6BAD7E25E48",
 "maps": [
  {
   "hfov": 15.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 85.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -31.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8, this.camera_F72654B2_F8B9_7D0E_41D0_49E356D1D1D5); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.2,
   "image": "this.AnimatedImageResource_E8652374_F8B9_7B0A_41E2_13017E7613B2",
   "pitch": -24.83,
   "yaw": -3.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_894BBAF9_BAD2_B587_41E6_671B13EF42A3",
 "maps": [
  {
   "hfov": 16.2,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -24.83
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A, this.camera_F70A84BF_F8B9_7D76_41D8_7537AE0CF121); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.87,
   "image": "this.AnimatedImageResource_E865F374_F8B9_7B0A_41E9_FD7413F32475",
   "pitch": -19,
   "yaw": 29.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8EAFBAA3_BAD2_958B_41D7_10292157BD6D",
 "maps": [
  {
   "hfov": 16.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 29.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.77,
   "image": "this.AnimatedImageResource_E8626374_F8B9_7B0A_41E4_7A4F23D15963",
   "pitch": -20.02,
   "yaw": 116.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8EC12549_BAD2_9C84_41B9_0E7FCB249387",
 "maps": [
  {
   "hfov": 16.77,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 116.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.02
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "if(this.MainViewerVideoPlayer.get('state') == 'playing' && this.playList_E862B374_F8B9_7B0A_41EA_57A5D704550F.get('selectedIndex') == 0) { this.MainViewerVideoPlayer.stop(); } else { this.setMediaBehaviour(this.playList_E862B374_F8B9_7B0A_41EA_57A5D704550F, 0, this.panorama_B0105DFB_BA53_AF7B_41E5_26336013789F);this.MainViewerVideoPlayer.play(); }"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_1_HS_4_0.png",
      "class": "ImageResourceLevel",
      "width": 443,
      "height": 443
     }
    ]
   },
   "pitch": -2.8,
   "yaw": -88.51
  }
 ],
 "id": "overlay_AB2E1147_BAEB_A7CF_41E0_3DF75996F4D7",
 "maps": [
  {
   "hfov": 10.28,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -88.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 15
     }
    ]
   },
   "pitch": -2.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3, this.camera_F65DC449_F8B9_7D1A_41EB_C85077131BFD); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Circle 360 1"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.51,
   "image": "this.AnimatedImageResource_E87ED361_F8B9_7B0A_41C1_6DBF5355E7AA",
   "pitch": -39.11,
   "yaw": 152.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9CD6F7D4_BAF6_9B8D_41CC_04776A63E6F3",
 "maps": [
  {
   "hfov": 16.51,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -39.11
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4, this.camera_E81D5523_F8B9_7F0E_41E4_44FC60905CE6); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.3,
   "image": "this.AnimatedImageResource_E87EB361_F8B9_7B0A_41C9_4B2F4607D731",
   "pitch": -24.49,
   "yaw": -79.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A1D0A9FE_BAB3_777D_41D9_C6CD46C790DF",
 "maps": [
  {
   "hfov": 17.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -79.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -24.49
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC, this.camera_E80FE532_F8B9_7F0E_41D0_9D7881033B18); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.82,
   "image": "this.AnimatedImageResource_E87F2361_F8B9_7B0A_41D7_1845BC24738E",
   "pitch": -20.37,
   "yaw": -161.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A067B411_BAB3_9C84_41DE_4526C2F4CD27",
 "maps": [
  {
   "hfov": 17.82,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -161.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.37
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_E87A4362_F8B9_7B0E_41D1_BFC1C5101A66, 0, this.panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224); this.MainViewerVideoPlayer.play()"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.22,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 443,
      "height": 443
     }
    ]
   },
   "pitch": -37.05,
   "yaw": 95.3
  }
 ],
 "id": "overlay_843FB8D0_BAB1_7584_41C5_E18B0F44E7BE",
 "maps": [
  {
   "hfov": 8.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 15
     }
    ]
   },
   "pitch": -37.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.43,
   "image": "this.AnimatedImageResource_E805035F_F8B9_7B36_41DE_8EEB5040634F",
   "pitch": -12.34,
   "yaw": 93.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AB41A174_BA5E_948D_41D3_B582B71DE068",
 "maps": [
  {
   "hfov": 17.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 93.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -12.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.22,
   "image": "this.AnimatedImageResource_E805E360_F8B9_7B0A_41DB_034E456F7BFB",
   "pitch": -15.22,
   "yaw": 121.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A8239859_BA5F_9484_41DE_B2328F74D94D",
 "maps": [
  {
   "hfov": 17.22,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 121.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55, this.camera_EABBB5EF_F8B9_7F16_41D1_1C46DB057C91); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.7,
   "image": "this.AnimatedImageResource_E8021360_F8B9_7B0A_41BC_F83952EB2182",
   "pitch": -57.09,
   "yaw": -160.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A82370E8_BA53_9585_41E5_421BFC71FE1C",
 "maps": [
  {
   "hfov": 9.7,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -160.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -57.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0653106_BA56_948D_41E2_181F272DC24C, this.camera_E95935E2_F8B9_7F0E_41DE_F1BF2B4B7628); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.6,
   "image": "this.AnimatedImageResource_E802F360_F8B9_7B0A_41E2_7630DB82A4B7",
   "pitch": -35.12,
   "yaw": -172.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A8DA0E98_BA52_AD85_41D2_4FC8E5242F4D",
 "maps": [
  {
   "hfov": 14.6,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -172.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.12
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0647904_BA53_F48D_41DC_A474908390AB, this.camera_E94875E8_F8B9_7F1A_41E8_724E8834A942); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.91,
   "image": "this.AnimatedImageResource_E8034360_F8B9_7B0A_41C6_E9DA925C6B57",
   "pitch": -33.34,
   "yaw": 94.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A8C9AE01_BA57_AC87_41DA_39F4C63CBBCE",
 "maps": [
  {
   "hfov": 14.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 94.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.34
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.1,
   "image": "this.AnimatedImageResource_E8032360_F8B9_7B0A_41E0_E8C57438F57E",
   "pitch": -16.59,
   "yaw": 151.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AFA4E865_BAB1_948F_41D4_BF13AB5A6765",
 "maps": [
  {
   "hfov": 17.1,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 151.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0105DFB_BA53_AF7B_41E5_26336013789F, this.camera_EAAC1411_F8B9_7D0A_41CE_5EBECBED856E); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.56,
   "image": "this.AnimatedImageResource_E8636374_F8B9_7B0A_41D7_8C359A220B28",
   "pitch": -35.33,
   "yaw": -49.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8E5DDA68_BAD7_B484_41D2_0C6F873C39D3",
 "maps": [
  {
   "hfov": 14.56,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -49.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224, this.camera_F667A43C_F8B9_7D7A_41DB_10A0D16D9880); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.96,
   "image": "this.AnimatedImageResource_E863C374_F8B9_7B0A_41D3_08E023DDC068",
   "pitch": -18.17,
   "yaw": -129.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8FAB185B_BAD7_94BB_41B4_9240E368D75D",
 "maps": [
  {
   "hfov": 16.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -129.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8, this.camera_EABC240A_F8B9_7D1F_41CB_4EA2920059C8); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.26,
   "image": "this.AnimatedImageResource_E863B375_F8B9_7BF5_41CC_51555A0A6AF4",
   "pitch": -24.35,
   "yaw": 38.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8EE13ACF_BAD7_F59C_41C8_467EC6E3CA69",
 "maps": [
  {
   "hfov": 16.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 38.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -24.35
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A, this.camera_F6616443_F8B9_7D0E_41EE_6E7F4ADAA70D); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.79,
   "image": "this.AnimatedImageResource_E8601375_F8B9_7BF5_41E4_002CA6E3A569",
   "pitch": -27.78,
   "yaw": 90.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8E15AF7F_BAD7_AB7B_41E7_409727092DCE",
 "maps": [
  {
   "hfov": 15.79,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 90.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.78
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D, this.camera_E94DA404_F8B9_7D0A_41E7_34452221ABC4); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.43,
   "image": "this.AnimatedImageResource_E860E375_F8B9_7BF5_41D3_ED534994B370",
   "pitch": -22.98,
   "yaw": 130.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8E7BC030_BAD7_9485_41E5_7A45A598E956",
 "maps": [
  {
   "hfov": 16.43,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 130.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E, this.camera_F7A40644_F8B9_7D0A_41E0_D0183961E166); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.96,
   "image": "this.AnimatedImageResource_E86FC36B_F8B9_7B1E_41B1_0D8BE3DAB8C1",
   "pitch": -33.07,
   "yaw": -22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ABDE1085_BA51_758F_41DB_FF4516DC950B",
 "maps": [
  {
   "hfov": 14.96,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109, this.camera_F7B1C637_F8B9_7D76_41B2_90EE01A9B3FD); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.58,
   "image": "this.AnimatedImageResource_E86FA36C_F8B9_7B1A_41DE_689B7E82FCAA",
   "pitch": -21.74,
   "yaw": -12.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_92C5FCBC_BAF2_ADFD_41C1_B6B7C66C07C3",
 "maps": [
  {
   "hfov": 16.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -12.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.74
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.25,
   "image": "this.AnimatedImageResource_E86C036C_F8B9_7B1A_41E8_F6D1B1C56EB3",
   "pitch": -14.88,
   "yaw": 4.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9237A270_BAF1_7485_41DD_5905EC111559",
 "maps": [
  {
   "hfov": 17.25,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -14.88
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296, this.camera_F7AA563D_F8B9_7D7A_41C2_C0BF355DC9E5); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.53,
   "image": "this.AnimatedImageResource_E86CE36C_F8B9_7B1A_41E2_ADB3286ABE69",
   "pitch": -35.47,
   "yaw": 98.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_92081F33_BAF1_6C8B_41E1_D118148C290B",
 "maps": [
  {
   "hfov": 14.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 98.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -35.47
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.13,
   "image": "this.AnimatedImageResource_E86D436C_F8B9_7B1A_41C0_A2C1A9425202",
   "pitch": -16.25,
   "yaw": 81.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_92A10C75_BAF1_EC8C_4196_20BAD5D55F5B",
 "maps": [
  {
   "hfov": 17.13,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 81.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.25
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.36,
   "image": "this.AnimatedImageResource_E87A7362_F8B9_7B0E_41E4_E9A0B7D97C35",
   "pitch": -30.59,
   "yaw": 92.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A7D5FB39_BAD2_9487_41D6_5183BAB9168F",
 "maps": [
  {
   "hfov": 15.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 92.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224, this.camera_F75F54D2_F8B9_7D0E_41B0_727817E323C5); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.85,
   "image": "this.AnimatedImageResource_E87A8362_F8B9_7B0E_41E2_CDBC2D269E78",
   "pitch": -33.68,
   "yaw": -173.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A71F25D3_BAD2_FF8B_41E2_4AB5F0C49222",
 "maps": [
  {
   "hfov": 14.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -173.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -33.68
  }
 ]
},
{
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.setMediaBehaviour(this.playList_E87B2363_F8B9_7B0E_4193_0CDCEFB7DA13, 0, this.panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC); this.MainViewerVideoPlayer.play()"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.14,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_1_HS_2_0.png",
      "class": "ImageResourceLevel",
      "width": 443,
      "height": 443
     }
    ]
   },
   "pitch": -9.87,
   "yaw": -90.77
  }
 ],
 "id": "overlay_A8C78EE5_BB14_BAC0_41D8_25149253EC7B",
 "maps": [
  {
   "hfov": 10.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -90.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 15,
      "height": 15
     }
    ]
   },
   "pitch": -9.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0105DFB_BA53_AF7B_41E5_26336013789F, this.camera_E937D5BD_F8B9_7F7A_41C7_98D892E3FA8E); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.15,
   "image": "this.AnimatedImageResource_E8646373_F8B9_7B0E_41B9_A0CC5683047C",
   "pitch": -25.17,
   "yaw": -106.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_88B00543_BAEE_9C8B_41B9_32FD435C6C7A",
 "maps": [
  {
   "hfov": 16.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -106.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A, this.camera_E91625CA_F8B9_7F1E_41E5_AB62DC5BFAD5); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.87,
   "image": "this.AnimatedImageResource_E864D373_F8B9_7B0E_41CB_9F37FA63EFED",
   "pitch": -27.23,
   "yaw": 145.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8889289E_BAEE_95BD_41AF_6D31D6515F46",
 "maps": [
  {
   "hfov": 15.87,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 145.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.23
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.01,
   "image": "this.AnimatedImageResource_E867C373_F8B9_7B0E_41E4_18B21C540B02",
   "pitch": -17.62,
   "yaw": 91.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_885B3F75_BAD1_6C8C_41D4_33915F79727F",
 "maps": [
  {
   "hfov": 17.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 91.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -17.62
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4, this.camera_E9C555B6_F8B9_7F77_41D5_C2CC51B1BF7B); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.8,
   "image": "this.AnimatedImageResource_E8679374_F8B9_7B0A_41DC_1DADFC0653EF",
   "pitch": -19.68,
   "yaw": 47.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8974E2CE_BAD1_B59D_41E0_5CDB4F8F4C6B",
 "maps": [
  {
   "hfov": 16.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 47.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4, this.camera_E927D5C4_F8B9_7F0A_41EA_BEB795D21B24); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.15,
   "image": "this.AnimatedImageResource_E8647374_F8B9_7B0A_4177_370B8B99D0D2",
   "pitch": -25.17,
   "yaw": -155.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8E4BB8C2_BAD1_F585_41E0_A4D1E526C9B9",
 "maps": [
  {
   "hfov": 16.15,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -155.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "var src = this.playGlobalAudioWhilePlay(this.mainPlayList, 22, this.audio_FA6F9951_EA25_AFB4_41A8_ECD8625266D5)"
  }
 ],
 "data": {
  "label": "Image"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.67,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_5_0.png",
      "class": "ImageResourceLevel",
      "width": 447,
      "height": 443
     }
    ]
   },
   "pitch": -42.4,
   "yaw": 135.98
  }
 ],
 "id": "overlay_FA1CFB2F_EA25_A3EB_41D8_B85472C92647",
 "maps": [
  {
   "hfov": 7.67,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 135.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 15
     }
    ]
   },
   "pitch": -42.4
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0647904_BA53_F48D_41DC_A474908390AB, this.camera_F7B79463_F8B9_7D0E_41CC_5DB984AD0A72); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.31,
   "image": "this.AnimatedImageResource_E86DF36C_F8B9_7B1A_41C8_1F93F0847910",
   "pitch": -30.94,
   "yaw": -1.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A8413842_BA53_9485_41DE_27056382CC92",
 "maps": [
  {
   "hfov": 15.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -1.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -30.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.98,
   "image": "this.AnimatedImageResource_E86A736D_F8B9_7B1A_41EE_007F9820BD20",
   "pitch": -17.9,
   "yaw": -15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_911A3804_BAF3_748D_41C9_BE807257EC52",
 "maps": [
  {
   "hfov": 16.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -17.9
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1, this.camera_F640945C_F8B9_7D3A_41E3_F95872ACE121); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.46,
   "image": "this.AnimatedImageResource_E86AD36D_F8B9_7B1A_41B9_07AB068C0CC4",
   "pitch": -22.7,
   "yaw": -175.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_94EA0C10_BAF1_AC84_41DA_00837E6EE27B",
 "maps": [
  {
   "hfov": 16.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -175.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.7
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E, this.camera_F64BC456_F8B9_7D36_41E8_008BEB1C703A); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.46,
   "image": "this.AnimatedImageResource_E86AA372_F8B9_7B0E_41E5_A71B16D35D13",
   "pitch": -45.69,
   "yaw": -165.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_953F3904_BAF1_F48D_41C3_B7EF20E051BC",
 "maps": [
  {
   "hfov": 12.46,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -45.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067F8A0_BA52_9584_4189_33F67C0FF296, this.camera_F654F450_F8B9_7D0A_41E4_993B458240D6); this.mainPlayList.set('selectedIndex', 15)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.62,
   "image": "this.AnimatedImageResource_E86B1372_F8B9_7B0E_41E2_D20C760DEE86",
   "pitch": -21.33,
   "yaw": 152.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8A18807C_BAF1_957D_41D1_2D374D225CDE",
 "maps": [
  {
   "hfov": 16.62,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.33
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.23,
   "image": "this.AnimatedImageResource_E86BF372_F8B9_7B0E_41E3_C724136A76CC",
   "pitch": -15.15,
   "yaw": 114.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_8B5B8E98_BAF1_6D85_41B3_11386C1952B8",
 "maps": [
  {
   "hfov": 17.23,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 114.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.54,
   "image": "this.AnimatedImageResource_E8685372_F8B9_7B0E_41CF_3B72C561F9D8",
   "pitch": -22.02,
   "yaw": -53.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A321ABA9_BB14_BB43_41D0_9F6CB3C6FBB7",
 "maps": [
  {
   "hfov": 16.54,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -53.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.02
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55, this.camera_E841556E_F8B9_7F16_41D4_97A7FD47A10B); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.14,
   "image": "this.AnimatedImageResource_E8615375_F8B9_7BF5_41A6_959434526AD1",
   "pitch": -16.18,
   "yaw": 53.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A2F391BE_BAB6_B7FD_41E2_0347A6735E27",
 "maps": [
  {
   "hfov": 17.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 53.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.18
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0647904_BA53_F48D_41DC_A474908390AB, this.camera_E9A31586_F8B9_7F16_41ED_664721F1C418); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.01,
   "image": "this.AnimatedImageResource_E8611375_F8B9_7BF5_41CA_B15662BE8D02",
   "pitch": -17.55,
   "yaw": 82.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A26E20A7_BAB6_958B_41A8_6B5B59B8206E",
 "maps": [
  {
   "hfov": 17.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -17.55
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.92,
   "image": "this.AnimatedImageResource_E8618375_F8B9_7BF5_41E3_FAE2771EA9FE",
   "pitch": -18.58,
   "yaw": 162.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_AD59AA3F_BAB6_F4FB_41C3_B1DF8C419C69",
 "maps": [
  {
   "hfov": 16.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 162.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8, this.camera_E8517562_F8B9_7F0E_41E3_A6CF5EFE0281); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.11,
   "image": "this.AnimatedImageResource_E85E5375_F8B9_7BF5_41EC_6CE7A4FE757E",
   "pitch": -25.45,
   "yaw": -25.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A2BCB6F7_BAB6_BD8B_41D2_F1ECB6CBE2BE",
 "maps": [
  {
   "hfov": 16.11,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -25.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.45
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4, this.camera_E9932591_F8B9_7F0A_41D7_07699FD6CD69); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.58,
   "image": "this.AnimatedImageResource_E85E3375_F8B9_7BF5_41CC_5ED2E25D2A7B",
   "pitch": -21.67,
   "yaw": 25.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A3A35832_BAB7_7485_41C7_4871BCEE57AC",
 "maps": [
  {
   "hfov": 16.58,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 25.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.67
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D, this.camera_E982659C_F8B9_7F3A_41BC_3253EA011E4C); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.14,
   "image": "this.AnimatedImageResource_E85EB375_F8B9_7BF5_41E5_5470676B7DDB",
   "pitch": -31.97,
   "yaw": -165.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_ADD833D1_BAB7_BB84_41E6_F92D3B1F718E",
 "maps": [
  {
   "hfov": 15.14,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -165.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -31.97
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B06436FA_BA53_9D84_41D0_6759705A45D4, this.camera_E9B0957A_F8B9_7FFE_41D6_F3CC073AC64A); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.93,
   "image": "this.AnimatedImageResource_E85F0375_F8B9_7BF5_41EB_AAB8750D7CE2",
   "pitch": -26.82,
   "yaw": -85.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A0A77500_BAB3_FC85_41E0_0749927C9B1B",
 "maps": [
  {
   "hfov": 15.93,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -85.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -26.82
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0105DFB_BA53_AF7B_41E5_26336013789F, this.camera_E9F235A2_F8B9_7F0F_41D7_605869B3D1CB); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.92,
   "image": "this.AnimatedImageResource_E85FA375_F8B9_7BF5_41DA_6DDA51E353FD",
   "pitch": -18.58,
   "yaw": -60.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_A39415E2_BAB3_BF85_41CD_72BB3E1E77F3",
 "maps": [
  {
   "hfov": 16.92,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -60.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1, this.camera_E8CAD510_F8B9_7F0A_41E8_85624BE24D75); this.mainPlayList.set('selectedIndex', 16)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.17,
   "image": "this.AnimatedImageResource_E871C36B_F8B9_7B1E_41B0_9C768DBBC0A4",
   "pitch": -31.76,
   "yaw": -15.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_B5B663F4_BA51_9B8D_41C2_DABCBA82EE94",
 "maps": [
  {
   "hfov": 15.17,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -15.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -31.76
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3, this.camera_E82D451D_F8B9_7F3A_41EC_2EED5A328D30); this.mainPlayList.set('selectedIndex', 14)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.36,
   "image": "this.AnimatedImageResource_E871936B_F8B9_7B1E_41E5_A8917578B093",
   "pitch": -23.53,
   "yaw": 153.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C07AC54_BAF6_EC8D_41E2_D1C46036B2D9",
 "maps": [
  {
   "hfov": 16.36,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 153.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -23.53
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E, this.camera_E83D6517_F8B9_7F36_41EB_8EADE8E17412); this.mainPlayList.set('selectedIndex', 17)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.05,
   "image": "this.AnimatedImageResource_E86E036B_F8B9_7B1E_41D5_63F1A73B6C46",
   "pitch": -25.93,
   "yaw": 18.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9C71F31A_BAF6_9485_41E1_2265F1699FE1",
 "maps": [
  {
   "hfov": 16.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 18.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -25.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109, this.camera_E8E8B503_F8B9_7F0E_41EE_B8394D9F2FDA); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.8,
   "image": "this.AnimatedImageResource_E86ED36B_F8B9_7B1E_41DE_2D89B2E3B322",
   "pitch": -19.75,
   "yaw": 37.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9DA3B9B5_BAF6_B78F_41E6_460DDB9B5D58",
 "maps": [
  {
   "hfov": 16.8,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 37.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.75
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0647904_BA53_F48D_41DC_A474908390AB, this.camera_E8DA950A_F8B9_7F1E_41ED_6C5220705380); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.19,
   "image": "this.AnimatedImageResource_E86F536B_F8B9_7B1E_41BF_F3F8F7684434",
   "pitch": -15.63,
   "yaw": 61.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9D7614FF_BAF1_9D7B_41D2_BFB5275CDC1E",
 "maps": [
  {
   "hfov": 17.19,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 61.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.63
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0647904_BA53_F48D_41DC_A474908390AB, this.camera_E9E433C5_F8B9_7B15_41BB_2F804C143E4F); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.49,
   "image": "this.AnimatedImageResource_E868C372_F8B9_7B0E_41D8_E8CFD1B7F772",
   "pitch": -22.5,
   "yaw": 57.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_948D01A4_BAF1_B78D_41D7_98627DEB4A50",
 "maps": [
  {
   "hfov": 16.49,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.86,
   "image": "this.AnimatedImageResource_E8694372_F8B9_7B0E_41B5_F27712CF2A95",
   "pitch": -27.3,
   "yaw": 15.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_94C53798_BAF1_BB85_41E4_022AFEC9FA60",
 "maps": [
  {
   "hfov": 15.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 15.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010D9D6_BA53_778D_41D1_CC951B567394, this.camera_E99343AE_F8B9_7B16_41E5_B8039526D5E2); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.71,
   "image": "this.AnimatedImageResource_E8691372_F8B9_7B0E_41E9_0F912943430B",
   "pitch": -34.51,
   "yaw": -167.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_9426C6CF_BAF1_9D9B_41E4_75B15D1D89DD",
 "maps": [
  {
   "hfov": 14.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -167.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -34.51
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B0136010_BA53_F485_41E6_E0082A05BA2A, this.camera_E9F4E3BF_F8B9_7B76_41E9_87C973EE457F); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.83,
   "image": "this.AnimatedImageResource_E869E373_F8B9_7B0E_41C3_ACD0AC2C05AE",
   "pitch": -19.41,
   "yaw": 115.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_94698743_BAF1_FC8B_41E1_00C3D621BDB3",
 "maps": [
  {
   "hfov": 16.83,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 115.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.41
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8, this.camera_E98213B8_F8B9_7B7B_41EA_4CAE0E153B0B); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "data": {
  "label": "Arrow 07a"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.53,
   "image": "this.AnimatedImageResource_E8665373_F8B9_7B0E_41E8_E33FAC89B16C",
   "pitch": -22.15,
   "yaw": 149.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_957A6429_BAF1_7C84_41D6_CABEA336DC8D",
 "maps": [
  {
   "hfov": 16.53,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 149.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.15
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E877D369_F8B9_7B1A_41CD_DEA90AD47125",
 "levels": [
  {
   "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8744369_F8B9_7B1A_41AE_70237A0360CF",
 "levels": [
  {
   "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E876B369_F8B9_7B1A_41D5_CB4F1BE3A728",
 "levels": [
  {
   "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8777369_F8B9_7B1A_41DE_80CCB5A7CFE1",
 "levels": [
  {
   "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E877C36A_F8B9_7B1E_41E2_2609B082E737",
 "levels": [
  {
   "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E874436A_F8B9_7B1E_41E6_99BB1E2EE59F",
 "levels": [
  {
   "url": "media/panorama_B010B873_BA51_948B_41E1_3614142DA15C_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86D336C_F8B9_7B1A_41D6_331D8469D257",
 "levels": [
  {
   "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86C736C_F8B9_7B1A_41E1_D6245752BA7C",
 "levels": [
  {
   "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86CE36C_F8B9_7B1A_419B_28B9DF99019B",
 "levels": [
  {
   "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86D436C_F8B9_7B1A_41C9_F5633399F2DB",
 "levels": [
  {
   "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86D236C_F8B9_7B1A_41ED_347DB1F20436",
 "levels": [
  {
   "url": "media/panorama_B010D402_BA52_9C85_41C7_21EC33F3FE3E_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E807E35E_F8B9_7B36_41E7_CB76A1B7FB83",
 "levels": [
  {
   "url": "media/panorama_B017933A_BA57_7485_41E0_E1DED9EB5755_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E874236A_F8B9_7B1E_41DD_E6273F5A9870",
 "levels": [
  {
   "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E874836A_F8B9_7B1E_41D4_A675F6EAFA00",
 "levels": [
  {
   "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E875636A_F8B9_7B1E_41DA_215BFF978AD0",
 "levels": [
  {
   "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E875336A_F8B9_7B1E_41D0_C93328F7D4FA",
 "levels": [
  {
   "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E875836A_F8B9_7B1E_41E9_33F9C3967026",
 "levels": [
  {
   "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E872736A_F8B9_7B1E_41DF_3E4F39864FAE",
 "levels": [
  {
   "url": "media/panorama_B064A1EB_BA51_779B_41D4_951DE00139AE_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E866D373_F8B9_7B0E_41D3_8A964ED0C2E4",
 "levels": [
  {
   "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E866B373_F8B9_7B0E_41EC_128196FDA3E0",
 "levels": [
  {
   "url": "media/panorama_B010D9D6_BA53_778D_41D1_CC951B567394_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E870B36B_F8B9_7B1E_41D0_E7E4E51BFFF1",
 "levels": [
  {
   "url": "media/panorama_B01A7F21_BA52_AC87_4172_4D398DA304D3_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8671373_F8B9_7B0E_41E6_A0F732C739EA",
 "levels": [
  {
   "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8679373_F8B9_7B0E_41E9_E22DF38B135D",
 "levels": [
  {
   "url": "media/panorama_B064C2E2_BA53_9585_4199_6381D586F934_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8796368_F8B9_7B1A_41D7_D16325DD4164",
 "levels": [
  {
   "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E879E369_F8B9_7B1A_41E4_2A71CB86F47F",
 "levels": [
  {
   "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E879B369_F8B9_7B1A_41E0_CEEFEBB88FCD",
 "levels": [
  {
   "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8761369_F8B9_7B1A_41E9_9495DA546BD3",
 "levels": [
  {
   "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E876F369_F8B9_7B1A_41EA_098D4B3C1C70",
 "levels": [
  {
   "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8774369_F8B9_7B1A_41ED_0C85470F42F0",
 "levels": [
  {
   "url": "media/panorama_B0649F8B_BA51_AB9B_41C0_FE515DDBDB1D_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85C1377_F8B9_7BF6_41B7_5C8F714521E3",
 "levels": [
  {
   "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85CC377_F8B9_7BF6_41E2_53277F981674",
 "levels": [
  {
   "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85CA377_F8B9_7BF6_41C4_D2CC9A632315",
 "levels": [
  {
   "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85D7377_F8B9_7BF6_41DA_96DCE03C602A",
 "levels": [
  {
   "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85DE377_F8B9_7BF6_41DC_2CE28677CECF",
 "levels": [
  {
   "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85DA37B_F8B9_7BFD_41CA_83B7F982ED80",
 "levels": [
  {
   "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85C937B_F8B9_7BFD_41DD_BEB9B8DB7A0C",
 "levels": [
  {
   "url": "media/panorama_B0647904_BA53_F48D_41DC_A474908390AB_1_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8039360_F8B9_7B0A_41E2_24E4EEB6CAAB",
 "levels": [
  {
   "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8007360_F8B9_7B0A_41D1_DBD4F20C77C6",
 "levels": [
  {
   "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8002360_F8B9_7B0A_41E9_33B530EE4F00",
 "levels": [
  {
   "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E800A360_F8B9_7B0A_41ED_B4D287D7B71D",
 "levels": [
  {
   "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8010361_F8B9_7B0A_41E6_F51E403862E3",
 "levels": [
  {
   "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E801D361_F8B9_7B0A_41E1_C778FFC13C19",
 "levels": [
  {
   "url": "media/panorama_B0653106_BA56_948D_41E2_181F272DC24C_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E872F36A_F8B9_7B1E_41DE_F1BAEF02E08B",
 "levels": [
  {
   "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E873436A_F8B9_7B1E_41D0_25C31A1906D5",
 "levels": [
  {
   "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E873136A_F8B9_7B1E_41DC_D13545CBB82C",
 "levels": [
  {
   "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E873F36B_F8B9_7B1E_41DF_AB845EF08A7B",
 "levels": [
  {
   "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E870436B_F8B9_7B1E_41CC_0AB4EC65DC00",
 "levels": [
  {
   "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E870336B_F8B9_7B1E_41DC_6775AA7C315F",
 "levels": [
  {
   "url": "media/panorama_B010FAC6_BA51_758C_41E5_CD89D5C45E8A_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87E4361_F8B9_7B0A_41E9_E7D29525E4EE",
 "levels": [
  {
   "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87E1361_F8B9_7B0A_41DE_9F7D5CCB40BE",
 "levels": [
  {
   "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87EE361_F8B9_7B0A_41DB_03BED6D592FC",
 "levels": [
  {
   "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87EB361_F8B9_7B0A_41E4_4FB21891B046",
 "levels": [
  {
   "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E801A361_F8B9_7B0A_41C2_F4D77E9E953A",
 "levels": [
  {
   "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87E7361_F8B9_7B0A_41C7_6B1D3A2630B9",
 "levels": [
  {
   "url": "media/panorama_B01099EE_BA56_979C_41E5_3197D5F8ED55_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87B3363_F8B9_7B0E_41EC_757F0559FC06",
 "levels": [
  {
   "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87B9363_F8B9_7B0E_41D7_FD19BE014F7B",
 "levels": [
  {
   "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8781363_F8B9_7B0E_41E3_D5DD89BD4304",
 "levels": [
  {
   "url": "media/panorama_B01126A3_BA51_BD8B_41E1_340C936B682D_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E864A374_F8B9_7B0A_41CF_3A987807686F",
 "levels": [
  {
   "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8652374_F8B9_7B0A_41E2_13017E7613B2",
 "levels": [
  {
   "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E865F374_F8B9_7B0A_41E9_FD7413F32475",
 "levels": [
  {
   "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8626374_F8B9_7B0A_41E4_7A4F23D15963",
 "levels": [
  {
   "url": "media/panorama_B0105DFB_BA53_AF7B_41E5_26336013789F_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87ED361_F8B9_7B0A_41C1_6DBF5355E7AA",
 "levels": [
  {
   "url": "media/panorama_B01036B7_BA56_BD8B_41E1_D765D537912D_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 800,
   "height": 1200
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87EB361_F8B9_7B0A_41C9_4B2F4607D731",
 "levels": [
  {
   "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87F2361_F8B9_7B0A_41D7_1845BC24738E",
 "levels": [
  {
   "url": "media/panorama_B065573F_BA51_BCFC_41C5_9EAEB9CCF224_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E805035F_F8B9_7B36_41DE_8EEB5040634F",
 "levels": [
  {
   "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E805E360_F8B9_7B0A_41DB_034E456F7BFB",
 "levels": [
  {
   "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8021360_F8B9_7B0A_41BC_F83952EB2182",
 "levels": [
  {
   "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E802F360_F8B9_7B0A_41E2_7630DB82A4B7",
 "levels": [
  {
   "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8034360_F8B9_7B0A_41C6_E9DA925C6B57",
 "levels": [
  {
   "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8032360_F8B9_7B0A_41E0_E8C57438F57E",
 "levels": [
  {
   "url": "media/panorama_B0109790_BA56_BB85_41D7_E5216FCFA9AA_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8636374_F8B9_7B0A_41D7_8C359A220B28",
 "levels": [
  {
   "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E863C374_F8B9_7B0A_41D3_08E023DDC068",
 "levels": [
  {
   "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E863B375_F8B9_7BF5_41CC_51555A0A6AF4",
 "levels": [
  {
   "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8601375_F8B9_7BF5_41E4_002CA6E3A569",
 "levels": [
  {
   "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E860E375_F8B9_7BF5_41D3_ED534994B370",
 "levels": [
  {
   "url": "media/panorama_B06436FA_BA53_9D84_41D0_6759705A45D4_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86FC36B_F8B9_7B1E_41B1_0D8BE3DAB8C1",
 "levels": [
  {
   "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86FA36C_F8B9_7B1A_41DE_689B7E82FCAA",
 "levels": [
  {
   "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86C036C_F8B9_7B1A_41E8_F6D1B1C56EB3",
 "levels": [
  {
   "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86CE36C_F8B9_7B1A_41E2_ADB3286ABE69",
 "levels": [
  {
   "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86D436C_F8B9_7B1A_41C0_A2C1A9425202",
 "levels": [
  {
   "url": "media/panorama_B013920C_BA52_F49C_41D4_5EA7B5EBA0A1_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87A7362_F8B9_7B0E_41E4_E9A0B7D97C35",
 "levels": [
  {
   "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E87A8362_F8B9_7B0E_41E2_CDBC2D269E78",
 "levels": [
  {
   "url": "media/panorama_B0654BD4_BA51_EB8D_418E_51FFB48A74DC_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8646373_F8B9_7B0E_41B9_A0CC5683047C",
 "levels": [
  {
   "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E864D373_F8B9_7B0E_41CB_9F37FA63EFED",
 "levels": [
  {
   "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E867C373_F8B9_7B0E_41E4_18B21C540B02",
 "levels": [
  {
   "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8679374_F8B9_7B0A_41DC_1DADFC0653EF",
 "levels": [
  {
   "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8647374_F8B9_7B0A_4177_370B8B99D0D2",
 "levels": [
  {
   "url": "media/panorama_B010ABB2_BA53_AB85_41DD_18CAE380BEA8_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86DF36C_F8B9_7B1A_41C8_1F93F0847910",
 "levels": [
  {
   "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86A736D_F8B9_7B1A_41EE_007F9820BD20",
 "levels": [
  {
   "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86AD36D_F8B9_7B1A_41B9_07AB068C0CC4",
 "levels": [
  {
   "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86AA372_F8B9_7B0E_41E5_A71B16D35D13",
 "levels": [
  {
   "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86B1372_F8B9_7B0E_41E2_D20C760DEE86",
 "levels": [
  {
   "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86BF372_F8B9_7B0E_41E3_C724136A76CC",
 "levels": [
  {
   "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8685372_F8B9_7B0E_41CF_3B72C561F9D8",
 "levels": [
  {
   "url": "media/panorama_B067BCF0_BA52_AD85_41A9_4A37F8453109_1_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8615375_F8B9_7BF5_41A6_959434526AD1",
 "levels": [
  {
   "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8611375_F8B9_7BF5_41CA_B15662BE8D02",
 "levels": [
  {
   "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8618375_F8B9_7BF5_41E3_FAE2771EA9FE",
 "levels": [
  {
   "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85E5375_F8B9_7BF5_41EC_6CE7A4FE757E",
 "levels": [
  {
   "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85E3375_F8B9_7BF5_41CC_5ED2E25D2A7B",
 "levels": [
  {
   "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85EB375_F8B9_7BF5_41E5_5470676B7DDB",
 "levels": [
  {
   "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85F0375_F8B9_7BF5_41EB_AAB8750D7CE2",
 "levels": [
  {
   "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E85FA375_F8B9_7BF5_41DA_6DDA51E353FD",
 "levels": [
  {
   "url": "media/panorama_B0136010_BA53_F485_41E6_E0082A05BA2A_1_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E871C36B_F8B9_7B1E_41B0_9C768DBBC0A4",
 "levels": [
  {
   "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E871936B_F8B9_7B1E_41E5_A8917578B093",
 "levels": [
  {
   "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86E036B_F8B9_7B1E_41D5_63F1A73B6C46",
 "levels": [
  {
   "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86ED36B_F8B9_7B1E_41DE_2D89B2E3B322",
 "levels": [
  {
   "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E86F536B_F8B9_7B1E_41BF_F3F8F7684434",
 "levels": [
  {
   "url": "media/panorama_B067F8A0_BA52_9584_4189_33F67C0FF296_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E868C372_F8B9_7B0E_41D8_E8CFD1B7F772",
 "levels": [
  {
   "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8694372_F8B9_7B0E_41B5_F27712CF2A95",
 "levels": [
  {
   "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8691372_F8B9_7B0E_41E9_0F912943430B",
 "levels": [
  {
   "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E869E373_F8B9_7B0E_41C3_ACD0AC2C05AE",
 "levels": [
  {
   "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_E8665373_F8B9_7B0E_41E8_E33FAC89B16C",
 "levels": [
  {
   "url": "media/panorama_B067BEE3_BA52_AD8B_41CB_C6D9839C2FB4_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1040,
   "height": 900
  }
 ]
}],
 "start": "this.init()",
 "data": {
  "name": "Player460"
 },
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "defaultVRPointer": "laser",
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "existsKey": function(key){  return key in window; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getKey": function(key){  return window[key]; }
 },
 "horizontalAlign": "left",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "minWidth": 20,
 "creationPolicy": "inAdvance",
 "verticalAlign": "top",
 "height": "100%",
 "downloadEnabled": false,
 "layout": "absolute",
 "paddingTop": 0,
 "class": "Player",
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "shadow": false,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
