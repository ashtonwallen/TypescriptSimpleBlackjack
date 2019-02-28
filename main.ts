
var deck: string[] = 
["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
var playerHand: Array<string> = new Array();
var dealerHand: Array<string> = new Array();

function drawCard(player: boolean){
    if (player){
        playerHand.push(deck.pop())
    }
    else{
        dealerHand.push(deck.pop())
    }
}

function shuffleDeck() {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1))
        var temp = deck[i]
        deck[i] = deck[j]
        deck[j] = temp
    }
}

function printStatus() {
    console.log(playerHand)
    console.log(dealerHand)
    console.log("Player Score:" + calculateScore(true))
    console.log("Dealer Score:" + calculateScore(false))
}

function calculateScore(player: boolean): number {
    var hasAce: Boolean;
    var score: number = 0;
    var tempHand: String[] = []

    if (player){
        tempHand = playerHand
    }
    else {
        tempHand = dealerHand
    }

    for (let card of tempHand){
        switch (card){
            case "A":
                hasAce = true
                break;
            case "K":
                score += 10
                break;
            case "Q":
                score += 10
                break;
            case "J":
                score += 10
                break;        
            default:
                score += Number(card)
                break;
        }

        if (hasAce){
            if ((score + 11) > 21)
                score += 1
            else
                score += 11
        }
    }

    return score
}

//main game loop here
shuffleDeck()
drawCard(true)
drawCard(true)
drawCard(false)
printStatus()