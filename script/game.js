let game = {

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
    
     cards: null,
    
    createCards: function() {
         
        this.cards = []

        this.techs.forEach((tech) =>   {
            this.cards.push(this.createPair(tech))
        })
    
        return this.cards.flatMap(pair => pair)
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
    }

}