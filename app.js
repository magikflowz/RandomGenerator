const app = Vue.createApp({
  data() {
    
    return {
      quotes: [
          'yeeeee',
          'lemme smash plz',
          'If your carriage turns into a pumpkin, call an Uber.',
          'Thats a life lesson I could have done without.',
          'Cats love to vape',
          'confess your sins my son',
          'Your sins are forgiven, go in peace my child' 
      ],
      chooseQuotes: '',
      mycolor: '#'+(Math.random()*0xFFFFFF<<0).toString(16),
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
      fact: 'fact'
    }
  },
  mount(){
    document.body.style.background = this.mycolor;
  },
  methods: {
    
    async getUser() {
      var chosenNumber = Math.floor(Math.random() * this.quotes.length);
      this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      document.body.style.background = this.mycolor;

      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()

      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
      this.chooseQuotes = this.quotes[chosenNumber];
      
    },
  },
})

app.mount('#app')
