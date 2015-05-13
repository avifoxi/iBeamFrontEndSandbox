function User(name){
	var self = this;
	self.name = name;
	self.schedulableBlocks = 4;
}

var eventsMay = [
	{
      title: 'morning rehearsal',
      start: '2015-05-21 07:00',
      end: '2015-05-21 09:00'
      // ,
      // performance: false
  },
	{
      title: 'morning rehearsal 2',
      start: '2015-05-21 09:00',
      end: '2015-05-21 11:00'
      // ,
      // performance: false
  },

  {
      title: 'evening rehearsal',
      start: '2015-05-22 19:00',
      end: '2015-05-22 21:00'
  },
  {
      title: 'midday rehearsal',
      start: '2015-05-23 13:00',
      end: '2015-05-23 15:00'
  }
]
