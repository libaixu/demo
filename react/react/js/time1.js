// 子组件
// 天
var Days = React.createClass({
	getInitialState:function(){
		return {
			day_v : '0'
		}
	},
	componentWillReceiveProps:function(n){
		this.setState({
			day_v : n.dayVal
		});
	},
	render:function(){
		return <li>
			<label>{this.state.day_v}</label>
			<span>DAYS</span>
		</li>
	}
});

// 小时
var Hours = React.createClass({
	getInitialState:function(){
		return {
			hour_v : '0'
		}
	},
	componentWillReceiveProps:function(n){
		this.setState({
			hour_v : n.hourVal
		});
	},
	render:function(){
		return <li>
			<label>{this.state.hour_v}</label>
			<span>HOURS</span>
		</li>
	}
});

// 分
var Mins = React.createClass({
	getInitialState:function(){
		return {
			min_v : '0'
		}
	},
	componentWillReceiveProps:function(n){
		this.setState({
			min_v : n.minVal
		});
	},
	render:function(){
		return <li>
			<label>{this.state.min_v}</label>
			<span>MINS</span>
		</li>
	}
});

// 秒
var Sces = React.createClass({
	getInitialState:function(){
		return {
			sec_v : '0'
		}
	},
	componentWillReceiveProps:function(n){
		this.setState({
			sec_v : n.secVal
		});
	},
	render:function(){
		return <li>
			<label>{this.state.sec_v}</label>
			<span>SECS</span>
		</li>
	}
});
// 父组件
var TimeUl = React.createClass({
	getInitialState:function(){
		return{
			day  : '0',
			hour : '0',
			min  : '0',
			sec  : '0'
		}	
	},
	componentDidMount:function(){
		var _self = this;
		setInterval(function(){
			var date  = new Date();
			var year  = date.getFullYear();
			var date2 = new Date( 2019,0,7 );
			var time  = ( date2-date )/1000;

			var day   = Math.floor( time / (24 * 60 * 60) );
			var hour  = Math.floor( time % (24 * 60 * 60)/(60 * 60) );
			var min   = Math.floor( time % (24 * 60 * 60) % (60 * 60) / 60 );
			var sec   = Math.floor( time % (24 * 60 * 60) % (60 * 60) % 60 );

			_self.setState({
				day : day,
				hour : hour,
				min : min,
				sec : sec
			});

		},1000);
	},
	render:function(){
		return <ul>
					<Days dayVal   = {this.state.day} />
					<Hours hourVal = {this.state.hour} />
					<Mins minVal   = {this.state.min} />
					<Sces secVal   = {this.state.sec} />
				</ul>
	}
});
// ==============================
ReactDOM.render(
	<TimeUl />,
	document.getElementById('timeWrap')
);