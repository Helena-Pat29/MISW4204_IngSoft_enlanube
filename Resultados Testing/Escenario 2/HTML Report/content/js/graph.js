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
        data: {"result": {"minY": 326.0, "minX": 0.0, "maxY": 13423.0, "series": [{"data": [[0.0, 326.0], [0.1, 326.0], [0.2, 326.0], [0.3, 326.0], [0.4, 326.0], [0.5, 360.0], [0.6, 360.0], [0.7, 360.0], [0.8, 360.0], [0.9, 385.0], [1.0, 385.0], [1.1, 385.0], [1.2, 385.0], [1.3, 402.0], [1.4, 402.0], [1.5, 402.0], [1.6, 402.0], [1.7, 402.0], [1.8, 402.0], [1.9, 402.0], [2.0, 402.0], [2.1, 419.0], [2.2, 419.0], [2.3, 419.0], [2.4, 419.0], [2.5, 464.0], [2.6, 464.0], [2.7, 464.0], [2.8, 464.0], [2.9, 464.0], [3.0, 499.0], [3.1, 499.0], [3.2, 499.0], [3.3, 499.0], [3.4, 519.0], [3.5, 519.0], [3.6, 519.0], [3.7, 519.0], [3.8, 526.0], [3.9, 526.0], [4.0, 526.0], [4.1, 526.0], [4.2, 532.0], [4.3, 532.0], [4.4, 532.0], [4.5, 532.0], [4.6, 554.0], [4.7, 554.0], [4.8, 554.0], [4.9, 554.0], [5.0, 561.0], [5.1, 561.0], [5.2, 561.0], [5.3, 561.0], [5.4, 561.0], [5.5, 575.0], [5.6, 575.0], [5.7, 575.0], [5.8, 575.0], [5.9, 591.0], [6.0, 591.0], [6.1, 591.0], [6.2, 591.0], [6.3, 664.0], [6.4, 664.0], [6.5, 664.0], [6.6, 664.0], [6.7, 731.0], [6.8, 731.0], [6.9, 731.0], [7.0, 731.0], [7.1, 738.0], [7.2, 738.0], [7.3, 738.0], [7.4, 738.0], [7.5, 738.0], [7.6, 741.0], [7.7, 741.0], [7.8, 741.0], [7.9, 741.0], [8.0, 757.0], [8.1, 757.0], [8.2, 757.0], [8.3, 757.0], [8.4, 771.0], [8.5, 771.0], [8.6, 771.0], [8.7, 771.0], [8.8, 779.0], [8.9, 779.0], [9.0, 779.0], [9.1, 779.0], [9.2, 784.0], [9.3, 784.0], [9.4, 784.0], [9.5, 784.0], [9.6, 791.0], [9.7, 791.0], [9.8, 791.0], [9.9, 791.0], [10.0, 832.0], [10.1, 832.0], [10.2, 832.0], [10.3, 832.0], [10.4, 832.0], [10.5, 852.0], [10.6, 852.0], [10.7, 852.0], [10.8, 852.0], [10.9, 889.0], [11.0, 889.0], [11.1, 889.0], [11.2, 889.0], [11.3, 905.0], [11.4, 905.0], [11.5, 905.0], [11.6, 905.0], [11.7, 954.0], [11.8, 954.0], [11.9, 954.0], [12.0, 954.0], [12.1, 972.0], [12.2, 972.0], [12.3, 972.0], [12.4, 972.0], [12.5, 987.0], [12.6, 987.0], [12.7, 987.0], [12.8, 987.0], [12.9, 987.0], [13.0, 998.0], [13.1, 998.0], [13.2, 998.0], [13.3, 998.0], [13.4, 1022.0], [13.5, 1022.0], [13.6, 1022.0], [13.7, 1022.0], [13.8, 1027.0], [13.9, 1027.0], [14.0, 1027.0], [14.1, 1027.0], [14.2, 1033.0], [14.3, 1033.0], [14.4, 1033.0], [14.5, 1033.0], [14.6, 1042.0], [14.7, 1042.0], [14.8, 1042.0], [14.9, 1042.0], [15.0, 1087.0], [15.1, 1087.0], [15.2, 1087.0], [15.3, 1087.0], [15.4, 1087.0], [15.5, 1110.0], [15.6, 1110.0], [15.7, 1110.0], [15.8, 1110.0], [15.9, 1251.0], [16.0, 1251.0], [16.1, 1251.0], [16.2, 1251.0], [16.3, 1259.0], [16.4, 1259.0], [16.5, 1259.0], [16.6, 1259.0], [16.7, 1284.0], [16.8, 1284.0], [16.9, 1284.0], [17.0, 1284.0], [17.1, 1291.0], [17.2, 1291.0], [17.3, 1291.0], [17.4, 1291.0], [17.5, 1294.0], [17.6, 1294.0], [17.7, 1294.0], [17.8, 1294.0], [17.9, 1294.0], [18.0, 1319.0], [18.1, 1319.0], [18.2, 1319.0], [18.3, 1319.0], [18.4, 1324.0], [18.5, 1324.0], [18.6, 1324.0], [18.7, 1324.0], [18.8, 1342.0], [18.9, 1342.0], [19.0, 1342.0], [19.1, 1342.0], [19.2, 1346.0], [19.3, 1346.0], [19.4, 1346.0], [19.5, 1346.0], [19.6, 1350.0], [19.7, 1350.0], [19.8, 1350.0], [19.9, 1350.0], [20.0, 1350.0], [20.1, 1358.0], [20.2, 1358.0], [20.3, 1358.0], [20.4, 1358.0], [20.5, 1380.0], [20.6, 1380.0], [20.7, 1380.0], [20.8, 1380.0], [20.9, 1384.0], [21.0, 1384.0], [21.1, 1384.0], [21.2, 1384.0], [21.3, 1397.0], [21.4, 1397.0], [21.5, 1397.0], [21.6, 1397.0], [21.7, 1418.0], [21.8, 1418.0], [21.9, 1418.0], [22.0, 1418.0], [22.1, 1426.0], [22.2, 1426.0], [22.3, 1426.0], [22.4, 1426.0], [22.5, 1426.0], [22.6, 1597.0], [22.7, 1597.0], [22.8, 1597.0], [22.9, 1597.0], [23.0, 1611.0], [23.1, 1611.0], [23.2, 1611.0], [23.3, 1611.0], [23.4, 1781.0], [23.5, 1781.0], [23.6, 1781.0], [23.7, 1781.0], [23.8, 1783.0], [23.9, 1783.0], [24.0, 1783.0], [24.1, 1783.0], [24.2, 1970.0], [24.3, 1970.0], [24.4, 1970.0], [24.5, 1970.0], [24.6, 2004.0], [24.7, 2004.0], [24.8, 2004.0], [24.9, 2004.0], [25.0, 2004.0], [25.1, 2005.0], [25.2, 2005.0], [25.3, 2005.0], [25.4, 2005.0], [25.5, 2019.0], [25.6, 2019.0], [25.7, 2019.0], [25.8, 2019.0], [25.9, 2050.0], [26.0, 2050.0], [26.1, 2050.0], [26.2, 2050.0], [26.3, 2099.0], [26.4, 2099.0], [26.5, 2099.0], [26.6, 2099.0], [26.7, 2114.0], [26.8, 2114.0], [26.9, 2114.0], [27.0, 2114.0], [27.1, 2115.0], [27.2, 2115.0], [27.3, 2115.0], [27.4, 2115.0], [27.5, 2115.0], [27.6, 2115.0], [27.7, 2115.0], [27.8, 2115.0], [27.9, 2115.0], [28.0, 2144.0], [28.1, 2144.0], [28.2, 2144.0], [28.3, 2144.0], [28.4, 2162.0], [28.5, 2162.0], [28.6, 2162.0], [28.7, 2162.0], [28.8, 2179.0], [28.9, 2179.0], [29.0, 2179.0], [29.1, 2179.0], [29.2, 2310.0], [29.3, 2310.0], [29.4, 2310.0], [29.5, 2310.0], [29.6, 2418.0], [29.7, 2418.0], [29.8, 2418.0], [29.9, 2418.0], [30.0, 2418.0], [30.1, 2421.0], [30.2, 2421.0], [30.3, 2421.0], [30.4, 2421.0], [30.5, 2530.0], [30.6, 2530.0], [30.7, 2530.0], [30.8, 2530.0], [30.9, 2621.0], [31.0, 2621.0], [31.1, 2621.0], [31.2, 2621.0], [31.3, 2623.0], [31.4, 2623.0], [31.5, 2623.0], [31.6, 2623.0], [31.7, 2658.0], [31.8, 2658.0], [31.9, 2658.0], [32.0, 2658.0], [32.1, 2717.0], [32.2, 2717.0], [32.3, 2717.0], [32.4, 2717.0], [32.5, 2717.0], [32.6, 2734.0], [32.7, 2734.0], [32.8, 2734.0], [32.9, 2734.0], [33.0, 2740.0], [33.1, 2740.0], [33.2, 2740.0], [33.3, 2740.0], [33.4, 2754.0], [33.5, 2754.0], [33.6, 2754.0], [33.7, 2754.0], [33.8, 2805.0], [33.9, 2805.0], [34.0, 2805.0], [34.1, 2805.0], [34.2, 2869.0], [34.3, 2869.0], [34.4, 2869.0], [34.5, 2869.0], [34.6, 2901.0], [34.7, 2901.0], [34.8, 2901.0], [34.9, 2901.0], [35.0, 2901.0], [35.1, 2954.0], [35.2, 2954.0], [35.3, 2954.0], [35.4, 2954.0], [35.5, 2954.0], [35.6, 2954.0], [35.7, 2954.0], [35.8, 2954.0], [35.9, 2965.0], [36.0, 2965.0], [36.1, 2965.0], [36.2, 2965.0], [36.3, 3015.0], [36.4, 3015.0], [36.5, 3015.0], [36.6, 3015.0], [36.7, 3082.0], [36.8, 3082.0], [36.9, 3082.0], [37.0, 3082.0], [37.1, 3098.0], [37.2, 3098.0], [37.3, 3098.0], [37.4, 3098.0], [37.5, 3098.0], [37.6, 3138.0], [37.7, 3138.0], [37.8, 3138.0], [37.9, 3138.0], [38.0, 3275.0], [38.1, 3275.0], [38.2, 3275.0], [38.3, 3275.0], [38.4, 3319.0], [38.5, 3319.0], [38.6, 3319.0], [38.7, 3319.0], [38.8, 3350.0], [38.9, 3350.0], [39.0, 3350.0], [39.1, 3350.0], [39.2, 3350.0], [39.3, 3350.0], [39.4, 3350.0], [39.5, 3350.0], [39.6, 3355.0], [39.7, 3355.0], [39.8, 3355.0], [39.9, 3355.0], [40.0, 3360.0], [40.1, 3360.0], [40.2, 3360.0], [40.3, 3360.0], [40.4, 3360.0], [40.5, 3369.0], [40.6, 3369.0], [40.7, 3369.0], [40.8, 3369.0], [40.9, 3384.0], [41.0, 3384.0], [41.1, 3384.0], [41.2, 3384.0], [41.3, 3394.0], [41.4, 3394.0], [41.5, 3394.0], [41.6, 3394.0], [41.7, 3395.0], [41.8, 3395.0], [41.9, 3395.0], [42.0, 3395.0], [42.1, 3395.0], [42.2, 3395.0], [42.3, 3395.0], [42.4, 3395.0], [42.5, 3401.0], [42.6, 3401.0], [42.7, 3401.0], [42.8, 3401.0], [42.9, 3401.0], [43.0, 3405.0], [43.1, 3405.0], [43.2, 3405.0], [43.3, 3405.0], [43.4, 3411.0], [43.5, 3411.0], [43.6, 3411.0], [43.7, 3411.0], [43.8, 3423.0], [43.9, 3423.0], [44.0, 3423.0], [44.1, 3423.0], [44.2, 3423.0], [44.3, 3423.0], [44.4, 3423.0], [44.5, 3423.0], [44.6, 3453.0], [44.7, 3453.0], [44.8, 3453.0], [44.9, 3453.0], [45.0, 3470.0], [45.1, 3470.0], [45.2, 3470.0], [45.3, 3470.0], [45.4, 3470.0], [45.5, 3480.0], [45.6, 3480.0], [45.7, 3480.0], [45.8, 3480.0], [45.9, 3495.0], [46.0, 3495.0], [46.1, 3495.0], [46.2, 3495.0], [46.3, 3507.0], [46.4, 3507.0], [46.5, 3507.0], [46.6, 3507.0], [46.7, 3593.0], [46.8, 3593.0], [46.9, 3593.0], [47.0, 3593.0], [47.1, 3608.0], [47.2, 3608.0], [47.3, 3608.0], [47.4, 3608.0], [47.5, 3612.0], [47.6, 3612.0], [47.7, 3612.0], [47.8, 3612.0], [47.9, 3612.0], [48.0, 3614.0], [48.1, 3614.0], [48.2, 3614.0], [48.3, 3614.0], [48.4, 3633.0], [48.5, 3633.0], [48.6, 3633.0], [48.7, 3633.0], [48.8, 3658.0], [48.9, 3658.0], [49.0, 3658.0], [49.1, 3658.0], [49.2, 3665.0], [49.3, 3665.0], [49.4, 3665.0], [49.5, 3665.0], [49.6, 3665.0], [49.7, 3665.0], [49.8, 3665.0], [49.9, 3665.0], [50.0, 3730.0], [50.1, 3730.0], [50.2, 3730.0], [50.3, 3730.0], [50.4, 3730.0], [50.5, 3748.0], [50.6, 3748.0], [50.7, 3748.0], [50.8, 3748.0], [50.9, 3766.0], [51.0, 3766.0], [51.1, 3766.0], [51.2, 3766.0], [51.3, 3767.0], [51.4, 3767.0], [51.5, 3767.0], [51.6, 3767.0], [51.7, 3780.0], [51.8, 3780.0], [51.9, 3780.0], [52.0, 3780.0], [52.1, 3785.0], [52.2, 3785.0], [52.3, 3785.0], [52.4, 3785.0], [52.5, 3818.0], [52.6, 3818.0], [52.7, 3818.0], [52.8, 3818.0], [52.9, 3818.0], [53.0, 3836.0], [53.1, 3836.0], [53.2, 3836.0], [53.3, 3836.0], [53.4, 3860.0], [53.5, 3860.0], [53.6, 3860.0], [53.7, 3860.0], [53.8, 3876.0], [53.9, 3876.0], [54.0, 3876.0], [54.1, 3876.0], [54.2, 3910.0], [54.3, 3910.0], [54.4, 3910.0], [54.5, 3910.0], [54.6, 4075.0], [54.7, 4075.0], [54.8, 4075.0], [54.9, 4075.0], [55.0, 4102.0], [55.1, 4102.0], [55.2, 4102.0], [55.3, 4102.0], [55.4, 4102.0], [55.5, 4129.0], [55.6, 4129.0], [55.7, 4129.0], [55.8, 4129.0], [55.9, 4144.0], [56.0, 4144.0], [56.1, 4144.0], [56.2, 4144.0], [56.3, 4147.0], [56.4, 4147.0], [56.5, 4147.0], [56.6, 4147.0], [56.7, 4201.0], [56.8, 4201.0], [56.9, 4201.0], [57.0, 4201.0], [57.1, 4398.0], [57.2, 4398.0], [57.3, 4398.0], [57.4, 4398.0], [57.5, 4404.0], [57.6, 4404.0], [57.7, 4404.0], [57.8, 4404.0], [57.9, 4404.0], [58.0, 4411.0], [58.1, 4411.0], [58.2, 4411.0], [58.3, 4411.0], [58.4, 4447.0], [58.5, 4447.0], [58.6, 4447.0], [58.7, 4447.0], [58.8, 4468.0], [58.9, 4468.0], [59.0, 4468.0], [59.1, 4468.0], [59.2, 4478.0], [59.3, 4478.0], [59.4, 4478.0], [59.5, 4478.0], [59.6, 4547.0], [59.7, 4547.0], [59.8, 4547.0], [59.9, 4547.0], [60.0, 4548.0], [60.1, 4548.0], [60.2, 4548.0], [60.3, 4548.0], [60.4, 4548.0], [60.5, 4549.0], [60.6, 4549.0], [60.7, 4549.0], [60.8, 4549.0], [60.9, 4563.0], [61.0, 4563.0], [61.1, 4563.0], [61.2, 4563.0], [61.3, 4576.0], [61.4, 4576.0], [61.5, 4576.0], [61.6, 4576.0], [61.7, 4586.0], [61.8, 4586.0], [61.9, 4586.0], [62.0, 4586.0], [62.1, 4588.0], [62.2, 4588.0], [62.3, 4588.0], [62.4, 4588.0], [62.5, 4601.0], [62.6, 4601.0], [62.7, 4601.0], [62.8, 4601.0], [62.9, 4601.0], [63.0, 4619.0], [63.1, 4619.0], [63.2, 4619.0], [63.3, 4619.0], [63.4, 4623.0], [63.5, 4623.0], [63.6, 4623.0], [63.7, 4623.0], [63.8, 4649.0], [63.9, 4649.0], [64.0, 4649.0], [64.1, 4649.0], [64.2, 4662.0], [64.3, 4662.0], [64.4, 4662.0], [64.5, 4662.0], [64.6, 4668.0], [64.7, 4668.0], [64.8, 4668.0], [64.9, 4668.0], [65.0, 4678.0], [65.1, 4678.0], [65.2, 4678.0], [65.3, 4678.0], [65.4, 4678.0], [65.5, 4686.0], [65.6, 4686.0], [65.7, 4686.0], [65.8, 4686.0], [65.9, 4687.0], [66.0, 4687.0], [66.1, 4687.0], [66.2, 4687.0], [66.3, 4712.0], [66.4, 4712.0], [66.5, 4712.0], [66.6, 4712.0], [66.7, 4737.0], [66.8, 4737.0], [66.9, 4737.0], [67.0, 4737.0], [67.1, 4745.0], [67.2, 4745.0], [67.3, 4745.0], [67.4, 4745.0], [67.5, 4767.0], [67.6, 4767.0], [67.7, 4767.0], [67.8, 4767.0], [67.9, 4767.0], [68.0, 4769.0], [68.1, 4769.0], [68.2, 4769.0], [68.3, 4769.0], [68.4, 4785.0], [68.5, 4785.0], [68.6, 4785.0], [68.7, 4785.0], [68.8, 4826.0], [68.9, 4826.0], [69.0, 4826.0], [69.1, 4826.0], [69.2, 4828.0], [69.3, 4828.0], [69.4, 4828.0], [69.5, 4828.0], [69.6, 4828.0], [69.7, 4828.0], [69.8, 4828.0], [69.9, 4828.0], [70.0, 4842.0], [70.1, 4842.0], [70.2, 4842.0], [70.3, 4842.0], [70.4, 4842.0], [70.5, 4979.0], [70.6, 4979.0], [70.7, 4979.0], [70.8, 4979.0], [70.9, 4985.0], [71.0, 4985.0], [71.1, 4985.0], [71.2, 4985.0], [71.3, 5008.0], [71.4, 5008.0], [71.5, 5008.0], [71.6, 5008.0], [71.7, 5022.0], [71.8, 5022.0], [71.9, 5022.0], [72.0, 5022.0], [72.1, 5031.0], [72.2, 5031.0], [72.3, 5031.0], [72.4, 5031.0], [72.5, 5179.0], [72.6, 5179.0], [72.7, 5179.0], [72.8, 5179.0], [72.9, 5179.0], [73.0, 5203.0], [73.1, 5203.0], [73.2, 5203.0], [73.3, 5203.0], [73.4, 5226.0], [73.5, 5226.0], [73.6, 5226.0], [73.7, 5226.0], [73.8, 5367.0], [73.9, 5367.0], [74.0, 5367.0], [74.1, 5367.0], [74.2, 5597.0], [74.3, 5597.0], [74.4, 5597.0], [74.5, 5597.0], [74.6, 5718.0], [74.7, 5718.0], [74.8, 5718.0], [74.9, 5718.0], [75.0, 6066.0], [75.1, 6066.0], [75.2, 6066.0], [75.3, 6066.0], [75.4, 6066.0], [75.5, 6176.0], [75.6, 6176.0], [75.7, 6176.0], [75.8, 6176.0], [75.9, 6224.0], [76.0, 6224.0], [76.1, 6224.0], [76.2, 6224.0], [76.3, 6274.0], [76.4, 6274.0], [76.5, 6274.0], [76.6, 6274.0], [76.7, 6279.0], [76.8, 6279.0], [76.9, 6279.0], [77.0, 6279.0], [77.1, 6327.0], [77.2, 6327.0], [77.3, 6327.0], [77.4, 6327.0], [77.5, 6327.0], [77.6, 6369.0], [77.7, 6369.0], [77.8, 6369.0], [77.9, 6369.0], [78.0, 6407.0], [78.1, 6407.0], [78.2, 6407.0], [78.3, 6407.0], [78.4, 6450.0], [78.5, 6450.0], [78.6, 6450.0], [78.7, 6450.0], [78.8, 6468.0], [78.9, 6468.0], [79.0, 6468.0], [79.1, 6468.0], [79.2, 6515.0], [79.3, 6515.0], [79.4, 6515.0], [79.5, 6515.0], [79.6, 6544.0], [79.7, 6544.0], [79.8, 6544.0], [79.9, 6544.0], [80.0, 6544.0], [80.1, 6598.0], [80.2, 6598.0], [80.3, 6598.0], [80.4, 6598.0], [80.5, 6626.0], [80.6, 6626.0], [80.7, 6626.0], [80.8, 6626.0], [80.9, 6718.0], [81.0, 6718.0], [81.1, 6718.0], [81.2, 6718.0], [81.3, 6734.0], [81.4, 6734.0], [81.5, 6734.0], [81.6, 6734.0], [81.7, 6754.0], [81.8, 6754.0], [81.9, 6754.0], [82.0, 6754.0], [82.1, 6805.0], [82.2, 6805.0], [82.3, 6805.0], [82.4, 6805.0], [82.5, 6805.0], [82.6, 6823.0], [82.7, 6823.0], [82.8, 6823.0], [82.9, 6823.0], [83.0, 6826.0], [83.1, 6826.0], [83.2, 6826.0], [83.3, 6826.0], [83.4, 6977.0], [83.5, 6977.0], [83.6, 6977.0], [83.7, 6977.0], [83.8, 6979.0], [83.9, 6979.0], [84.0, 6979.0], [84.1, 6979.0], [84.2, 7069.0], [84.3, 7069.0], [84.4, 7069.0], [84.5, 7069.0], [84.6, 7228.0], [84.7, 7228.0], [84.8, 7228.0], [84.9, 7228.0], [85.0, 7228.0], [85.1, 7339.0], [85.2, 7339.0], [85.3, 7339.0], [85.4, 7339.0], [85.5, 7410.0], [85.6, 7410.0], [85.7, 7410.0], [85.8, 7410.0], [85.9, 7424.0], [86.0, 7424.0], [86.1, 7424.0], [86.2, 7424.0], [86.3, 7500.0], [86.4, 7500.0], [86.5, 7500.0], [86.6, 7500.0], [86.7, 10304.0], [86.8, 10304.0], [86.9, 10304.0], [87.0, 10304.0], [87.1, 10439.0], [87.2, 10439.0], [87.3, 10439.0], [87.4, 10439.0], [87.5, 10439.0], [87.6, 10560.0], [87.7, 10560.0], [87.8, 10560.0], [87.9, 10560.0], [88.0, 10736.0], [88.1, 10736.0], [88.2, 10736.0], [88.3, 10736.0], [88.4, 10789.0], [88.5, 10789.0], [88.6, 10789.0], [88.7, 10789.0], [88.8, 10791.0], [88.9, 10791.0], [89.0, 10791.0], [89.1, 10791.0], [89.2, 10805.0], [89.3, 10805.0], [89.4, 10805.0], [89.5, 10805.0], [89.6, 10806.0], [89.7, 10806.0], [89.8, 10806.0], [89.9, 10806.0], [90.0, 10806.0], [90.1, 10807.0], [90.2, 10807.0], [90.3, 10807.0], [90.4, 10807.0], [90.5, 10837.0], [90.6, 10837.0], [90.7, 10837.0], [90.8, 10837.0], [90.9, 10848.0], [91.0, 10848.0], [91.1, 10848.0], [91.2, 10848.0], [91.3, 10873.0], [91.4, 10873.0], [91.5, 10873.0], [91.6, 10873.0], [91.7, 11032.0], [91.8, 11032.0], [91.9, 11032.0], [92.0, 11032.0], [92.1, 11047.0], [92.2, 11047.0], [92.3, 11047.0], [92.4, 11047.0], [92.5, 11047.0], [92.6, 11058.0], [92.7, 11058.0], [92.8, 11058.0], [92.9, 11058.0], [93.0, 11148.0], [93.1, 11148.0], [93.2, 11148.0], [93.3, 11148.0], [93.4, 11161.0], [93.5, 11161.0], [93.6, 11161.0], [93.7, 11161.0], [93.8, 11164.0], [93.9, 11164.0], [94.0, 11164.0], [94.1, 11164.0], [94.2, 11225.0], [94.3, 11225.0], [94.4, 11225.0], [94.5, 11225.0], [94.6, 11234.0], [94.7, 11234.0], [94.8, 11234.0], [94.9, 11234.0], [95.0, 11234.0], [95.1, 11241.0], [95.2, 11241.0], [95.3, 11241.0], [95.4, 11241.0], [95.5, 11360.0], [95.6, 11360.0], [95.7, 11360.0], [95.8, 11360.0], [95.9, 11669.0], [96.0, 11669.0], [96.1, 11669.0], [96.2, 11669.0], [96.3, 11675.0], [96.4, 11675.0], [96.5, 11675.0], [96.6, 11675.0], [96.7, 11679.0], [96.8, 11679.0], [96.9, 11679.0], [97.0, 11679.0], [97.1, 11773.0], [97.2, 11773.0], [97.3, 11773.0], [97.4, 11773.0], [97.5, 11773.0], [97.6, 11800.0], [97.7, 11800.0], [97.8, 11800.0], [97.9, 11800.0], [98.0, 11802.0], [98.1, 11802.0], [98.2, 11802.0], [98.3, 11802.0], [98.4, 11848.0], [98.5, 11848.0], [98.6, 11848.0], [98.7, 11848.0], [98.8, 11896.0], [98.9, 11896.0], [99.0, 11896.0], [99.1, 11896.0], [99.2, 11901.0], [99.3, 11901.0], [99.4, 11901.0], [99.5, 11901.0], [99.6, 13423.0], [99.7, 13423.0], [99.8, 13423.0], [99.9, 13423.0], [100.0, 13423.0]], "isOverall": false, "label": "GetFile", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 10.0, "series": [{"data": [[600.0, 1.0], [700.0, 8.0], [800.0, 3.0], [900.0, 5.0], [1000.0, 5.0], [1100.0, 1.0], [1200.0, 5.0], [1300.0, 9.0], [1400.0, 2.0], [1500.0, 1.0], [1600.0, 1.0], [1700.0, 2.0], [1900.0, 1.0], [2000.0, 5.0], [2100.0, 6.0], [2300.0, 1.0], [2400.0, 2.0], [2500.0, 1.0], [2600.0, 3.0], [2700.0, 4.0], [2800.0, 2.0], [2900.0, 4.0], [3000.0, 3.0], [3100.0, 1.0], [3300.0, 10.0], [3200.0, 1.0], [3400.0, 9.0], [3500.0, 2.0], [3600.0, 7.0], [3700.0, 6.0], [3800.0, 4.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 4.0], [4200.0, 1.0], [4300.0, 1.0], [4400.0, 5.0], [4600.0, 9.0], [4500.0, 7.0], [4700.0, 6.0], [4800.0, 4.0], [5000.0, 3.0], [4900.0, 2.0], [5100.0, 1.0], [5300.0, 1.0], [5200.0, 2.0], [5500.0, 1.0], [5700.0, 1.0], [6000.0, 1.0], [6100.0, 1.0], [6200.0, 3.0], [6300.0, 2.0], [6400.0, 3.0], [6500.0, 3.0], [6600.0, 1.0], [6700.0, 3.0], [6900.0, 2.0], [6800.0, 3.0], [7000.0, 1.0], [7400.0, 2.0], [7200.0, 1.0], [7300.0, 1.0], [7500.0, 1.0], [10300.0, 1.0], [10400.0, 1.0], [10500.0, 1.0], [10700.0, 3.0], [10800.0, 6.0], [11200.0, 3.0], [11000.0, 3.0], [11100.0, 3.0], [11700.0, 1.0], [11300.0, 1.0], [11600.0, 3.0], [11800.0, 4.0], [11900.0, 1.0], [13400.0, 1.0], [300.0, 3.0], [400.0, 5.0], [500.0, 7.0]], "isOverall": false, "label": "GetFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 13400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1.500ms"], [2, "Requests having \nresponse time > 1.500ms"], [3, "Requests in error"]], "maxY": 186.0, "series": [{"data": [[0.0, 7.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 46.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1.500ms", "isController": false}, {"data": [[2.0, 186.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1.500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 20.357142857142858, "minX": 1.6817022E12, "maxY": 70.22727272727272, "series": [{"data": [[1.6817022E12, 20.357142857142858], [1.68170232E12, 70.22727272727272], [1.68170226E12, 54.14285714285717]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68170232E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 769.9473684210526, "minX": 20.0, "maxY": 10807.199999999997, "series": [{"data": [[33.0, 5203.0], [32.0, 5008.0], [40.0, 3865.541666666666], [42.0, 5718.0], [49.0, 6274.0], [48.0, 6224.0], [51.0, 6327.0], [50.0, 6450.0], [52.0, 6369.0], [55.0, 6515.0], [54.0, 6407.0], [57.0, 6626.0], [56.0, 6544.0], [59.0, 6468.0], [58.0, 6598.0], [60.0, 3693.3218390804595], [74.0, 6754.0], [20.0, 1838.7222222222222], [80.0, 10807.199999999997], [21.0, 769.9473684210526]], "isOverall": false, "label": "GetFile", "isController": false}, {"data": [[49.28749999999996, 4414.270833333334]], "isOverall": false, "label": "GetFile-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 80.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 363.0, "minX": 1.6817022E12, "maxY": 1364721.4833333334, "series": [{"data": [[1.6817022E12, 522659.1], [1.68170232E12, 428912.7166666667], [1.68170226E12, 1364721.4833333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6817022E12, 453.75], [1.68170232E12, 363.0], [1.68170226E12, 1155.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68170232E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 1465.75, "minX": 1.6817022E12, "maxY": 9190.681818181816, "series": [{"data": [[1.6817022E12, 1465.75], [1.68170232E12, 9190.681818181816], [1.68170226E12, 4092.5214285714283]], "isOverall": false, "label": "GetFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68170232E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 887.1964285714286, "minX": 1.6817022E12, "maxY": 8834.613636363636, "series": [{"data": [[1.6817022E12, 887.1964285714286], [1.68170232E12, 8834.613636363636], [1.68170226E12, 3366.1928571428566]], "isOverall": false, "label": "GetFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68170232E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.1142857142857145, "minX": 1.6817022E12, "maxY": 1.227272727272727, "series": [{"data": [[1.6817022E12, 1.1785714285714288], [1.68170232E12, 1.227272727272727], [1.68170226E12, 1.1142857142857145]], "isOverall": false, "label": "GetFile", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68170232E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 326.0, "minX": 1.6817022E12, "maxY": 13423.0, "series": [{"data": [[1.6817022E12, 4447.0], [1.68170232E12, 11901.0], [1.68170226E12, 13423.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6817022E12, 3487.7999999999997], [1.68170232E12, 11801.0], [1.68170226E12, 6961.900000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6817022E12, 4447.0], [1.68170232E12, 11901.0], [1.68170226E12, 12746.500000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6817022E12, 4110.4], [1.68170232E12, 11884.0], [1.68170226E12, 7496.199999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6817022E12, 326.0], [1.68170232E12, 5008.0], [1.68170226E12, 905.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6817022E12, 972.0], [1.68170232E12, 10805.5], [1.68170226E12, 3757.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68170232E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 402.0, "minX": 1.0, "maxY": 11773.0, "series": [{"data": [[8.0, 10805.5], [37.0, 4623.0], [39.0, 3480.0], [10.0, 1098.5], [3.0, 4727.5], [15.0, 6407.0], [1.0, 11773.0], [4.0, 10499.5], [17.0, 1380.0], [18.0, 11300.5], [5.0, 3405.0], [21.0, 2179.0], [6.0, 6333.0], [7.0, 4841.5], [31.0, 697.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[31.0, 402.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 11584.0, "series": [{"data": [[8.0, 10616.0], [37.0, 4369.0], [39.0, 1385.0], [10.0, 793.5], [3.0, 3650.5], [15.0, 6148.0], [1.0, 11584.0], [4.0, 10102.0], [17.0, 1228.0], [18.0, 10814.0], [5.0, 1754.0], [21.0, 1794.0], [6.0, 5107.5], [7.0, 3671.0], [31.0, 275.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[31.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 39.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.6817022E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.6817022E12, 0.9333333333333333], [1.68170232E12, 0.7333333333333333], [1.68170226E12, 2.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68170232E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6817022E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.6817022E12, 0.9166666666666666], [1.68170232E12, 0.7333333333333333], [1.68170226E12, 2.3333333333333335]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6817022E12, 0.016666666666666666]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.ConnectionClosedException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68170232E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6817022E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.6817022E12, 0.016666666666666666]], "isOverall": false, "label": "GetFile-failure", "isController": false}, {"data": [[1.6817022E12, 0.9166666666666666], [1.68170232E12, 0.7333333333333333], [1.68170226E12, 2.3333333333333335]], "isOverall": false, "label": "GetFile-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68170232E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.6817022E12, "maxY": 2.3333333333333335, "series": [{"data": [[1.6817022E12, 0.9166666666666666], [1.68170232E12, 0.7333333333333333], [1.68170226E12, 2.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6817022E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68170232E12, "title": "Total Transactions Per Second"}},
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

