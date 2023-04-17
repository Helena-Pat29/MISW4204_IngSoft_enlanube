/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 357.0, "minX": 0.0, "maxY": 8575.0, "series": [{"data": [[0.0, 357.0], [0.1, 357.0], [0.2, 357.0], [0.3, 392.0], [0.4, 392.0], [0.5, 392.0], [0.6, 403.0], [0.7, 403.0], [0.8, 406.0], [0.9, 406.0], [1.0, 406.0], [1.1, 420.0], [1.2, 420.0], [1.3, 439.0], [1.4, 439.0], [1.5, 439.0], [1.6, 443.0], [1.7, 443.0], [1.8, 443.0], [1.9, 447.0], [2.0, 447.0], [2.1, 467.0], [2.2, 467.0], [2.3, 467.0], [2.4, 470.0], [2.5, 470.0], [2.6, 476.0], [2.7, 476.0], [2.8, 476.0], [2.9, 476.0], [3.0, 476.0], [3.1, 476.0], [3.2, 481.0], [3.3, 481.0], [3.4, 484.0], [3.5, 484.0], [3.6, 484.0], [3.7, 486.0], [3.8, 486.0], [3.9, 488.0], [4.0, 488.0], [4.1, 488.0], [4.2, 488.0], [4.3, 488.0], [4.4, 488.0], [4.5, 498.0], [4.6, 498.0], [4.7, 505.0], [4.8, 505.0], [4.9, 505.0], [5.0, 518.0], [5.1, 518.0], [5.2, 524.0], [5.3, 524.0], [5.4, 524.0], [5.5, 529.0], [5.6, 529.0], [5.7, 539.0], [5.8, 539.0], [5.9, 539.0], [6.0, 564.0], [6.1, 564.0], [6.2, 564.0], [6.3, 571.0], [6.4, 571.0], [6.5, 585.0], [6.6, 585.0], [6.7, 585.0], [6.8, 590.0], [6.9, 590.0], [7.0, 601.0], [7.1, 601.0], [7.2, 601.0], [7.3, 602.0], [7.4, 602.0], [7.5, 602.0], [7.6, 610.0], [7.7, 610.0], [7.8, 618.0], [7.9, 618.0], [8.0, 618.0], [8.1, 630.0], [8.2, 630.0], [8.3, 635.0], [8.4, 635.0], [8.5, 635.0], [8.6, 645.0], [8.7, 645.0], [8.8, 645.0], [8.9, 652.0], [9.0, 652.0], [9.1, 657.0], [9.2, 657.0], [9.3, 657.0], [9.4, 696.0], [9.5, 696.0], [9.6, 699.0], [9.7, 699.0], [9.8, 699.0], [9.9, 742.0], [10.0, 742.0], [10.1, 742.0], [10.2, 753.0], [10.3, 753.0], [10.4, 754.0], [10.5, 754.0], [10.6, 754.0], [10.7, 763.0], [10.8, 763.0], [10.9, 779.0], [11.0, 779.0], [11.1, 779.0], [11.2, 787.0], [11.3, 787.0], [11.4, 790.0], [11.5, 790.0], [11.6, 790.0], [11.7, 836.0], [11.8, 836.0], [11.9, 836.0], [12.0, 854.0], [12.1, 854.0], [12.2, 858.0], [12.3, 858.0], [12.4, 858.0], [12.5, 860.0], [12.6, 860.0], [12.7, 865.0], [12.8, 865.0], [12.9, 865.0], [13.0, 897.0], [13.1, 897.0], [13.2, 897.0], [13.3, 912.0], [13.4, 912.0], [13.5, 913.0], [13.6, 913.0], [13.7, 913.0], [13.8, 924.0], [13.9, 924.0], [14.0, 927.0], [14.1, 927.0], [14.2, 927.0], [14.3, 927.0], [14.4, 927.0], [14.5, 927.0], [14.6, 927.0], [14.7, 927.0], [14.8, 929.0], [14.9, 929.0], [15.0, 929.0], [15.1, 933.0], [15.2, 933.0], [15.3, 938.0], [15.4, 938.0], [15.5, 938.0], [15.6, 943.0], [15.7, 943.0], [15.8, 943.0], [15.9, 954.0], [16.0, 954.0], [16.1, 958.0], [16.2, 958.0], [16.3, 958.0], [16.4, 962.0], [16.5, 962.0], [16.6, 967.0], [16.7, 967.0], [16.8, 967.0], [16.9, 985.0], [17.0, 985.0], [17.1, 993.0], [17.2, 993.0], [17.3, 993.0], [17.4, 994.0], [17.5, 994.0], [17.6, 994.0], [17.7, 1012.0], [17.8, 1012.0], [17.9, 1028.0], [18.0, 1028.0], [18.1, 1028.0], [18.2, 1032.0], [18.3, 1032.0], [18.4, 1033.0], [18.5, 1033.0], [18.6, 1033.0], [18.7, 1074.0], [18.8, 1074.0], [18.9, 1074.0], [19.0, 1081.0], [19.1, 1081.0], [19.2, 1087.0], [19.3, 1087.0], [19.4, 1087.0], [19.5, 1090.0], [19.6, 1090.0], [19.7, 1114.0], [19.8, 1114.0], [19.9, 1114.0], [20.0, 1120.0], [20.1, 1120.0], [20.2, 1120.0], [20.3, 1129.0], [20.4, 1129.0], [20.5, 1142.0], [20.6, 1142.0], [20.7, 1142.0], [20.8, 1156.0], [20.9, 1156.0], [21.0, 1169.0], [21.1, 1169.0], [21.2, 1169.0], [21.3, 1177.0], [21.4, 1177.0], [21.5, 1177.0], [21.6, 1189.0], [21.7, 1189.0], [21.8, 1195.0], [21.9, 1195.0], [22.0, 1195.0], [22.1, 1205.0], [22.2, 1205.0], [22.3, 1207.0], [22.4, 1207.0], [22.5, 1207.0], [22.6, 1213.0], [22.7, 1213.0], [22.8, 1221.0], [22.9, 1221.0], [23.0, 1221.0], [23.1, 1223.0], [23.2, 1223.0], [23.3, 1223.0], [23.4, 1230.0], [23.5, 1230.0], [23.6, 1238.0], [23.7, 1238.0], [23.8, 1238.0], [23.9, 1254.0], [24.0, 1254.0], [24.1, 1270.0], [24.2, 1270.0], [24.3, 1270.0], [24.4, 1271.0], [24.5, 1271.0], [24.6, 1271.0], [24.7, 1274.0], [24.8, 1274.0], [24.9, 1290.0], [25.0, 1290.0], [25.1, 1290.0], [25.2, 1294.0], [25.3, 1294.0], [25.4, 1298.0], [25.5, 1298.0], [25.6, 1298.0], [25.7, 1308.0], [25.8, 1308.0], [25.9, 1308.0], [26.0, 1368.0], [26.1, 1368.0], [26.2, 1374.0], [26.3, 1374.0], [26.4, 1374.0], [26.5, 1382.0], [26.6, 1382.0], [26.7, 1391.0], [26.8, 1391.0], [26.9, 1391.0], [27.0, 1418.0], [27.1, 1418.0], [27.2, 1418.0], [27.3, 1448.0], [27.4, 1448.0], [27.5, 1487.0], [27.6, 1487.0], [27.7, 1487.0], [27.8, 1492.0], [27.9, 1492.0], [28.0, 1501.0], [28.1, 1501.0], [28.2, 1501.0], [28.3, 1517.0], [28.4, 1517.0], [28.5, 1525.0], [28.6, 1525.0], [28.7, 1525.0], [28.8, 1547.0], [28.9, 1547.0], [29.0, 1547.0], [29.1, 1560.0], [29.2, 1560.0], [29.3, 1571.0], [29.4, 1571.0], [29.5, 1571.0], [29.6, 1603.0], [29.7, 1603.0], [29.8, 1603.0], [29.9, 1603.0], [30.0, 1603.0], [30.1, 1633.0], [30.2, 1633.0], [30.3, 1633.0], [30.4, 1649.0], [30.5, 1649.0], [30.6, 1677.0], [30.7, 1677.0], [30.8, 1677.0], [30.9, 1683.0], [31.0, 1683.0], [31.1, 1687.0], [31.2, 1687.0], [31.3, 1687.0], [31.4, 1690.0], [31.5, 1690.0], [31.6, 1690.0], [31.7, 1705.0], [31.8, 1705.0], [31.9, 1753.0], [32.0, 1753.0], [32.1, 1753.0], [32.2, 1763.0], [32.3, 1763.0], [32.4, 1795.0], [32.5, 1795.0], [32.6, 1795.0], [32.7, 1800.0], [32.8, 1800.0], [32.9, 1800.0], [33.0, 1812.0], [33.1, 1812.0], [33.2, 1828.0], [33.3, 1828.0], [33.4, 1828.0], [33.5, 1831.0], [33.6, 1831.0], [33.7, 1847.0], [33.8, 1847.0], [33.9, 1847.0], [34.0, 1854.0], [34.1, 1854.0], [34.2, 1863.0], [34.3, 1863.0], [34.4, 1863.0], [34.5, 1938.0], [34.6, 1938.0], [34.7, 1938.0], [34.8, 1946.0], [34.9, 1946.0], [35.0, 1958.0], [35.1, 1958.0], [35.2, 1958.0], [35.3, 1975.0], [35.4, 1975.0], [35.5, 1979.0], [35.6, 1979.0], [35.7, 1979.0], [35.8, 2030.0], [35.9, 2030.0], [36.0, 2030.0], [36.1, 2031.0], [36.2, 2031.0], [36.3, 2035.0], [36.4, 2035.0], [36.5, 2035.0], [36.6, 2035.0], [36.7, 2035.0], [36.8, 2038.0], [36.9, 2038.0], [37.0, 2038.0], [37.1, 2057.0], [37.2, 2057.0], [37.3, 2057.0], [37.4, 2081.0], [37.5, 2081.0], [37.6, 2090.0], [37.7, 2090.0], [37.8, 2090.0], [37.9, 2094.0], [38.0, 2094.0], [38.1, 2101.0], [38.2, 2101.0], [38.3, 2101.0], [38.4, 2111.0], [38.5, 2111.0], [38.6, 2111.0], [38.7, 2139.0], [38.8, 2139.0], [38.9, 2152.0], [39.0, 2152.0], [39.1, 2152.0], [39.2, 2171.0], [39.3, 2171.0], [39.4, 2182.0], [39.5, 2182.0], [39.6, 2182.0], [39.7, 2185.0], [39.8, 2185.0], [39.9, 2188.0], [40.0, 2188.0], [40.1, 2188.0], [40.2, 2208.0], [40.3, 2208.0], [40.4, 2208.0], [40.5, 2243.0], [40.6, 2243.0], [40.7, 2245.0], [40.8, 2245.0], [40.9, 2245.0], [41.0, 2246.0], [41.1, 2246.0], [41.2, 2278.0], [41.3, 2278.0], [41.4, 2278.0], [41.5, 2286.0], [41.6, 2286.0], [41.7, 2286.0], [41.8, 2289.0], [41.9, 2289.0], [42.0, 2297.0], [42.1, 2297.0], [42.2, 2297.0], [42.3, 2304.0], [42.4, 2304.0], [42.5, 2308.0], [42.6, 2308.0], [42.7, 2308.0], [42.8, 2313.0], [42.9, 2313.0], [43.0, 2313.0], [43.1, 2313.0], [43.2, 2313.0], [43.3, 2320.0], [43.4, 2320.0], [43.5, 2320.0], [43.6, 2328.0], [43.7, 2328.0], [43.8, 2330.0], [43.9, 2330.0], [44.0, 2330.0], [44.1, 2348.0], [44.2, 2348.0], [44.3, 2348.0], [44.4, 2356.0], [44.5, 2356.0], [44.6, 2360.0], [44.7, 2360.0], [44.8, 2360.0], [44.9, 2365.0], [45.0, 2365.0], [45.1, 2371.0], [45.2, 2371.0], [45.3, 2371.0], [45.4, 2375.0], [45.5, 2375.0], [45.6, 2379.0], [45.7, 2379.0], [45.8, 2379.0], [45.9, 2390.0], [46.0, 2390.0], [46.1, 2390.0], [46.2, 2398.0], [46.3, 2398.0], [46.4, 2404.0], [46.5, 2404.0], [46.6, 2404.0], [46.7, 2409.0], [46.8, 2409.0], [46.9, 2410.0], [47.0, 2410.0], [47.1, 2410.0], [47.2, 2426.0], [47.3, 2426.0], [47.4, 2426.0], [47.5, 2426.0], [47.6, 2426.0], [47.7, 2430.0], [47.8, 2430.0], [47.9, 2430.0], [48.0, 2440.0], [48.1, 2440.0], [48.2, 2444.0], [48.3, 2444.0], [48.4, 2444.0], [48.5, 2448.0], [48.6, 2448.0], [48.7, 2448.0], [48.8, 2449.0], [48.9, 2449.0], [49.0, 2498.0], [49.1, 2498.0], [49.2, 2498.0], [49.3, 2503.0], [49.4, 2503.0], [49.5, 2508.0], [49.6, 2508.0], [49.7, 2508.0], [49.8, 2523.0], [49.9, 2523.0], [50.0, 2523.0], [50.1, 2544.0], [50.2, 2544.0], [50.3, 2570.0], [50.4, 2570.0], [50.5, 2570.0], [50.6, 2571.0], [50.7, 2571.0], [50.8, 2580.0], [50.9, 2580.0], [51.0, 2580.0], [51.1, 2630.0], [51.2, 2630.0], [51.3, 2634.0], [51.4, 2634.0], [51.5, 2634.0], [51.6, 2668.0], [51.7, 2668.0], [51.8, 2668.0], [51.9, 2689.0], [52.0, 2689.0], [52.1, 2696.0], [52.2, 2696.0], [52.3, 2696.0], [52.4, 2719.0], [52.5, 2719.0], [52.6, 2747.0], [52.7, 2747.0], [52.8, 2747.0], [52.9, 2790.0], [53.0, 2790.0], [53.1, 2790.0], [53.2, 2854.0], [53.3, 2854.0], [53.4, 2864.0], [53.5, 2864.0], [53.6, 2864.0], [53.7, 2868.0], [53.8, 2868.0], [53.9, 2923.0], [54.0, 2923.0], [54.1, 2923.0], [54.2, 2928.0], [54.3, 2928.0], [54.4, 2928.0], [54.5, 2932.0], [54.6, 2932.0], [54.7, 2952.0], [54.8, 2952.0], [54.9, 2952.0], [55.0, 2958.0], [55.1, 2958.0], [55.2, 2966.0], [55.3, 2966.0], [55.4, 2966.0], [55.5, 2974.0], [55.6, 2974.0], [55.7, 2992.0], [55.8, 2992.0], [55.9, 2992.0], [56.0, 2994.0], [56.1, 2994.0], [56.2, 2994.0], [56.3, 3011.0], [56.4, 3011.0], [56.5, 3064.0], [56.6, 3064.0], [56.7, 3064.0], [56.8, 3068.0], [56.9, 3068.0], [57.0, 3076.0], [57.1, 3076.0], [57.2, 3076.0], [57.3, 3092.0], [57.4, 3092.0], [57.5, 3092.0], [57.6, 3114.0], [57.7, 3114.0], [57.8, 3122.0], [57.9, 3122.0], [58.0, 3122.0], [58.1, 3137.0], [58.2, 3137.0], [58.3, 3149.0], [58.4, 3149.0], [58.5, 3149.0], [58.6, 3231.0], [58.7, 3231.0], [58.8, 3231.0], [58.9, 3237.0], [59.0, 3237.0], [59.1, 3238.0], [59.2, 3238.0], [59.3, 3238.0], [59.4, 3242.0], [59.5, 3242.0], [59.6, 3280.0], [59.7, 3280.0], [59.8, 3280.0], [59.9, 3303.0], [60.0, 3303.0], [60.1, 3303.0], [60.2, 3365.0], [60.3, 3365.0], [60.4, 3395.0], [60.5, 3395.0], [60.6, 3395.0], [60.7, 3429.0], [60.8, 3429.0], [60.9, 3438.0], [61.0, 3438.0], [61.1, 3438.0], [61.2, 3476.0], [61.3, 3476.0], [61.4, 3483.0], [61.5, 3483.0], [61.6, 3483.0], [61.7, 3505.0], [61.8, 3505.0], [61.9, 3505.0], [62.0, 3541.0], [62.1, 3541.0], [62.2, 3546.0], [62.3, 3546.0], [62.4, 3546.0], [62.5, 3556.0], [62.6, 3556.0], [62.7, 3579.0], [62.8, 3579.0], [62.9, 3579.0], [63.0, 3599.0], [63.1, 3599.0], [63.2, 3599.0], [63.3, 3637.0], [63.4, 3637.0], [63.5, 3656.0], [63.6, 3656.0], [63.7, 3656.0], [63.8, 3659.0], [63.9, 3659.0], [64.0, 3666.0], [64.1, 3666.0], [64.2, 3666.0], [64.3, 3735.0], [64.4, 3735.0], [64.5, 3735.0], [64.6, 3752.0], [64.7, 3752.0], [64.8, 3761.0], [64.9, 3761.0], [65.0, 3761.0], [65.1, 3826.0], [65.2, 3826.0], [65.3, 3828.0], [65.4, 3828.0], [65.5, 3828.0], [65.6, 3835.0], [65.7, 3835.0], [65.8, 3835.0], [65.9, 3838.0], [66.0, 3838.0], [66.1, 3883.0], [66.2, 3883.0], [66.3, 3883.0], [66.4, 3884.0], [66.5, 3884.0], [66.6, 3937.0], [66.7, 3937.0], [66.8, 3937.0], [66.9, 3959.0], [67.0, 3959.0], [67.1, 3989.0], [67.2, 3989.0], [67.3, 3989.0], [67.4, 3997.0], [67.5, 3997.0], [67.6, 3997.0], [67.7, 4010.0], [67.8, 4010.0], [67.9, 4015.0], [68.0, 4015.0], [68.1, 4015.0], [68.2, 4028.0], [68.3, 4028.0], [68.4, 4072.0], [68.5, 4072.0], [68.6, 4072.0], [68.7, 4075.0], [68.8, 4075.0], [68.9, 4075.0], [69.0, 4081.0], [69.1, 4081.0], [69.2, 4085.0], [69.3, 4085.0], [69.4, 4085.0], [69.5, 4086.0], [69.6, 4086.0], [69.7, 4120.0], [69.8, 4120.0], [69.9, 4120.0], [70.0, 4133.0], [70.1, 4133.0], [70.2, 4133.0], [70.3, 4169.0], [70.4, 4169.0], [70.5, 4182.0], [70.6, 4182.0], [70.7, 4182.0], [70.8, 4182.0], [70.9, 4182.0], [71.0, 4217.0], [71.1, 4217.0], [71.2, 4217.0], [71.3, 4219.0], [71.4, 4219.0], [71.5, 4219.0], [71.6, 4220.0], [71.7, 4220.0], [71.8, 4235.0], [71.9, 4235.0], [72.0, 4235.0], [72.1, 4235.0], [72.2, 4235.0], [72.3, 4248.0], [72.4, 4248.0], [72.5, 4248.0], [72.6, 4258.0], [72.7, 4258.0], [72.8, 4263.0], [72.9, 4263.0], [73.0, 4263.0], [73.1, 4271.0], [73.2, 4271.0], [73.3, 4271.0], [73.4, 4284.0], [73.5, 4284.0], [73.6, 4325.0], [73.7, 4325.0], [73.8, 4325.0], [73.9, 4327.0], [74.0, 4327.0], [74.1, 4332.0], [74.2, 4332.0], [74.3, 4332.0], [74.4, 4346.0], [74.5, 4346.0], [74.6, 4346.0], [74.7, 4349.0], [74.8, 4349.0], [74.9, 4356.0], [75.0, 4356.0], [75.1, 4356.0], [75.2, 4356.0], [75.3, 4356.0], [75.4, 4361.0], [75.5, 4361.0], [75.6, 4361.0], [75.7, 4362.0], [75.8, 4362.0], [75.9, 4362.0], [76.0, 4363.0], [76.1, 4363.0], [76.2, 4374.0], [76.3, 4374.0], [76.4, 4374.0], [76.5, 4374.0], [76.6, 4374.0], [76.7, 4378.0], [76.8, 4378.0], [76.9, 4378.0], [77.0, 4391.0], [77.1, 4391.0], [77.2, 4391.0], [77.3, 4404.0], [77.4, 4404.0], [77.5, 4407.0], [77.6, 4407.0], [77.7, 4407.0], [77.8, 4408.0], [77.9, 4408.0], [78.0, 4414.0], [78.1, 4414.0], [78.2, 4414.0], [78.3, 4416.0], [78.4, 4416.0], [78.5, 4426.0], [78.6, 4426.0], [78.7, 4426.0], [78.8, 4428.0], [78.9, 4428.0], [79.0, 4428.0], [79.1, 4429.0], [79.2, 4429.0], [79.3, 4476.0], [79.4, 4476.0], [79.5, 4476.0], [79.6, 4498.0], [79.7, 4498.0], [79.8, 4516.0], [79.9, 4516.0], [80.0, 4516.0], [80.1, 4516.0], [80.2, 4516.0], [80.3, 4516.0], [80.4, 4569.0], [80.5, 4569.0], [80.6, 4577.0], [80.7, 4577.0], [80.8, 4577.0], [80.9, 4607.0], [81.0, 4607.0], [81.1, 4713.0], [81.2, 4713.0], [81.3, 4713.0], [81.4, 4730.0], [81.5, 4730.0], [81.6, 4730.0], [81.7, 4733.0], [81.8, 4733.0], [81.9, 4754.0], [82.0, 4754.0], [82.1, 4754.0], [82.2, 4856.0], [82.3, 4856.0], [82.4, 4936.0], [82.5, 4936.0], [82.6, 4936.0], [82.7, 5025.0], [82.8, 5025.0], [82.9, 5025.0], [83.0, 5119.0], [83.1, 5119.0], [83.2, 5125.0], [83.3, 5125.0], [83.4, 5125.0], [83.5, 5132.0], [83.6, 5132.0], [83.7, 5136.0], [83.8, 5136.0], [83.9, 5136.0], [84.0, 5150.0], [84.1, 5150.0], [84.2, 5342.0], [84.3, 5342.0], [84.4, 5342.0], [84.5, 5349.0], [84.6, 5349.0], [84.7, 5349.0], [84.8, 5353.0], [84.9, 5353.0], [85.0, 5358.0], [85.1, 5358.0], [85.2, 5358.0], [85.3, 5421.0], [85.4, 5421.0], [85.5, 5432.0], [85.6, 5432.0], [85.7, 5432.0], [85.8, 5476.0], [85.9, 5476.0], [86.0, 5476.0], [86.1, 5481.0], [86.2, 5481.0], [86.3, 5483.0], [86.4, 5483.0], [86.5, 5483.0], [86.6, 5484.0], [86.7, 5484.0], [86.8, 5492.0], [86.9, 5492.0], [87.0, 5492.0], [87.1, 5531.0], [87.2, 5531.0], [87.3, 5531.0], [87.4, 5531.0], [87.5, 5531.0], [87.6, 5546.0], [87.7, 5546.0], [87.8, 5546.0], [87.9, 5553.0], [88.0, 5553.0], [88.1, 5561.0], [88.2, 5561.0], [88.3, 5561.0], [88.4, 5603.0], [88.5, 5603.0], [88.6, 5603.0], [88.7, 5625.0], [88.8, 5625.0], [88.9, 5653.0], [89.0, 5653.0], [89.1, 5653.0], [89.2, 5658.0], [89.3, 5658.0], [89.4, 5670.0], [89.5, 5670.0], [89.6, 5670.0], [89.7, 5681.0], [89.8, 5681.0], [89.9, 5682.0], [90.0, 5682.0], [90.1, 5682.0], [90.2, 5691.0], [90.3, 5691.0], [90.4, 5691.0], [90.5, 5694.0], [90.6, 5694.0], [90.7, 5714.0], [90.8, 5714.0], [90.9, 5714.0], [91.0, 5719.0], [91.1, 5719.0], [91.2, 5725.0], [91.3, 5725.0], [91.4, 5725.0], [91.5, 5750.0], [91.6, 5750.0], [91.7, 5750.0], [91.8, 5859.0], [91.9, 5859.0], [92.0, 5891.0], [92.1, 5891.0], [92.2, 5891.0], [92.3, 5899.0], [92.4, 5899.0], [92.5, 5927.0], [92.6, 5927.0], [92.7, 5927.0], [92.8, 5951.0], [92.9, 5951.0], [93.0, 5951.0], [93.1, 5978.0], [93.2, 5978.0], [93.3, 5978.0], [93.4, 5978.0], [93.5, 5978.0], [93.6, 5991.0], [93.7, 5991.0], [93.8, 6034.0], [93.9, 6034.0], [94.0, 6034.0], [94.1, 6137.0], [94.2, 6137.0], [94.3, 6137.0], [94.4, 6163.0], [94.5, 6163.0], [94.6, 6219.0], [94.7, 6219.0], [94.8, 6219.0], [94.9, 6240.0], [95.0, 6240.0], [95.1, 6384.0], [95.2, 6384.0], [95.3, 6384.0], [95.4, 6437.0], [95.5, 6437.0], [95.6, 6632.0], [95.7, 6632.0], [95.8, 6632.0], [95.9, 6663.0], [96.0, 6663.0], [96.1, 6663.0], [96.2, 6686.0], [96.3, 6686.0], [96.4, 6695.0], [96.5, 6695.0], [96.6, 6695.0], [96.7, 6814.0], [96.8, 6814.0], [96.9, 6833.0], [97.0, 6833.0], [97.1, 6833.0], [97.2, 6982.0], [97.3, 6982.0], [97.4, 6982.0], [97.5, 7002.0], [97.6, 7002.0], [97.7, 7127.0], [97.8, 7127.0], [97.9, 7127.0], [98.0, 7328.0], [98.1, 7328.0], [98.2, 7567.0], [98.3, 7567.0], [98.4, 7567.0], [98.5, 7591.0], [98.6, 7591.0], [98.7, 7591.0], [98.8, 7595.0], [98.9, 7595.0], [99.0, 7623.0], [99.1, 7623.0], [99.2, 7623.0], [99.3, 7689.0], [99.4, 7689.0], [99.5, 8364.0], [99.6, 8364.0], [99.7, 8364.0], [99.8, 8575.0], [99.9, 8575.0]], "isOverall": false, "label": "CreateTask", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 17.0, "series": [{"data": [[600.0, 11.0], [700.0, 7.0], [800.0, 6.0], [900.0, 17.0], [1000.0, 8.0], [1100.0, 9.0], [1200.0, 14.0], [1300.0, 5.0], [1400.0, 4.0], [1500.0, 6.0], [1600.0, 8.0], [1700.0, 4.0], [1800.0, 7.0], [1900.0, 5.0], [2000.0, 9.0], [2100.0, 8.0], [2200.0, 8.0], [2300.0, 16.0], [2400.0, 11.0], [2500.0, 7.0], [2600.0, 5.0], [2700.0, 3.0], [2800.0, 3.0], [2900.0, 9.0], [3000.0, 5.0], [3100.0, 4.0], [3300.0, 3.0], [3200.0, 5.0], [3400.0, 4.0], [3500.0, 6.0], [3600.0, 4.0], [3700.0, 3.0], [3800.0, 6.0], [3900.0, 4.0], [4000.0, 8.0], [4100.0, 5.0], [4300.0, 14.0], [4200.0, 10.0], [4400.0, 10.0], [4500.0, 4.0], [4600.0, 1.0], [4700.0, 4.0], [4800.0, 1.0], [5100.0, 5.0], [4900.0, 1.0], [5000.0, 1.0], [5300.0, 4.0], [5600.0, 9.0], [5400.0, 7.0], [5500.0, 5.0], [5700.0, 4.0], [5800.0, 3.0], [5900.0, 5.0], [6000.0, 1.0], [6100.0, 2.0], [6200.0, 2.0], [6300.0, 1.0], [6600.0, 4.0], [6400.0, 1.0], [6900.0, 1.0], [6800.0, 2.0], [7000.0, 1.0], [7100.0, 1.0], [7300.0, 1.0], [7500.0, 3.0], [7600.0, 2.0], [8300.0, 1.0], [8500.0, 1.0], [300.0, 2.0], [400.0, 16.0], [500.0, 9.0]], "isOverall": false, "label": "CreateTask", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 8500.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 18.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 278.0, "series": [{"data": [[0.0, 18.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 90.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 278.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 27.225806451612915, "minX": 1.6816995E12, "maxY": 66.50000000000003, "series": [{"data": [[1.68169962E12, 61.714285714285715], [1.6816995E12, 27.225806451612915], [1.68169956E12, 66.50000000000003]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68169962E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 960.888888888889, "minX": 20.0, "maxY": 8575.0, "series": [{"data": [[40.0, 2466.666666666666], [60.0, 3985.1235955056186], [63.0, 7689.0], [67.0, 7567.0], [64.0, 7623.0], [70.0, 7595.0], [69.0, 7591.0], [75.0, 7328.0], [76.0, 8575.0], [20.0, 960.888888888889], [80.0, 4174.271844660193], [21.0, 993.5555555555554], [24.0, 5025.0]], "isOverall": false, "label": "CreateTask", "isController": false}, {"data": [[50.689119170984426, 2989.468911917099]], "isOverall": false, "label": "CreateTask-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 22.983333333333334, "minX": 1.6816995E12, "maxY": 2185719.7333333334, "series": [{"data": [[1.68169962E12, 22.983333333333334], [1.6816995E12, 508.9166666666667], [1.68169956E12, 735.4666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68169962E12, 68303.31666666667], [1.6816995E12, 1512439.25], [1.68169956E12, 2185719.7333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68169962E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1581.5161290322583, "minX": 1.6816995E12, "maxY": 7202.571428571428, "series": [{"data": [[1.68169962E12, 7202.571428571428], [1.6816995E12, 1581.5161290322583], [1.68169956E12, 3832.0624999999995]], "isOverall": false, "label": "CreateTask", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68169962E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1581.2580645161288, "minX": 1.6816995E12, "maxY": 7201.428571428572, "series": [{"data": [[1.68169962E12, 7201.428571428572], [1.6816995E12, 1581.2580645161288], [1.68169956E12, 3831.638392857142]], "isOverall": false, "label": "CreateTask", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68169962E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2.1225806451612916, "minX": 1.6816995E12, "maxY": 2.571428571428571, "series": [{"data": [[1.68169962E12, 2.571428571428571], [1.6816995E12, 2.1225806451612916], [1.68169956E12, 2.1339285714285707]], "isOverall": false, "label": "CreateTask", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68169962E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 357.0, "minX": 1.6816995E12, "maxY": 8575.0, "series": [{"data": [[1.68169962E12, 7689.0], [1.6816995E12, 6219.0], [1.68169956E12, 8575.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68169962E12, 7689.0], [1.6816995E12, 3128.0], [1.68169956E12, 5804.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68169962E12, 7689.0], [1.6816995E12, 6115.4], [1.68169956E12, 8054.75]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68169962E12, 7689.0], [1.6816995E12, 3669.1999999999925], [1.68169956E12, 6583.25]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.68169962E12, 5025.0], [1.6816995E12, 357.0], [1.68169956E12, 836.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68169962E12, 7591.0], [1.6816995E12, 1156.0], [1.68169956E12, 3993.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68169962E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 640.0, "minX": 1.0, "maxY": 7593.0, "series": [{"data": [[66.0, 640.0], [1.0, 4603.5], [4.0, 5809.0], [2.0, 6610.5], [32.0, 3646.5], [38.0, 5549.5], [42.0, 1226.5], [12.0, 4839.0], [6.0, 7593.0], [51.0, 2409.0], [28.0, 2004.5], [57.0, 4356.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 639.5, "minX": 1.0, "maxY": 7591.0, "series": [{"data": [[66.0, 639.5], [1.0, 4602.5], [4.0, 5808.0], [2.0, 6610.0], [32.0, 3646.0], [38.0, 5548.5], [42.0, 1226.5], [12.0, 4838.5], [6.0, 7591.0], [51.0, 2408.0], [28.0, 2004.0], [57.0, 4356.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 66.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.6816995E12, "maxY": 3.7333333333333334, "series": [{"data": [[1.68169962E12, 0.11666666666666667], [1.6816995E12, 2.5833333333333335], [1.68169956E12, 3.7333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68169962E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.6816995E12, "maxY": 3.7333333333333334, "series": [{"data": [[1.68169962E12, 0.11666666666666667], [1.6816995E12, 2.5833333333333335], [1.68169956E12, 3.7333333333333334]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68169962E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.6816995E12, "maxY": 3.7333333333333334, "series": [{"data": [[1.68169962E12, 0.11666666666666667], [1.6816995E12, 2.5833333333333335], [1.68169956E12, 3.7333333333333334]], "isOverall": false, "label": "CreateTask-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68169962E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.11666666666666667, "minX": 1.6816995E12, "maxY": 3.7333333333333334, "series": [{"data": [[1.68169962E12, 0.11666666666666667], [1.6816995E12, 2.5833333333333335], [1.68169956E12, 3.7333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68169962E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

