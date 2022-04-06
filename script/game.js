let game = {

    lockMode: false,
    firstC: null,
    secondC: null,

    techs: [
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'
    ],
    

    setCard: function (id) {

        let card = this.cards.filter(card=>card.id === id)[0]

        if(card.flipped || this.lockMode) {
            return false
        }
    
        if(!this.firstC) {
            this.firstC = card
            this.firstC.flipped = true
            return true
        }
        else{
            this.secondC = card
            this.secondC.flipped = true
            this.lockMode = true
            return true
        }


    },

    checkMatch: function() {

        if(!this.firstC || !this.secondC) {
            return false   
        }
        return this.firstC.icon === this.secondC.icon

    },

    clearCards: function () {
    this.firstC = null
    this.secondC = null
    this.lockMode = false
    
    },

    unflipCards () {

        this.firstC.flipped = false
        this.secondC.flipped = false
        this.clearCards()

    },

    checkGameOver () {

        return this.cards.filter(card => !card.flipped).length == 0

    },

     cards: null,
    
    createCards: function() {
         
        this.cards = []

        this.techs.forEach((tech) =>   {
            this.cards.push(this.createPair(tech))
        })
    
        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards()
        return this.cards
    },
    

    createPair: function(tech) {
        return [{
            id: this.createId(tech),
            icon: tech,
            flipped: false
        }, {
            id: this.createId(tech),
            icon: tech,
            flipped: false
        }  ]
    },

    createId: function(tech) {
        return tech + parseInt(Math.random() * 1000)
    },

     //embaralhando cartas
     shuffleCards: function(cards) {
        let currentIndex = this.cards.length
        let randomIndex = 0

        while (currentIndex != 0) {
            
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }

}
