var mi1Street = {
	imageLayers:[
		{
			type:'bg',
			image:'assets/scenes/mi1street/street.png'
		},
		{
			type:'transporter'
		},
		{
			type:'transporter'
		},
		{
			type:'item'
		},
		{
			type:'player'
		},
		{
			type:'sprite'
		}
	],
	walkable:[
		{
			x:0,
			y:501
		},
		{
			x:454,
			y:309
		},
		{
			x:731,
			y:288
		},
		{
			x:823,
			y:318
		},
		{
			x:842,
			y:315
		},
		{
			x:926,
			y:333
		},
		{
			x:933,
			y:362
		},
		{
			x:1102,
			y:401
		},
		{
			x:1352,
			y:405
		},
		{
			x:1497,
			y:382
		},
		{
			x:1684,
			y:388
		},
		{
			x:1725,
			y:413
		},
		{
			x:1725,
			y:518
		},
		{
			x:0,
			y:518
		},
		{
			x:0,
			y:501
		}
	],
	large:1,
	largePadding:40,
	persPoint:
	{
		x:579,
		y:259
	},
	persThreshold:[8,1.5],
	transporters:[
		{
			x:830,
			y:250,
			w:45,
			h:70,
			title:"SCUMM Bar",
			link:1
		}
	],
	items:[
		{
			i:hammerItem,
			x:352,
			y:416
		}
	],
	actors:[
		{
			a:mario,
			t:'p',
			x:600,
			y:300
		},
		{
			a:luigi,
			t:'n',
			x:100,
			y:300
		}
	]
};