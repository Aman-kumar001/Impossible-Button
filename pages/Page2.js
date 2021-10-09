import { useEffect, useState } from 'react';
import classes from '../styles/Review.module.css';

const Review = () => {
	const [ready, setReady] = useState(false);
	const [debugCount, setDebug] = useState();
	const [stalk, setStalk] = useState(false);
	const [grab, setGrab] = useState(false);
	useEffect(() => {
		setReady(true);
		setDebug(0);
	}, []);

	if (ready) {
		var lEye = document.getElementById('lEye');
		var rEye = document.getElementById('rEye');
		var fox = document.getElementById('catcherFox');
		var hand = document.getElementById('hand_net');
		// window.onmousemove = function (event) {
		// 	var y = event.pageY;
		// 	var x = event.pageX;
		// 	var yFox = fox.offsetTop;
		// 	var xFox = fox.offsetLeft;
		// 	var rad = Math.atan2((yFox - y) / (xFox - x));
		// 	var rot = rad * (180 / Math.PI) * -1 + 180;
		// };

		if (stalk) {
			fox.style.bottom = '-180px';
		}
		if (!stalk) {
			fox.style.bottom = '-300px';
		}
		if (grab) {
			hand.style.opacity = 1;
			fox.style.bottom = '-120px';
			hand.style.transform = 'rotateZ(-180deg)';
			setTimeout(() => {
				fox.style.bottom = '-300px';
			}, 400);
		}
		if (!grab) {
			hand.style.opacity = 0;
			hand.style.transform = 'rotateZ(0deg)';
		}

		var debugButton = document.getElementById('debugButton');
		var debugCircle = document.getElementById('debugCircle');
		if (debugCount % 2 == 0) {
			debugCircle.style.opacity = '0';
		} else {
			debugCircle.style.opacity = '1';
		}
	}

	return (
		<div
			className={classes.container}
			style={{ cursor: `${grab ? 'none' : 'default'}` }}
		>
			<button
				id='debugButton'
				className={classes.debug}
				onClick={() => setDebug(debugCount + 1)}
			>
				DEBUG
			</button>

			<div className={classes.content}>
				<h1 style={{ fontSize: '3rem', margin: 0, marginBottom: '1rem' }}>
					HELLO THERE!!!
				</h1>
				<p style={{ fontSize: '1.5rem' }}>
					I am Aman Kumar. I am a developer, a student, and a learner. Currently
					I am pursuing B.tech. in Computer Science with passion to built
					something new. Feel free to roam around clicking buttons hovering over
					texts.
				</p>
			</div>
			<button className={classes.button}>CLICK ME!!!</button>
			<div
				id='debugCircle'
				className={classes.circle1}
				onMouseEnter={() => setStalk(true)}
				onMouseLeave={() => setStalk(false)}
			>
				<div
					className={classes.circle2}
					onMouseEnter={() => setGrab(true)}
					onMouseLeave={() => setGrab(false)}
				></div>
			</div>
			<div className={classes.catcherFox} id='catcherFox'>
				<svg
					width='300'
					height='400'
					viewBox='0 0 4783 3977'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={classes.hand}
					id='hand_net'
				>
					<g filter='url(#filter0_d)'>
						<g id='netStick'>
							<g id='net'>
								<g id='g206'>
									<path
										id='path208'
										d='M4047.46 2392.84C4195.11 2304.34 4314.48 2206.44 4392.59 2103.79C4381.03 2109.83 4369.05 2115.69 4356.64 2121.38C4249.53 2170.5 4110.13 2208.13 3957.27 2224.44C3794.85 2241.79 3644.72 2232.14 3530.49 2202.32C3463.98 2184.93 3408.57 2160.14 3368.11 2129.06C3349.7 2200.57 3321.93 2266.77 3283.08 2327.96C3226.24 2417.54 3146.08 2495.72 3037.35 2563.61C3020.52 2574.1 2999.3 2585.99 2975.57 2599.24C2900.76 2641.06 2798.71 2698.15 2776.83 2742.29C2773.99 2748.06 2778.91 2755.39 2796.85 2764.79C2826.86 2773.16 2865.55 2773.66 2907.83 2770.12C2955.09 2766.15 3006.51 2757.05 3055.99 2747.81C3427.55 2678.6 3781.94 2551.98 4047.46 2392.84ZM4578.13 1921.18C4539.31 2123.56 4357.55 2313.99 4094.61 2471.6C3820.23 2636.08 3454.97 2766.73 3072.76 2837.95C3020.88 2847.6 2966.83 2857.16 2915.59 2861.45C2861.1 2866.03 2809.57 2864.59 2766.4 2851.34C2763.95 2850.58 2761.64 2849.67 2759.43 2848.57L2759 2848.34L2758.79 2848.25C2678.9 2808.43 2667.26 2757.07 2694.77 2701.52C2729.17 2632.09 2845.63 2566.95 2931 2519.22C2954.01 2506.36 2974.58 2494.86 2989.06 2485.81C3085.53 2425.59 3156.18 2356.94 3205.74 2278.86C3255.16 2200.98 3284.05 2112.89 3297.05 2013.81C3299.08 1997.99 3308.95 1985.08 3322.27 1978.52L3322.22 1978.42L3322.23 1978.41C3344.98 1967.22 3372.52 1976.58 3383.72 1999.34C3385.5 2002.95 3386.76 2006.73 3387.53 2010.53C3400.1 2053.53 3461.68 2089.72 3553.68 2113.73C3657.55 2140.85 3795.99 2149.42 3947.58 2133.25C4090.82 2117.96 4220.08 2083.33 4318.17 2038.33C4411 1995.76 4473.74 1946.14 4489.62 1898.15C4497.57 1874.15 4523.49 1861.14 4547.49 1869.07C4569.58 1876.38 4582.37 1898.91 4578.08 1921.17L4578.13 1921.18Z'
										fill='#343E40'
									/>
								</g>
								<g id='g210'>
									<path
										id='path212'
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M4533.09 1912.54C4458.2 2302.85 3793.28 2657.08 3064.37 2792.89C2963 2811.77 2853.51 2830.16 2779.83 2807.54C2609.18 2723.03 2914.66 2586.25 3013.21 2524.72C3218.42 2396.62 3314.77 2231.05 3342.5 2019.62L3342.51 2019.62C3373.34 2141.82 3637.15 2212.5 3952.43 2178.84C4250.78 2147 4493.36 2032.63 4533.09 1912.54Z'
										fill='#CFDEE8'
									/>
								</g>
								<g id='g214'>
									<path
										id='path216'
										d='M3431.52 1996.22C3431.53 1996.25 3431.53 1996.25 3431.53 1996.22L3431.52 1996.22ZM3431.52 1996.22L3431.53 1996.22L3431.52 1995.77L3431.5 1995.79L3431.52 1996.22ZM4329.91 1981.14C4402.7 1943.14 4447.27 1906.06 4446.7 1878.74L4446.56 1877.53C4444.36 1856.92 4406.71 1834.63 4346.14 1814.53C4260.83 1786.27 4142.21 1773.24 4007.97 1780.61C3985.35 1781.86 3961.21 1783.82 3935.62 1786.56C3781.33 1803.02 3644.64 1842.34 3548.39 1892.56C3475.42 1930.65 3430.8 1967.82 3431.61 1995.15L3431.74 1996.18C3433.95 2016.78 3471.58 2039.06 3532.14 2059.15C3617.45 2087.45 3736.04 2100.46 3870.27 2093.09C3892.99 2091.83 3915.6 2090.07 3937.94 2087.77C3939.51 2087.52 3941.09 2087.32 3942.67 2087.15C4096.97 2070.68 4233.66 2031.36 4329.91 1981.14ZM4630.67 1867.79C4636.51 1974.06 4553.66 2071.95 4415.04 2144.31C4299.11 2204.83 4139 2251.69 3962.17 2270.55C3960.56 2270.73 3958.93 2270.86 3957.32 2270.94C3930.78 2273.71 3905.1 2275.72 3880.4 2277.09C3723.14 2285.71 3580.49 2269.24 3474.24 2233.98C3343.26 2190.55 3258.98 2115.25 3248.33 2015.68L3247.79 2006.22L3247.78 2005.91L3247.63 2005.91C3241.8 1899.65 3324.65 1801.75 3463.27 1729.39C3579.19 1668.88 3739.32 1622.01 3916.12 1603.13C3942.64 1600.32 3969.96 1598.13 3997.84 1596.61C4155.09 1587.96 4297.79 1604.45 4404.04 1639.7C4535.04 1683.13 4619.34 1758.45 4629.97 1858.03C4630.17 1859.95 4630.31 1861.87 4630.39 1863.79L4630.67 1867.79Z'
										fill='#343E40'
									/>
								</g>
								<g id='g218'>
									<path
										id='path220'
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M4538.67 1872.86C4546.01 2006.53 4283.54 2143.52 3952.42 2178.85C3621.32 2214.2 3346.96 2134.5 3339.62 2000.82C3332.3 1867.17 3594.76 1730.18 3925.88 1694.86C4256.99 1659.51 4531.34 1739.21 4538.67 1872.86Z'
										fill='#CFDEE8'
									/>
								</g>
								<g id='g222'>
									<path
										id='path224'
										d='M4515.88 1968.25C4523.66 1958.29 4538.06 1956.53 4548.04 1964.33C4557.98 1972.11 4559.75 1986.52 4551.96 1996.48C4429.25 2153.68 4226.8 2255.94 4003.6 2314.73C3729.54 2386.92 3423.33 2393.75 3196.22 2356.3C3183.75 2354.28 3175.26 2342.51 3177.29 2330.02C3179.31 2317.54 3191.08 2309.05 3203.56 2311.09C3425.32 2347.66 3724.31 2341.01 3991.86 2270.54C4206.23 2214.08 4399.92 2116.8 4515.88 1968.25Z'
										fill='#343E40'
									/>
								</g>
								<g id='g226'>
									<path
										id='path228'
										d='M3010.4 2527.39C2997.92 2525.25 2989.53 2513.4 2991.67 2500.92C2993.82 2488.44 3005.69 2480.06 3018.16 2482.2C3199.31 2513.59 3399.89 2523.25 3611 2499.27C3796.99 2478.11 3991.4 2430.83 4188.21 2349.22C4199.88 2344.35 4213.3 2349.87 4218.17 2361.57C4223.03 2373.23 4217.5 2386.67 4205.82 2391.52C4005.03 2474.8 3806.4 2523.1 3616.16 2544.71C3400.16 2569.26 3195.25 2559.43 3010.4 2527.39Z'
										fill='#343E40'
									/>
								</g>
								<g id='g230'>
									<path
										id='path232'
										d='M2805.33 2640.76C2793.84 2635.56 2788.73 2621.97 2793.93 2610.49C2799.15 2598.97 2812.71 2593.86 2824.22 2599.08C2891 2629.44 2995.09 2652.44 3104.87 2668.09C3241.58 2687.55 3386.19 2695.42 3479.14 2691.81C3491.78 2691.34 3502.4 2701.2 3502.88 2713.83C3503.35 2726.46 3493.5 2737.09 3480.86 2737.56C3385.43 2741.27 3237.61 2733.27 3098.4 2713.44C2984.97 2697.31 2876.54 2673.13 2805.33 2640.76Z'
										fill='#343E40'
									/>
								</g>
								<g id='g234'>
									<path
										id='path236'
										d='M3929.46 1684.59C3925.01 1672.76 3931.02 1659.56 3942.85 1655.12C3954.68 1650.68 3967.88 1656.66 3972.33 1668.5C4002.57 1749.38 4011.71 1925.52 4005.87 2100.56C3999.64 2287.67 3976.16 2475.43 3942.94 2545.69C3937.54 2557.14 3923.87 2562.04 3912.44 2556.63C3900.99 2551.22 3896.11 2537.55 3901.51 2526.1C3932.19 2461.22 3954.09 2280.75 3960.15 2099.05C3965.82 1929.11 3957.53 1759.67 3929.46 1684.59Z'
										fill='#343E40'
									/>
								</g>
								<g id='g238'>
									<path
										id='path240'
										d='M4164.37 1683.65C4159.62 1671.9 4165.32 1658.53 4177.06 1653.78C4188.81 1649.06 4202.17 1654.74 4206.91 1666.5C4243.18 1757.02 4256.86 1869.83 4258.65 1979.24C4261.57 2157.61 4232.65 2328.76 4219 2376.65C4215.54 2388.79 4202.87 2395.82 4190.74 2392.36C4178.6 2388.9 4171.55 2376.23 4175.03 2364.09C4188.06 2318.36 4215.67 2153.66 4212.83 1980C4211.12 1875.49 4198.3 1768.32 4164.37 1683.65Z'
										fill='#343E40'
									/>
								</g>
								<g id='g242'>
									<path
										id='path244'
										d='M3671.01 1733.7C3670.05 1721.11 3679.5 1710.11 3692.11 1709.14C3704.71 1708.16 3715.72 1717.64 3716.68 1730.23C3725.17 1841.51 3717.13 2098.12 3691.54 2321.83C3672.61 2487.37 3643.67 2636.26 3603.97 2698.8C3597.19 2709.49 3583.03 2712.64 3572.35 2705.86C3561.68 2699.08 3558.52 2684.94 3565.3 2674.25C3600.83 2618.26 3627.74 2476.27 3645.99 2316.65C3671.31 2095.44 3679.32 1842.73 3671.01 1733.7Z'
										fill='#343E40'
									/>
								</g>
								<g id='g246'>
									<path
										id='path248'
										d='M3453.8 1806C3452.52 1793.44 3461.68 1782.19 3474.24 1780.92C3486.8 1779.65 3498.03 1788.83 3499.31 1801.39C3515.01 1955.68 3484.24 2163.62 3428.77 2353.91C3372.44 2547.16 3290.13 2723.44 3204.43 2808.71C3195.45 2817.59 3180.96 2817.54 3172.08 2808.56C3163.18 2799.58 3163.25 2785.08 3172.24 2776.2C3252.4 2696.41 3330.55 2527.59 3384.9 2341.13C3438.87 2155.95 3468.89 1954.44 3453.8 1806Z'
										fill='#343E40'
									/>
								</g>
								<g id='g250'>
									<path
										id='path252'
										d='M3103.38 2411.97C3105.54 2399.54 3117.37 2391.18 3129.8 2393.35C3142.24 2395.5 3150.57 2407.35 3148.41 2419.78C3138.31 2477.98 3111.06 2546.95 3076.29 2616.1C3033.3 2701.6 2978.35 2788.33 2930.35 2855.02C2922.99 2865.29 2908.68 2867.61 2898.42 2860.24C2888.18 2852.86 2885.84 2838.58 2893.22 2828.33C2939.82 2763.55 2993.3 2679.12 3035.34 2595.47C3068.4 2529.72 3094.16 2465.02 3103.38 2411.97Z'
										fill='#343E40'
									/>
								</g>
								<g id='g254'>
									<path
										id='path256'
										d='M4383.96 1718.74C4381.11 1706.41 4388.78 1694.07 4401.11 1691.21C4413.44 1688.35 4425.77 1696.02 4428.64 1708.34C4482.57 1941.12 4426.61 2133.67 4401.8 2219.05L4397.87 2232.67C4394.35 2244.82 4381.65 2251.84 4369.48 2248.34C4357.32 2244.82 4350.3 2232.1 4353.81 2219.95L4357.74 2206.33C4381.54 2124.47 4435.21 1939.85 4383.96 1718.74Z'
										fill='#343E40'
									/>
								</g>
								<g id='g258'>
									<path
										id='path260'
										d='M4549.64 1850.45C4560.91 1844.74 4574.7 1849.25 4580.39 1860.51C4586.09 1871.79 4581.59 1885.56 4570.32 1891.26C4372.2 1992.52 4149.92 2058.39 3927.34 2079.33C3715.66 2099.23 3503.37 2078.54 3310.85 2009.08C3298.96 2004.79 3292.81 1991.64 3297.12 1979.76C3301.41 1967.86 3314.55 1961.72 3326.44 1966.04C3512.23 2033.04 3717.71 2052.97 3923.05 2033.65C4140.07 2013.24 4356.68 1949.07 4549.64 1850.45Z'
										fill='#343E40'
									/>
								</g>
								<g id='g262'>
									<path
										id='path264'
										d='M4399.39 1692.34C4411.46 1688.48 4424.36 1695.16 4428.23 1707.25C4432.07 1719.32 4425.4 1732.23 4413.32 1736.06C4248.32 1788.31 4100.57 1832.46 3942.52 1856.71C3784 1881.03 3615.95 1885.14 3411.35 1857.05C3398.81 1855.36 3390.03 1843.76 3391.74 1831.21C3393.45 1818.68 3405.03 1809.87 3417.58 1811.59C3617.44 1839.03 3781.22 1835.07 3935.43 1811.42C4090.13 1787.69 4236.14 1744.02 4399.39 1692.34Z'
										fill='#343E40'
									/>
								</g>
							</g>
							<g id='g14'>
								<path
									id='path16'
									d='M3309.76 2091.63L307.501 2459.85L292.206 2360.03L3294.45 1991.79L3309.76 2091.63Z'
									fill='#343E40'
								/>
							</g>
						</g>
						<g id='Group 2'>
							<g id='g26'>
								<path
									id='path28'
									d='M940.229 1543.6L888.763 1545.83L788.588 1862.5L1218.94 2295.48L1337.95 2163.11C1281.31 2056.44 1220.89 1951.16 1156.06 1847.51C1090.3 1742.39 1016.81 1646.88 940.229 1543.6ZM942.547 1484.13L987.935 1508.4L1031.03 1562.53L1133.13 1701.31C1218.37 1814.67 1157.52 1730.34 1238.07 1838.6C1311.34 1955.67 1382.66 2028.79 1444.6 2147.24L1460.98 2178.59L1437.37 2204.85L1258.71 2403.56L1222.76 2443.54L1184.8 2405.35L766.307 1935.22L717.33 1869.78L701.053 1784.22L706.099 1719.55L723.919 1679.9L795.312 1559.35L842.537 1512.6L888.711 1483.94L942.547 1484.13Z'
									fill='#343E40'
								/>
							</g>
							<g id='g30'>
								<path
									id='path32'
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M815.284 1597.05C867.643 1545.56 915.658 1511.74 950.281 1557.78C1119.52 1782.84 1278.59 1933.93 1401.91 2169.76C1342.34 2236.02 1282.8 2302.24 1223.26 2368.5C1059.9 2204.16 932.963 2017.5 769.636 1853.17C716.481 1730.17 754.117 1713.9 815.284 1597.05Z'
									fill='#97A5AE'
								/>
							</g>
							<g id='g270'>
								<path
									id='path272'
									d='M1443.39 2051.44C1472.99 2060.65 1502.66 2075.53 1527.12 2092.62C1561.01 2116.29 1571.79 2155.61 1567.05 2201.93C1562.55 2245.96 1543.76 2298.02 1519.18 2346.45C1495.86 2392.45 1466.73 2436.45 1439.5 2467.85C1403.09 2509.79 1362.76 2533.61 1326.81 2526.28L1326.61 2526.33C1287.21 2518.27 1246.94 2499.93 1215.83 2479.01C1179.03 2454.22 1152.41 2422.9 1148.72 2395.17L1148.3 2392L1148.35 2389.16C1149.57 2315.88 1167.47 2251.76 1196.61 2197.41C1229.84 2135.46 1277.6 2086.57 1332.05 2051.38L1342.29 2044.75L1354.62 2042.82C1382.88 2038.38 1413.76 2042.25 1443.39 2051.44ZM1460.56 2166.04C1443.65 2154.24 1423.24 2143.97 1402.94 2137.67C1392.57 2134.43 1382.77 2132.35 1374.42 2131.85C1339.74 2156.74 1309.37 2189.82 1287.37 2230.85C1265.38 2271.83 1251.64 2320.97 1250.06 2378.05C1252.59 2383.38 1264.53 2393.33 1281.18 2404.53C1303.25 2419.38 1331 2432.23 1357.23 2437.6L1357.2 2437.68C1365.21 2439.22 1351.43 2427.52 1361.49 2415.93C1383.44 2390.64 1407.52 2354.01 1427.37 2314.88C1447.5 2275.16 1462.73 2234.06 1466.06 2201.69C1467.9 2183.61 1466.61 2170.25 1460.56 2166.04Z'
									fill='#343E40'
								/>
							</g>
							<g id='g274'>
								<path
									id='path276'
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M1493.82 2129.32C1454.59 2101.94 1399.69 2081.2 1359.24 2087.52C1270.08 2145.13 1201.46 2245.79 1199.16 2385.86C1203.38 2417.85 1275.09 2468.29 1341.93 2481.95C1370.3 2487.76 1431.23 2413.53 1473.29 2330.66C1514.48 2249.4 1537.52 2159.84 1493.82 2129.32Z'
									fill='#CFDEE8'
								/>
							</g>
							<g id='g278'>
								<path
									id='path280'
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M1493.85 2129.33C1454.56 2101.93 1399.69 2081.2 1359.24 2087.52C1354.52 2090.56 1349.86 2093.74 1345.29 2097.02C1285.38 2156.53 1243.92 2241.26 1242.15 2349.54C1246.37 2381.53 1318.07 2431.97 1384.9 2445.66C1389.05 2446.49 1393.88 2445.62 1399.27 2443.29C1424.19 2414.88 1451.31 2373.97 1473.3 2330.66C1514.48 2249.4 1537.52 2159.84 1493.85 2129.33Z'
									fill='white'
								/>
							</g>
						</g>
					</g>
					<defs>
						<filter
							id='filter0_d'
							x='260.974'
							y='1098.83'
							width='4456.51'
							height='2262'
							filterUnits='userSpaceOnUse'
							color-interpolation-filters='sRGB'
						>
							<feFlood flood-opacity='0' result='BackgroundImageFix' />
							<feColorMatrix
								in='SourceAlpha'
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
								result='hardAlpha'
							/>
							<feOffset dy='4' />
							<feGaussianBlur stdDeviation='2' />
							<feComposite in2='hardAlpha' operator='out' />
							<feColorMatrix
								type='matrix'
								values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
							/>
							<feBlend
								mode='normal'
								in2='BackgroundImageFix'
								result='effect1_dropShadow'
							/>
							<feBlend
								mode='normal'
								in='SourceGraphic'
								in2='effect1_dropShadow'
								result='shape'
							/>
						</filter>
					</defs>
				</svg>
				<svg
					width='200'
					height='270'
					viewBox='0 0 3153 4486'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<g id={classes.body}>
						<g id='g38'>
							<path
								id='path40'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1678.41 4256.52C2355.48 4256.52 2904.37 4307.85 2904.37 4371.14C2904.37 4434.46 2355.48 4485.76 1678.41 4485.76C1001.32 4485.76 452.442 4434.46 452.442 4371.14C452.442 4307.85 1001.32 4256.52 1678.41 4256.52Z'
								fill='#97B5C9'
							/>
						</g>
						<g id='g42'>
							<path
								id='path44'
								d='M1056.41 2303.97C1069.84 2334.23 1083.31 2364.55 1108.09 2395.94L1120.93 2412.2L1118.83 2432.53L1019.34 3393.07L1009.26 3490.39L935.56 3426.3C878.729 3376.91 833.433 3338.13 788.097 3299.35C744.245 3261.8 700.408 3224.28 640.546 3172.26L623.084 3157.08C427.37 2987.32 397.229 2961.17 535.005 2710.93C611.466 2572.06 717.469 2438.17 811.556 2319.35C846.741 2274.92 880.22 2232.65 910.97 2191.3L950.533 2138.14L991.58 2190.11C1024.16 2231.38 1040.3 2267.69 1056.41 2303.97ZM1015.71 2441.74C991.377 2407.37 977.513 2376.16 963.662 2344.97C958.566 2333.48 953.456 2322 947.733 2310.45C929.774 2333.48 910.721 2357.53 891.169 2382.23C799.989 2497.4 697.24 2627.17 624.162 2759.88C525.92 2938.31 547.768 2957.26 689.558 3080.26L707.03 3095.44C763.637 3144.67 808.944 3183.43 854.161 3222.12C878.01 3242.54 901.881 3262.95 928.297 3285.7L1015.71 2441.74Z'
								fill='#343E40'
							/>
						</g>
						<g id='g46'>
							<path
								id='path48'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1068.28 2427.38C1010.9 2354.71 1009.14 2294.21 951.757 2221.54C844.445 2365.79 683.464 2546.75 579.591 2735.4C457.625 2956.94 489.468 2973.58 673.788 3133.85C790.385 3235.22 852.155 3286.51 968.78 3387.89C1001.94 3067.74 1035.11 2747.53 1068.28 2427.38Z'
								fill='#97A5AE'
							/>
						</g>
						<g id='g50'>
							<path
								id='path52'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1068.28 2427.35C1010.9 2354.71 1009.16 2294.21 951.757 2221.54C878.089 2320.58 779.098 2436.91 690.689 2561.15C802.032 2600.66 920.753 2629.08 1045.81 2644.24L1068.28 2427.35Z'
								fill='#788B96'
							/>
						</g>
						<g id='g82'>
							<path
								id='path84'
								d='M977.52 2200.65L1116.4 2110.32L1131.96 2100.19L1150.43 2102.56C1327.57 2125.21 1492.21 2124.11 1656.82 2123C1824.69 2121.87 1992.58 2120.74 2176.33 2144.25L2205.33 2147.96L2216.73 2174.7C2326.55 2431.98 2394.18 2766.88 2435.59 3120.48C2474.95 3456.59 2490.7 3811.43 2496.51 4132.27C2532.53 4142.81 2569.45 4161.07 2599.48 4189.49C2633.85 4222.05 2658.88 4266.91 2663.6 4327.2L2667.86 4381.91H2612.84H2035.68H1996.58L1986.5 4343.9C1984 4334.34 1977.23 4308.43 1970.18 4281.25C1927.62 4117.7 1888.69 3968.24 1807.21 3835.45C1762.46 3855.78 1719.07 3872.93 1674.47 3888.08C1624.49 3905.01 1573.07 3919.29 1516.53 3932.59C1488.37 3992.22 1463.93 4050.85 1442.35 4112.64C1417.96 4182.52 1397.04 4256.63 1378.38 4340.99L1369.62 4380.56L1329.01 4380.82C1247.84 4381.33 1153.89 4381.88 1059.99 4382.4C966.04 4382.92 872.078 4383.46 790.874 4383.98L742.677 4384.3L739.926 4336.01C737.27 4289.37 761.362 4243.79 799.96 4208.4C823.93 4186.43 854.106 4167.98 886.842 4155.86C844.345 3845.41 828.277 3507.86 838.657 3179.54C849.361 2840.53 888.428 2511.22 955.825 2231.5L960.605 2211.65L977.52 2200.65ZM1156.26 2205.56L1049.85 2274.77C986.984 2543.38 950.412 2858.18 940.153 3182.71C929.485 3520.25 947.393 3868.27 993.868 4185.77L1001.15 4235.5L951.284 4243.3C920.877 4248.05 891.428 4262.71 869.818 4282L1059.6 4280.9C1138.34 4280.47 1217.09 4280.01 1288.33 4279.55C1305.64 4206.79 1324.74 4141.29 1346.43 4079.18C1372.15 4005.5 1401.4 3936.71 1435.48 3866.48L1446.19 3844.4L1470.12 3839.02C1532.24 3825.05 1587.72 3810.11 1641.82 3791.74C1695 3773.71 1747.06 3752.15 1803.23 3724.76L1842.39 3705.65L1867.33 3741.67C1975.33 3897.93 2019.62 4068 2068.47 4255.79L2074.81 4280.01H2543.79C2539.53 4273.73 2534.69 4268.12 2529.42 4263.14C2504.69 4239.73 2470.02 4227.87 2439.7 4223.72L2396.4 4217.79L2395.71 4174.17C2390.52 3847.05 2375.3 3480.46 2334.49 3132.06C2295.54 2799.38 2233.32 2485.05 2134.38 2241.4C1968.27 2222.4 1812.71 2223.46 1657.19 2224.5C1495 2225.6 1332.77 2226.69 1156.26 2205.56'
								fill='#343E40'
							/>
						</g>
						<g id='g86'>
							<path
								id='path88'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1144.06 2152.9C1068.6 2201.99 1080.64 2194.15 1005.18 2243.25C871.035 2800.05 850.507 3557.79 943.507 4193.14C862.656 4205.78 787.147 4271.26 790.675 4333.25C953.074 4332.18 1166.42 4331.12 1328.82 4330.06C1367.16 4156.78 1414.52 4026.09 1481.26 3888.57C1609.6 3859.75 1709.89 3826.98 1825.52 3770.52C1940.06 3936.19 1980.6 4122.86 2035.68 4330.97H2612.84C2604.57 4225.3 2515.86 4182.86 2446.47 4173.36C2436.05 3514.98 2385.26 2699.07 2169.94 2194.6C1809.05 2148.41 1504.97 2199.09 1144.06 2152.9Z'
								fill='#97A5AE'
							/>
						</g>
						<g id='g90'>
							<path
								id='path92'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M2446.47 4173.36C2437.52 3607.87 2398.76 2926.19 2251.6 2425.42C2333.37 3000.85 2394.44 3585.21 2446.47 4173.36Z'
								fill='#CFDEE8'
							/>
						</g>
						<g id='g94'>
							<path
								id='path96'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1265.36 4330.46H1265.73H1266.35L1267.33 4330.43H1268.33H1269.33H1270.31L1271.31 4330.4H1272.3H1273.29H1273.84H1274.28H1275.28L1277.25 4330.37H1278.25H1279.23H1280.23L1284.2 4330.34H1285.19L1286.18 4330.31H1287.18H1288.16H1289.16H1289.86L1290.14 4330.28H1291.14H1292.13H1293.11H1294.12L1296.09 4330.26H1297.09H1297.79H1298.08H1299.06L1300.06 4330.22H1301.06H1302.04H1303.03H1304.03L1305.02 4330.2H1305.65H1306.01H1306.99H1307.99L1308.98 4330.17H1309.97H1310.96H1311.96H1312.94H1313.45L1313.94 4330.14H1314.94H1315.92H1316.92H1317.91L1318.9 4330.11H1319.89H1320.88H1321.17H1321.87H1322.86L1323.87 4330.08H1324.84H1325.84H1326.84L1327.82 4330.05H1328.82C1367.16 4156.78 1414.52 4026.09 1481.26 3888.57C1609.6 3859.75 1709.89 3826.98 1825.52 3770.52C1940.06 3936.19 1980.6 4122.86 2035.68 4330.97H2146.74C2133.6 4280.82 1960.65 3951.94 2008.93 3632.89C1800.53 3770.87 1635.11 3808.58 1408.67 3857.39C1358.44 3989.81 1294.34 4164.06 1265.36 4330.46Z'
								fill='#788B96'
							/>
						</g>
						<g id='g98'>
							<path
								id='path100'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1144.06 2152.9C1068.6 2201.99 1080.64 2194.15 1005.18 2243.25C976.345 2362.91 952.771 2491.9 934.447 2626.94C1058.75 2650.47 1190.05 2660.86 1327.22 2655.73C1680.81 2668.89 1995.43 2579.55 2251.6 2425.42C2227.41 2343.16 2200.32 2265.79 2169.94 2194.6C1809.05 2148.41 1504.97 2199.09 1144.06 2152.9Z'
								fill='#788B96'
							/>
						</g>
						<g id='g102'>
							<path
								id='path104'
								d='M868.56 2884.84C899.784 2887.72 932.393 2896.28 960.418 2908.05V2908.25C1000.54 2925.13 1024.06 2963.07 1035.31 3011.65C1045.83 3057.08 1045.79 3113.69 1039.2 3167.93C1032.94 3219.59 1020.62 3270.5 1005.84 3308.16C985.704 3359.49 955.398 3393.04 918.17 3393.47C878.837 3393.9 835.26 3384.14 799.312 3369.75C756.525 3352.58 720.928 3326.27 707.952 3298.37L706.54 3295.34L705.561 3292.21C682.181 3217.78 677.36 3149.08 686.228 3087.86C696.369 3017.81 724.416 2957.78 763.25 2910.18L771.33 2900.27L782.561 2895.43C807.301 2884.79 837.52 2881.96 868.56 2884.84ZM921.006 3001.97C901.29 2993.71 879.372 2987.78 859.401 2985.93C849.505 2985.01 840.414 2985.01 832.898 2986.22C809.944 3018.15 793.436 3057.2 786.93 3102.2C780.316 3147.87 783.894 3199.81 801.164 3256.99C804.972 3261.14 818.702 3268.02 837.138 3275.39C862.158 3285.44 891.701 3292.26 917.369 3291.95C927.268 3291.86 906.133 3283.86 911.116 3271.13C922.878 3241.13 932.848 3199.38 938.109 3156.01C943.465 3111.88 943.88 3067.47 936.206 3034.34C932.134 3016.74 927.068 3004.39 921.077 3001.8L921.006 3001.97Z'
								fill='#343E40'
							/>
						</g>
						<g id='g106'>
							<path
								id='path108'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M940.716 2955.01C895.396 2935.98 837.881 2927.05 802.652 2942.23C739.58 3019.53 709.715 3135.69 754.129 3277.06C768.661 3308.33 851.557 3343.46 917.76 3342.71C945.869 3342.37 977.417 3254.46 988.657 3161.98C999.669 3071.31 991.16 2976.23 940.716 2955.01Z'
								fill='white'
							/>
						</g>
						<g id='g110'>
							<path
								id='path112'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M872.534 2936.35C838.06 2931.17 813.839 2937.39 802.658 2942.23C739.595 3019.53 709.708 3135.68 754.136 3277.06C762.45 3294.97 793.187 3314.12 830.378 3327.1C776.42 3267.27 800.736 2981.62 872.534 2936.35Z'
								fill='#CFDEE8'
							/>
						</g>
						<g id='g114'>
							<path
								id='path116'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1209.5 2100.05C1143.99 2520.21 1108.31 2936.09 1148.92 3341.01C1227.96 3601.1 2061.82 3469.37 2105.82 3240.15C2121.63 2803.39 2042.79 2401.44 1973.69 1989.17C1712.56 2027.06 1470.61 2062.15 1209.5 2100.05Z'
								fill='white'
							/>
						</g>
						<g id='g118'>
							<path
								id='path120'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1200.44 2159.39C1175.76 2324.87 1156.06 2489.69 1144.19 2653.35C1203.91 2657.2 1264.95 2658.07 1327.22 2655.73C1597.3 2665.81 1844.64 2616.03 2060.55 2523.32C2044.37 2408.26 2025.43 2293.95 2005.97 2179.39C1731.68 2162.86 1482.03 2188.36 1200.44 2159.39Z'
								fill='#CFDEE8'
							/>
						</g>
						<g id='g122'>
							<path
								id='path124'
								d='M1288.06 270.036C1383.57 254.495 1479.49 245.448 1575.85 243.949H1576.44H1577.04C1759.58 246.8 1941.84 277.004 2123.82 327.463L2437.43 46.7306L2489.63 -1.64414e-05L2517.82 64.244C2597.89 246.668 2662.88 434.552 2716.03 626.673C2767.89 814.095 2808.46 1005.43 2840.76 1199.61C2871.72 1236.48 2907.07 1267.46 2945.71 1293.99C2988.73 1323.55 3036.09 1347.81 3086.23 1368.62L3152.73 1396.25L3104.33 1449.62C3068.57 1489.03 3031.63 1520.47 2993.85 1546.28C3012.25 1545.84 3030.91 1544.79 3049.77 1543.17L3142.46 1535.2L3098.95 1617.6C2964.17 1872.79 2747.36 2096.89 2469.68 2248.89C2216.93 2387.24 1913.83 2465.82 1576.44 2453.58C1239.05 2465.82 935.943 2387.24 683.211 2248.89C405.536 2096.89 188.727 1872.79 53.9387 1617.6L10.4174 1535.2L103.101 1543.17C121.976 1544.79 140.628 1545.84 159.009 1546.28C121.047 1520.38 84.0854 1488.99 48.5614 1449.83L0 1396.31L66.6707 1368.62C116.787 1347.81 164.137 1323.55 207.173 1293.99C245.823 1267.46 281.16 1236.46 312.111 1199.61C344.425 1005.43 385.001 814.095 436.849 626.673C490.004 434.56 555.001 246.668 635.061 64.244L663.251 -1.64414e-05L715.467 46.7306L1029.07 327.463C1115.77 303.415 1202.11 284.008 1288.06 270.036ZM1576.41 345.459C1486.17 346.904 1395.46 355.52 1304.37 370.343C1212.43 385.293 1120.97 406.379 1029.93 432.616L1003.03 440.368L982.163 421.668L700.529 169.567C634.947 327.169 580.399 488.833 534.776 653.747C482.791 841.649 442.308 1034 410.175 1229.51L408.008 1242.72L399.829 1252.99C360.363 1302.58 314.697 1343.51 264.495 1377.99C235.948 1397.6 205.957 1415.08 174.855 1430.84C195.304 1448.15 216.051 1462.99 237.028 1475.92C275.725 1499.77 316.699 1517.86 358.635 1533.4L524.791 1595.02L351.075 1630.93C309.224 1639.57 266.799 1644.88 223.881 1647.05C212.069 1647.65 200.257 1648.02 188.452 1648.17C315.212 1853.87 500.957 2033.35 731.777 2159.71C969.768 2289.98 1255.77 2363.86 1574.65 2352L1576.44 2351.94L1578.24 2352C1897.1 2363.86 2183.1 2289.98 2421.11 2159.71C2651.94 2033.35 2837.68 1853.87 2964.43 1648.17C2952.62 1648.02 2940.82 1647.65 2928.99 1647.05C2886.08 1644.88 2843.64 1639.57 2801.81 1630.93L2628.18 1595.04L2794.43 1533.4C2836.1 1517.96 2876.93 1499.92 2915.85 1475.92C2936.93 1462.93 2957.72 1448.11 2978.11 1430.89C2946.98 1415.11 2916.98 1397.62 2888.39 1377.99C2838.17 1343.51 2792.53 1302.6 2753.06 1252.99L2744.88 1242.72L2742.69 1229.51C2710.59 1034 2670.11 841.649 2618.11 653.747C2572.5 488.833 2517.94 327.169 2452.34 169.567L2170.72 421.668L2149.84 440.368L2122.95 432.616C1940.49 380.033 1758.26 348.352 1576.41 345.459Z'
								fill='#343E40'
							/>
						</g>
						<g id='g126'>
							<path
								id='path128'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1576.44 294.704C1389.61 297.618 1202.81 330.017 1015.99 383.853C904.535 284.086 793.084 184.302 681.635 84.5438C523.446 444.945 424.828 826.989 360.023 1221.34C287.708 1312.21 192.455 1371.46 86.1724 1415.59C166.022 1503.63 252.546 1548.4 340.912 1581.17C262.422 1597.4 181.65 1601.04 98.9204 1593.93C348.342 2066.13 888.664 2428.36 1576.44 2402.76C2264.21 2428.36 2804.54 2066.13 3053.95 1593.93C2971.22 1601.04 2890.46 1597.4 2811.97 1581.17C2900.34 1548.4 2986.86 1503.63 3066.7 1415.59C2960.43 1371.46 2865.18 1312.21 2792.85 1221.34C2728.07 826.989 2629.42 444.945 2471.26 84.5438C2359.8 184.302 2248.34 284.086 2136.89 383.853C1950.08 330.017 1763.27 297.618 1576.44 294.704Z'
								fill='#97A5AE'
							/>
						</g>
						<g id='g130'>
							<path
								id='path132'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1576.44 294.704C1389.61 297.618 1202.81 330.017 1015.99 383.853C904.535 284.086 793.085 184.302 681.635 84.5438C787.362 195.389 893.101 325.325 998.833 436.17C1298.11 317.221 1704.7 295.252 2102.71 374.25C1927.27 326.174 1751.87 297.445 1576.44 294.704Z'
								fill='#CFDEE8'
							/>
						</g>
						<g id='g134'>
							<path
								id='path136'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M681.636 84.5438C523.445 444.945 424.829 826.989 360.024 1221.34C287.709 1312.21 192.454 1371.46 86.1731 1415.59C166.022 1503.63 252.546 1548.4 340.913 1581.17C262.422 1597.4 181.65 1601.04 98.9211 1593.93C348.341 2066.13 888.665 2428.36 1576.44 2402.76C1011.58 2368.38 565.518 2096.71 225.697 1654.68C302.918 1649.44 364.997 1631.9 438.24 1586.22C344.426 1558.65 249.746 1489.56 183.516 1426.19C263.316 1399.43 369.884 1318.19 414.63 1239.93C467.47 825.454 552.397 482.017 681.636 84.5438Z'
								fill='#788B96'
							/>
						</g>
						<g id='g138'>
							<path
								id='path140'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M2471.26 84.5438C2629.42 444.945 2728.07 826.989 2792.85 1221.34C2865.18 1312.21 2960.43 1371.46 3066.7 1415.59C2986.86 1503.63 2900.34 1548.4 2811.97 1581.17C2890.46 1597.4 2971.23 1601.04 3053.95 1593.93C2804.54 2066.13 2264.21 2428.36 1576.44 2402.76C2141.29 2368.38 2609.67 2158.8 2943.12 1662.63C2865.9 1657.39 2787.9 1631.9 2714.65 1586.22C2808.46 1558.65 2903.13 1489.56 2969.38 1426.19C2889.57 1399.43 2783 1318.19 2738.26 1239.93C2685.42 825.454 2600.48 482.017 2471.26 84.5438Z'
								fill='#CFDEE8'
							/>
						</g>
						<g id='g142'>
							<path
								id='path144'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1024.55 2335.59C1194.14 2385.51 1379.22 2410.1 1576.44 2402.76C1773.66 2410.1 1958.75 2385.51 2128.33 2335.59C2243.65 2239.96 2313.71 2114.19 2313.71 1976.36C2313.71 1677.11 1983.62 1434.5 1576.44 1434.5C1169.26 1434.5 839.184 1677.11 839.184 1976.36C839.184 2114.19 909.231 2239.96 1024.55 2335.59Z'
								fill='white'
							/>
						</g>
						<g id='g146'>
							<path
								id='path148'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1024.55 2335.59L1040.5 2340.19L1048.49 2342.44L1049.07 2342.61C1056.9 2344.77 1064.77 2346.9 1072.66 2348.95L1080.74 2351.05C1088.77 2353.09 1096.86 2355.11 1104.95 2357.03L1105.43 2357.15C1112.97 2358.96 1120.57 2360.75 1128.17 2362.45L1129.78 2362.82L1138.03 2364.64L1138.24 2364.69L1155.99 2368.47L1167.11 2370.71L1185.16 2374.23L1187.97 2374.77L1196.38 2376.3L1197.84 2376.56L1212.54 2379.18L1228.46 2381.8L1240.8 2383.76L1258.56 2386.41L1271.8 2388.25L1291.09 2390.75L1299.17 2391.73C1306.44 2392.59 1313.74 2393.43 1321.04 2394.21L1329.8 2395.1C1337.77 2395.93 1345.76 2396.68 1353.79 2397.38L1358.6 2397.78C1367.45 2398.53 1376.32 2399.22 1385.23 2399.82L1386.35 2399.88L1387.01 2399.97L1388.76 2400.05C1397.66 2400.66 1406.57 2401.18 1415.53 2401.63L1420.48 2401.89C1429.88 2402.35 1439.32 2402.73 1448.78 2403.05L1449.25 2403.08H1449.31C1459.36 2403.39 1469.44 2403.62 1479.56 2403.8L1481.64 2403.83C1491.79 2403.97 1501.96 2404.05 1512.17 2404.03H1512.4H1512.58C1522.43 2404 1532.32 2403.88 1542.23 2403.71L1545.98 2403.62C1556.11 2403.42 1566.24 2403.13 1576.44 2402.76C1342.11 2388.51 1128.24 2333.37 933.899 2242.21C959.616 2275.69 990.066 2306.99 1024.55 2335.59Z'
								fill='#CFDEE8'
							/>
						</g>
						<g id='g150'>
							<path
								id='path152'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1419.29 1776.81C1403.81 1834.87 1498.47 1904.85 1576.35 1910.78C1653.17 1896.6 1739.83 1816.94 1718.27 1760.86C1688.75 1712.07 1443.46 1725.15 1419.29 1776.81Z'
								fill='#343E40'
							/>
						</g>
						<g id='g154'>
							<path
								id='path156'
								d='M1359.44 2002.82C1362.04 2030.44 1381.13 2050.41 1406.28 2061.79C1421.86 2068.84 1439.59 2072.71 1457.34 2073.25C1475.17 2073.76 1492.92 2071 1508.49 2064.81C1533.14 2055.02 1552.39 2036.07 1556.6 2007.47L1606.8 2014.81C1599.6 2063.74 1567.79 2095.69 1527.15 2111.84C1505.07 2120.62 1480.38 2124.55 1455.94 2123.84C1431.43 2123.11 1406.98 2117.76 1385.44 2108.01C1344.68 2089.57 1313.58 2055.74 1309.03 2007.57L1359.44 2002.82Z'
								fill='#343E40'
							/>
						</g>
						<g id='g158'>
							<path
								id='path160'
								d='M1852.44 1978.61C1853.02 2026.94 1825.72 2063.87 1787.14 2086.55C1766.67 2098.59 1742.91 2106.53 1718.72 2109.84C1694.51 2113.16 1669.55 2111.89 1646.68 2105.51C1604.6 2093.77 1569.57 2065.39 1557.2 2017.49L1606.21 2004.8C1613.44 2032.78 1634.62 2049.56 1660.19 2056.69C1676.37 2061.19 1694.31 2062.06 1711.99 2059.64C1729.7 2057.22 1746.88 2051.51 1761.54 2042.89C1785.32 2028.9 1802.17 2006.99 1801.85 1979.21L1852.44 1978.61Z'
								fill='#343E40'
							/>
						</g>
						<g id='g162'>
							<path
								id='path164'
								d='M1557.06 2022.57L1543.51 1768.65L1593.9 1766.08L1607.45 2019.99L1557.06 2022.57Z'
								fill='#343E40'
							/>
						</g>
						<g id='g166'>
							<path
								id='path168'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M875.262 428.584C822.174 371.782 788.947 342.017 730.553 299.037C694.994 366.426 672.003 458.305 653.963 547.988C720.909 495.478 793.474 453.526 875.262 428.584Z'
								fill='#343E40'
							/>
						</g>
						<g id='g170'>
							<path
								id='path172'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M2277.63 428.584C2330.72 371.782 2363.95 342.017 2422.34 299.037C2457.9 366.426 2480.88 458.305 2498.9 547.988C2431.99 495.478 2359.4 453.526 2277.63 428.584Z'
								fill='#343E40'
							/>
						</g>
						<g id='g174'>
							<path
								id='path176'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1938.07 3699.6C1857.54 3839.24 1627.31 3915.66 1467.49 3917.79L1481.25 3888.57L1480.59 3887.33C1630.24 3851.8 1839.25 3783.53 1938.07 3699.6Z'
								fill='#343E40'
							/>
						</g>
						<g id='g178'>
							<path
								id='path180'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1576.44 937.07C1353.22 934.939 1249.71 746.907 1079.73 722.418C719.844 670.533 434.98 1070.44 457.539 1409.62C495.48 1980.14 1280.92 1506.3 1576.44 1509.5C1875.16 1503.14 2657.38 1980.14 2695.33 1409.62C2717.9 1070.44 2433.02 670.533 2073.14 722.418C1903.17 746.907 1799.64 934.939 1576.44 937.07Z'
								fill='#343E40'
							/>
						</g>
						<g id='g182'>
							<path
								id='path184'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M1093.33 975.256C1229.64 975.256 1340.15 1085.76 1340.15 1222.07C1340.15 1358.38 1229.64 1468.89 1093.33 1468.89C957.042 1468.89 846.526 1358.38 846.526 1222.07C846.526 1085.76 957.042 975.256 1093.33 975.256Z'
								fill='white'
							/>
						</g>
						<g id='lEye'>
							<g id='g186'>
								<path
									id='path188'
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M1093.33 1068.24C1178.29 1068.24 1247.17 1137.12 1247.17 1222.07C1247.17 1307.02 1178.29 1375.9 1093.33 1375.9C1008.39 1375.9 939.513 1307.02 939.513 1222.07C939.513 1137.12 1008.39 1068.24 1093.33 1068.24Z'
									fill='#343E40'
								/>
							</g>
							<g id='g190'>
								<path
									id='path192'
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M1142.4 1133.84C1169.46 1133.84 1191.42 1155.79 1191.42 1182.86C1191.42 1209.93 1169.46 1231.88 1142.4 1231.88C1115.32 1231.88 1093.37 1209.93 1093.37 1182.86C1093.37 1155.79 1115.32 1133.84 1142.4 1133.84Z'
									fill='white'
								/>
							</g>
						</g>
						<g id='g194'>
							<path
								id='path196'
								fill-rule='evenodd'
								clip-rule='evenodd'
								d='M2059.55 975.256C2195.86 975.256 2306.37 1085.76 2306.37 1222.07C2306.37 1358.38 2195.86 1468.89 2059.55 1468.89C1923.24 1468.89 1812.74 1358.38 1812.74 1222.07C1812.74 1085.76 1923.24 975.256 2059.55 975.256Z'
								fill='white'
							/>
						</g>
						<g id='rEye'>
							<g id='g198'>
								<path
									id='path200'
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M2059.55 1068.24C2144.49 1068.24 2213.36 1137.12 2213.36 1222.07C2213.36 1307.02 2144.49 1375.9 2059.55 1375.9C1974.58 1375.9 1905.71 1307.02 1905.71 1222.07C1905.71 1137.12 1974.58 1068.24 2059.55 1068.24Z'
									fill='#343E40'
								/>
							</g>
							<g id='g202'>
								<path
									id='path204'
									fill-rule='evenodd'
									clip-rule='evenodd'
									d='M2108.58 1133.84C2135.68 1133.84 2157.62 1155.79 2157.62 1182.86C2157.62 1209.93 2135.68 1231.88 2108.58 1231.88C2081.52 1231.88 2059.58 1209.93 2059.58 1182.86C2059.58 1155.79 2081.52 1133.84 2108.58 1133.84Z'
									fill='white'
								/>
							</g>
						</g>
					</g>
				</svg>
			</div>
		</div>
	);
};

export default Review;