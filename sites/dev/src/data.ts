export type Geo={
  "features":Feature[],
  "type": string
}
export type Feature={
  "geometry": Geometry,
  "id":number;
  "properties": Properties,
  "type":string
}
export type Geometry={
    "coordinates": number[],
    "type": string
}
export type Properties={
  [key: string]: any
}
/*

// Iterate over all fields in the properties object
for (const key in featureProperties) {
  if (featureProperties.hasOwnProperty(key)) {
    console.log(`Key: ${key}, Value: ${featureProperties[key]}`);
  }
}


*/




export const myData:Geo={
  "features": [
  {
  "geometry": {
  "coordinates": [
  6.67845,
  15.15102
  ],
  "type": "Point"
  },
  "id": 0,
  "properties": {
  "NAME": "Ligr Wodaize Berne",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  2.60099,
  10.95588
  ],
  "type": "Point"
  },
  "id": 1,
  "properties": {
  "NAME": "Himsiril Keep",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  2.80909,
  11.04548
  ],
  "type": "Point"
  },
  "id": 2,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  2.96202,
  10.72403
  ],
  "type": "Point"
  },
  "id": 3,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  2.84022,
  10.42961
  ],
  "type": "Point"
  },
  "id": 4,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  2.92679,
  10.28269
  ],
  "type": "Point"
  },
  "id": 5,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  2.93251,
  10.13412
  ],
  "type": "Point"
  },
  "id": 6,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  2.87393,
  10.11043
  ],
  "type": "Point"
  },
  "id": 7,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  3.08732,
  8.2102
  ],
  "type": "Point"
  },
  "id": 8,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  3.36162,
  10.84062
  ],
  "type": "Point"
  },
  "id": 9,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  3.49185,
  10.99548
  ],
  "type": "Point"
  },
  "id": 10,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  3.35171,
  4.27559
  ],
  "type": "Point"
  },
  "id": 11,
  "properties": {
  "NAME": "Tharogrondost",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.17335,
  10.16359
  ],
  "type": "Point"
  },
  "id": 12,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.26835,
  8.08445
  ],
  "type": "Point"
  },
  "id": 13,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.27556,
  9.97945
  ],
  "type": "Point"
  },
  "id": 14,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.55029,
  10.93939
  ],
  "type": "Point"
  },
  "id": 15,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.2803,
  10.99571
  ],
  "type": "Point"
  },
  "id": 16,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.25523,
  8.74851
  ],
  "type": "Point"
  },
  "id": 17,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.27374,
  10.18835
  ],
  "type": "Point"
  },
  "id": 18,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.27276,
  11.14233
  ],
  "type": "Point"
  },
  "id": 19,
  "properties": {
  "NAME": "Eldanar",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.31961,
  11.66838
  ],
  "type": "Point"
  },
  "id": 20,
  "properties": {
  "NAME": "Angs�l",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.54262,
  11.37619
  ],
  "type": "Point"
  },
  "id": 21,
  "properties": {
  "NAME": "Morkai",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.59572,
  11.2537
  ],
  "type": "Point"
  },
  "id": 22,
  "properties": {
  "NAME": "Shad�n",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.69512,
  10.44707
  ],
  "type": "Point"
  },
  "id": 23,
  "properties": {
  "NAME": "Penmorva",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.46148,
  8.01629
  ],
  "type": "Point"
  },
  "id": 24,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.3753,
  6.44798
  ],
  "type": "Point"
  },
  "id": 25,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.58222,
  5.8086
  ],
  "type": "Point"
  },
  "id": 26,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.88981,
  4.99409
  ],
  "type": "Point"
  },
  "id": 27,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.00555,
  5.0144
  ],
  "type": "Point"
  },
  "id": 28,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.80556,
  5.24198
  ],
  "type": "Point"
  },
  "id": 29,
  "properties": {
  "NAME": "Galenhirost",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.92231,
  6.5212
  ],
  "type": "Point"
  },
  "id": 30,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.88011,
  9.62988
  ],
  "type": "Point"
  },
  "id": 31,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.94123,
  10.90538
  ],
  "type": "Point"
  },
  "id": 32,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.22137,
  10.13642
  ],
  "type": "Point"
  },
  "id": 33,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.36388,
  4.61121
  ],
  "type": "Point"
  },
  "id": 34,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.42353,
  4.29215
  ],
  "type": "Point"
  },
  "id": 35,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.55353,
  4.03436
  ],
  "type": "Point"
  },
  "id": 36,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.62381,
  4.67146
  ],
  "type": "Point"
  },
  "id": 37,
  "properties": {
  "NAME": "Amr�naur",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.53831,
  5.0495
  ],
  "type": "Point"
  },
  "id": 38,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.32499,
  5.35346
  ],
  "type": "Point"
  },
  "id": 39,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.75055,
  6.37081
  ],
  "type": "Point"
  },
  "id": 40,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.12921,
  11.27732
  ],
  "type": "Point"
  },
  "id": 41,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.01732,
  11.05199
  ],
  "type": "Point"
  },
  "id": 42,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.06778,
  5.04513
  ],
  "type": "Point"
  },
  "id": 43,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.93837,
  4.97225
  ],
  "type": "Point"
  },
  "id": 44,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.39032,
  4.63995
  ],
  "type": "Point"
  },
  "id": 45,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.2843,
  5.22804
  ],
  "type": "Point"
  },
  "id": 46,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.32937,
  5.57357
  ],
  "type": "Point"
  },
  "id": 47,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.40117,
  5.42016
  ],
  "type": "Point"
  },
  "id": 48,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.6744,
  10.90392
  ],
  "type": "Point"
  },
  "id": 49,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.58862,
  7.70415
  ],
  "type": "Point"
  },
  "id": 50,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.70056,
  5.48743
  ],
  "type": "Point"
  },
  "id": 51,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.57758,
  4.21542
  ],
  "type": "Point"
  },
  "id": 52,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.90552,
  4.64498
  ],
  "type": "Point"
  },
  "id": 53,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.8854,
  5.18545
  ],
  "type": "Point"
  },
  "id": 54,
  "properties": {
  "NAME": "Minas Brethil",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.15223,
  5.54335
  ],
  "type": "Point"
  },
  "id": 55,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.24456,
  5.49812
  ],
  "type": "Point"
  },
  "id": 56,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.51612,
  6.81723
  ],
  "type": "Point"
  },
  "id": 57,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.77274,
  4.52924
  ],
  "type": "Point"
  },
  "id": 58,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.76437,
  4.38741
  ],
  "type": "Point"
  },
  "id": 59,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.22764,
  7.71971
  ],
  "type": "Point"
  },
  "id": 60,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.73933,
  6.61171
  ],
  "type": "Point"
  },
  "id": 61,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.01186,
  5.49963
  ],
  "type": "Point"
  },
  "id": 62,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.10551,
  4.5677
  ],
  "type": "Point"
  },
  "id": 63,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.86852,
  4.56755
  ],
  "type": "Point"
  },
  "id": 64,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  10.25372,
  6.20279
  ],
  "type": "Point"
  },
  "id": 65,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  10.23809,
  9.65242
  ],
  "type": "Point"
  },
  "id": 66,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.46833,
  3.21163
  ],
  "type": "Point"
  },
  "id": 67,
  "properties": {
  "NAME": "Korb Ugata",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  0.97585,
  8.665
  ],
  "type": "Point"
  },
  "id": 68,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  3.15833,
  10.96225
  ],
  "type": "Point"
  },
  "id": 69,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  3.79005,
  8.13898
  ],
  "type": "Point"
  },
  "id": 70,
  "properties": {
  "NAME": "Argond",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  3.97398,
  4.7903
  ],
  "type": "Point"
  },
  "id": 71,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.06508,
  5.5846
  ],
  "type": "Point"
  },
  "id": 72,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.5326,
  4.65345
  ],
  "type": "Point"
  },
  "id": 73,
  "properties": {
  "NAME": "L�most",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.6218,
  4.69194
  ],
  "type": "Point"
  },
  "id": 74,
  "properties": {
  "NAME": "Earost",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.63508,
  5.24871
  ],
  "type": "Point"
  },
  "id": 75,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.11958,
  5.44028
  ],
  "type": "Point"
  },
  "id": 76,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.00547,
  1.43274
  ],
  "type": "Point"
  },
  "id": 77,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.72673,
  1.51493
  ],
  "type": "Point"
  },
  "id": 78,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.63737,
  1.20196
  ],
  "type": "Point"
  },
  "id": 79,
  "properties": {
  "NAME": "Isigir",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.4686,
  1.27017
  ],
  "type": "Point"
  },
  "id": 80,
  "properties": {
  "NAME": "Er�das",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.43424,
  1.44901
  ],
  "type": "Point"
  },
  "id": 81,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.27737,
  1.06487
  ],
  "type": "Point"
  },
  "id": 82,
  "properties": {
  "NAME": "Cald�r",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.81446,
  1.13242
  ],
  "type": "Point"
  },
  "id": 83,
  "properties": {
  "NAME": "Mar�s",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.30921,
  1.16714
  ],
  "type": "Point"
  },
  "id": 84,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.977,
  0.91439
  ],
  "type": "Point"
  },
  "id": 85,
  "properties": {
  "NAME": "Pellardur",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.82992,
  0.06166
  ],
  "type": "Point"
  },
  "id": 86,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.40688,
  5.30297
  ],
  "type": "Point"
  },
  "id": 87,
  "properties": {
  "NAME": "Minas Arthor",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.5829,
  6.188
  ],
  "type": "Point"
  },
  "id": 88,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  11.04608,
  11.7877
  ],
  "type": "Point"
  },
  "id": 89,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  2.7584,
  8.04402
  ],
  "type": "Point"
  },
  "id": 90,
  "properties": {
  "NAME": "Minas Girithlin",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  2.52894,
  3.95341
  ],
  "type": "Point"
  },
  "id": 91,
  "properties": {
  "NAME": "Bar Morthil",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  7.50406,
  3.95423
  ],
  "type": "Point"
  },
  "id": 92,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.40454,
  5.37911
  ],
  "type": "Point"
  },
  "id": 93,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  0.21366,
  9.73258
  ],
  "type": "Point"
  },
  "id": 94,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.39541,
  10.46924
  ],
  "type": "Point"
  },
  "id": 95,
  "properties": {
  "NAME": null,
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  3.71594,
  7.73942
  ],
  "type": "Point"
  },
  "id": 96,
  "properties": {
  "NAME": "Balost",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.28527,
  0.88401
  ],
  "type": "Point"
  },
  "id": 97,
  "properties": {
  "NAME": "Ard�mir",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.74118,
  9.96477
  ],
  "type": "Point"
  },
  "id": 98,
  "properties": {
  "NAME": "Cameth Brin",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  3.46694,
  7.94146
  ],
  "type": "Point"
  },
  "id": 99,
  "properties": {
  "NAME": "Creb Durga",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  10.35093,
  6.02802
  ],
  "type": "Point"
  },
  "id": 100,
  "properties": {
  "NAME": "Minas D�rlith",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.80756,
  5.32159
  ],
  "type": "Point"
  },
  "id": 101,
  "properties": {
  "NAME": "Barad-wath",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  10.2079,
  5.51898
  ],
  "type": "Point"
  },
  "id": 102,
  "properties": {
  "NAME": "Ostigurth",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.79112,
  6.0295
  ],
  "type": "Point"
  },
  "id": 103,
  "properties": {
  "NAME": "Barad-d�r",
  "ORIGIN": null
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.2811,
  6.25003
  ],
  "type": "Point"
  },
  "id": 104,
  "properties": {
  "NAME": "Carach Angren",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.1888,
  5.76122
  ],
  "type": "Point"
  },
  "id": 105,
  "properties": {
  "NAME": "Cirith Ungol",
  "ORIGIN": null
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.15259,
  6.50479
  ],
  "type": "Point"
  },
  "id": 106,
  "properties": {
  "NAME": "Morannon",
  "ORIGIN": null
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.01188,
  6.3185
  ],
  "type": "Point"
  },
  "id": 107,
  "properties": {
  "NAME": "Durthang",
  "ORIGIN": null
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.88452,
  5.57073
  ],
  "type": "Point"
  },
  "id": 108,
  "properties": {
  "NAME": "Pinnornost",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.52822,
  5.29561
  ],
  "type": "Point"
  },
  "id": 109,
  "properties": {
  "NAME": "S�rathondost",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.23731,
  11.88443
  ],
  "type": "Point"
  },
  "id": 110,
  "properties": {
  "NAME": "Carn D�m",
  "ORIGIN": null
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  8.1797,
  8.37585
  ],
  "type": "Point"
  },
  "id": 111,
  "properties": {
  "NAME": "Dol Guldur",
  "ORIGIN": null
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.76272,
  6.7599
  ],
  "type": "Point"
  },
  "id": 112,
  "properties": {
  "NAME": "Helm's Deep",
  "ORIGIN": null
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  5.77128,
  7.34196
  ],
  "type": "Point"
  },
  "id": 113,
  "properties": {
  "NAME": "Isengard",
  "ORIGIN": null
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  3.40504,
  10.40541
  ],
  "type": "Point"
  },
  "id": 114,
  "properties": {
  "NAME": "Bareketta",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  4.29667,
  10.54315
  ],
  "type": "Point"
  },
  "id": 115,
  "properties": {
  "NAME": "Dongorath's Hold",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  10.82185,
  10.81758
  ],
  "type": "Point"
  },
  "id": 116,
  "properties": {
  "NAME": "Lar-H�z",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  9.05584,
  7.5674
  ],
  "type": "Point"
  },
  "id": 117,
  "properties": {
  "NAME": "Romenost",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  },
  {
  "geometry": {
  "coordinates": [
  6.43471,
  6.15414
  ],
  "type": "Point"
  },
  "id": 118,
  "properties": {
  "NAME": "Morthondost",
  "ORIGIN": "MERP"
  },
  "type": "Feature"
  }
  ],
  "type": "FeatureCollection"
  }
